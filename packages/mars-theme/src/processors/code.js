import { loadable } from "frontity";

const ContentPre = loadable(() => import('../components/code'));

const code = {
    test: node => node.component === "pre",
    process: node => {
      node.component = ContentPre;
      return node;
    }
}

export default code;