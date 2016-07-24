/// <reference path="data.ts" />
/// <reference path="Screenshot.ts" />

namespace FreshScenery
{
    export class MainPage
    {
        private screenshotImageA : HTMLImageElement;
        private screenshotImageB : HTMLImageElement;
        private beforeCompareImageA : HTMLImageElement;
        private beforeCompareImageB : HTMLImageElement;
        private afterCompareImageA : HTMLImageElement;
        private afterCompareImageB : HTMLImageElement;
        private compareCaption : HTMLImageElement;
        private playlist : Array<Screenshot>;
        private comparePlaylist : Array<Screenshot>;
        public activeScreenshot : number;
        private activeCompare : number;
        private isOnA : boolean;
        private isOnCompareA : boolean;

        public static current : MainPage;

	    public initPage()
        {
            this.screenshotImageA = <HTMLImageElement>(document.getElementById("screenshotImageA"));
            this.screenshotImageB = <HTMLImageElement>(document.getElementById("screenshotImageB"));

            this.beforeCompareImageA = <HTMLImageElement>(document.getElementById("beforeCompareImageA"));
            this.beforeCompareImageB = <HTMLImageElement>(document.getElementById("beforeCompareImageB"));

            this.afterCompareImageA = <HTMLImageElement>(document.getElementById("afterCompareImageA"));
            this.afterCompareImageB = <HTMLImageElement>(document.getElementById("afterCompareImageB"));
            this.compareCaption = <HTMLImageElement>(document.getElementById("compareCaption"));

            this.activeCompare = 0;
            this.buildComparePlaylist();
            this.buildScreenshotPlaylist(null);            

            window.onscroll = this.handleScroll;
            window.setInterval(this.rotateImage, 9000, this);
            window.setInterval(this.rotateCompare, 9000, this);

            this.handleScroll();
            
            this.rotateImage(this);
            this.rotateCompare(this);
        }   

        public handleScroll()
        {
            let selectableAreaBin = document.getElementById("selectableAreaBin");

	        let screenshotArea = document.getElementById("screenshotArea");
            
            let selectableAreas = document.getElementsByClassName("selectableArea");

            let regionsInView = new Array<string>();


            if (selectableAreaBin == null)
            {
                return;
            }
            
	        let bodyrect = document.body.getBoundingClientRect();

            for (let i=0; i<selectableAreas.length; i++)
            {
                let he = selectableAreas[i];

                let herect = he.getBoundingClientRect();

                if (herect.top > 0 && herect.top < window.innerHeight)
                {
                    regionsInView.push(he.id);
                }
            }

            MainPage.current.buildScreenshotPlaylist(regionsInView);

            let selectableAreaBinRect = selectableAreaBin.getBoundingClientRect();

            if (selectableAreaBinRect.top < 10 && window.innerWidth > 900)
            {
            	screenshotArea.style.position = "fixed";
                screenshotArea.style.top = "10px";
                screenshotArea.style.marginRight = "100px";
                screenshotArea.style.left = "0px";
                
            }
            else
            {
                screenshotArea.style.marginRight = null;
                screenshotArea.style.position = null;
                screenshotArea.style.top = null;
                screenshotArea.style.left = null;
            }
        }
        
        public rotateCompare(mainPage : MainPage)
        {           
            mainPage.activeCompare++;

            if (mainPage.activeCompare >= mainPage.comparePlaylist.length)
            {
                mainPage.activeCompare = 0;
            }

            mainPage.updateCompare();
        }        
        
        public rotateImage(mainPage : MainPage)
        {           
            let candidate = 0;

            if (mainPage.playlist.length > 1)
            {
                do
                {
                    candidate = Math.floor(Math.random() * mainPage.playlist.length);
                } while (candidate == mainPage.activeScreenshot);

                mainPage.activeScreenshot = candidate;
            }

            mainPage.updateScreenshot();
        }        

	    public buildComparePlaylist()
        {
            let newPlaylist : Array<Screenshot> = [];

            for (let i=0; i<FreshScenery.Data.screenshots.length; i++)
            {
                let screenshot = FreshScenery.Data.screenshots[i];

                if (screenshot.type == 1)
                {
                    newPlaylist.push(screenshot);
                }
            }

            this.comparePlaylist = newPlaylist;
        }


