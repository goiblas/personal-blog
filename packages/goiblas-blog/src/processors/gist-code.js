import Gist from "super-react-gist";

const proccesor = {
  name: "Github gist",
  priority: 10,
  test: ({ node }) =>
    node.component === "script" &&
    node.props.src &&
    node.props.src.startsWith("https://gist.github.com/"),
  processor: ({ node }) => {
    node.component = GistCode;
    return node;
  }
};

export default proccesor;

const GistCode = ({ src }) => <Gist url={removeExtension(src)} />;

const removeExtension = (name, extension = "js") => {
  if (name.endsWith("." + extension)) {
    return name.slice(0, name.lastIndexOf("."));
  }

  return name;
};
