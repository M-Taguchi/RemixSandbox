import type { LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";

// このファイルのスタイル
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return <div>Hello Index Route</div>;
}