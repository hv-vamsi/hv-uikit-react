import componentDefinitions from "../ComponentVersioningTable/versions";

const notAvailable = componentDefinitions.notAvailable;
const statusClassification = componentDefinitions.dsClassification;
const dsVersion1 = componentDefinitions.dsVersion.v1;
const dsVersion3 = componentDefinitions.dsVersion.v3;

const CoreComponentData = [
  {
    dsPattern: "Action Bar",
    component: "Action Bar",
    path: "components-action-bar--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Asset Inventory",
    component: "Asset Inventory",
    path: "components-asset-inventory--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Avatar",
    component: "Avatar",
    path: "components-avatar--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: notAvailable,
    status: notAvailable,
  },
  {
    dsPattern: "Badge",
    component: "Badge",
    path: "components-badge--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Notifications",
    component: "Banner",
    path: "components-banner--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Visualization > Bar Chart",
    component: "Bar Chart",
    path: "visualizations-bar-chart--main",
    uikitVersion3: "3.2.1",
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Breadcrumb",
    component: "Breadcrumb",
    path: "components-breadcrumb--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Bulk Actions",
    component: "Bulk Actions",
    path: "components-bulk-actions--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Button",
    component: "Button",
    path: "components-button--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Card",
    component: "Card",
    path: "components-card--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Selection",
    component: "Checkbox",
    path: "forms-checkbox--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Selection",
    component: "Checkbox Group",
    path: "forms-checkbox-group--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Code Editor",
    component: "Code Editor",
    path: "components-code-editor--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: notAvailable,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Style Guide > Color",
    component: "Colors",
    path: "foundation-colors--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Style Guide > Layout",
    component: "Container",
    path: "foundation-container--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Date Range",
    component: "Date Picker",
    path: "forms-date-picker--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Dialog",
    component: "Dialog",
    path: "components-dialog--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Visualization > Donut Chart",
    component: "Donut Chart",
    path: "visualizations-donut-chart--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: notAvailable,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Dropdown",
    component: "Dropdown",
    path: "forms-dropdown--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Dropdown",
    component: "Dropdown Menu",
    path: "components-dropdown-menu--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Empty State",
    component: "Empty State",
    path: "components-empty-state--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "File Uploader",
    component: "File Uploader",
    path: "forms-file-uploader--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Footer",
    component: "Footer",
    path: "components-footer--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Form",
    component: "Forms",
    path: "forms-main--react-form",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Style Guide > Layout",
    component: "Grid",
    path: "foundation-grid--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Global Actions",
    component: "Global Actions",
    path: "components-global-actions--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Header",
    component: "Header",
    path: "components-header--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Navigation System",
    component: "Horizontal Navigation",
    path: "components-header--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Iconography",
    component: "Icons",
    path: "foundation-icons-library--icons",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Input Box",
    component: "Input",
    path: "forms-input--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Visualization > Kpi",
    component: "Kpi",
    path: "visualizations-kpi--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Visualization > Line Chart",
    component: "Line Chart",
    path: "visualizations-line-chart--main",
    uikitVersion3: "3.2.1",
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "List",
    component: "List",
    path: "components-list--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Loading",
    component: "Loading",
    path: "components-loading--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Login Page",
    component: "Login",
    path: "components-login--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Multi Button",
    component: "Multi Button",
    path: "components-multi-button--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Pagination",
    component: "Pagination",
    path: "components-pagination--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Panel",
    component: "Panel",
    path: "components-panel--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Selection",
    component: "Radio Button",
    path: "forms-radio-button--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Selection",
    component: "Radio Button Group",
    path: "forms-radio-button-group--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Selection",
    component: "Selection List",
    path: "forms-selection-list--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Search Box",
    component: "Search Box",
    path: "forms-search-box--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Notifications",
    component: "Snackbar",
    path: "components-snackbar--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
  {
    dsPattern: "Selection",
    component: "Switch",
    path: "forms-switch--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Visualization > Table",
    component: "Table",
    path: "visualizations-table--main",
    uikitVersion3: "3.2.1",
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Tab",
    component: "Tabs",
    path: "components-tabs--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Text Area",
    component: "Text Area",
    path: "forms-text-area--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Selection",
    component: "Toggle Button",
    path: "components-toggle-button--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Tooltip",
    component: "Tooltip",
    path: "components-tooltip--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Style Guide > Typography",
    component: "Typography",
    path: "foundation-typography--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "User Preferences",
    component: "User Preferences",
    path: "components-user-preferences--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.stable,
  },
  {
    dsPattern: "Navigation System",
    component: "Vertical Navigation",
    path: "components-vertical-navigation--main",
    uikitVersion3: dsVersion3,
    uikitVersion2: dsVersion1,
    status: statusClassification.unstable,
  },
];

export default CoreComponentData;
