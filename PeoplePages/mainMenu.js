
var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;
var rt = "http://www.tuffcluff.com/";
//var rt = "file://Bernard/Websites/TuffCluff.com/NEW_WEBSITE/";
//var rt = "file://W:/TuffCluff.com/NEW_WEBSITE/";

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 



//define menu
document.write("<center><table width=100% border=0 cellpadding=0 cellspacing=2><tr>");
document.write("<td rowspan=2 bgColor=#5970B2 valign=bottom  width=50% height=86>");
document.write("<center>");
document.write("<img onClick=\"location='"+ rt + "index.html'\" src='logo.jpg'></td>");
document.write("<td><img src='banner.jpg'></td>");
document.write("<td rowspan=2 bgColor=#5970B2 width=50% height=86></td>");
document.write("</tr><tr><td valign=bottom>");

document.write("<ul id='sddm'>										");
document.write("    <li><a href='#' onmouseover=mopen('m1') onmouseout=mclosetime()>The Family</a>	");
document.write("        <div id='m1' onmouseover=mcancelclosetime() onmouseout=mclosetime()>		");
document.write("        <a href='"+ rt + "family/PicPages/fampix.html'> Family Photos</a> ");
document.write("        <a href='"+ rt + "family/PicPages/schoolpix.html'> School Pictures</a> ");
document.write("        <a href='"+ rt + "family/PicPages/homemovies.html'> Family Movies</a> ");
document.write("        <a href='"+ rt + "family/famtrad.html'> Family Traditions</a> ");
document.write("        <a href='"+ rt + "family/memories.html'> Family Memories</a> ");
document.write("        <a href='"+ rt + "family/famTree/treepic.html'> Family Tree</a> ");
document.write("        <a href='"+ rt + "family/tracker.html'> Cluff Tracker</a> ");
document.write("        <a href='"+ rt + "family/cluffometer/cluffometer.html'> Cluffometer</a> ");
document.write("        </div>										");
document.write("    </li>										");
document.write("    <li><a href='#' onmouseover=mopen('m2') onmouseout=mclosetime()>News</a>	");
document.write("        <div id='m2' onmouseover=mcancelclosetime() onmouseout=mclosetime()>		");
document.write("        <a href='"+ rt + "news/newsMenu.html'> News</a> ");
document.write("        <a href='"+ rt + "news/bulletin.html'> Bulletin Board</a> ");
document.write("        <a href='"+ rt + "news/agony.html'> Agony Aunt</a> ");
document.write("        <a href='http://www.tuffcluff.com/webmail'> Tuffcluff Email</a> ");
document.write("        </div>										");
document.write("    </li>										");
document.write("    <li><a href='#' onmouseover=mopen('m3') onmouseout=mclosetime()>Features</a>	");
document.write("        <div id='m3' onmouseover=mcancelclosetime() onmouseout=mclosetime()>		");
//document.write("        <a href='"+ rt + "features/recipes.html'> Family Recipes</a> ");		
document.write("        <a href='"+ rt + "features/famsecrets/famsecrets.html'> Family Secrets</a> ");
document.write("        <a href='"+ rt + "features/film/film.html'> Fav Family Movies</a> ");
document.write("        <a href='"+ rt + "features/hobby/hobby.html'> Hobbies</a> ");
document.write("        <a href='"+ rt + "features/garden/gardenmenu.html'> Gardening</a> ");
document.write("        <a href='"+ rt + "features/diy/decor.html'> DIY</a> ");
document.write("        <a href='"+ rt + "features/exercise/exercise.html'> Health & Fitness</a> ");
document.write("        <a href='"+ rt + "features/parenting/parentMenu.html'> Parenting</a> ");
document.write("        <a href='"+ rt + "features/kids/kids.html'> Kids</a> ");
//document.write("        <a href='features/'> Recipies</a> ");
document.write("        </div>										");
document.write("    </li>										");
document.write("    <li><a href='#' onmouseover=mopen('m4') onmouseout=mclosetime()>Cluff Stuff</a>	");
document.write("        <div id='m4' onmouseover=mcancelclosetime() onmouseout=mclosetime()>		");
document.write("        <a href='"+ rt + "cluffstuff/yell.html'> Family Yell</a> ");
document.write("        <a href='"+ rt + "cluffstuff/cluffisms.html'> Cluffisms</a> ");
document.write("        <a href='"+ rt + "cluffstuff/youmight.html'> You Might be a Cluff</a> ");
document.write("        <a href='"+ rt + "cluffstuff/ruffcluff.html'> RuffCluff</a> ");
document.write("        <a href='"+ rt + "cluffstuff/noteworthy.html'> Noteworthy Cluffs</a> ");
document.write("        <a href='"+ rt + "cluffstuff/oldfrontpage.html'> Cluff Homestead</a> ");
document.write("        </div>										");
document.write("    </li>										");
document.write("    <li><a href='#' onmouseover=mopen('m5') onmouseout=mclosetime()>Games</a>	");
document.write("        <div id='m5' onmouseover=mcancelclosetime() onmouseout=mclosetime()>		");
document.write("        <a href='"+ rt + "games/famfavs.html'> Cluffy Games</a> ");
document.write("        <a href='"+ rt + "games/cargames.html'> Car Games</a> ");
document.write("        <a href='"+ rt + "games/sharehair.html'> ShareHair</a> ");
document.write("        <a href='"+ rt + "games/wherecluff.html'> Where is Cluffy?</a> ");
document.write("        <a href='"+ rt + "games/whichkid.html'> Which Kid?</a> ");
document.write("        <a href='"+ rt + "games/captions.html'> Caption Contest</a> ");
document.write("        <a href='"+ rt + "games/lookalike.html'> Look-a-like</a> ");
document.write("        <a href='"+ rt + "games/findyou.html'> Find Yourself</a> ");
document.write("        </div>										");
document.write("    </li>										");
document.write("</ul>											");
document.write("<div style='clear:both'></div>								");
document.write("</td></tr></table></center>");