	    public buildScreenshotPlaylist(regionList : Array<string>)
        {
            let newPlaylist : Array<Screenshot> = [];

            for (let i=0; i<FreshScenery.Data.screenshots.length; i++)
            {
                let screenshot = FreshScenery.Data.screenshots[i];

                if (regionList == null || regionList.length == 0)
                {
                    newPlaylist.push(screenshot);
                }
                else
                {
                    for (let j=0; j<regionList.length; j++)
                    {
                        if (screenshot.region == regionList[j])
                        {
                            newPlaylist.push(screenshot);
                        }
                    }
                }
            }

            this.playlist = newPlaylist;
        }

        public updateCompare()
        {
            let targetImageBefore : HTMLImageElement;
            let oldImageBefore : HTMLImageElement;
            let targetImageAfter : HTMLImageElement;
            let oldImageAfter : HTMLImageElement;

            if (this.isOnCompareA)
            {
                targetImageBefore = this.beforeCompareImageA;
                oldImageBefore = this.beforeCompareImageB;
                targetImageAfter = this.afterCompareImageA;
                oldImageAfter = this.afterCompareImageB;
            }
            else
            {
                targetImageBefore = this.beforeCompareImageB;
                oldImageBefore = this.beforeCompareImageA;
                targetImageAfter  = this.afterCompareImageB;
                oldImageAfter = this.afterCompareImageA;
            }

            this.isOnCompareA = !this.isOnCompareA;

            let screenshot = this.comparePlaylist[this.activeCompare];
            
            if (targetImageBefore == null)
            {
                return;
            }

        
            targetImageBefore.className = "compareImage screenshotImageActive";            
            oldImageBefore.className = "compareImage screenshotImageInactive";

            targetImageAfter.className = "compareImage screenshotImageActive";            
            oldImageAfter.className = "compareImage screenshotImageInactive";

            while (this.compareCaption.childNodes.length > 0)
            {
                this.compareCaption.removeChild(this.compareCaption.childNodes[0]);
            }

            if (screenshot != null)
            {
                let divOuter=  document.createElement("DIV");
                divOuter.className="screenshotCaptionArea";

                let span = document.createElement("DIV");
                span.className = "screenshotCaption";
                span.innerText = screenshot.caption;
                divOuter.appendChild(span);

                span = document.createElement("DIV");
                span.className = "screenshotCaptionCredit";
                span.innerText = screenshot.credits;
                divOuter.appendChild(span);

                this.compareCaption.appendChild(divOuter);

	            targetImageBefore.style.backgroundImage = "url('glam/" + screenshot.id + "Before.jpg')";
	            targetImageAfter.style.backgroundImage = "url('glam/" + screenshot.id + "After.jpg')";
            }
        }

        public updateScreenshot()
        {
            let targetImage : HTMLImageElement;
            let oldImage : HTMLImageElement;

            if (this.isOnA)
            {
                targetImage = this.screenshotImageA;
                oldImage = this.screenshotImageB;
            }
            else
            {
                targetImage = this.screenshotImageB;
                oldImage = this.screenshotImageA;
            }

            this.isOnA = !this.isOnA;

            let screenshot = this.playlist[this.activeScreenshot];
            
            if (targetImage == null)
            {
                return;
            }

            targetImage.className = "screenshotImage screenshotImageActive";            
            oldImage.className = "screenshotImage screenshotImageInactive";

            while (oldImage.childNodes.length > 0)
            {
                oldImage.removeChild(oldImage.childNodes[0]);
            }

            if (screenshot != null)
            {
                let divOuter=  document.createElement("DIV");
                divOuter.className="screenshotCaptionArea";

                let span = document.createElement("DIV");
                span.className = "screenshotCaption";
                span.innerText = screenshot.caption;
                divOuter.appendChild(span);

                span = document.createElement("DIV");
                span.className = "screenshotCaptionCredit";
                span.innerText = screenshot.credits;
                divOuter.appendChild(span);

                targetImage.appendChild(divOuter);

                if (screenshot.type == 1)
                {
                    targetImage.style.backgroundImage = "url('glam/" + screenshot.id + "After.jpg')";
                }
                else
                {
                    targetImage.style.backgroundImage = "url('glam/" + screenshot.id + ".jpg')";
                }
            }
        }
    }
}