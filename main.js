var FreshScenery;
(function (FreshScenery) {
    var Product = (function () {
        function Product() {
        }
        Object.defineProperty(Product.prototype, "id", {
            get: function () {
                return this.m_id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "name", {
            get: function () {
                return this.m_name;
            },
            enumerable: true,
            configurable: true
        });
        Product.prototype.load = function (p) {
            this.m_id = p.id;
            this.m_name = p.name;
        };
        return Product;
    }());
    FreshScenery.Product = Product;
})(FreshScenery || (FreshScenery = {}));
var FreshScenery;
(function (FreshScenery) {
    var Region = (function () {
        function Region() {
        }
        Object.defineProperty(Region.prototype, "id", {
            get: function () {
                return this.m_id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Region.prototype, "name", {
            get: function () {
                return this.m_name;
            },
            set: function (newName) {
                this.m_name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Region.prototype, "products", {
            get: function () {
                return this.m_products;
            },
            enumerable: true,
            configurable: true
        });
        Region.prototype.load = function (r) {
            this.m_id = r.id;
            this.m_name = r.name;
            this.m_products = new Array();
            var count = 0;
            for (var i = 0; i < r.products.length; i++) {
                var prod = r.products[i];
                var newProduct = new FreshScenery.Product();
                newProduct.load(prod);
                this.m_products[count] = newProduct;
                count++;
            }
        };
        return Region;
    }());
    FreshScenery.Region = Region;
})(FreshScenery || (FreshScenery = {}));
var FreshScenery;
(function (FreshScenery) {
    var Data = (function () {
        function Data() {
        }
        Data.screenshots = [
            {
                "id": "AZ.A10Tucson",
                "region": "az",
                "type": 0,
                "caption": "An A-10 cruising treetops on Mt. Lemmon, near Tucson, Arizona",
                "credits": "IRIS Airfoce Series A-10 Warthog Driver 2 over MegaSceneryEarth Arizona + Fresh Scenery Arizona Autogen, in Prepar3D."
            },
            {
                "id": "AZ.F22FallFlagstaff",
                "region": "az",
                "type": 0,
                "caption": "Fall colors in the forests near Flagstaff, Arizona",
                "credits": "Prepar3D Lockheed F-22 over MegaSceneryEarth Arizona + Fresh Scenery Arizona Autogen, in Prepar3D."
            },
            {
                "id": "CA.BeechcraftSFOceanBeach",
                "region": "ca",
                "type": 0,
                "caption": "Curve around Golden Gate Park, the Outer Sunset, and Ocean Beach near San Francisco.",
                "credits": "Prepar3D Beechcraft Baron over MegaSceneryEarth San Francisco + Fresh Scenery San Francisco Autogen, in Prepar3D."
            },
            {
                "id": "CA.BeechcraftGoldenGate",
                "region": "ca",
                "type": 0,
                "caption": "Sunlight spreads over San Francisco",
                "credits": "Prepar3D Beechcraft Baron over MegaSceneryEarth San Francisco + Fresh Scenery San Francisco Autogen, in Prepar3D."
            },
            {
                "id": "CA.BeechcraftPacificCoastNorthOfSF",
                "region": "ca",
                "type": 0,
                "caption": "Flying over Pacific coastal mountains north of San Francisco",
                "credits": "Prepar3D Beechcraft Baron over MegaSceneryEarth San Francisco + Fresh Scenery San Francisco Autogen, in Prepar3D."
            },
            {
                "id": "CA.BeechcraftSouthSanFrancisco",
                "region": "ca",
                "type": 0,
                "caption": "Morning flight in South San Francisco. The Industrial City",
                "credits": "Prepar3D Beechcraft Baron over MegaSceneryEarth San Francisco + Fresh Scenery San Francisco Autogen, in Prepar3D."
            },
            {
                "id": "WA.SpitfireRainier2FSX",
                "region": "wa",
                "type": 0,
                "caption": "Flying down a valley to Mt. Rainier",
                "credits": "Just Flight Battle of Britain Spitfire over MegaSceneryEarth Washington + Fresh Scenery Washington Autogen, in FSX Steam Edition."
            },
            {
                "id": "WA.UH1LowWhidbeyIsland",
                "region": "wa",
                "type": 0,
                "caption": "Coming into Whidbey Island at below the treetops",
                "credits": "Nemeth Designs Bell UH-1 Huey over MegaSceneryEarth Washington + Fresh Scenery Washington Autogen, in FSX Steam Edition."
            },
            {
                "id": "WA.R66UWFSX",
                "region": "wa",
                "type": 0,
                "caption": "Approaching the Arboretum and University of Washington in an R66",
                "credits": "Alabeo R-66 Turbine over MegaSceneryEarth Seattle + Fresh Scenery Seattle Autogen, in FSX Steam Edition."
            },
            {
                "id": "WA.F4WhidbeyIsland",
                "region": "wa",
                "type": 0,
                "caption": "An F-4 climbs over Whidbey Island, Washington",
                "credits": "Alabeo R-66 Turbine over MegaSceneryEarth Seattle + Fresh Scenery Seattle Autogen, in FSX Steam Edition."
            },
            {
                "id": "WA.F100Valley",
                "region": "wa",
                "type": 1,
                "caption": "An F-100 jets through a valley at treetop level near Mt. Rainier, Washington",
                "credits": "Milviz F-100 over MegaSceneryEarth Washington + Fresh Scenery Washington Autogen, in Prepar3D."
            },
            {
                "id": "WA.A10Town",
                "region": "wa",
                "type": 1,
                "caption": "An A-10 makes a gentle turn towards North Bend, Washington",
                "credits": "IRIS Airforce Series A-10 over MegaSceneryEarth Washington + Fresh Scenery Washington Autogen, in Prepar3D."
            },
            {
                "id": "WA.Bell206WestSeattle",
                "region": "wa",
                "type": 1,
                "caption": "Hovering near West Seattle",
                "credits": "Bell 206 over MegaSceneryEarth Seattle + Fresh Scenery Seattle Autogen, in Prepar3D."
            },
            {
                "id": "WA.A10Forest",
                "region": "wa",
                "type": 1,
                "caption": "An A-10 dips into forested valleys near North Bend, Washington",
                "credits": "IRIS Airforce Series A-10 over MegaSceneryEarth Washington + Fresh Scenery Washington Autogen, in Prepar3D."
            },
            {
                "id": "WA.Bell206Seattle",
                "region": "wa",
                "type": 1,
                "caption": "Flying over the industrial area south of Seattle",
                "credits": "Bell 206 over MegaSceneryEarth Seattle + Fresh Scenery Seattle Autogen, in Prepar3D."
            },
            {
                "id": "WA.F22Valley",
                "region": "wa",
                "type": 1,
                "caption": "Supercruising in the shadow of Mt. Rainier in a F-22 Raptor",
                "credits": "Lockheed Martin F-22 over MegaSceneryEarth Seattle + Fresh Scenery Seattle Autogen, in Prepar3D."
            },
            {
                "id": "NJ.MauleMorristown",
                "region": "nj",
                "type": 0,
                "caption": "A Maule loiters over northern New Jersey",
                "credits": "Maule over MegaSceneryEarth New Jersey + Fresh Scenery New Jersey Autogen, in Prepar3D."
            },
            {
                "id": "OR.F86Astoria",
                "region": "or",
                "type": 0,
                "caption": "This older F-86 Sabre enters a gentle dive in the hills near Astoria, Oregon",
                "credits": "Section F8 F-86 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D."
            },
            {
                "id": "OR.F86Lake",
                "region": "or",
                "type": 0,
                "caption": "The serenity of a mountain lake punctuated by the roar of an F-86 Sabre",
                "credits": "Section F8 F-86 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F86Countryside",
                "region": "or",
                "type": 0,
                "caption": "All alone in the skies over western Oregon",
                "credits": "Section F8 F-86 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.UH1Hills",
                "region": "or",
                "type": 0,
                "caption": "A UH-1H briefly lands in a hilltop clearing",
                "credits": "Nemeth Designs Bell UH-1 Huey over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.UH1Cabin",
                "region": "or",
                "type": 0,
                "caption": "Looking back from the pilot seet into the cabin of a UH-1H over western Oregon",
                "credits": "Nemeth Designs Bell UH-1 Huey over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.UH1HillsA",
                "region": "or",
                "type": 0,
                "caption": "Skirting trees and antennas in the foggy hills of Western Oregon",
                "credits": "Nemeth Designs Bell UH-1 Huey over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.UH1Clearing",
                "region": "or",
                "type": 0,
                "caption": "Approaching a hilltop clearing",
                "credits": "Nemeth Designs Bell UH-1 Huey over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.UH1Cockpit",
                "region": "or",
                "type": 0,
                "caption": "A look outside the Huey cockpit",
                "credits": "Nemeth Designs Bell UH-1 Huey over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F100Coast",
                "region": "or",
                "type": 0,
                "caption": "An F-100 pulls away from the Oregon Coast in the driving rain",
                "credits": "Milviz F-100 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F102Columbia",
                "region": "or",
                "type": 0,
                "caption": "A look outside the starship-like cockpit of a F-102 Delta Dagger near the Columbia River",
                "credits": "Razbam F-102 Delta Dagger over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F102ColumbiaA",
                "region": "or",
                "type": 0,
                "caption": "An F-102 Delta Dagger flies near the Columbia River",
                "credits": "Razbam F-102 Delta Dagger over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.NimrodEnglishCountry",
                "region": "uk",
                "type": 0,
                "caption": "The Nimrod returns to the English countryside",
                "credits": "Simshed Nimrod over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.NimrodCountry",
                "region": "uk",
                "type": 0,
                "caption": "A look out the window of the Nimrod in a tight bank over the English countryside",
                "credits": "Simshed Nimrod over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.EnglishCountryA",
                "region": "uk",
                "type": 0,
                "caption": "The Nimrod enters a low level, tight bank over the English countryside",
                "credits": "Simshed Nimrod over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.NimrodHeathrow",
                "region": "uk",
                "type": 0,
                "caption": "The Nimrod just after takeoff from London Heathrow",
                "credits": "Simshed Nimrod over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.F4Town",
                "region": "uk",
                "type": 0,
                "caption": "A Phantom FGR.2 banks over an English coastal town",
                "credits": "Milviz F-4 Phantom over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.F4Town",
                "region": "uk",
                "type": 0,
                "caption": "A Phantom FGR.2 banks over an English coastal town",
                "credits": "Milviz F-4 Phantom over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.F4CountryGround",
                "region": "uk",
                "type": 0,
                "caption": "Tree-top level flying in a Phantom FGR.2",
                "credits": "Milviz F-4 Phantom over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.F4Takeoff",
                "region": "uk",
                "type": 0,
                "caption": "A Phantom FGR.2 right after takeoff from Heathrow airport",
                "credits": "Milviz F-4 Phantom over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "UK.F4Rolling",
                "region": "uk",
                "type": 0,
                "caption": "Rolling over the British countryside",
                "credits": "Milviz F-4 Phantom over JustFlight VFR + Fresh Scenery England Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "NJ.F14Football",
                "region": "nj",
                "type": 0,
                "caption": "A F-14 engages afterburners over Jackson Memorial High School",
                "credits": "Dino Cattaneo F-14 over MegaSceneryEarth New Jersey 4X Autogen + Fresh Scenery New Jersey Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "NJ.F14SlowAndDirty",
                "region": "nj",
                "type": 0,
                "caption": "A F-14 extends its wings and flaps in slow-mo flying over central New Jersey",
                "credits": "Dino Cattaneo F-14 over MegaSceneryEarth New Jersey 4X Autogen + Fresh Scenery New Jersey Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "NJ.F14SixFlags",
                "region": "nj",
                "type": 0,
                "caption": "A F-14 loiters over Six Flags Great Adventure in New Jersey",
                "credits": "Dino Cattaneo F-14 over MegaSceneryEarth New Jersey 4X Autogen + Fresh Scenery New Jersey Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "NJ.F14CockpitOverCentral",
                "region": "nj",
                "type": 0,
                "caption": "Looking back out of the cockpit of an F-14 over central New Jersey",
                "credits": "Dino Cattaneo F-14 over MegaSceneryEarth New Jersey 4X Autogen + Fresh Scenery New Jersey Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "NJ.F100AtlanticCity",
                "region": "nj",
                "type": 0,
                "caption": "Looking out of the cockpit at Atlantic City as we brush the New Jersey shore",
                "credits": "Milviz F-100 over MegaSceneryEarth New Jersey 4X Autogen + Fresh Scenery New Jersey Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "DE.F100Countryside",
                "region": "de",
                "type": 0,
                "caption": "Fall colors in the Delaware countryside",
                "credits": "Milviz F-100 over MegaSceneryEarth Delaware 4X Autogen + Fresh Scenery Delaware Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "DE.F100Fall",
                "region": "de",
                "type": 0,
                "caption": "Zipping over small-town Delaware",
                "credits": "Milviz F-100 over MegaSceneryEarth Delaware 4X Autogen + Fresh Scenery Delaware Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "DE.F100Industrial",
                "region": "de",
                "type": 0,
                "caption": "Turning north over an industrial area near Wilminton, Delaware",
                "credits": "Milviz F-100 over MegaSceneryEarth Delaware 4X Autogen + Fresh Scenery Delaware Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "WA.F86MtAdamsDive",
                "region": "wa",
                "type": 0,
                "caption": "Diving to a steep valley near Mt. Adams, Washington",
                "credits": "Section F8 F-86 over MegaSceneryEarth Washington + Fresh Scenery Washington Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F86Nuclear",
                "region": "or",
                "type": 0,
                "caption": "Approaching the (now-dismantled) cooling tower of the Trojan Nuclear Power plant, on the Columbia River",
                "credits": "Section F8 F-86 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F86Solo",
                "region": "or",
                "type": 0,
                "caption": "The Sabre pulls inward over a lake in western Oregon",
                "credits": "Section F8 F-86 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            },
            {
                "id": "OR.F100Snoot",
                "region": "or",
                "type": 0,
                "caption": "The trademark snoot nose of the Hun in a rainstorm on the Oregon coast",
                "credits": "Milviz F-100 over MegaSceneryEarth Oregon + Fresh Scenery Oregon Autogen, in Prepar3D + Oculus Rift + FlyInside."
            }
        ];
        Data.regions = [
            {
                "id": "wa",
                "name": "Washington",
                "products": [
                    {
                        "id": "wa",
                        "name": "Wasington Autogen",
                        "lastUpdated": "2016-07-10T06:00:00.000Z"
                    },
                    {
                        "id": "seattle",
                        "name": "Seattle Autogen",
                        "lastUpdated": "2016-07-10T06:00:00.000Z"
                    }
                ]
            }
        ];
        return Data;
    }());
    FreshScenery.Data = Data;
})(FreshScenery || (FreshScenery = {}));
var FreshScenery;
(function (FreshScenery) {
    var Screenshot = (function () {
        function Screenshot() {
        }
        return Screenshot;
    }());
    FreshScenery.Screenshot = Screenshot;
})(FreshScenery || (FreshScenery = {}));
var FreshScenery;
(function (FreshScenery) {
    var MainPage = (function () {
        function MainPage() {
        }
        MainPage.prototype.initPage = function () {
            this.screenshotImageA = (document.getElementById("screenshotImageA"));
            this.screenshotImageB = (document.getElementById("screenshotImageB"));
            this.beforeCompareImageA = (document.getElementById("beforeCompareImageA"));
            this.beforeCompareImageB = (document.getElementById("beforeCompareImageB"));
            this.afterCompareImageA = (document.getElementById("afterCompareImageA"));
            this.afterCompareImageB = (document.getElementById("afterCompareImageB"));
            this.compareCaption = (document.getElementById("compareCaption"));
            this.activeCompare = 0;
            this.buildComparePlaylist();
            this.buildScreenshotPlaylist(null);
            window.onscroll = this.handleScroll;
            window.setInterval(this.rotateImage, 9000, this);
            window.setInterval(this.rotateCompare, 9000, this);
            this.handleScroll();
            this.rotateImage(this);
            this.rotateCompare(this);
        };
        MainPage.prototype.handleScroll = function () {
            var selectableAreaBin = document.getElementById("selectableAreaBin");
            var screenshotArea = document.getElementById("screenshotArea");
            var selectableAreas = document.getElementsByClassName("selectableArea");
            var regionsInView = new Array();
            if (selectableAreaBin == null) {
                return;
            }
            var bodyrect = document.body.getBoundingClientRect();
            for (var i = 0; i < selectableAreas.length; i++) {
                var he = selectableAreas[i];
                var herect = he.getBoundingClientRect();
                if (herect.top > 0 && herect.top < window.innerHeight) {
                    regionsInView.push(he.id);
                }
            }
            MainPage.current.buildScreenshotPlaylist(regionsInView);
            var selectableAreaBinRect = selectableAreaBin.getBoundingClientRect();
            if (selectableAreaBinRect.top < 10 && window.innerWidth > 900) {
                screenshotArea.style.position = "fixed";
                screenshotArea.style.top = "10px";
                screenshotArea.style.marginRight = "100px";
                screenshotArea.style.left = "0px";
            }
            else {
                screenshotArea.style.marginRight = null;
                screenshotArea.style.position = null;
                screenshotArea.style.top = null;
                screenshotArea.style.left = null;
            }
        };
        MainPage.prototype.rotateCompare = function (mainPage) {
            mainPage.activeCompare++;
            if (mainPage.activeCompare >= mainPage.comparePlaylist.length) {
                mainPage.activeCompare = 0;
            }
            mainPage.updateCompare();
        };
        MainPage.prototype.rotateImage = function (mainPage) {
            var candidate = 0;
            if (mainPage.playlist.length > 1) {
                do {
                    candidate = Math.floor(Math.random() * mainPage.playlist.length);
                } while (candidate == mainPage.activeScreenshot);
                mainPage.activeScreenshot = candidate;
            }
            mainPage.updateScreenshot();
        };
        MainPage.prototype.buildComparePlaylist = function () {
            var newPlaylist = [];
            for (var i = 0; i < FreshScenery.Data.screenshots.length; i++) {
                var screenshot = FreshScenery.Data.screenshots[i];
                if (screenshot.type == 1) {
                    newPlaylist.push(screenshot);
                }
            }
            this.comparePlaylist = newPlaylist;
        };
        MainPage.prototype.buildScreenshotPlaylist = function (regionList) {
            var newPlaylist = [];
            for (var i = 0; i < FreshScenery.Data.screenshots.length; i++) {
                var screenshot = FreshScenery.Data.screenshots[i];
                if (regionList == null || regionList.length == 0) {
                    newPlaylist.push(screenshot);
                }
                else {
                    for (var j = 0; j < regionList.length; j++) {
                        if (screenshot.region == regionList[j]) {
                            newPlaylist.push(screenshot);
                        }
                    }
                }
            }
            this.playlist = newPlaylist;
        };
        MainPage.prototype.updateCompare = function () {
            var targetImageBefore;
            var oldImageBefore;
            var targetImageAfter;
            var oldImageAfter;
            if (this.isOnCompareA) {
                targetImageBefore = this.beforeCompareImageA;
                oldImageBefore = this.beforeCompareImageB;
                targetImageAfter = this.afterCompareImageA;
                oldImageAfter = this.afterCompareImageB;
            }
            else {
                targetImageBefore = this.beforeCompareImageB;
                oldImageBefore = this.beforeCompareImageA;
                targetImageAfter = this.afterCompareImageB;
                oldImageAfter = this.afterCompareImageA;
            }
            this.isOnCompareA = !this.isOnCompareA;
            var screenshot = this.comparePlaylist[this.activeCompare];
            if (targetImageBefore == null) {
                return;
            }
            targetImageBefore.className = "compareImage screenshotImageActive";
            oldImageBefore.className = "compareImage screenshotImageInactive";
            targetImageAfter.className = "compareImage screenshotImageActive";
            oldImageAfter.className = "compareImage screenshotImageInactive";
            while (this.compareCaption.childNodes.length > 0) {
                this.compareCaption.removeChild(this.compareCaption.childNodes[0]);
            }
            if (screenshot != null) {
                var divOuter = document.createElement("DIV");
                divOuter.className = "screenshotCaptionArea";
                var span = document.createElement("DIV");
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
        };
        MainPage.prototype.updateScreenshot = function () {
            var targetImage;
            var oldImage;
            if (this.isOnA) {
                targetImage = this.screenshotImageA;
                oldImage = this.screenshotImageB;
            }
            else {
                targetImage = this.screenshotImageB;
                oldImage = this.screenshotImageA;
            }
            this.isOnA = !this.isOnA;
            var screenshot = this.playlist[this.activeScreenshot];
            if (targetImage == null) {
                return;
            }
            targetImage.className = "screenshotImage screenshotImageActive";
            oldImage.className = "screenshotImage screenshotImageInactive";
            while (oldImage.childNodes.length > 0) {
                oldImage.removeChild(oldImage.childNodes[0]);
            }
            if (screenshot != null) {
                var divOuter = document.createElement("DIV");
                divOuter.className = "screenshotCaptionArea";
                var span = document.createElement("DIV");
                span.className = "screenshotCaption";
                span.innerText = screenshot.caption;
                divOuter.appendChild(span);
                span = document.createElement("DIV");
                span.className = "screenshotCaptionCredit";
                span.innerText = screenshot.credits;
                divOuter.appendChild(span);
                targetImage.appendChild(divOuter);
                if (screenshot.type == 1) {
                    targetImage.style.backgroundImage = "url('glam/" + screenshot.id + "After.jpg')";
                }
                else {
                    targetImage.style.backgroundImage = "url('glam/" + screenshot.id + ".jpg')";
                }
            }
        };
        return MainPage;
    }());
    FreshScenery.MainPage = MainPage;
})(FreshScenery || (FreshScenery = {}));
var fs = FreshScenery;
var g_mp;
var g_charrSupport = ['s', 'u', 'p', 'p', 'o', 'r', 't'];
var g_charrQuestion = ['f', 'r', 'e', 's', 'h', 's', 'c', 'e', 'n', 'e', 'r', 'y'];
var g_sDomain = "bendyline.com";
function init() {
    g_mp = new fs.MainPage();
    fs.MainPage.current = g_mp;
    g_mp.initPage();
}
function launchSupportEmail() {
    var sSupportEmail = "";
    for (var i = 0; i < g_charrSupport.length; i++) {
        sSupportEmail += g_charrSupport[i];
    }
    sSupportEmail += "@" + g_sDomain;
    location.href = "mailto:" + sSupportEmail;
}
function launchQuestionEmail() {
    var sQuestionEmail = "";
    for (var i = 0; i < g_charrQuestion.length; i++) {
        sQuestionEmail += g_charrQuestion[i];
    }
    sQuestionEmail += "@" + g_sDomain;
    location.href = "mailto:" + sQuestionEmail;
}
//# sourceMappingURL=main.js.map