import HomeBanner from "@/widgets/HomeBanner";

const setComponent = (widget) => {
  const components = {
    HomeBanner,

    default: () => <div>Component not found</div>,
  };
  return components[widget.widget_type] || components["default"];
};

const Block = ({ widget }) => {
  const Widget = setComponent(widget);

  if (!Widget) {
    console.error(`Component not found for widget_type: ${widget.widget_type}`);
    return <div>Invalid component: {widget.widget_type}</div>;
  }

  return <Widget {...widget} />;
};

export default Block;
