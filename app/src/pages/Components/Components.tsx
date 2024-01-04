import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { Global } from "@emotion/react";
import {
  HvButton,
  HvCheckBox,
  HvCheckBoxGroup,
  HvContainer,
  HvTypography,
  theme,
} from "@hitachivantara/uikit-react-core";

const fetchCoreStories = async () => {
  const coreStories = import.meta.glob(
    "../../../../packages/core/src/*/*.stories.tsx"
  );

  const storyModules = Object.entries(coreStories).map(async ([path, imp]) => {
    const storyNameRegex = /\/([^/]+)\.stories\.tsx$/;

    const [, componentName] = path.match(storyNameRegex) || [];
    // @ts-expect-error imports are untyped
    const { Main } = await imp();
    if (!Main) {
      console.warn(`${componentName} does not have a Main export`);
    }
    return [componentName, Main] as const;
  });

  return Object.fromEntries(
    (await Promise.all(storyModules)).filter(([, mod]) => !!mod)
  );
};

function useComponentStories() {
  return useSWR("/components", fetchCoreStories, { suspense: true });
}

interface ComponentProps {
  id: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

const Component = ({ id, title, href, children }: ComponentProps) => {
  return (
    <div className="p-sm mb-lg">
      <div className="flex items-center justify-between mb-sm">
        <HvTypography variant="title2" component="a" href={`#${id}`}>
          {title}
        </HvTypography>
        <HvButton
          component="a"
          href={href}
          target="_blank"
          className="px-md py-xs"
          variant="secondarySubtle"
        >
          Docs
        </HvButton>
      </div>
      <div className="pl-md flex flex-col gap-xs">{children}</div>
    </div>
  );
};

const initialSelection = [
  "Avatar",
  "Button",
  "Card",
  "EmptyState",
  "Input",
  "Loading",
  "Snackbar",
  "Typography",
];

const Components = () => {
  const [params, setParams] = useSearchParams();
  const [selection, setSelection] = useState(
    params.get("selection")?.split(",") ?? initialSelection
  );

  const { data } = useComponentStories();

  const componentsList = useMemo(() => {
    return Object.entries(data).map<ComponentProps>(([name, storyObj]) => {
      const Component2 = storyObj?.render;
      return {
        id: name,
        children: Component2 ? <Component2 /> : null,
        title: name,
        href: `https://lumada-design.github.io/uikit/master/?path=/docs/components-${name}--main`,
      };
    });
  }, [data]);

  useEffect(() => {
    setParams({ selection: selection.join(",") }, { replace: true });
  }, [selection, setParams]);

  const componentsToShow = useMemo(
    () =>
      componentsList.map((c) => ({ ...c, selected: selection.includes(c.id) })),
    [componentsList, selection]
  );

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Global styles={{ html: { scrollBehavior: "smooth" } }} />
      <div
        className="fixed w-[200px] left-0 overflow-y-scroll py-sm px-xs bg-atmo1 z-overlay"
        style={{
          height: `calc(100% - ${theme.header.height})`,
          top: theme.header.height,
        }}
      >
        <div className="flex flex-col">
          <HvCheckBoxGroup
            showSelectAll
            value={selection}
            onChange={(event, newSelection) => setSelection(newSelection)}
          >
            {componentsToShow.map((c) => (
              <HvCheckBox
                key={c.id}
                value={c.id}
                label={c.title}
                onClick={() => handleClick(c.id)}
                classes={{ label: c.selected ? undefined : "text-atmo4" }}
                labelProps={{
                  // checked labels only scroll to element
                  onClick: (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleClick(c.id);
                  },
                }}
              />
            ))}
          </HvCheckBoxGroup>
        </div>
      </div>
      <HvContainer maxWidth="md">
        {componentsToShow.map((c) => (
          <div key={c.id} id={c.id} style={{ scrollMarginTop: 64 + 10 }}>
            {!!c.selected && <Component {...c} />}
          </div>
        ))}
      </HvContainer>
    </>
  );
};

export default Components;
