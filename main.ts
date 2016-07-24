/// <reference path="Data.ts" />
/// <reference path="MainPage.ts" />

import fs = FreshScenery;

let g_mp : fs.MainPage;
let g_charrSupport = [ 's', 'u', 'p', 'p', 'o', 'r', 't' ];
let g_charrQuestion  = [ 'f', 'r', 'e', 's', 'h', 's', 'c', 'e', 'n', 'e', 'r', 'y' ];
let g_sDomain = "bendyline.com";

function init()
{
    g_mp = new fs.MainPage();

    fs.MainPage.current = g_mp;

    g_mp.initPage();
}

function launchSupportEmail()
{
	let sSupportEmail = "";
	
	for (var i=0; i<g_charrSupport.length; i++)
	{
		sSupportEmail += g_charrSupport[i];
	}
		
	sSupportEmail += "@" + g_sDomain;
	
	location.href = "mailto:" + sSupportEmail;
}

function launchQuestionEmail()
{
	let sQuestionEmail = "";
	
	for (var i=0; i<g_charrQuestion.length; i++)
	{
		sQuestionEmail += g_charrQuestion[i];
	}
		
	sQuestionEmail += "@" + g_sDomain;
	
	location.href = "mailto:" + sQuestionEmail;
}
