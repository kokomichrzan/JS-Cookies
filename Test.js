import { Cookies, CreateCookie, ChangeCookie, LoadCookies, ReLoadCookies, DeleteCookie } from "./Cookies.js";
var Render = document.getElementById("Test");

CreateCookie("A","A", 10000);
CreateCookie("B","B", 60 * 1000);

Render.innerHTML += Cookies["A"] + "</br>";
Render.innerHTML += Cookies["B"] + "</br>";
//Manualy Added
Render.innerHTML += Cookies["C"] + "</br>";
Render.innerHTML += Cookies["D"] + "</br>";

Render.innerHTML += "-----------------------</br>";

DeleteCookie("A");
LoadCookies();

Render.innerHTML += Cookies["A"] + "</br>";
Render.innerHTML += Cookies["B"] + "</br>";
Render.innerHTML += Cookies["C"] + "</br>";
Render.innerHTML += Cookies["D"] + "</br>";
