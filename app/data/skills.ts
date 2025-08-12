import type { FunctionComponent, ReactElement } from "react";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import JqueryOriginal from "devicons-react/icons/JqueryOriginal";
import NodejsOriginal from "devicons-react/icons/NodejsOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import UnityOriginal from "devicons-react/icons/UnityOriginal";
import AmazonwebservicesOriginalWordmark from "devicons-react/icons/AmazonwebservicesOriginalWordmark";
import AzureOriginal from "devicons-react/icons/AzureOriginal";
import AzuresqldatabaseOriginal from "devicons-react/icons/AzuresqldatabaseOriginal";
import BootstrapPlain from "devicons-react/icons/BootstrapPlain";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import Css3Original from "devicons-react/icons/Css3Original";
import Html5Original from "devicons-react/icons/Html5Original";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import LinuxOriginal from "devicons-react/icons/LinuxOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import DotnetcoreOriginal from "devicons-react/icons/DotnetcoreOriginal";
import DotNetPlain from "devicons-react/icons/DotNetPlain";
import VscodeOriginal from "devicons-react/icons/VscodeOriginal";
import MicrosoftsqlserverOriginal from "devicons-react/icons/MicrosoftsqlserverOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import UnrealengineOriginal from "devicons-react/icons/UnrealengineOriginal";
import DockerOrignal from "devicons-react/icons/DockerOriginal";

export type skillType = {
  type: string;
  skills: Array<skillObj>;
};

export type skillObj = {
  name: string;
  icon?: FunctionComponent;
};

const skills: Array<skillType> = [
  {
    type: "Languages",
    skills: [
      { name: "Javascript", icon: JavascriptOriginal },
      { name: "Typescript", icon: TypescriptOriginal },
      { name: "C#", icon: CsharpOriginal },
      { name: "C++", icon: CplusplusOriginal },
      { name: "T-SQL", icon: MicrosoftsqlserverOriginal },
      { name: "HTML", icon: Html5Original },
      { name: "CSS", icon: Css3Original },
      { name: "Python", icon: PythonOriginal },
      { name: "Linux", icon: LinuxOriginal },
    ],
  },
  {
    type: "Frameworks",
    skills: [
      { name: "ReactJS", icon: ReactOriginal },
      { name: "React Native", icon: ReactOriginal },
      { name: ".NET Core", icon: DotnetcoreOriginal },
      { name: "ADO.NET", icon: DotNetPlain },
      { name: "ASP.NET", icon: DotNetPlain },
      { name: "Node.JS", icon: NodejsOriginal },
      { name: "SQL-Server", icon: AzuresqldatabaseOriginal },
      { name: "MS Access" },
    ],
  },
  {
    type: "Systems",
    skills: [
      { name: "AWS", icon: AmazonwebservicesOriginalWordmark },
      { name: "VS Code", icon: VscodeOriginal },
      { name: "Visual Studio" },
      { name: "Windows Server" },
      { name: "Microsoft Azure", icon: AzureOriginal },
      { name: "JQuery", icon: JqueryOriginal },
      { name: "AJAX" },
      { name: "Bootstrap", icon: BootstrapPlain },
      { name: "Git", icon: GithubOriginal },
      { name: "Solidworks" },
      { name: "Unity", icon: UnityOriginal },
      { name: "Unreal", icon: UnrealengineOriginal },
      { name: "GameMaker Studio 2" },
      { name: "AutoDesk 3Ds Max" },
      { name: "Docker", icon: DockerOrignal },
    ],
  },
];

export default skills;
