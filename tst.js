import axios from "axios";

/* eslint-disable no-irregular-whitespace */
const packsSoftware = [
  {
    name: "Universal Android Debloater GUI",
    appId: "0x192.UniversalAndroidDebloaterGUI",
    version: "0.5.1",
  },
  {
    name: "0xGingi-Browser",
    appId: "0xGingi.Browser",
    version: "115.0.5790.110",
  },
  {
    name: "115æµè§ˆå™¨",
    appId: "115.115Chrome",
    version: "27.0.3.7",
  },
  {
    name: "123äº‘ç›˜",
    appId: "123.123pan",
    version: "2.2.2.0",
  },
  {
    name: "1History",
    appId: "1History.1History",
    version: "0.3.3",
  },
  {
    name: "BPMN-RPA Studio",
    appId: "1IC.BPMN-RPAStudio",
    version: "28.0.0",
  },
  {
    name: "Fishing Funds",
    appId: "1zilc.FishingFunds",
    version: "8.3.0",
  },
  {
    name: "SyncBackFree",
    appId: "2BrightSparks.SyncBackFree",
    version: "11.3.45.0",
  },
  {
    name: "SyncBackPro",
    appId: "2BrightSparks.SyncBackPro",
    version: "11.3.45.0",
  },
  {
    name: "SyncBackSE",
    appId: "2BrightSparks.SyncBackSE",
    version: "11.3.45.0",
  },
  {
    name: "v2rayN",
    appId: "2dust.v2rayN",
    version: "6.6",
  },
  {
    name: "v2rayN",
    appId: "2dust.v2rayN.Pre-release",
    version: "6.57",
  },
  {
    name: "3Kontakt",
    appId: "3.3Kontakt",
    version: "5.10.3.9083",
  },
  {
    name: "MultiBaseCS BirdBase",
    appId: "34u.MultiBaseCSBirdBase",
    version: "5.2.2",
  },
  {
    name: "MultiBaseCS Home",
    appId: "34u.MultiBaseCSHome",
    version: "5.2.2",
  },
  {
    name: "MultiBaseCS Professional",
    appId: "34u.MultiBaseCSProfessional",
    version: "5.2.2",
  },
  {
    name: "MultiBaseCS Server",
    appId: "34u.MultiBaseCSServer",
    version: "5.2.2",
  },
  {
    name: "360çœ‹å›¾",
    appId: "360.360AlbumViewer",
    version: "1.0.1.1090",
  },
  {
    name: "360æžé€Ÿæµè§ˆå™¨",
    appId: "360.360Chrome",
    version: "13.5.2044.0",
  },
  {
    name: "360 æžé€Ÿæµè§ˆå™¨X",
    appId: "360.360Chrome.X",
    version: "22.3.3077.64",
  },
  {
    name: "360æ¸…ç†å¤§å¸ˆ",
    appId: "360.360CleanMaster",
    version: "1.0.0.1020",
  },
  {
    name: "æ¡Œé¢åŠ©æ‰‹",
    appId: "360.360DesktopLite",
    version: "11.0.0.2061",
  },
  {
    name: "360 File Guard",
    appId: "360.360DocProtect",
    version: "1.0.0.1202",
  },
  {
    name: "360ä¼ä¸šå®‰å…¨æµè§ˆå™¨",
    appId: "360.360Ent",
    version: "13.1.2002.403",
  },
  {
    name: "360æ–‡ä»¶å¤¹",
    appId: "360.360File",
    version: "1.0.0.1150",
  },
  {
    name: "360æ¸¸æˆæµè§ˆå™¨",
    appId: "360.360GT",
    version: "13.6.1047.0",
  },
  {
    name: "360å®‰å…¨æµè§ˆå™¨",
    appId: "360.360SE",
    version: "15.3.6182.64",
  },
  {
    name: "360 Virtual Vault",
    appId: "360.360VirtualVault",
    version: "1.0.0.1004",
  },
  {
    name: "360 Zip",
    appId: "360.360Zip",
    version: "1.0.0.1041",
  },
  {
    name: "æ‰‹å¿ƒè¾“å…¥æ³•",
    appId: "360.PalmInput",
    version: "3.1.0.1010",
  },
  {
    name: "3CX Call Flow Designer",
    appId: "3CX.CallFlowDesigner",
    version: "18.5.8",
  },
  {
    name: "3CXPhone for Windows",
    appId: "3CX.Softphone",
    version: "18.13.959",
  },
  {
    name: "3Dconnexion 3DxWare 10",
    appId: "3Dconnexion.3DxWare.10",
    version: "10.9.1.650",
  },
  {
    name: "3DF Zephyr Free",
    appId: "3Dflowsrl.3DFZephyrFree",
    version: "7.529",
  },
  {
    name: "Robo 3T",
    appId: "3TSoftwareLabs.Robo3T",
    version: "1.4.4",
  },
  {
    name: "Studio 3T",
    appId: "3TSoftwareLabs.Studio3T",
    version: "2024.3.1",
  },
  {
    name: "beqdesigner",
    appId: "3ll3d00d.beqdesigner",
    version: "1.0.1",
  },
  {
    name: "iptvnator",
    appId: "4gray.iptvnator",
    version: "0.16.0",
  },
  {
    name: "MessyFileOrganizer",
    appId: "4ngel2769.MessyOrganizer",
    version: "1.0.0",
  },
  {
    name: "4t Tray Minimizer Free",
    appId: "4tNiagaraSoftware.4tTrayMinimizer",
    version: "6.07",
  },
  {
    name: "5EClient",
    appId: "5E.5EClient",
    version: "7.1.47",
  },
  {
    name: "64Gram Desktop",
    appId: "64Gram.64Gram",
    version: "1.1.39",
  },
  {
    name: "ndm",
    appId: "720kb.ndm",
    version: "1.2.0",
  },
  {
    name: "Effie",
    appId: "7S2P.Effie",
    version: "4.0.5",
  },
  {
    name: "Effie",
    appId: "7S2P.Effie.CN",
    version: "4.0.3",
  },
  {
    name: "Aya",
    appId: "7room.Aya",
    version: "0.10.5",
  },
  {
    name: "7-Zip",
    appId: "7zip.7zip",
    version: "24.08",
  },
  {
    name: "7-Zip Alpha (exe)",
    appId: "7zip.7zip.Alpha.exe",
    version: "24.01",
  },
  {
    name: "7-Zip Alpha (msi)",
    appId: "7zip.7zip.Alpha.msi",
    version: "24.01.00.0",
  },
  {
    name: "86Box Manager",
    appId: "86Box.86BoxManager",
    version: "1.7.4",
  },
  {
    name: "8x8 Work",
    appId: "8x8.Work",
    version: "8.16.3",
  },
  {
    name: "PDF-Over",
    appId: "A-SIT.PDF-Over",
    version: "4.4.5",
  },
  {
    name: "SafeSign IC Standard Windows 6â€¦",
    appId: "A.E.T.EuropeB.V.SafeSignICStandarâ€¦",
    version: "3.5.3.0-AET.0â€¦",
  },
  {
    name: "WTFast",
    appId: "AAAInternetPublishing.WTFast",
    version: "5.5.17.0",
  },
  {
    name: "AAS WorldWide Telescope",
    appId: "AAS.WorldWideTelescope",
    version: "6.1.2",
  },
  {
    name: "PinPoint",
    appId: "AB0WV.PinPoint",
    version: "2.0-230511",
  },
  {
    name: "ä¸­å›½å†œä¸šé“¶è¡Œç½‘é“¶åŠ©æ‰‹",
    appId: "ABC.ABCEBankAssistant",
    version: "1.0.23.0726",
  },
  {
    name: "ä¸­å›½å†œä¸šé“¶è¡Œç½‘é“¶å®‰å…¨æŽ§ä»¶",
    appId: "ABC.PowerExtension",
    version: "1",
  },
  {
    name: "ACE Studio",
    appId: "ACEStudio.ACEStudio",
    version: "1.8.8",
  },
  {
    name: "DownloadHelper CoApp",
    appId: "ACLAP.DownloadHelperCoApp",
    version: "2.0.19.0",
  },
  {
    name: "0patch Agent",
    appId: "ACROSSecurity.0patch",
    version: "22.11.11.10550",
  },
  {
    name: "AGFEO Dashboard",
    appId: "AGFEO.AGFEODashboard",
    version: "2.0.12",
  },
  {
    name: "Adventure Game Studio",
    appId: "AGSProjectTeam.AdventureGameStudio",
    version: "3.6.1.29",
  },
  {
    name: "CeVIO AI Voice Package - å°æ˜¥â€¦",
    appId: "AHS.KoharuRikka",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - å¤è‰²â€¦",
    appId: "AHS.NatsukiKarin",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - æ±åŒ—â€¦",
    appId: "AHS.TohokuItako",
    version: "2.0.0",
  },
  {
    name: "CeVIO Voice Package - æ±åŒ—ãã‚Šâ€¦",
    appId: "AHS.TohokuKiritan",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - æ±åŒ—â€¦",
    appId: "AHS.TohokuZunko",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - å¼¦å·»â€¦",
    appId: "AHS.TsurumakiMaki",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - å¼¦å·»â€¦",
    appId: "AHS.TsurumakiMakiJPN",
    version: "2.0.0",
  },
  {
    name: "AILZ80ASM",
    appId: "AILight.AILZ80ASM",
    version: "1.0.22",
  },
  {
    name: "AIMP",
    appId: "AIMP.AIMP",
    version: "5.11.2429",
  },
  {
    name: "A.I.VOICE ç´…æ¡œ ã‚·ãƒ§ã‚¦ã‚¬",
    appId: "AIVOICE.BENISHOGA",
    version: "1.4.9",
  },
  {
    name: "A.I.VOICE æ —ç”° ã¾ã‚ã‚“",
    appId: "AIVOICE.KURITA",
    version: "1.4.9",
  },
  {
    name: "Core Temp",
    appId: "ALCPU.CoreTemp",
    version: "1.18.1.0",
  },
  {
    name: "AMD Software: Cloud Edition",
    appId: "AMD.AMDSoftwareCloudEdition",
    version: "23.Q3",
  },
  {
    name: "Open Capture and Analytics Tooâ€¦",
    appId: "AMD.OCAT",
    version: "1.6.2",
  },
  {
    name: "Business Card Maker",
    appId: "AMSSoftware.BusinessCardMaker",
    version: "9.15",
  },
  {
    name: "Clipify",
    appId: "AMSSoftware.Clipify",
    version: "17",
  },
  {
    name: "Interior Design 3D",
    appId: "AMSSoftware.InteriorDesign3D",
    version: "3.25",
  },
  {
    name: "Passport Photo Maker",
    appId: "AMSSoftware.PassportPhotoMaker",
    version: "9.41",
  },
  {
    name: "Phoenix File Rescue",
    appId: "AMSSoftware.PhoenixFileRescue",
    version: "1.31",
  },
  {
    name: "Photo Calendar Maker",
    appId: "AMSSoftware.PhotoCalendarCreator",
    version: "17.5",
  },
  {
    name: "PhotoDiva",
    appId: "AMSSoftware.PhotoDiva",
    version: "4",
  },
  {
    name: "PhotoGlory",
    appId: "AMSSoftware.PhotoGlory",
    version: "3.25",
  },
  {
    name: "PhotoWorks",
    appId: "AMSSoftware.PhotoWorks",
    version: "16",
  },
  {
    name: "ASCIIEngine",
    appId: "ANTOrg-Inc.ASCIIEngine",
    version: "1.0.0",
  },
  {
    name: "AOMEI Backupper",
    appId: "AOMEI.Backupper.Standard",
    version: "7.4.1.0",
  },
  {
    name: "AOMEI Partition Assistant",
    appId: "AOMEI.PartitionAssistant",
    version: "10.5.0",
  },
  {
    name: "ART",
    appId: "ART.ART",
    version: "1.22.0",
  },
  {
    name: "ASGARDEX",
    appId: "ASGARDEXMaintainers.ASGARDEX",
    version: "1.21.7",
  },
  {
    name: "ATLauncher Setup",
    appId: "ATLauncher.ATLauncher",
    version: "1.2.0.0",
  },
  {
    name: "Key Manager",
    appId: "ATNSOFT.KeyManager",
    version: "1.15.0.460",
  },
  {
    name: "Key Remapper",
    appId: "ATNSOFT.KeyRemapper",
    version: "1.13.0.480",
  },
  {
    name: "Text Paster",
    appId: "ATNSOFT.TextPaster",
    version: "1.12.0.250",
  },
  {
    name: "AVRDUDE",
    appId: "AVRDudes.AVRDUDE",
    version: "7.3",
  },
  {
    name: "AVS4YOU Programs Installation",
    appId: "AVS.InstallPackComplete",
    version: "5.7.2.189",
  },
  {
    name: "Swiss CLI Tools",
    appId: "Aakash.Swiss",
    version: "1.0.0",
  },
  {
    name: "Cube",
    appId: "Aardappel.Cube",
    version: "2005.08.29",
  },
  {
    name: "lobster",
    appId: "Aardappel.lobster",
    version: "2024",
  },
  {
    name: "AbaClient",
    appId: "Abacus.AbaClient",
    version: "2.4.779",
  },
  {
    name: "Azkar",
    appId: "AbdelrahmanBayoumi.Azkar",
    version: "1.2.7",
  },
  {
    name: "WinPaletter",
    appId: "Abdelrhman-AK.WinPaletter",
    version: "1.0.9.3",
  },
  {
    name: "AbiWord",
    appId: "AbiSource.AbiWord",
    version: "2.9.4",
  },
  {
    name: "Ability Office 10 Professional",
    appId: "Ability.AbilityOffice.10.Professiâ€¦",
    version: "10.0.3",
  },
  {
    name: "Ability Office 10 Standard",
    appId: "Ability.AbilityOffice.10.Standard",
    version: "10.0.3",
  },
  {
    name: "Ability Office 8 Professional",
    appId: "Ability.AbilityOffice.8.Professioâ€¦",
    version: "8.0.4",
  },
  {
    name: "Ability Office 8 Standard",
    appId: "Ability.AbilityOffice.8.Standard",
    version: "8.0.4",
  },
  {
    name: "Ablaze Floorp",
    appId: "Ablaze.Floorp",
    version: "11.19.0",
  },
  {
    name: "Floorp Daylight",
    appId: "Ablaze.Floorp.Daylight",
    version: "11.19.0",
  },
  {
    name: "Abyss Overlay",
    appId: "Abyss.AbyssOverlay",
    version: "2.0.3",
  },
  {
    name: "ARLiveForAcfunLive",
    appId: "AcFun.ARLiveForAcfunLive",
    version: "0.3.3",
  },
  {
    name: "AcFuné¢æ•åŠ©æ‰‹",
    appId: "AcFun.AcFunVirtualTool",
    version: "1.32.0.1772",
  },
  {
    name: "Ace Stream Media",
    appId: "AceStream.AceStream",
    version: "3.1.74",
  },
  {
    name: "Acorn",
    appId: "AcornLabs.Acorn",
    version: "0.10.1",
  },
  {
    name: "Chromaprint",
    appId: "AcoustID.Chromaprint",
    version: "1.5.1",
  },
  {
    name: "CutePDF Writer",
    appId: "AcroSoftwareInc.CutePDFWriter",
    version: "4",
  },
  {
    name: "Acronis Cyber Protect Home Offâ€¦",
    appId: "Acronis.CyberProtectHomeOffice",
    version: "28.3.1.41126",
  },
  {
    name: "Actifile Agent",
    appId: "Actifile.ActifileAgent",
    version: "2.0.100.12",
  },
  {
    name: "ActiveState Komodo Edit",
    appId: "ActiveState.KomodoEdit",
    version: "12.0.1",
  },
  {
    name: "ActiveState Komodo IDE",
    appId: "ActiveState.KomodoIDE",
    version: "12.0.1",
  },
  {
    name: "ActivityWatch",
    appId: "ActivityWatch.ActivityWatch",
    version: "0.13.1",
  },
  {
    name: "AdGuard",
    appId: "AdGuard.AdGuard",
    version: "7.18.4778.0",
  },
  {
    name: "AdGuard",
    appId: "AdGuard.AdGuard.Beta",
    version: "7.19.4818.0",
  },
  {
    name: "AdGuard",
    appId: "AdGuard.AdGuard.Nightly",
    version: "7.19.4845.0",
  },
  {
    name: "AdGuardHome",
    appId: "AdGuard.AdGuardHome",
    version: "0.107.48",
  },
  {
    name: "AdGuardHome",
    appId: "AdGuard.AdGuardHome.Beta",
    version: "0.108.0-b.53",
  },
  {
    name: "AdGuard VPN",
    appId: "AdGuard.AdGuardVPN",
    version: "2.4.1475.0",
  },
  {
    name: "AdGuard VPN Beta",
    appId: "AdGuard.AdGuardVPN.Beta",
    version: "2.4.1483.0",
  },
  {
    name: "AdGuardVPN",
    appId: "AdGuard.AdGuardVPN.Nightly",
    version: "2.4.1577.0",
  },
  {
    name: "DNS Proxy",
    appId: "AdGuard.dnsproxy",
    version: "0.73.2",
  },
  {
    name: "Alire",
    appId: "AdaLang.Alire",
    version: "2.0.1",
  },
  {
    name: "Alire",
    appId: "AdaLang.Alire.Portable",
    version: "2.0.1",
  },
  {
    name: "GraphiQL",
    appId: "AdamMiskiewicz.GraphiQL",
    version: "0.7.2",
  },
  {
    name: "ADAMANT Messenger",
    appId: "Adamant.Messenger",
    version: "4.6.2",
  },
  {
    name: "AfterLife",
    appId: "AderitoNeto.AfterLife",
    version: "1.0.0",
  },
  {
    name: "AdMobilize Desktop UI",
    appId: "Admobilize.AdMobilize.DesktopUI",
    version: "2.1.3",
  },
  {
    name: "Malos-Vision",
    appId: "Admobilize.AdMobilize.MalosVision",
    version: "2.9.4",
  },
  {
    name: "AdMobilizeVisionService",
    appId: "Admobilize.AdMobilize.VisionServiâ€¦",
    version: "1.5.5.0",
  },
  {
    name: "admprovider",
    appId: "Admobilize.admprovider",
    version: "2.8.7",
  },
  {
    name: "Acrobat Pro (64-bit)",
    appId: "Adobe.Acrobat.Pro",
    version: "24.003.20112",
  },
  {
    name: "Adobe Acrobat Reader DC",
    appId: "Adobe.Acrobat.Reader.32-bit",
    version: "24.003.20112",
  },
  {
    name: "Adobe Acrobat Reader DC (64-biâ€¦",
    appId: "Adobe.Acrobat.Reader.64-bit",
    version: "24.003.20112",
  },
  {
    name: "Adobe Connect",
    appId: "Adobe.AdobeConnect",
    version: "21.11.22",
  },
  {
    name: "Brackets",
    appId: "Adobe.Brackets",
    version: "1.14.17770",
  },
  {
    name: "Adobe Connect",
    appId: "Adobe.Connect",
    version: "2024.9.149",
  },
  {
    name: "Adobe Connect application MSI",
    appId: "Adobe.Connect.MSI",
    version: "24.9.149",
  },
  {
    name: "Adobe Creative Cloud",
    appId: "Adobe.CreativeCloud",
    version: "6.4.0.361",
  },
  {
    name: "Cryptr",
    appId: "Adobe.Cryptr",
    version: "0.6.0",
  },
  {
    name: "Adobe DNG Converter",
    appId: "Adobe.DNGConverter",
    version: "16.2.0",
  },
  {
    name: "IcedTea-Web",
    appId: "AdoptOpenJDK.IcedTea-Web",
    version: "1.8.8.0",
  },
  {
    name: "AdoptOpenJDK JDK with Hotspot â€¦",
    appId: "AdoptOpenJDK.OpenJDK.11",
    version: "11.0.11.9",
  },
  {
    name: "AdoptOpenJDK JDK with Hotspot â€¦",
    appId: "AdoptOpenJDK.OpenJDK.14",
    version: "14.0.2.12",
  },
  {
    name: "AdoptOpenJDK JDK with Hotspot â€¦",
    appId: "AdoptOpenJDK.OpenJDK.15",
    version: "15.0.2.7",
  },
  {
    name: "AdoptOpenJDK JDK with Hotspot â€¦",
    appId: "AdoptOpenJDK.OpenJDK.16",
    version: "16.0.1.9",
  },
  {
    name: "AdoptOpenJDK JDK with Eclipse â€¦",
    appId: "AdoptOpenJDK.OpenJDK.16.OpenJ9",
    version: "16.0.1.9",
  },
  {
    name: "AdoptOpenJDK JDK with Hotspot â€¦",
    appId: "AdoptOpenJDK.OpenJDK.17",
    version: "17.0.0.20",
  },
  {
    name: "AdoptOpenJDK JDK with Eclipse â€¦",
    appId: "AdoptOpenJDK.OpenJDK.17.OpenJ9",
    version: "17.0.0.18",
  },
  {
    name: "AdoptOpenJDK JDK with Hotspot 8",
    appId: "AdoptOpenJDK.OpenJDK.8",
    version: "8.0.292.10",
  },
  {
    name: "Ragel",
    appId: "AdrianThurston.Ragel",
    version: "6.1",
  },
  {
    name: "File Converter",
    appId: "AdrienAllard.FileConverter",
    version: "2.0.2",
  },
  {
    name: "myADVICE.Auftragsverwaltung",
    appId: "Advice.myADVICE.Auftragsverwaltung",
    version: "5.0.17",
  },
  {
    name: "Aegisub",
    appId: "Aegisub.Aegisub",
    version: "3.2.2",
  },
  {
    name: "Aegisub (Dev)",
    appId: "Aegisub.Aegisub.Dev",
    version: "r8942",
  },
  {
    name: "Aerosoft One",
    appId: "Aerosoft.One",
    version: "0.16.4",
  },
  {
    name: "Ham VNA",
    appId: "AfreetSoftware.HamVNA",
    version: "1.1",
  },
  {
    name: "OmniRig",
    appId: "AfreetSoftware.OmniRig",
    version: "1.2",
  },
  {
    name: "1Password",
    appId: "AgileBits.1Password",
    version: "8.10.46",
  },
  {
    name: "1Password Beta",
    appId: "AgileBits.1Password.Beta",
    version: "8.10.48-17.BEâ€¦",
  },
  {
    name: "1Password CLI",
    appId: "AgileBits.1Password.CLI",
    version: "2.30.0",
  },
  {
    name: "33å°è¯",
    appId: "AgileStudio.33TaiCi",
    version: "0.3.7",
  },
  {
    name: "33å­—å¹•",
    appId: "AgileStudio.33ZiMu",
    version: "1.6.0",
  },
  {
    name: "33æœå¸§",
    appId: "AgileStudio.FrameSearchEngine",
    version: "0.2.3",
  },
  {
    name: "Quote Hunt",
    appId: "AgileStudio.QuoteHunt",
    version: "2.2.4",
  },
  {
    name: "Agilent Lab Advisor",
    appId: "Agilent.LabAdvisor",
    version: "2.20.543",
  },
  {
    name: "Metashape Standard",
    appId: "Agisoft.MetashapeStandard",
    version: "2.1.2",
  },
  {
    name: "Smart Install Maker",
    appId: "Agretis.SmartInstallMaker",
    version: "5.04",
  },
  {
    name: "Password Checker",
    appId: "Ahlyab.PasswordChecker",
    version: "1.0.1",
  },
  {
    name: "Udemy Coupon Fetcher",
    appId: "Ahlyab.UdemyCouponFetcher",
    version: "1.2",
  },
  {
    name: "Ahoy",
    appId: "Ahoy.Ahoy",
    version: "2.1.1",
  },
  {
    name: "Anti-Twin",
    appId: "Aidex.AntiTwin.Portable",
    version: "1.8d",
  },
  {
    name: "AirDroid",
    appId: "AirDroid.AirDroid",
    version: "3.7.1.2",
  },
  {
    name: "Air Explorer",
    appId: "AirExplorer.AirExplorer",
    version: "4.7.0",
  },
  {
    name: "AirMyPC",
    appId: "AirMyPC.AirMyPC",
    version: "5.5.3",
  },
  {
    name: "Eddie - VPN Tunnel",
    appId: "AirVPN.Eddie",
    version: "2.21.8",
  },
  {
    name: "Aircall",
    appId: "Aircall.Aircall",
    version: "3.1.18",
  },
  {
    name: "ADS-B Spy",
    appId: "Airspy.AdsbSpy",
    version: "2.2-RC26",
  },
  {
    name: "Spy Server",
    appId: "Airspy.SpyServer",
    version: "2.0.1822",
  },
  {
    name: "blobsaver",
    appId: "Airsquared.Blobsaver",
    version: "3.6.0",
  },
  {
    name: "Airtame",
    appId: "Airtame.Airtame",
    version: "4.11.0",
  },
  {
    name: "Airytec Switch Off",
    appId: "Airytec.SwitchOff",
    version: "3.5.1",
  },
  {
    name: "Kahla",
    appId: "Aiursoft.Kahla",
    version: "4.5.0",
  },
  {
    name: "Thonny",
    appId: "AivarAnnamaa.Thonny",
    version: "4.1.4",
  },
  {
    name: "AkelPad",
    appId: "AkelPad.AkelPad",
    version: "4.9.8",
  },
  {
    name: "Akko Cloud Driver",
    appId: "Akko.CloudDriver",
    version: "370.1.32",
  },
  {
    name: "cloc",
    appId: "AlDanial.Cloc",
    version: "2.02",
  },
  {
    name: "Alacritty",
    appId: "Alacritty.Alacritty",
    version: "0.13.2",
  },
  {
    name: "Albion Online",
    appId: "Albion.Online",
    version: "20231106193145",
  },
  {
    name: "Toastify",
    appId: "Aleab.Toastify",
    version: "1.11.2",
  },
  {
    name: "Sigma file manager",
    appId: "AlekseyHoffman.Sigma-File-Manager",
    version: "1.7.0",
  },
  {
    name: "Codium",
    appId: "Alex313031.Codium",
    version: "1.89.1.24132",
  },
  {
    name: "Mercury",
    appId: "Alex313031.Mercury",
    version: "129.0.2",
  },
  {
    name: "Thorium",
    appId: "Alex313031.Thorium",
    version: "126.0.6478.231",
  },
  {
    name: "Thorium (AVX2)",
    appId: "Alex313031.Thorium.AVX2",
    version: "126.0.6478.231",
  },
  {
    name: "Freeter",
    appId: "AlexKaul.Freeter",
    version: "1.2.1",
  },
  {
    name: "G14ControlV2",
    appId: "AlexRedden.G14ControlV2",
    version: "0.2.2",
  },
  {
    name: "DVDStyler",
    appId: "AlexThuering.DVDStyler",
    version: "3.2.1",
  },
  {
    name: "Spek",
    appId: "AlexanderKojevnikov.Spek",
    version: "0.8.5",
  },
  {
    name: "lsdeer",
    appId: "AlexanderPershin.lsdeer",
    version: "0.1.6",
  },
  {
    name: "SmartSystemMenu",
    appId: "AlexanderPro.SmartSystemMenu",
    version: "2.27.0",
  },
  {
    name: "Ultramarin eRechnung Viewer",
    appId: "AlexanderSpiess.Ultramarinviewer",
    version: "1.1",
  },
  {
    name: "Cerebro",
    appId: "AlexandrSubbotin.Cerebro",
    version: "0.11.0",
  },
  {
    name: "AlgoKit",
    appId: "AlgorandFoundation.AlgoKit",
    version: "2.4.1",
  },
  {
    name: "Algodoo",
    appId: "Algoryx.Algodoo",
    version: "2.1.0",
  },
  {
    name: "é˜¿é‡Œæ—ºæ—º",
    appId: "Alibaba.AliIM",
    version: "10.01.07C",
  },
  {
    name: "AliMail",
    appId: "Alibaba.AliMail",
    version: "2.9.0",
  },
  {
    name: "åƒç‰›å·¥ä½œå°",
    appId: "Alibaba.AliWorkbench",
    version: "9.33.03N",
  },
  {
    name: "Alibaba Cloud CLI",
    appId: "Alibaba.AlibabaCloudCLI",
    version: "3.0.224",
  },
  {
    name: "æ”¯ä»˜å®å¼€æ”¾å¹³å°å¯†é’¥å·¥å…·",
    appId: "Alibaba.AlipayKeyTool",
    version: "2.0.3",
  },
  {
    name: "DingTalk",
    appId: "Alibaba.DingTalk",
    version: "7.6.15-Releasâ€¦",
  },
  {
    name: "DingTalk Lite",
    appId: "Alibaba.DingTalk.Lite",
    version: "5.1.21-Releasâ€¦",
  },
  {
    name: "LightProxy",
    appId: "Alibaba.LightProxy",
    version: "1.1.41",
  },
  {
    name: "å°ç¨‹åºå¼€å‘è€…å·¥å…·",
    appId: "Alibaba.MiniProgramStudio",
    version: "3.9.7",
  },
  {
    name: "å¤¸å…‹",
    appId: "Alibaba.Quark",
    version: "1.2.5.25",
  },
  {
    name: "å¤¸å…‹ç½‘ç›˜",
    appId: "Alibaba.QuarkCloudDrive",
    version: "3.12.0",
  },
  {
    name: "Teambition",
    appId: "Alibaba.Teambition",
    version: "2.0.3",
  },
  {
    name: "UCç½‘ç›˜",
    appId: "Alibaba.UCCloudDrive",
    version: "1.6.2",
  },
  {
    name: "è¯­é›€",
    appId: "Alibaba.Yuque",
    version: "3.4.5",
  },
  {
    name: "é˜¿é‡Œäº‘ç›˜",
    appId: "Alibaba.aDrive",
    version: "6.4.2",
  },
  {
    name: "Alist",
    appId: "Alist.Alist",
    version: "3.37.4",
  },
  {
    name: "FilesRemote",
    appId: "AllanBoll.FilesRemote",
    version: "1.13",
  },
  {
    name: "AHM System Manager              Allen\u0026Heath.AHMSystemManager       V1.03 -",
    appId: "Rev.",
    version: "â€¦",
  },
  {
    name: "Avantis Director                Allen\u0026Heath.AvantisDirector        V1.11 -",
    appId: "Rev.",
    version: "â€¦",
  },
  {
    name: "Custom Control Editor           Allen\u0026Heath.CustomControlEditor    V1.1.1",
    appId: "-",
    version: "Rev.â€¦",
  },
  {
    name: "SQ MixPad                       Allen\u0026Heath.SQMixPad               V1.5.0",
    appId: "-",
    version: "Rev.â€¦",
  },
  {
    name: "dLive Director",
    appId: "Allen\u0026Heath.dLiveDirector",
    version: "V2.00",
  },
  {
    name: "PL/SQL Developer",
    appId: "AllroundAutomations.PLSQLDeveloper",
    version: "15.0.3",
  },
  {
    name: "SpeedFan",
    appId: "Almico.SpeedFan",
    version: "4.52",
  },
  {
    name: "AltDrag",
    appId: "AltDrag.AltDrag",
    version: "1.1",
  },
  {
    name: "AltSnap",
    appId: "AltSnap.AltSnap",
    version: "1.63",
  },
  {
    name: "Altap Salamander",
    appId: "Altap.Salamander",
    version: "4",
  },
  {
    name: "yasb",
    appId: "AmN.yasb",
    version: "1.2.4",
  },
  {
    name: "Altus",
    appId: "AmanHarwara.Altus",
    version: "5.2.0",
  },
  {
    name: "AWS Command Line Interface",
    appId: "Amazon.AWSCLI",
    version: "2.17.64",
  },
  {
    name: "AWS VPN Client",
    appId: "Amazon.AWSVPNClient",
    version: "4.0.0",
  },
  {
    name: "Amazon Chime",
    appId: "Amazon.Chime",
    version: "5.23.31957",
  },
  {
    name: "AWS Copilot CLI",
    appId: "Amazon.CopilotCLI",
    version: "1.34.0",
  },
  {
    name: "Amazon Corretto 11",
    appId: "Amazon.Corretto.11.JDK",
    version: "11.0.24.8",
  },
  {
    name: "Amazon Corretto 17",
    appId: "Amazon.Corretto.17.JDK",
    version: "17.0.12.7",
  },
  {
    name: "Amazon Corretto 18",
    appId: "Amazon.Corretto.18.JDK",
    version: "18.0.2.9",
  },
  {
    name: "Amazon Corretto 19",
    appId: "Amazon.Corretto.19.JDK",
    version: "19.0.2.7",
  },
  {
    name: "Amazon Corretto 20",
    appId: "Amazon.Corretto.20.JDK",
    version: "20.0.2.10",
  },
  {
    name: "Amazon Corretto 21",
    appId: "Amazon.Corretto.21.JDK",
    version: "21.0.4.7",
  },
  {
    name: "Amazon Corretto 22",
    appId: "Amazon.Corretto.22.JDK",
    version: "22.0.2.9",
  },
  {
    name: "Amazon Corretto 8",
    appId: "Amazon.Corretto.8.JDK",
    version: "1.8.0.422",
  },
  {
    name: "Amazon Corretto JRE 8",
    appId: "Amazon.Corretto.8.JRE",
    version: "1.8.0.422",
  },
  {
    name: "Amazon Games",
    appId: "Amazon.Games",
    version: "3.0.9202.1",
  },
  {
    name: "Amazon Kindle",
    appId: "Amazon.Kindle",
    version: "2.3.0.70673",
  },
  {
    name: "Amazon Music",
    appId: "Amazon.Music",
    version: "9.4.0.2386",
  },
  {
    name: "NoSQL Workbench",
    appId: "Amazon.NoSQLWorkbench",
    version: "3.2.0",
  },
  {
    name: "OpenSearch SQL ODBC Driver",
    appId: "Amazon.OpenSearch.ODBC",
    version: "1.1.0.1",
  },
  {
    name: "AWS SAM Command Line Interface",
    appId: "Amazon.SAM-CLI",
    version: "1.125.0",
  },
  {
    name: "Amazon Send to Kindle",
    appId: "Amazon.SendToKindle",
    version: "1.1.1.257",
  },
  {
    name: "Session Manager Plugin",
    appId: "Amazon.SessionManagerPlugin",
    version: "1.2.650.0",
  },
  {
    name: "Amazon WorkSpaces",
    appId: "Amazon.WorkspacesClient",
    version: "5.23.0.4889",
  },
  {
    name: "Trusted QSL",
    appId: "AmericanRadioRelayLeague.TrustedQâ€¦",
    version: "2.7.3",
  },
  {
    name: "Amulet",
    appId: "Amulet.Amulet",
    version: "1.21.10",
  },
  {
    name: "AxGlyph",
    appId: "AmyXun.AxGlyph",
    version: "2.5981",
  },
  {
    name: "AxMath",
    appId: "AmyXun.AxMath",
    version: "2.7061",
  },
  {
    name: "Anaconda3",
    appId: "Anaconda.Anaconda3",
    version: "2024.06-1",
  },
  {
    name: "Miniconda3",
    appId: "Anaconda.Miniconda3",
    version: "py312_24.7.1-0",
  },
  {
    name: "LTspice",
    appId: "AnalogDevices.LTspice",
    version: "24.0.12.0",
  },
  {
    name: "cli",
    appId: "Anchor.cli",
    version: "0.1.2",
  },
  {
    name: "TouchVPN",
    appId: "AnchorFree.TouchVPN",
    version: "1.0.22",
  },
  {
    name: "Grype",
    appId: "Anchore.Grype",
    version: "0.79.1",
  },
  {
    name: "obs-asio",
    appId: "Andersama.obs-asio",
    version: "3.2.1f",
  },
  {
    name: "Exact Audio Copy",
    appId: "AndreWiethoff.ExactAudioCopy",
    version: "1.6",
  },
  {
    name: "RepoZ",
    appId: "AndreasWascher.RepoZ",
    version: "5.5",
  },
  {
    name: "Nokia SP MIDI Player",
    appId: "Andrelouis.NokiaSPMIDIPlayer",
    version: "1.0.0.1",
  },
  {
    name: "Invoncify",
    appId: "AndresMorelos.Invoncify",
    version: "1.30.4",
  },
  {
    name: "WinDjView",
    appId: "AndrewZhezherun.WinDjView",
    version: "2.1",
  },
  {
    name: "AM_Master",
    appId: "AngryMiao.AMMaster",
    version: "1.2.3",
  },
  {
    name: "PDFTK Builder",
    appId: "AngusJohnson.PDFTKBuilder",
    version: "3.10.0",
  },
  {
    name: "Resource Hacker",
    appId: "AngusJohnson.ResourceHacker",
    version: "5.2.6",
  },
  {
    name: "Anim8or",
    appId: "Anim8or.Anim8or",
    version: "1.0.0",
  },
  {
    name: "Ultimate Vocal Remover",
    appId: "Anjok07.UltimateVocalRemover",
    version: "5.6.0",
  },
  {
    name: "AnkerMake Studio",
    appId: "Anker.AnkerMake",
    version: "1.5.22",
  },
  {
    name: "Anki",
    appId: "Anki.Anki",
    version: "24.06.3",
  },
  {
    name: "Ant Renamer",
    appId: "AntSoftware.AntRenamer",
    version: "2.12.0",
  },
  {
    name: "Achievement Watcher",
    appId: "AnthonyBeaumont.AchievementWatcher",
    version: "1.6.8",
  },
  {
    name: "AntiMicro",
    appId: "AntiMicro.AntiMicro",
    version: "2.24.0",
  },
  {
    name: "AntiMicroX",
    appId: "AntiMicroX.antimicrox",
    version: "3.4.0",
  },
  {
    name: "AntiMicroX Portable",
    appId: "AntiMicroX.antimicroxPortable",
    version: "3.3.3",
  },
  {
    name: "Bulk Image Downloader",
    appId: "AntibodySoftware.BulkImageDownloaâ€¦",
    version: "5.98",
  },
  {
    name: "WizFile",
    appId: "AntibodySoftware.WizFile",
    version: "3.1",
  },
  {
    name: "WizKey",
    appId: "AntibodySoftware.WizKey",
    version: "1.5.0.8",
  },
  {
    name: "WizMouse",
    appId: "AntibodySoftware.WizMouse",
    version: "1.7.0.3",
  },
  {
    name: "WizTree",
    appId: "AntibodySoftware.WizTree",
    version: "4.2",
  },
  {
    name: "SoundSwitch",
    appId: "AntoineAflalo.SoundSwitch",
    version: "6.11.0",
  },
  {
    name: "Parsify",
    appId: "AntoniKepinski.ParsifyDesktop",
    version: "2.0.1",
  },
  {
    name: "Tad",
    appId: "AntonyCourtney.Tad",
    version: "0.14.0",
  },
  {
    name: "Antstream",
    appId: "AntstreamLtd.Antstream",
    version: "2.1.2744.0",
  },
  {
    name: "Antutu Benchmark",
    appId: "Antutu.AntutuBenchmark",
    version: "2023.04.19.11â€¦",
  },
  {
    name: "Anytype",
    appId: "AnyAssociation.Anytype",
    version: "0.42.8",
  },
  {
    name: "AnyDesk",
    appId: "AnyDeskSoftwareGmbH.AnyDesk",
    version: "8.1.0",
  },
  {
    name: "Anylogic Personal Learning Ediâ€¦",
    appId: "AnyLogic.AnyLogic.Personal",
    version: "8.8.1",
  },
  {
    name: "Anylogic Professional",
    appId: "AnyLogic.AnyLogic.Professional",
    version: "8.8.1",
  },
  {
    name: "Anylogic University",
    appId: "AnyLogic.AnyLogic.University",
    version: "8.8.1",
  },
  {
    name: "AnyTXT Searcher",
    appId: "AnyTXT.AnyTXTSearcher",
    version: "1.2",
  },
  {
    name: "Anydo",
    appId: "Anydo.Anydo",
    version: "5.0.76",
  },
  {
    name: "Cursor",
    appId: "Anysphere.Cursor",
    version: "0.41.3",
  },
  {
    name: "Apache Directory Studio",
    appId: "Apache.DirectoryStudio",
    version: "2.0.0-M17",
  },
  {
    name: "Groovy 2",
    appId: "Apache.Groovy.2",
    version: "2.5.23",
  },
  {
    name: "Groovy 3",
    appId: "Apache.Groovy.3",
    version: "3.0.22",
  },
  {
    name: "Groovy 4",
    appId: "Apache.Groovy.4",
    version: "4.0.23",
  },
  {
    name: "Apache NetBeans IDE",
    appId: "Apache.NetBeans",
    version: "23",
  },
  {
    name: "OpenOffice",
    appId: "Apache.OpenOffice",
    version: "4.115.9813",
  },
  {
    name: "XAMPP 8.1",
    appId: "ApacheFriends.Xampp.8.1",
    version: "8.1.12-0",
  },
  {
    name: "XAMPP 8.2",
    appId: "ApacheFriends.Xampp.8.2",
    version: "8.2.12",
  },
  {
    name: "kbcli",
    appId: "ApeCloud.kbcli",
    version: "0.9.1",
  },
  {
    name: "AppFlowy",
    appId: "AppFlowy.AppFlowy",
    version: "0.7.0",
  },
  {
    name: "JDownloader 2",
    appId: "AppWork.JDownloader",
    version: "2",
  },
  {
    name: "Koodo Reader",
    appId: "AppbyTroye.KoodoReader",
    version: "1.6.6",
  },
  {
    name: "æ»´ç­”æ¸…å•",
    appId: "Appest.Dida",
    version: "6.0.6.0",
  },
  {
    name: "TickTick",
    appId: "Appest.TickTick",
    version: "6.0.6.0",
  },
  {
    name: "Appium Inspector",
    appId: "AppiumDevelopers.AppiumInspector",
    version: "2023.12.2.202â€¦",
  },
  {
    name: "AirPort",
    appId: "Apple.AirPort",
    version: "5.6.1.2",
  },
  {
    name: "AirPort",
    appId: "Apple.AirPort.BaseStationUpdate",
    version: "5.2.1.8",
  },
  {
    name: "Apple Application Support (64-â€¦",
    appId: "Apple.AppleApplicationSupport.x64",
    version: "8.7",
  },
  {
    name: "Apple Application Support (32-â€¦",
    appId: "Apple.AppleApplicationSupport.x86",
    version: "8.7",
  },
  {
    name: "Apple Mobile Device Support",
    appId: "Apple.AppleMobileDeviceSupport",
    version: "18.0.0.32",
  },
  {
    name: "Apple Mobile Device Support",
    appId: "Apple.AppleSoftwareUpdate",
    version: "2.7.0.3",
  },
  {
    name: "Bonjour",
    appId: "Apple.Bonjour",
    version: "3.1.0.1",
  },
  {
    name: "Bonjour Print Services",
    appId: "Apple.BonjourPrintServices",
    version: "2.0.2.0",
  },
  {
    name: "DVD or CD Sharing",
    appId: "Apple.DVDorCDSharing",
    version: "1.0.1.4",
  },
  {
    name: "Pkl",
    appId: "Apple.Pkl",
    version: "0.26.3",
  },
  {
    name: "ProRes RAW for Windows",
    appId: "Apple.ProResRAWforWindows",
    version: "1.3",
  },
  {
    name: "Safari",
    appId: "Apple.Safari",
    version: "3.525.21.0",
  },
  {
    name: "Windows Migration Assistant",
    appId: "Apple.WindowsMigrationAssistant",
    version: "2.4.3.1",
  },
  {
    name: "iCloud",
    appId: "Apple.iCloud",
    version: "7.21.0.23",
  },
  {
    name: "iTunes",
    appId: "Apple.iTunes",
    version: "12.13.2.3",
  },
  {
    name: "AppleWin",
    appId: "AppleWin.AppleWin",
    version: "1.30.18.0",
  },
  {
    name: "Simply Fortran 3",
    appId: "Approximatrix.SimplyFortran",
    version: "3.33.4069",
  },
  {
    name: "WebFortran Command Line Interfâ€¦",
    appId: "Approximatrix.WebFortran",
    version: "0.4.42.0",
  },
  {
    name: "HvManager",
    appId: "AprelTech.HVManager",
    version: "3.2.4.0",
  },
  {
    name: "Power Manager",
    appId: "AprelTech.PowerManager",
    version: "2.2.2.0",
  },
  {
    name: "Silent Install Builder",
    appId: "AprelTech.SilentInstallBuilder",
    version: "5.1.4.0",
  },
  {
    name: "Silent Install Builder Beta",
    appId: "AprelTech.SilentInstallBuilder.Beâ€¦",
    version: "6.3.3.0",
  },
  {
    name: "Trivy",
    appId: "AquaSecurity.Trivy",
    version: "0.55.2",
  },
  {
    name: "Araxis Merge",
    appId: "Araxis.Merge",
    version: "2024.6002",
  },
  {
    name: "Sidebar Diagnostics",
    appId: "ArcadeRenegade.SidebarDiagnostics",
    version: "3.6.3",
  },
  {
    name: "Arctype",
    appId: "Arctype.Arctype",
    version: "0.9.71",
  },
  {
    name: "Arduino CLI",
    appId: "ArduinoSA.CLI",
    version: "1.0.4",
  },
  {
    name: "Arduino IDE Beta",
    appId: "ArduinoSA.IDE.beta",
    version: "2.0.0.0",
  },
  {
    name: "Arduino IDE RC",
    appId: "ArduinoSA.IDE.rc",
    version: "2.0.0-rc9.3",
  },
  {
    name: "Arduino IDE",
    appId: "ArduinoSA.IDE.stable",
    version: "2.3.3",
  },
  {
    name: "Ares",
    appId: "AresEmulator.Ares",
    version: "140.0.0.0",
  },
  {
    name: "Argus Monitor",
    appId: "Argotronic.ArgusMonitor",
    version: "7.1.2.2780",
  },
  {
    name: "Dr. Henry\u0027s Chess Game",
    appId: "Aries-Sciences-LLC.AI-Chess",
    version: "1",
  },
  {
    name: "PSO2 Tweaker",
    appId: "Arks-Layer.PSO2Tweaker",
    version: "6.2.1.5",
  },
  {
    name: "Arm GNU Toolchain",
    appId: "Arm.ArmGnuToolchain",
    version: "12.2.MPACBTI-â€¦",
  },
  {
    name: "GNU Arm Embedded Toolchain      Arm.GnuArmEmbeddedToolchain",
    appId: "13.3",
    version: "2024.07",
  },
  {
    name: "ArmCord",
    appId: "ArmCord.ArmCord",
    version: "3.3.1",
  },
  {
    name: "Armagetron Advanced",
    appId: "ArmagetronAdvanced.ArmagetronAdvaâ€¦",
    version: "0.2.9.1.0",
  },
  {
    name: "Armaria",
    appId: "Armaria.Armaria",
    version: "0.0.47",
  },
  {
    name: "Auto Dark Mode",
    appId: "Armin2208.WindowsAutoNightMode",
    version: "10.4.1.1",
  },
  {
    name: "Guitar Pro 6",
    appId: "ArobasMusic.GuitarPro.6",
    version: "6.2.0",
  },
  {
    name: "Guitar Pro 7",
    appId: "ArobasMusic.GuitarPro.7",
    version: "7.6.0.2089",
  },
  {
    name: "Guitar Pro 7 - Soundbanks",
    appId: "ArobasMusic.GuitarPro.7.Soundbanks",
    version: "1.1.123",
  },
  {
    name: "Guitar Pro 8",
    appId: "ArobasMusic.GuitarPro.8",
    version: "8.1.3.120",
  },
  {
    name: "ArrayFire",
    appId: "ArrayFire.ArrayFire",
    version: "3.9.0",
  },
  {
    name: "MotionPro",
    appId: "ArrayNetworks.MotionPro",
    version: "9.4.0.505",
  },
  {
    name: "marksman",
    appId: "Artempyanykh.Marksman",
    version: "2023.12.09",
  },
  {
    name: "Artha",
    appId: "Artha.Artha",
    version: "1.0.3.0",
  },
  {
    name: "mutool",
    appId: "ArtifexSoftware.mutool",
    version: "1.23.0",
  },
  {
    name: "PyEveLiveDPS",
    appId: "ArtificialQualia.PyEveLiveDPS",
    version: "2.7.2",
  },
  {
    name: "Nicepage",
    appId: "ArtisteerLimited.Nicepage",
    version: "6.3.1",
  },
  {
    name: "Artistic Style",
    appId: "ArtisticStyle.ArtisticStyle",
    version: "3.4.11",
  },
  {
    name: "Rocks\u0027n\u0027Diamonds",
    appId: "Artsoft.RocksNDiamonds",
    version: "4.3.8.1",
  },
  {
    name: "Asana",
    appId: "Asana.Asana",
    version: "2.2.1",
  },
  {
    name: "AudioRelay",
    appId: "AsaphaHalifa.AudioRelay",
    version: "0.27.5",
  },
  {
    name: "AsciidocFX",
    appId: "AsciidocFX.AsciidocFX",
    version: "1.8.10",
  },
  {
    name: "Aserto CLI",
    appId: "Aserto.CLI",
    version: "0.32.4",
  },
  {
    name: "Check2Decision",
    appId: "Aserto.Check2Decision",
    version: "0.1.0",
  },
  {
    name: "ds-load",
    appId: "Aserto.DSLoad",
    version: "0.30.10",
  },
  {
    name: "Topaz",
    appId: "Aserto.Topaz",
    version: "0.32.28",
  },
  {
    name: "Flawesome",
    appId: "AshishBharadwajJ.Flawesome",
    version: "0.2.3",
  },
  {
    name: "DefaultAudio",
    appId: "AshleyStone.DefaultAudio",
    version: "1.0.0.0",
  },
  {
    name: "SitdownMW",
    appId: "AshleyStone.SitdownMW",
    version: "1.0.0.0",
  },
  {
    name: "Playpark Downloader",
    appId: "AsiasoftOnline.PlayparkDownloader",
    version: "0.3.6",
  },
  {
    name: "AssetRipper",
    appId: "AssetRipper.AssetRipper",
    version: "1.0.17",
  },
  {
    name: "AstroGrep",
    appId: "AstroComma.AstroGrep",
    version: "4.4.9",
  },
  {
    name: "Astro CLI",
    appId: "Astronomer.Astro",
    version: "1.29.0",
  },
  {
    name: "ArmouryCrate",
    appId: "Asus.ArmouryCrate",
    version: "5.8.9.0",
  },
  {
    name: "Sorter",
    appId: "AswaPaul.Sorter",
    version: "2.6.3",
  },
  {
    name: "Atari800Win PLus",
    appId: "Atari800Win.PLus",
    version: "4",
  },
  {
    name: "Atlassian Companion",
    appId: "Atlassian.Companion",
    version: "2.1.0",
  },
  {
    name: "Sourcetree",
    appId: "Atlassian.Sourcetree",
    version: "3.4.19",
  },
  {
    name: "Find and Mount",
    appId: "Atola.FindandMount",
    version: "2.32",
  },
  {
    name: "Testcontainers Desktop",
    appId: "AtomicJar.Testcontainers",
    version: "1.17.0",
  },
  {
    name: "Artix Game Launcher",
    appId: "Atrix.AtrixLauncher",
    version: "2.1.2",
  },
  {
    name: "Juice",
    appId: "Atticus64.juice",
    version: "0.4.0",
  },
  {
    name: "News CLI",
    appId: "Atticus64.news",
    version: "1.3.0",
  },
  {
    name: "Audacious",
    appId: "Audacious.MediaPlayer",
    version: "4.3.1",
  },
  {
    name: "Audacity",
    appId: "Audacity.Audacity",
    version: "3.6.4",
  },
  {
    name: "EVO",
    appId: "Audient.EVO",
    version: "4.3.18.0",
  },
  {
    name: "Sono",
    appId: "Audient.Sono",
    version: "4.2.1.0",
  },
  {
    name: "Dante Via",
    appId: "Audinate.DanteVia",
    version: "1.3.2.1",
  },
  {
    name: "Dante Virtual Soundcard",
    appId: "Audinate.DanteVirtualSoundcard",
    version: "4.4.1.3",
  },
  {
    name: "AudioRanger",
    appId: "AudioRangerIT.AudioRanger",
    version: "3.4.7",
  },
  {
    name: "Audius",
    appId: "Audius.Audius",
    version: "1.5.55",
  },
  {
    name: "Lattics",
    appId: "AuraMarker.Lattics",
    version: "2.0.1",
  },
  {
    name: "Mantle",
    appId: "AuraSide.Mantle",
    version: "0.1.0.4",
  },
  {
    name: "Aurora",
    appId: "Aurora.Aurora",
    version: "v0.8.1",
  },
  {
    name: "Auslogics Disk Defrag",
    appId: "Auslogics.DiskDefrag",
    version: "11.0.0.4",
  },
  {
    name: "R6RC",
    appId: "AustinLeath.R6RC",
    version: "0.4.6",
  },
  {
    name: "AuthPass",
    appId: "Authpass.Authpass",
    version: "1.9.11_2007",
  },
  {
    name: "AutoHotkey",
    appId: "AutoHotkey.AutoHotkey",
    version: "2.0.18",
  },
  {
    name: "AutoIt",
    appId: "AutoIt.AutoIt",
    version: "3.3.16.1",
  },
  {
    name: "SciTE4AutoIt3",
    appId: "AutoIt.SciTE4AutoIt3",
    version: "3.3.15.3",
  },
  {
    name: "Autodesk Access",
    appId: "Autodesk.AutodeskAccess",
    version: "2.9.0.9",
  },
  {
    name: "Autodesk Desktop App",
    appId: "Autodesk.DesktopApp",
    version: "8.4.0.50",
  },
  {
    name: "EAGLE",
    appId: "Autodesk.EAGLE",
    version: "9.6.2",
  },
  {
    name: "AutomatedLab",
    appId: "AutomatedLab.AutomatedLab",
    version: "5.50.0",
  },
  {
    name: "Simplenote",
    appId: "Automattic.Simplenote",
    version: "2.21.0",
  },
  {
    name: "WordPress.com",
    appId: "Automattic.Wordpress",
    version: "8.0.3",
  },
  {
    name: "Automox Agent",
    appId: "Automox.AutomoxAgent",
    version: "1.44.8",
  },
  {
    name: "Metronome Wallet",
    appId: "AutonomousSoftware.MetronomeWallet",
    version: "1.4.3",
  },
  {
    name: "CowabungaLite",
    appId: "Avangelista.CowabungaLite",
    version: "1.0.1",
  },
  {
    name: "PDFCreator Free",
    appId: "Avanquestpdfforge.PDFCreator-Free",
    version: "5.3.1",
  },
  {
    name: "PDFCreator Professional",
    appId: "Avanquestpdfforge.PDFCreator-Profâ€¦",
    version: "5.3.1",
  },
  {
    name: "PDFCreator Server",
    appId: "Avanquestpdfforge.PDFCreator-Servâ€¦",
    version: "3.2.0",
  },
  {
    name: "PDFCreator Terminal Server",
    appId: "Avanquestpdfforge.PDFCreator-Termâ€¦",
    version: "5.3.1",
  },
  {
    name: "DuskPlayer",
    appId: "AveekSaha.DuskPlayer",
    version: "7.0.0",
  },
  {
    name: "AviSynth",
    appId: "AviSynth.AviSynth",
    version: "2.6.0.6",
  },
  {
    name: "AviSynth+",
    appId: "AviSynth.AviSynthPlus",
    version: "3.7.3.4003",
  },
  {
    name: "Avidemux",
    appId: "Avidemux.Avidemux",
    version: "2.8.0.220109",
  },
  {
    name: "Avocode",
    appId: "Avocode.Avocode",
    version: "4.15.6",
  },
  {
    name: "Avogadro",
    appId: "Avogadro.Avogadro",
    version: "1.2.0",
  },
  {
    name: "SteaScree",
    appId: "AwthWathje.SteaScree",
    version: "1.5.4",
  },
  {
    name: "AxCrypt",
    appId: "AxCrypt.AxCrypt",
    version: "2.1.1692.0",
  },
  {
    name: "IconWorkshop",
    appId: "Axialis.IconWorkshop",
    version: "6.95",
  },
  {
    name: "AXIS Video Capture Driver",
    appId: "AxisCommunicationsAB.AXISVideoCapâ€¦",
    version: "1.0.0",
  },
  {
    name: "AXIS File Player Launcher",
    appId: "AxisCommunicationsAB.FilePlayerLaâ€¦",
    version: "3.0.3.0",
  },
  {
    name: "GitKraken",
    appId: "Axosoft.GitKraken",
    version: "10.4.0",
  },
  {
    name: "Axure RP 10",
    appId: "Axure.AxureRP.10",
    version: "10.0.0.3924",
  },
  {
    name: "Stopawu",
    appId: "AyibatariIbaba.Stopawu",
    version: "1.0.0",
  },
  {
    name: "Convene",
    appId: "Azeus.Convene",
    version: "8.1.212449",
  },
  {
    name: "IcedTea-Web",
    appId: "Azul.IcedTea-Web",
    version: "1.8.8.0",
  },
  {
    name: "Zulu 10",
    appId: "Azul.Zulu.10.JDK",
    version: "10.3",
  },
  {
    name: "Azul Zulu JDK 11",
    appId: "Azul.Zulu.11.JDK",
    version: "11.74.15",
  },
  {
    name: "Azul Zulu JRE 11",
    appId: "Azul.Zulu.11.JRE",
    version: "11.74.15",
  },
  {
    name: "Zulu 12",
    appId: "Azul.Zulu.12.JDK",
    version: "12.3",
  },
  {
    name: "Zulu JRE 12",
    appId: "Azul.Zulu.12.JRE",
    version: "12.1",
  },
  {
    name: "Azul Zulu JDK 13",
    appId: "Azul.Zulu.13.JDK",
    version: "13.54.17",
  },
  {
    name: "Azul Zulu JRE 13",
    appId: "Azul.Zulu.13.JRE",
    version: "13.54.17",
  },
  {
    name: "Zulu 14",
    appId: "Azul.Zulu.14.JDK",
    version: "14.29",
  },
  {
    name: "Azul Zulu JDK 15",
    appId: "Azul.Zulu.15.JDK",
    version: "15.46.17",
  },
  {
    name: "Azul Zulu JRE 15",
    appId: "Azul.Zulu.15.JRE",
    version: "15.46.17",
  },
  {
    name: "Azul Zulu JDK 16",
    appId: "Azul.Zulu.16.JDK",
    version: "16.32.15",
  },
  {
    name: "Azul Zulu JRE 16",
    appId: "Azul.Zulu.16.JRE",
    version: "16.32.15",
  },
  {
    name: "Azul Zulu JDK 17",
    appId: "Azul.Zulu.17.JDK",
    version: "17.52.17",
  },
  {
    name: "Azul Zulu JRE 17",
    appId: "Azul.Zulu.17.JRE",
    version: "17.52.17",
  },
  {
    name: "Azul Zulu JDK 18",
    appId: "Azul.Zulu.18.JDK",
    version: "18.32.13",
  },
  {
    name: "Azul Zulu JRE 18",
    appId: "Azul.Zulu.18.JRE",
    version: "18.32.13",
  },
  {
    name: "Azul Zulu JDK 19",
    appId: "Azul.Zulu.19.JDK",
    version: "19.32.13",
  },
  {
    name: "Azul Zulu JDK 20",
    appId: "Azul.Zulu.20.JDK",
    version: "20.32.11",
  },
  {
    name: "Azul Zulu JDK 21",
    appId: "Azul.Zulu.21.JDK",
    version: "21.36.17",
  },
  {
    name: "Azul Zulu JDK 22",
    appId: "Azul.Zulu.22.JDK",
    version: "22.32.15",
  },
  {
    name: "Azul Zulu JDK 6",
    appId: "Azul.Zulu.6.JDK",
    version: "6.22.0.3",
  },
  {
    name: "Azul Zulu JDK 7",
    appId: "Azul.Zulu.7.JDK",
    version: "7.56.0.11",
  },
  {
    name: "Azul Zulu JRE 7",
    appId: "Azul.Zulu.7.JRE",
    version: "7.56.0.11",
  },
  {
    name: "Azul Zulu JDK 8",
    appId: "Azul.Zulu.8.JDK",
    version: "8.80.0.17",
  },
  {
    name: "Azul Zulu JRE 8",
    appId: "Azul.Zulu.8.JRE",
    version: "8.80.0.17",
  },
  {
    name: "Zulu 9",
    appId: "Azul.Zulu.9.JDK",
    version: "9.0.7.1",
  },
  {
    name: "Zulu JRE 9",
    appId: "Azul.Zulu.9.JRE",
    version: "9.0.0.15",
  },
  {
    name: "Azul ZuluFX JDK 11",
    appId: "Azul.ZuluFX.11.JDK",
    version: "11.74.15",
  },
  {
    name: "Azul ZuluFX JDK 15",
    appId: "Azul.ZuluFX.15.JDK",
    version: "15.46.17",
  },
  {
    name: "Azul ZuluFX JDK 17",
    appId: "Azul.ZuluFX.17.JDK",
    version: "17.52.17",
  },
  {
    name: "Azul ZuluFX JRE 17",
    appId: "Azul.ZuluFX.17.JRE",
    version: "17.28.13",
  },
  {
    name: "Azul ZuluFX JDK 18",
    appId: "Azul.ZuluFX.18.JDK",
    version: "18.32.13",
  },
  {
    name: "Azul ZuluFX JDK 19",
    appId: "Azul.ZuluFX.19.JDK",
    version: "19.32.15",
  },
  {
    name: "Azul ZuluFX JDK 20",
    appId: "Azul.ZuluFX.20.JDK",
    version: "20.32.11",
  },
  {
    name: "Azul ZuluFX JDK 21",
    appId: "Azul.ZuluFX.21.JDK",
    version: "21.36.17",
  },
  {
    name: "Azul ZuluFX JDK 22",
    appId: "Azul.ZuluFX.22.JDK",
    version: "22.32.15",
  },
  {
    name: "Azul ZuluFX JDK 8",
    appId: "Azul.ZuluFX.8.JDK",
    version: "8.80.0",
  },
  {
    name: "BISS",
    appId: "B-trust.BISS",
    version: "3.34",
  },
  {
    name: "SiYuan",
    appId: "B3log.SiYuan",
    version: "3.1.8",
  },
  {
    name: "Audio Waveform Image Generator",
    appId: "BBC.audiowaveform",
    version: "1.10.1",
  },
  {
    name: "FileSorter",
    appId: "BC3Tech.FileSorter",
    version: "0.2.70",
  },
  {
    name: "SecEditCtlHost.BCM.Setup",
    appId: "BCM.SecEditCtl",
    version: "3.2.1.2",
  },
  {
    name: "BDR Thermea Service Tool (PCST)",
    appId: "BDRThermea.ServiceTool",
    version: "7.4.10.0",
  },
  {
    name: "Luminea Remote",
    appId: "BJLive!.LumineaRemote",
    version: "1.0.7.2065",
  },
  {
    name: "SecEditCtl.BOC",
    appId: "BOC.SecEditCtl",
    version: "3.1.4.2",
  },
  {
    name: "BOMIST",
    appId: "BOMIST.BOMIST",
    version: "2.12.6",
  },
  {
    name: "BPBible",
    appId: "BPBible.BPBible",
    version: "0.5.3.1",
  },
  {
    name: "BRLCAD",
    appId: "BRL-CAD.brlcad",
    version: "7.38.0",
  },
  {
    name: "BYOND",
    appId: "BYOND.BYOND",
    version: "515.1633",
  },
  {
    name: "BZFlag",
    appId: "BZFlag.BZFlag",
    version: "2.4.26",
  },
  {
    name: "Badlion Client",
    appId: "Badlion.BadlionClient",
    version: "4.4.0",
  },
  {
    name: "ç™¾åº¦ç½‘ç›˜",
    appId: "Baidu.BaiduNetdisk",
    version: "7.44.6",
  },
  {
    name: "ç™¾åº¦è¾“å…¥æ³•",
    appId: "Baidu.BaiduPinyin",
    version: "6.1.12.0",
  },
  {
    name: "ç™¾åº¦AIåŒä¼ åŠ©æ‰‹",
    appId: "Baidu.BaiduSIAssistant",
    version: "1.7.0",
  },
  {
    name: "ç™¾åº¦AIåŒä¼ ä¼šè®®ç‰ˆ",
    appId: "Baidu.BaiduSIMeeting",
    version: "2.0.1",
  },
  {
    name: "ç™¾åº¦è¯­éŸ³è¾“å…¥",
    appId: "Baidu.BaiduSpeechInput",
    version: "2.0.0.33",
  },
  {
    name: "ç™¾åº¦ç¿»è¯‘",
    appId: "Baidu.BaiduTranslate",
    version: "1.8.0",
  },
  {
    name: "ç™¾åº¦æ–‡åº“",
    appId: "Baidu.BaiduWenku",
    version: "2.0.4",
  },
  {
    name: "ç™¾åº¦å¼€å‘è€…å·¥å…·",
    appId: "Baidu.SwanIDE",
    version: "4.35.1",
  },
  {
    name: "TeraBox",
    appId: "Baidu.TeraBox",
    version: "1.32.0",
  },
  {
    name: "cppcryptfs",
    appId: "BaileyBrown.cppcryptfs",
    version: "1.4.4.2",
  },
  {
    name: "RenderDoc",
    appId: "BaldurKarlsson.RenderDoc",
    version: "1.31.0",
  },
  {
    name: "balena-cli",
    appId: "Balena.BalenaCLI",
    version: "18.2.2",
  },
  {
    name: "balenaEtcher",
    appId: "Balena.Etcher",
    version: "1.19.21",
  },
  {
    name: "Balsamiq Wireframes",
    appId: "Balsamiq.Wireframes",
    version: "4.7.5",
  },
  {
    name: "Bambu Studio",
    appId: "Bambulab.Bambustudio",
    version: "01.09.07.52",
  },
  {
    name: "V.S. Whitty Full Week",
    appId: "Banbuds.VsWhitty",
    version: "690",
  },
  {
    name: "Cakewalk by BandLab",
    appId: "BandLab.Cakewalk",
    version: "29.09.0.098",
  },
  {
    name: "CeVIO AI Voice Package - ã‚Šã‚€ã‚‹",
    appId: "Bandai.Reml",
    version: "2.0.0",
  },
  {
    name: "Bandicam",
    appId: "BandicamCompany.Bandicam",
    version: "7.1.4.2458",
  },
  {
    name: "Bandicut",
    appId: "BandicamCompany.Bandicut",
    version: "3.8.4.2434",
  },
  {
    name: "BandiView",
    appId: "Bandisoft.BandiView",
    version: "7.07",
  },
  {
    name: "Bandizip",
    appId: "Bandisoft.Bandizip",
    version: "7.36",
  },
  {
    name: "Honeyview",
    appId: "Bandisoft.Honeyview",
    version: "5.51",
  },
  {
    name: "Barogo Store Manager",
    appId: "Barogo.StoreManager",
    version: "1.37.0",
  },
  {
    name: "QtScrcpy",
    appId: "Barry-ran.QtScrcpy",
    version: "2.2.1",
  },
  {
    name: "BarryCarlyon Extension Tools",
    appId: "BarryCarlyon.BarryCarlyonExtensioâ€¦",
    version: "1.4.0",
  },
  {
    name: "Lenovo Legion Toolkit",
    appId: "BartoszCichecki.LenovoLegionToolkâ€¦",
    version: "2.24.1",
  },
  {
    name: "Aurora 5e Character Builder",
    appId: "BasDriessen.Aurora",
    version: "1.0.3",
  },
  {
    name: "Basecamp 3",
    appId: "Basecamp,LLC.Basecamp3",
    version: "2.3.14",
  },
  {
    name: "Basedash",
    appId: "Basedash.Basedash",
    version: "1.16.0",
  },
  {
    name: "AllToMP3",
    appId: "BasileBruneau.AllToMP3",
    version: "0.3.19.137",
  },
  {
    name: "helloworld.package",
    appId: "Basti-def.helloworld.package",
    version: "1",
  },
  {
    name: "Baulk",
    appId: "Baulk.Baulk",
    version: "5.0.1.1086",
  },
  {
    name: "Baxi Service Tool (PCST)",
    appId: "Baxi.ServiceTool",
    version: "7.4.10.0",
  },
  {
    name: "Bazel",
    appId: "Bazel.Bazel",
    version: "7.3.1",
  },
  {
    name: "Bazelisk",
    appId: "Bazel.Bazelisk",
    version: "1.21.0",
  },
  {
    name: "Folder Size Explorer",
    appId: "Bazwise.FolderSizeExplorer",
    version: "2.0.0",
  },
  {
    name: "BeagleEditor",
    appId: "BeagleSoftware.BeagleEditor",
    version: "2024.4.0.1",
  },
  {
    name: "TeamTalk5",
    appId: "BearWare.dk.TeamTalk5",
    version: "5.17",
  },
  {
    name: "BKChem",
    appId: "BedaKosata.BKChem",
    version: "0.14.0-pre2",
  },
  {
    name: "regolith",
    appId: "Bedrock-OSS.regolith",
    version: "1.4.1",
  },
  {
    name: "BeeBEEP",
    appId: "BeeBEEP.BeeBEEP",
    version: "5.8.6",
  },
  {
    name: "Beeftext",
    appId: "Beeftext.Beeftext",
    version: "16",
  },
  {
    name: "Beeper",
    appId: "Beeper.Beeper",
    version: "3.109.1",
  },
  {
    name: "Belarc Advisor",
    appId: "Belarc.Advisor",
    version: "12.1.0.0",
  },
  {
    name: "Belgium e-ID middleware",
    appId: "BelgianGovernment.Belgium-eIDmiddâ€¦",
    version: "5.1.6030",
  },
  {
    name: "Belgium e-ID viewer",
    appId: "BelgianGovernment.eIDViewer",
    version: "5.1.6095",
  },
  {
    name: "Liberica JDK 11",
    appId: "BellSoft.LibericaJDK.11",
    version: "11.0.24.9",
  },
  {
    name: "Liberica JDK 11 Full",
    appId: "BellSoft.LibericaJDK.11.Full",
    version: "11.0.24.9",
  },
  {
    name: "Liberica JDK 14",
    appId: "BellSoft.LibericaJDK.14",
    version: "14.0.2.13",
  },
  {
    name: "Liberica JDK 14 Full",
    appId: "BellSoft.LibericaJDK.14.Full",
    version: "14.0.2.13",
  },
  {
    name: "Liberica JDK 15",
    appId: "BellSoft.LibericaJDK.15",
    version: "15.0.2.10",
  },
  {
    name: "Liberica JDK 15 Full",
    appId: "BellSoft.LibericaJDK.15.Full",
    version: "15.0.2.10",
  },
  {
    name: "Liberica JDK 16",
    appId: "BellSoft.LibericaJDK.16",
    version: "16.0.2.7",
  },
  {
    name: "Liberica JDK 16 Full",
    appId: "BellSoft.LibericaJDK.16.Full",
    version: "16.0.2.7",
  },
  {
    name: "Liberica JDK 17",
    appId: "BellSoft.LibericaJDK.17",
    version: "17.0.12.10",
  },
  {
    name: "Liberica JDK 17 Full",
    appId: "BellSoft.LibericaJDK.17.Full",
    version: "17.0.12.10",
  },
  {
    name: "Liberica JDK 18",
    appId: "BellSoft.LibericaJDK.18",
    version: "18.0.2.101",
  },
  {
    name: "Liberica JDK 18 Full",
    appId: "BellSoft.LibericaJDK.18.Full",
    version: "18.0.2.101",
  },
  {
    name: "Liberica JDK 19",
    appId: "BellSoft.LibericaJDK.19",
    version: "19.0.2.9",
  },
  {
    name: "Liberica JDK 19 Full",
    appId: "BellSoft.LibericaJDK.19.Full",
    version: "19.0.2.9",
  },
  {
    name: "Liberica JDK 20",
    appId: "BellSoft.LibericaJDK.20",
    version: "20.0.2.10",
  },
  {
    name: "Liberica JDK 20 Full",
    appId: "BellSoft.LibericaJDK.20.Full",
    version: "20.0.2.10",
  },
  {
    name: "Liberica JDK 21",
    appId: "BellSoft.LibericaJDK.21",
    version: "21.0.4.9",
  },
  {
    name: "Liberica JDK 21 Full",
    appId: "BellSoft.LibericaJDK.21.Full",
    version: "21.0.4.9",
  },
  {
    name: "Liberica JDK 22",
    appId: "BellSoft.LibericaJDK.22",
    version: "22.0.2.11",
  },
  {
    name: "Liberica JDK 22 Full",
    appId: "BellSoft.LibericaJDK.22.Full",
    version: "22.0.2.11",
  },
  {
    name: "Liberica JDK 8",
    appId: "BellSoft.LibericaJDK.8",
    version: "8.0.422.6",
  },
  {
    name: "Liberica JDK 8 Full",
    appId: "BellSoft.LibericaJDK.8.Full",
    version: "8.0.422.6",
  },
  {
    name: "Liberica JRE 11",
    appId: "BellSoft.LibericaJRE.11",
    version: "11.0.21+10",
  },
  {
    name: "Liberica JRE 11 Full",
    appId: "BellSoft.LibericaJRE.11.Full",
    version: "11.0.21+10",
  },
  {
    name: "Liberica JRE 13",
    appId: "BellSoft.LibericaJRE.13",
    version: "13.0.2+9",
  },
  {
    name: "Liberica JRE 13 Full",
    appId: "BellSoft.LibericaJRE.13.Full",
    version: "13.0.2+9",
  },
  {
    name: "Liberica JRE 14",
    appId: "BellSoft.LibericaJRE.14",
    version: "14.0.2+13",
  },
  {
    name: "Liberica JRE 14 Full",
    appId: "BellSoft.LibericaJRE.14.Full",
    version: "14.0.2+13",
  },
  {
    name: "Liberica JRE 15",
    appId: "BellSoft.LibericaJRE.15",
    version: "15.0.2+10",
  },
  {
    name: "Liberica JRE 15 Full",
    appId: "BellSoft.LibericaJRE.15.Full",
    version: "15.0.2+10",
  },
  {
    name: "Liberica JRE 16",
    appId: "BellSoft.LibericaJRE.16",
    version: "16.0.2+7",
  },
  {
    name: "Liberica JRE 16 Full",
    appId: "BellSoft.LibericaJRE.16.Full",
    version: "16.0.2+7",
  },
  {
    name: "Liberica JRE 17",
    appId: "BellSoft.LibericaJRE.17",
    version: "17.0.9+11",
  },
  {
    name: "Liberica JRE 17 Full",
    appId: "BellSoft.LibericaJRE.17.Full",
    version: "17.0.9+11",
  },
  {
    name: "Liberica JRE 18",
    appId: "BellSoft.LibericaJRE.18",
    version: "18.0.2.1+1",
  },
  {
    name: "Liberica JRE 18 Full",
    appId: "BellSoft.LibericaJRE.18.Full",
    version: "18.0.2.1+1",
  },
  {
    name: "Liberica JRE 19",
    appId: "BellSoft.LibericaJRE.19",
    version: "19.0.2.9",
  },
  {
    name: "Liberica JRE 19 Full",
    appId: "BellSoft.LibericaJRE.19.Full",
    version: "19.0.2+9",
  },
  {
    name: "Liberica JRE 20",
    appId: "BellSoft.LibericaJRE.20",
    version: "20.0.2.10",
  },
  {
    name: "Liberica JRE 20 Full",
    appId: "BellSoft.LibericaJRE.20.Full",
    version: "20.0.2+10",
  },
  {
    name: "Liberica JRE 21",
    appId: "BellSoft.LibericaJRE.21",
    version: "21.0.1.12",
  },
  {
    name: "Liberica JRE 21 Full",
    appId: "BellSoft.LibericaJRE.21.Full",
    version: "21.0.1+12",
  },
  {
    name: "Liberica JRE 8",
    appId: "BellSoft.LibericaJRE.8",
    version: "8u392+9",
  },
  {
    name: "Liberica JRE 8 Full",
    appId: "BellSoft.LibericaJRE.8.Full",
    version: "8u392+9",
  },
  {
    name: "Liberica NIK 22 (JDK 11)",
    appId: "BellSoft.LibericaNIK.22.JDK11",
    version: "22.3.5",
  },
  {
    name: "Liberica NIK Core 22 (JDK 11)",
    appId: "BellSoft.LibericaNIK.22.JDK11.Core",
    version: "22.3.5",
  },
  {
    name: "Liberica NIK 22 Full (JDK 11)",
    appId: "BellSoft.LibericaNIK.22.JDK11.Full",
    version: "22.3.5",
  },
  {
    name: "Liberica NIK 23 (JDK 17)",
    appId: "BellSoft.LibericaNIK.23.JDK17",
    version: "23.0.5",
  },
  {
    name: "Liberica NIK Core 23 (JDK 17)",
    appId: "BellSoft.LibericaNIK.23.JDK17.Core",
    version: "23.0.5",
  },
  {
    name: "Liberica NIK 23 Full (JDK 17)",
    appId: "BellSoft.LibericaNIK.23.JDK17.Full",
    version: "23.0.5",
  },
  {
    name: "Liberica NIK 23 (JDK 21)",
    appId: "BellSoft.LibericaNIK.23.JDK21",
    version: "23.1.4",
  },
  {
    name: "Liberica NIK Core 23 (JDK 21)",
    appId: "BellSoft.LibericaNIK.23.JDK21.Core",
    version: "23.1.4",
  },
  {
    name: "Liberica NIK 23 Full (JDK 21)",
    appId: "BellSoft.LibericaNIK.23.JDK21.Full",
    version: "23.1.4",
  },
  {
    name: "Liberica NIK 24 (JDK 22)",
    appId: "BellSoft.LibericaNIK.24.JDK22",
    version: "24.0.2",
  },
  {
    name: "Liberica NIK 24 Full (JDK 22)",
    appId: "BellSoft.LibericaNIK.24.JDK22.Full",
    version: "24.0.2",
  },
  {
    name: "Linphone",
    appId: "BelledonneCommunications.Linphone",
    version: "5.2.6",
  },
  {
    name: "scc",
    appId: "BenBoyter.scc",
    version: "3.3.5",
  },
  {
    name: "PNGGauntlet",
    appId: "BenHollis.PNGGauntlet",
    version: "3.1.1",
  },
  {
    name: "Handheld Companion",
    appId: "BenjaminLSR.HandheldCompanion",
    version: "0.21.2.4",
  },
  {
    name: "Oblivion Desktop",
    appId: "BepassOrg.OblivionDesktop",
    version: "0.23.15-beta",
  },
  {
    name: "BYOB",
    appId: "Berkeley.BYOB",
    version: "3.1.1",
  },
  {
    name: "grocy-desktop",
    appId: "BerndBestel.grocy-desktop",
    version: "2.3.1.0",
  },
  {
    name: "Convy",
    appId: "Beseda.Convy",
    version: "1.2.0",
  },
  {
    name: "Bespoke Synth",
    appId: "BespokeSynth.BespokeSynth",
    version: "1.2.1",
  },
  {
    name: "BestNotes",
    appId: "BestNotes.BestNotes",
    version: "3.4.0",
  },
  {
    name: "Betaflight Configurator",
    appId: "Betaflight.Betaflight-Configurator",
    version: "10.10.0",
  },
  {
    name: "Bethesda.net Launcher",
    appId: "Bethesda.Launcher",
    version: "1.84.0",
  },
  {
    name: "Better-CrewLink",
    appId: "BetterCrewLink.BetterCrewLink",
    version: "3.1.3",
  },
  {
    name: "Betterbird",
    appId: "Betterbird.Betterbird",
    version: "115.15.0-bb32",
  },
  {
    name: "Beyond-All-Reason",
    appId: "Beyond-All-Reason.Beyond-All-Reasâ€¦",
    version: "1.2988.0",
  },
  {
    name: "BeyondATC",
    appId: "BeyondATC.Client",
    version: "1.2.61",
  },
  {
    name: "Bforartists 4",
    appId: "Bforartists.Bforartists",
    version: "4.2.2",
  },
  {
    name: "WSL Disk Shrinker",
    appId: "BiSS.WSLDiskShrinker",
    version: "0.2.2",
  },
  {
    name: "BibleTime",
    appId: "BibleTime.BibleTime",
    version: "3.0.3",
  },
  {
    name: "BiglyBT",
    appId: "BiglySoftware.BiglyBT",
    version: "3.6.0.0",
  },
  {
    name: "å“”å“©å“”å“©",
    appId: "Bilibili.Bilibili",
    version: "1.14.2",
  },
  {
    name: "å“”å“©å“”å“©ç›´æ’­å§¬",
    appId: "Bilibili.Livehime",
    version: "6.6.0.7525",
  },
  {
    name: "Bç«™å½•æ’­å§¬",
    appId: "Bililive.BililiveRecorder",
    version: "1.3.8",
  },
  {
    name: "Billfish",
    appId: "Billfish.Billfish",
    version: "3.1.5.12",
  },
  {
    name: "Chatbox",
    appId: "Bin-Huang.Chatbox",
    version: "1.4.2",
  },
  {
    name: "Binance",
    appId: "BinanceTech.Binance",
    version: "1.53.6",
  },
  {
    name: "ClipboardFusion",
    appId: "BinaryFortress.ClipboardFusion",
    version: "6.0.1.0",
  },
  {
    name: "CloudShow",
    appId: "BinaryFortress.CloudShow",
    version: "6.1.0.0",
  },
  {
    name: "DisplayFusion",
    appId: "BinaryFortress.DisplayFusion",
    version: "10.1.2.0",
  },
  {
    name: "FileSeek",
    appId: "BinaryFortress.FileSeek",
    version: "6.9.0.0",
  },
  {
    name: "HashTools",
    appId: "BinaryFortress.HashTools",
    version: "4.8.1.0",
  },
  {
    name: "LogFusion",
    appId: "BinaryFortress.LogFusion",
    version: "6.9.0.0",
  },
  {
    name: "TrayStatus",
    appId: "BinaryFortress.TrayStatus",
    version: "4.8.0.0",
  },
  {
    name: "VoiceBot",
    appId: "BinaryFortress.VoiceBot",
    version: "3.9.6.0",
  },
  {
    name: "Window Inspector",
    appId: "BinaryFortress.WindowInspector",
    version: "3.4.0.0",
  },
  {
    name: "Advanced File Finder Free Editâ€¦",
    appId: "BinaryMark.AdvancedFileFinder",
    version: "5",
  },
  {
    name: "Batch Docs Free Edition",
    appId: "BinaryMark.BatchDocs",
    version: "5.6",
  },
  {
    name: "Batch Encoding Converter Free â€¦",
    appId: "BinaryMark.BatchEncodingConverter",
    version: "5",
  },
  {
    name: "Batch File Encrypt Free Edition",
    appId: "BinaryMark.BatchFileEncrypt",
    version: "5",
  },
  {
    name: "Batch File Manager Free Edition",
    appId: "BinaryMark.BatchFileManager",
    version: "5",
  },
  {
    name: "Batch File Rename Free Edition",
    appId: "BinaryMark.BatchFileRename",
    version: "5",
  },
  {
    name: "Batch File Replace Free Edition",
    appId: "BinaryMark.BatchFileReplace",
    version: "5",
  },
  {
    name: "Batch File Split \u0026 Join Free Eâ€¦",
    appId: "BinaryMark.BatchFileSplitJoin",
    version: "5",
  },
  {
    name: "Batch Files Free Edition",
    appId: "BinaryMark.BatchFiles",
    version: "5",
  },
  {
    name: "Batch Hex Editor Free Edition",
    appId: "BinaryMark.BatchHexEditor",
    version: "5",
  },
  {
    name: "Batch Image Converter Free Ediâ€¦",
    appId: "BinaryMark.BatchImageConverter",
    version: "5.6",
  },
  {
    name: "Batch Image Enhancer Free Editâ€¦",
    appId: "BinaryMark.BatchImageEnhancer",
    version: "5.6",
  },
  {
    name: "Batch Image Resizer Free Editiâ€¦",
    appId: "BinaryMark.BatchImageResizer",
    version: "5.6",
  },
  {
    name: "Batch Image Splitter Free Editâ€¦",
    appId: "BinaryMark.BatchImageSplitter",
    version: "5.6",
  },
  {
    name: "Batch Image Watermarker Free Eâ€¦",
    appId: "BinaryMark.BatchImageWatermarker",
    version: "5.6",
  },
  {
    name: "Batch Images Free Edition",
    appId: "BinaryMark.BatchImages",
    version: "5.6",
  },
  {
    name: "Batch Photo Face Free Edition",
    appId: "BinaryMark.BatchPhotoFace",
    version: "5.6",
  },
  {
    name: "Batch RegEx Free Edition",
    appId: "BinaryMark.BatchRegEx",
    version: "5",
  },
  {
    name: "Batch Text File Editor Free Edâ€¦",
    appId: "BinaryMark.BatchTextFileEditor",
    version: "5",
  },
  {
    name: "Batch Word Replace Free Edition",
    appId: "BinaryMark.BatchWordReplace",
    version: "5.6",
  },
  {
    name: "Biorhythms Calculator 2020 Amaâ€¦",
    appId: "BinaryMark.BiorhythmsCalculator",
    version: "2",
  },
  {
    name: "File Hash Generator Free Editiâ€¦",
    appId: "BinaryMark.FileHashGenerator",
    version: "5",
  },
  {
    name: "Password Generator 2020 Pro Trâ€¦",
    appId: "BinaryMark.PasswordGenerator",
    version: "3",
  },
  {
    name: "Random Number Generator Free Eâ€¦",
    appId: "BinaryMark.RandomNumberGenerator",
    version: "3",
  },
  {
    name: "Streaming Video Downloader Lite",
    appId: "BinaryMark.StreamingVideoDownloadâ€¦",
    version: "7",
  },
  {
    name: "Text to MP3 Converter Free Ediâ€¦",
    appId: "BinaryMark.TextToMp3Converter",
    version: "2",
  },
  {
    name: "Malwarebytes Windows Firewall â€¦",
    appId: "BiniSoft.WindowsFirewallControl",
    version: "6.11.0.0",
  },
  {
    name: "Biscuit",
    appId: "Biscuit.Biscuit",
    version: "1.2.30",
  },
  {
    name: "Bisq",
    appId: "Bisq.Bisq",
    version: "1.9.17",
  },
  {
    name: "Bit Driver Updater",
    appId: "BitGuardian.BitDriverUpdater",
    version: "1.0.0.20",
  },
  {
    name: "Bit Game Booster",
    appId: "BitGuardian.BitGameBooster",
    version: "1.0.0.5",
  },
  {
    name: "Aadhaar Card Password Remover",
    appId: "BitRecover.AadhaarCardPasswordRemâ€¦",
    version: "3",
  },
  {
    name: "BitRecover Windows Live Mail Câ€¦",
    appId: "BitRecover.WindowsLiveMailConvertâ€¦",
    version: "8",
  },
  {
    name: "Coreprio",
    appId: "BitSum.Coreprio",
    version: "0.0.6.8",
  },
  {
    name: "ParkControl",
    appId: "BitSum.ParkControl",
    version: "5.2.1.4",
  },
  {
    name: "Process Lasso",
    appId: "BitSum.ProcessLasso",
    version: "15.0.1.16",
  },
  {
    name: "Process Lasso Beta",
    appId: "BitSum.ProcessLasso.Beta",
    version: "15.1.1.7",
  },
  {
    name: "Bitcoin Core",
    appId: "BitcoinCoreProject.BitcoinCore",
    version: "27.1.0",
  },
  {
    name: "BitDefender Agent",
    appId: "Bitdefender.Bitdefender",
    version: "26.0.1.233",
  },
  {
    name: "Drupal packaged by Bitnami",
    appId: "Bitnami.Drupal",
    version: "9.4.7-0",
  },
  {
    name: "Bitvise SSH Client",
    appId: "Bitvise.SSH.Client",
    version: "9.39",
  },
  {
    name: "Bitvise SSH Server",
    appId: "Bitvise.SSH.Server",
    version: "9.39",
  },
  {
    name: "Bitwarden",
    appId: "Bitwarden.Bitwarden",
    version: "2024.9.0",
  },
  {
    name: "Bitwarden CLI",
    appId: "Bitwarden.CLI",
    version: "2024.9.0",
  },
  {
    name: "æ¯”è¯‘",
    appId: "Biyi.Biyi",
    version: "0.5.0+18",
  },
  {
    name: "Fluent Search Beta",
    appId: "BlastApps.FluentSearch",
    version: "0.9.92.998",
  },
  {
    name: "BleachBit",
    appId: "BleachBit.BleachBit",
    version: "4.6.0.2537",
  },
  {
    name: "blender",
    appId: "BlenderFoundation.Blender",
    version: "4.2.2",
  },
  {
    name: "Blender LTS 3.3",
    appId: "BlenderFoundation.Blender.LTS.3.3",
    version: "3.3.19",
  },
  {
    name: "Blender LTS 3.6",
    appId: "BlenderFoundation.Blender.LTS.3.6",
    version: "3.6.12",
  },
  {
    name: "FamiStudio",
    appId: "BleuBleu.FamiStudio",
    version: "4.1.3",
  },
  {
    name: "Bookworm",
    appId: "BlindPandasTeam.Bookworm",
    version: "2022.1a5",
  },
  {
    name: "Magpie",
    appId: "Blinue.Magpie",
    version: "0.11.1",
  },
  {
    name: "Blitz",
    appId: "Blitz.Blitz",
    version: "2.1.100",
  },
  {
    name: "BlueMail",
    appId: "Blix.BlueMail",
    version: "1.140.34",
  },
  {
    name: "Battle.net Setup",
    appId: "Blizzard.BattleNet",
    version: "1.18.10.3141",
  },
  {
    name: "Blocknet",
    appId: "Blocknetproject.Blocknet",
    version: "4.4.1",
  },
  {
    name: "BlueBubbles",
    appId: "BlueBubbles.BlueBubbles",
    version: "1.12.7",
  },
  {
    name: "BlueJ",
    appId: "BlueJTeam.BlueJ",
    version: "5.4.1",
  },
  {
    name: "User Interface for Elite Dangeâ€¦",
    appId: "BlueMystical.EDHM",
    version: "2.2.42",
  },
  {
    name: "ContextMenuManager",
    appId: "BluePointLilac.ContextMenuManager",
    version: "3.3.3.1",
  },
  {
    name: "BlueStacks",
    appId: "BlueStack.BlueStacks",
    version: "5.20.0.1037",
  },
  {
    name: "BluebeamOCR 21",
    appId: "Bluebeam.BluebeamOCR.21",
    version: "21.0.30",
  },
  {
    name: "Bluebeam Revu 20",
    appId: "Bluebeam.Revu.20",
    version: "20.3.15",
  },
  {
    name: "Bluebeam Revu 21",
    appId: "Bluebeam.Revu.21",
    version: "21.3.0",
  },
  {
    name: "FlashBack Pro 5",
    appId: "Blueberry.FlashBackPro",
    version: "5.60.0.4813",
  },
  {
    name: "Flashback Express",
    appId: "Blueberry.FlashbackExpress",
    version: "6.10.0.415",
  },
  {
    name: "Bluefish",
    appId: "Bluefish.Bluefish",
    version: "2.2.13",
  },
  {
    name: "Newgrounds Auditorium",
    appId: "Bluemaxima.NewgroundsAuditorium",
    version: "2",
  },
  {
    name: "Voyager",
    appId: "Bluemaxima.Voyager",
    version: "18.05",
  },
  {
    name: "Logger32",
    appId: "BobK4CY.Logger32",
    version: "4.0.311",
  },
  {
    name: "slik",
    appId: "BobdaProgrammer.slik",
    version: "1.0.1",
  },
  {
    name: "Config File Validator",
    appId: "Boeing.config-file-validator",
    version: "1.7.1",
  },
  {
    name: "Bome SendSX",
    appId: "Bome.SendSX",
    version: "1.4",
  },
  {
    name: "glogg",
    appId: "Bonnefon.glogg",
    version: "1.1.4",
  },
  {
    name: "bookhunter",
    appId: "BookStairs.bookhunter",
    version: "0.14.4",
  },
  {
    name: "GameBoy Book Reader",
    appId: "BookreaderUK.GBBook",
    version: "4.92b",
  },
  {
    name: "BookxNote Pro",
    appId: "BookxSoftware.BookxNotePro",
    version: "2.0.0.1124",
  },
  {
    name: "Listary",
    appId: "Bopsoft.Listary",
    version: "6.3",
  },
  {
    name: "Simplest File Renamer",
    appId: "BorisYakubchik.SimplestFileRenamer",
    version: "1.0.0",
  },
  {
    name: "NETworkManager",
    appId: "BornToBeRoot.NETworkManager",
    version: "2024.6.15.0",
  },
  {
    name: "HttpMaster Express Edition",
    appId: "Borvid.HttpMasterExpress",
    version: "5.9.1",
  },
  {
    name: "HttpMaster Professional Edition",
    appId: "Borvid.HttpMasterProfessional",
    version: "5.9.1",
  },
  {
    name: "WSL Manager",
    appId: "Bostrot.WSLManager",
    version: "1.8.14",
  },
  {
    name: "boardmix",
    appId: "Bosyun.BoardMix",
    version: "1.6.3",
  },
  {
    name: "boardmix",
    appId: "Bosyun.BoardMix.CN",
    version: "1.6.6",
  },
  {
    name: "Pixso",
    appId: "Bosyun.Pixso",
    version: "1.33.1",
  },
  {
    name: "Pixso",
    appId: "Bosyun.Pixso.CN",
    version: "1.34.1",
  },
  {
    name: "Pixso Local Font",
    appId: "Bosyun.PixsoLocalFont",
    version: "1.0.5",
  },
  {
    name: "IconViewer",
    appId: "BotProductions.IconViewer",
    version: "3.2.147",
  },
  {
    name: "PSP Thumbnail Handler",
    appId: "BotProductions.PSPThumbnailHandler",
    version: "2.10.49",
  },
  {
    name: "Allway Sync",
    appId: "Botkind.AllwaySync",
    version: "22.0.1",
  },
  {
    name: "Box",
    appId: "Box.Box",
    version: "2.40.333",
  },
  {
    name: "Box Tools",
    appId: "Box.BoxTools",
    version: "4.26.1.1109",
  },
  {
    name: "BoxHero",
    appId: "BoxHero.BoxHero",
    version: "2.2.9",
  },
  {
    name: "LYNX Whiteboard",
    appId: "BoxlightCorporation.LYNXWhiteboard",
    version: "8.4.6.0",
  },
  {
    name: "DeepVocal",
    appId: "Boxstar.DeepVocal",
    version: "2.1.0",
  },
  {
    name: "DeepVocal ToolBox",
    appId: "Boxstar.DeepVocalToolBox",
    version: "2.1.0",
  },
  {
    name: "Branch",
    appId: "BranchBlocks.Branch",
    version: "1.1",
  },
  {
    name: "Brave",
    appId: "Brave.Brave",
    version: "129.1.70.123",
  },
  {
    name: "Brave Beta",
    appId: "Brave.Brave.Beta",
    version: "129.1.71.102",
  },
  {
    name: "Brave Dev",
    appId: "Brave.Brave.Dev",
    version: "119.1.61.87",
  },
  {
    name: "Brave Nightly",
    appId: "Brave.Brave.Nightly",
    version: "129.1.72.55",
  },
  {
    name: "HEMTT",
    appId: "BrettMayson.HEMTT",
    version: "1.13.0",
  },
  {
    name: "Sizer",
    appId: "BrianApps.Sizer",
    version: "3.3.4.0",
  },
  {
    name: "Sizer (Dev)",
    appId: "BrianApps.Sizer.Dev",
    version: "4.0.640",
  },
  {
    name: "Image Resizer for Windows",
    appId: "BriceLambson.ImageResizerforWindoâ€¦",
    version: "3.1.2",
  },
  {
    name: "Studio",
    appId: "BrickLink.Studio",
    version: "2.24.1",
  },
  {
    name: "Studio 2.0 EarlyAccess versionâ€¦",
    appId: "BrickLink.Studio.EarlyAccess",
    version: "2.24.1",
  },
  {
    name: "BA connected",
    appId: "BrightSign.BAconnected",
    version: "1.10.0",
  },
  {
    name: "BrightAuthor 5.0",
    appId: "BrightSign.BrightAuthor.5.0",
    version: "5.0.1.2",
  },
  {
    name: "Folder Size",
    appId: "Brio.FolderSize",
    version: "2.6",
  },
  {
    name: "Brosix App",
    appId: "Brosix.BrosixApp",
    version: "1.0.1",
  },
  {
    name: "BrÃ¶tje Service Tool (PCST)",
    appId: "Brotje.ServiceTool",
    version: "7.4.10.0",
  },
  {
    name: "Brows",
    appId: "Brows.App",
    version: "0.53.0.52",
  },
  {
    name: "Bruno",
    appId: "Bruno.Bruno",
    version: "1.32.0",
  },
  {
    name: "PCI-Z",
    appId: "BrunoBanelli.PCI-Z",
    version: "2",
  },
  {
    name: "DrMIPS",
    appId: "BrunoNova.DrMIPS",
    version: "2.0.4",
  },
  {
    name: "Brutal Chess",
    appId: "BrutalChess.BrutalChess",
    version: "0.5.2",
  },
  {
    name: "Bullzip PDF Studio",
    appId: "Bullzip.BullzipPDFStudio",
    version: "1.1.0.188",
  },
  {
    name: "PDF Printer",
    appId: "Bullzip.PDFPrinter",
    version: "12.2.0.2905",
  },
  {
    name: "BumpTop",
    appId: "BumpTechnologies.BumpTop",
    version: "2.5.6268",
  },
  {
    name: "ISO Creator",
    appId: "Bunny-Wabbit.ISOCreator",
    version: "1.0.0",
  },
  {
    name: "BurnAware Free",
    appId: "Burnaware.BurnAwareFree",
    version: "17.3.0.0",
  },
  {
    name: "RipGrep GNU",
    appId: "BurntSushi.ripgrep.GNU",
    version: "14.1.1",
  },
  {
    name: "RipGrep MSVC",
    appId: "BurntSushi.ripgrep.MSVC",
    version: "14.1.1",
  },
  {
    name: "xsv",
    appId: "BurntSushi.xsv.GNU",
    version: "0.13.0",
  },
  {
    name: "xsv",
    appId: "BurntSushi.xsv.MSVC",
    version: "0.13.0",
  },
  {
    name: "Buttercup",
    appId: "Buttercup.Buttercup",
    version: "2.28.1",
  },
  {
    name: "Monica",
    appId: "ButterflyEffect.Monica",
    version: "2.5.1",
  },
  {
    name: "Disk Usage Analyzer",
    appId: "Byron.dua-cli",
    version: "2.29.2",
  },
  {
    name: "CapCut",
    appId: "ByteDance.CapCut",
    version: "4.6.0.1754",
  },
  {
    name: "Debugtron",
    appId: "ByteDance.Debugtron",
    version: "1.0.0-alpha.0",
  },
  {
    name: "è±†åŒ…",
    appId: "ByteDance.Doubao",
    version: "1.25.5",
  },
  {
    name: "æŠ–éŸ³",
    appId: "ByteDance.Douyin",
    version: "4.6.0",
  },
  {
    name: "æŠ–éŸ³å¼€å‘è€…å·¥å…·",
    appId: "ByteDance.DouyinIDE",
    version: "4.3.0",
  },
  {
    name: "æŠ–éŸ³èŠå¤©",
    appId: "ByteDance.DouyinIM",
    version: "1.1.21",
  },
  {
    name: "FeiLian",
    appId: "ByteDance.FeiLian",
    version: "2.2.25",
  },
  {
    name: "Feishu",
    appId: "ByteDance.Feishu",
    version: "7.27.8",
  },
  {
    name: "å‰ªæ˜ ä¸“ä¸šç‰ˆ",
    appId: "ByteDance.JianyingPro",
    version: "6.6.0.12145",
  },
  {
    name: "Lark",
    appId: "ByteDance.Lark",
    version: "7.26.8",
  },
  {
    name: "Resso",
    appId: "ByteDance.Resso",
    version: "0.18.2",
  },
  {
    name: "æ±½æ°´éŸ³ä¹",
    appId: "ByteDance.SodaMusic",
    version: "1.7.6",
  },
  {
    name: "ç›´æ’­ä¼´ä¾£",
    appId: "ByteDance.StreamingTool",
    version: "8.4.8",
  },
  {
    name: "TOS Browser",
    appId: "ByteDance.TOSBrowser",
    version: "1.8.10",
  },
  {
    name: "è¥¿ç“œè§†é¢‘",
    appId: "ByteDance.XiguaVideo",
    version: "1.0.9",
  },
  {
    name: "tosutil",
    appId: "ByteDance.tosutil",
    version: "2.0.0",
  },
  {
    name: "Wasmtime",
    appId: "BytecodeAlliance.Wasmtime",
    version: "25.0.1",
  },
  {
    name: "Wasmtime",
    appId: "BytecodeAlliance.Wasmtime.Portable",
    version: "17.0.1",
  },
  {
    name: "DocuToolbox",
    appId: "C-PartnerSystemhausGmbH.DocuToolbâ€¦",
    version: "4.4.34",
  },
  {
    name: "DocuToolbox.AllFeatures",
    appId: "C-PartnerSystemhausGmbH.DocuToolbâ€¦",
    version: "4.4.34",
  },
  {
    name: "QuickFinder",
    appId: "C-PartnerSystemhausGmbH.QuickFindâ€¦",
    version: "4.4.34",
  },
  {
    name: "SalesPrix",
    appId: "CABS.SalesPrix",
    version: "6.19.1",
  },
  {
    name: "ScanPrix",
    appId: "CABS.ScanPrix",
    version: "6.19.1",
  },
  {
    name: "CASecureBrowser",
    appId: "CAI.CASecureBrowser",
    version: "12.5.0",
  },
  {
    name: "CAS Modbus Scanner",
    appId: "CAS.ModbusScanner",
    version: "1.02aF",
  },
  {
    name: "CBackup",
    appId: "CBackup.CBackup",
    version: "3.4.0.0",
  },
  {
    name: "NetLogo",
    appId: "CCL.NetLogo",
    version: "6.4.0",
  },
  {
    name: "EVE Online",
    appId: "CCPGames.EVEOnline",
    version: "1.6.2",
  },
  {
    name: "ChucK",
    appId: "CCRMA.ChucK",
    version: "1.5.2.2",
  },
  {
    name: "å¤®è§†å½±éŸ³",
    appId: "CCTV.CBox",
    version: "6.0.2.0",
  },
  {
    name: "CEmu",
    appId: "CE-Programming.CEmu",
    version: "1.3",
  },
  {
    name: "CEB EBanking Assistant",
    appId: "CEB.CEBEBankAssistant",
    version: "4.0.9.0",
  },
  {
    name: "TestDisk",
    appId: "CGSecurity.TestDisk",
    version: "7.1",
  },
  {
    name: "CHIRP-legacy",
    appId: "CHIRPSoftware.CHIRP-legacy",
    version: "20221217",
  },
  {
    name: "Behind you",
    appId: "CHMS.Behindyou",
    version: "1.0.0",
  },
  {
    name: "X Minecraft Launcher",
    appId: "CI010.XMinecraftLauncher",
    version: "0.39.17.723",
  },
  {
    name: "CINC Workstation",
    appId: "CINCSoftware.Workstation",
    version: "23.5.1040",
  },
  {
    name: "è½»æŽ¨",
    appId: "CISDI.Qingtui",
    version: "7.0.1",
  },
  {
    name: "haveibeenpwned",
    appId: "CKingX.haveibeenpwned",
    version: "1.0.0",
  },
  {
    name: "Common Lisp Package Manager (Câ€¦",
    appId: "CLPM.CLPM",
    version: "0.4.2-rc.2",
  },
  {
    name: "Path Copy Copy",
    appId: "CLechasseur.PathCopyCopy",
    version: "20",
  },
  {
    name: "ProwessIQ",
    appId: "CMIE.ProwessIQ",
    version: "1.96",
  },
  {
    name: "CLAN",
    appId: "CMU.CLAN",
    version: "8.12.00",
  },
  {
    name: "MeshLab",
    appId: "CNRISTI.MeshLab",
    version: "2023.12",
  },
  {
    name: "QuteMol",
    appId: "CNRISTI.QuteMol",
    version: "0.4.1",
  },
  {
    name: "Donkey for Oracle",
    appId: "COAS.Donkey",
    version: "23.3.20.0",
  },
  {
    name: "Semanta Modeler",
    appId: "COAS.SemantaModeler",
    version: "6.7.3.5307",
  },
  {
    name: "Camera Ballistics",
    appId: "COMPELSONLaboratories.CameraBalliâ€¦",
    version: "2.0.0.17042",
  },
  {
    name: "MOBILedit! SIM Clone",
    appId: "COMPELSONLaboratories.MOBILedit!Sâ€¦",
    version: "3.3.1.0",
  },
  {
    name: "Vistrax",
    appId: "CONZEInformatik.Vistrax",
    version: "3.4.24026.921",
  },
  {
    name: "Holoearth",
    appId: "COVERCorp.Holoearth",
    version: "1.4.0",
  },
  {
    name: "jetAudio Basic",
    appId: "COWON.jetAudio",
    version: "8.1.0",
  },
  {
    name: "CP Editor",
    appId: "CPEditor.CPEditor",
    version: "6.11.2",
  },
  {
    name: "CPUID CPU-Z",
    appId: "CPUID.CPU-Z",
    version: "2.11",
  },
  {
    name: "CPUID CPU-Z Aorus",
    appId: "CPUID.CPU-Z.AORUS",
    version: "2.06",
  },
  {
    name: "CPUID CPU-Z OC Formula",
    appId: "CPUID.CPU-Z.ASR",
    version: "2.05",
  },
  {
    name: "CPUIDCoolerMaster CPU-Z",
    appId: "CPUID.CPU-Z.CM",
    version: "2.06",
  },
  {
    name: "CPUID CPU-Z Gigabyte",
    appId: "CPUID.CPU-Z.GBT",
    version: "2.06",
  },
  {
    name: "CPUID CPU-Z MSI",
    appId: "CPUID.CPU-Z.MSI",
    version: "2.06",
  },
  {
    name: "CPUID PHANTOM CPU-Z",
    appId: "CPUID.CPU-Z.PHANTOM",
    version: "2.06",
  },
  {
    name: "CPUID ROG CPU-Z",
    appId: "CPUID.CPU-Z.ROG",
    version: "2.08",
  },
  {
    name: "CPUID TAICHI CPU-Z",
    appId: "CPUID.CPU-Z.TAICHI",
    version: "2.06",
  },
  {
    name: "CPUID HWMonitor",
    appId: "CPUID.HWMonitor",
    version: "1.54",
  },
  {
    name: "powerMAX",
    appId: "CPUID.powerMAX",
    version: "1",
  },
  {
    name: "Meazure",
    appId: "CThingSoftware.Meazure",
    version: "4.0.0",
  },
  {
    name: "GSAK",
    appId: "CWEcomputerservices.GSAK",
    version: "9.0.0.14",
  },
  {
    name: "CapFrameX",
    appId: "CXWorld.CapFrameX",
    version: "1.7.2",
  },
  {
    name: "Cactus Blockchain",
    appId: "CactusNetwork.CactusBlockchainGUI",
    version: "2.1.4",
  },
  {
    name: "Caddy",
    appId: "CaddyServer.Caddy",
    version: "2.7.6",
  },
  {
    name: "Cairo Desktop Environment",
    appId: "Cairo.Cairo",
    version: "0.4.370",
  },
  {
    name: "Cal",
    appId: "Cal.Cal",
    version: "1.6.1",
  },
  {
    name: "OpenRGB",
    appId: "CalcProgrammer1.OpenRGB",
    version: "0.9",
  },
  {
    name: "Cambridge Reader",
    appId: "CambridgeUniversityPress.Cambridgâ€¦",
    version: "1",
  },
  {
    name: "Plottr",
    appId: "CameronSutter.Plottr",
    version: "2023.7.21",
  },
  {
    name: "Modeler",
    appId: "Camunda.Modeler",
    version: "5.27.0",
  },
  {
    name: "CeVIO AI Voice Package - å¥å…Žâ€¦",
    appId: "CandyCreamAlgorithm.KanatoMell",
    version: "2.0.0",
  },
  {
    name: "Canon PCL6 Driver",
    appId: "Canon.GPCL6_V4_PrinterDriver_V21.â€¦",
    version: "2.72",
  },
  {
    name: "Canon i-SENSYS MF4010/MF4018 Mâ€¦",
    appId: "Canon.i-SENSYS.MF4010-MF4018",
    version: "2.1",
  },
  {
    name: "Juju",
    appId: "Canonical.Juju",
    version: "3.1.2",
  },
  {
    name: "Multipass",
    appId: "Canonical.Multipass",
    version: "1.14.0",
  },
  {
    name: "Ubuntu 18.04 LTS",
    appId: "Canonical.Ubuntu.1804",
    version: "1804.2019.522â€¦",
  },
  {
    name: "Ubuntu 20.04 LTS",
    appId: "Canonical.Ubuntu.2004",
    version: "2004.2021.825â€¦",
  },
  {
    name: "Ubuntu 22.04 LTS",
    appId: "Canonical.Ubuntu.2204",
    version: "2204.1.7.0",
  },
  {
    name: "Canva",
    appId: "Canva.Canva",
    version: "1.96.0",
  },
  {
    name: "Advanced Installer",
    appId: "Caphyon.AdvancedInstaller",
    version: "22.1",
  },
  {
    name: "Hover",
    appId: "Caphyon.Hover",
    version: "1.2.0",
  },
  {
    name: "Vigoon",
    appId: "CapricornConsultingGmbH.Vigoon",
    version: "2.4.2261",
  },
  {
    name: "Caprine",
    appId: "Caprine.Caprine",
    version: "2.60.1",
  },
  {
    name: "Captura",
    appId: "Captura.Captura",
    version: "8.0.0",
  },
  {
    name: "Caret",
    appId: "Caret.Caret",
    version: "3.4.6",
  },
  {
    name: "Caret Beta",
    appId: "Caret.CaretBeta",
    version: "4.0.0-rc23",
  },
  {
    name: "Python Tk Gui Builder",
    appId: "CarlWenrich.PythonTkGuiBuilder",
    version: "1.0.0",
  },
  {
    name: "HexWalk",
    appId: "Carmix.HexWalk",
    version: "1.8.0",
  },
  {
    name: "Alice 3",
    appId: "CarnegieMellonUniversity.Alice3",
    version: "3.8.0.0",
  },
  {
    name: "Jira StopWatch",
    appId: "CarstenGehling.JiraStopWatch",
    version: "2.3.0",
  },
  {
    name: "Fundels",
    appId: "CartamundiDigital.Fundels",
    version: "3.2.6",
  },
  {
    name: "ytt",
    appId: "Carvel.ytt",
    version: "0.49.1",
  },
  {
    name: "Just",
    appId: "Casey.Just",
    version: "1.36.0",
  },
  {
    name: "HFSExplorer",
    appId: "Catacombae.HFSExplorer",
    version: "2021.10.9",
  },
  {
    name: "SocketTools 10 ActiveX x64 Redâ€¦",
    appId: "CatalystDevelopment.SocketTools10â€¦",
    version: "10.0.1274.1931",
  },
  {
    name: "SocketTools 10 ActiveX x86 Redâ€¦",
    appId: "CatalystDevelopment.SocketTools10â€¦",
    version: "10.0.1274.1931",
  },
  {
    name: "SocketTools 10 .NET x64 Redistâ€¦",
    appId: "CatalystDevelopment.SocketTools10â€¦",
    version: "10.0.1274.1931",
  },
  {
    name: "SocketTools 10 .NET x86 Redistâ€¦",
    appId: "CatalystDevelopment.SocketTools10â€¦",
    version: "10.0.1274.1931",
  },
  {
    name: "SocketTools 10 Library x64 Redâ€¦",
    appId: "CatalystDevelopment.SocketTools10â€¦",
    version: "10.0.1274.1931",
  },
  {
    name: "SocketTools 10 Library x86 Redâ€¦",
    appId: "CatalystDevelopment.SocketTools10â€¦",
    version: "10.0.1274.1931",
  },
  {
    name: "Shroud of the Avatar",
    appId: "CatnipGames.ShroudoftheAvatar",
    version: "0.2.0",
  },
  {
    name: "Cato Client",
    appId: "CatoNetworks.CatoClient",
    version: "5.11.9.3102",
  },
  {
    name: "Catsxp",
    appId: "Catsxp.Catsxp",
    version: "129.4.10.2",
  },
  {
    name: "Ccache",
    appId: "Ccache.Ccache",
    version: "4.10.2",
  },
  {
    name: "CeVIO AI",
    appId: "CeVIO.CeVIOAI",
    version: "9.1.16",
  },
  {
    name: "CeVIO Creative Studio 7",
    appId: "CeVIO.CeVIOCS7",
    version: "7.0.23.1",
  },
  {
    name: "CeVIO AI Voice Package - ã•ã¨â€¦",
    appId: "CeVIO.SatoSasara.Sing",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - ã•ã¨â€¦",
    appId: "CeVIO.SatoSasara.Talk",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - ã™ãšâ€¦",
    appId: "CeVIO.SuzukiTsudumi.Sing",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - ã™ãšâ€¦",
    appId: "CeVIO.SuzukiTsudumi.Talk",
    version: "2.0.0",
  },
  {
    name: "Celestia",
    appId: "Celestia.Celestia",
    version: "1.6.4",
  },
  {
    name: "Cemu",
    appId: "Cemu.Cemu",
    version: "2.2",
  },
  {
    name: "Cemu (Experimental)",
    appId: "Cemu.Cemu.Experimental",
    version: "2.2",
  },
  {
    name: "Mouse2joystickForCEMU",
    appId: "CemuUser8.Mouse2joystickForCEMU",
    version: "0.4.1.4",
  },
  {
    name: "HostTE",
    appId: "CenSoft.HostTE",
    version: "1.0.0",
  },
  {
    name: "TinyTERM",
    appId: "CenSoft.TinyTERM",
    version: "4.12.4",
  },
  {
    name: "TinyTERM Enterprise TE Server",
    appId: "CenSoft.TinyTERMEnterpriceTEServer",
    version: "2.1.0",
  },
  {
    name: "TinyTERM Plus for Web",
    appId: "CenSoft.TinyTERMPlusforWeb",
    version: "2.0.0",
  },
  {
    name: "BAS21",
    appId: "Cencit.BAS21",
    version: "1.7.4",
  },
  {
    name: "Cent Browser",
    appId: "CentStudio.CentBrowser",
    version: "5.1.1130.129",
  },
  {
    name: "Certify The Web",
    appId: "CertifyTheWeb.CertifySSLManager",
    version: "6.0.13",
  },
  {
    name: "Trillian",
    appId: "CeruleanStudios.Trillian",
    version: "6.5.0.45",
  },
  {
    name: "Trillian (EXE)",
    appId: "CeruleanStudios.Trillian.EXE",
    version: "6.5.0.45",
  },
  {
    name: "CTools",
    appId: "Chadsoft.CTools",
    version: "1.0.8",
  },
  {
    name: "Papercut SMTP",
    appId: "ChangemakerStudios.Papercut-SMTP",
    version: "1.0.723",
  },
  {
    name: "Channel Talk for Desktop",
    appId: "ChannelCorporation.ChannelTalkforâ€¦",
    version: "9.2.0",
  },
  {
    name: "Chaos Recipe Enhancer",
    appId: "ChaosRecipeEnhancer.ChaosRecipeEnâ€¦",
    version: "3.25.1001",
  },
  {
    name: "TranslucentTB",
    appId: "CharlesMilette.TranslucentTB",
    version: "2024.1.0.0",
  },
  {
    name: "Warsow",
    appId: "ChasseurdeBots.Warsow",
    version: "2.1.2",
  },
  {
    name: "ChatZilla",
    appId: "ChatZilla.ChatZilla",
    version: "0.9.92",
  },
  {
    name: "Chatterino",
    appId: "ChatterinoTeam.Chatterino",
    version: "2.5.1",
  },
  {
    name: "Chatty",
    appId: "Chatty.Chatty",
    version: "0.25",
  },
  {
    name: "Hok",
    appId: "ChawyeHsu.Hok",
    version: "0.1.0-beta.5",
  },
  {
    name: "AppCheck",
    appId: "CheckMAL.AppCheck",
    version: "3.1.38.1",
  },
  {
    name: "ChefDK",
    appId: "ChefSoftware.ChefDK",
    version: "4.13.3.1",
  },
  {
    name: "InSpec",
    appId: "ChefSoftware.Inspec",
    version: "5.18.14.1",
  },
  {
    name: "Chef Workstation",
    appId: "ChefSoftware.Workstation",
    version: "22.7.1006.1",
  },
  {
    name: "ChemAxon Marvin Suite",
    appId: "ChemAxon.Marvin",
    version: "23.4.0",
  },
  {
    name: "Instant JChem",
    appId: "ChemAxon.instantjchem",
    version: "21.15.0",
  },
  {
    name: "JChem .NET API",
    appId: "ChemAxon.jchemdotnetapi",
    version: "21.15.2.9",
  },
  {
    name: "Autorun Organizer",
    appId: "ChemTableSoftware.AutorunOrganizer",
    version: "5.4",
  },
  {
    name: "Files Inspector",
    appId: "ChemTableSoftware.FilesInspector",
    version: "4.05",
  },
  {
    name: "Reg Organizer",
    appId: "ChemTableSoftware.RegOrganizer",
    version: "9.45",
  },
  {
    name: "Registry Life",
    appId: "ChemTableSoftware.RegistryLife",
    version: "5.31",
  },
  {
    name: "Soft Organizer",
    appId: "ChemTableSoftware.SoftOrganizer",
    version: "9.5",
  },
  {
    name: "Brainf**k interpreter",
    appId: "ChenQingYu.BF",
    version: "1.1.0",
  },
  {
    name: "SageThumbs",
    appId: "CherubicSoftware.SageThumbs",
    version: "2.0.0.23",
  },
  {
    name: "Kaku",
    appId: "Chia-Lung.Kaku",
    version: "2.0.2",
  },
  {
    name: "Chia",
    appId: "ChiaNetwork.GUIforChiaBlockchain",
    version: "2.4.3",
  },
  {
    name: "Buzz",
    appId: "ChidiWilliams.Buzz",
    version: "0.9.0",
  },
  {
    name: "CCom",
    appId: "ChilliBits.CCom",
    version: "1.4.0",
  },
  {
    name: "Compose Generator",
    appId: "ChilliBits.ComposeGenerator",
    version: "1.9.0",
  },
  {
    name: "Spice",
    appId: "ChilliBits.Spice",
    version: "0.20.5",
  },
  {
    name: "Banana Cake Pop",
    appId: "ChilliCream.BananaCakePop",
    version: "1.0.0-previewâ€¦",
  },
  {
    name: "Chocolatey",
    appId: "Chocolatey.Chocolatey",
    version: "2.3.0.0",
  },
  {
    name: "Chocolatey GUI",
    appId: "Chocolatey.ChocolateyGUI",
    version: "2.1.1.0",
  },
  {
    name: "SoX",
    appId: "ChrisBagwell.SoX",
    version: "14.4.2",
  },
  {
    name: "Twine",
    appId: "ChrisKlimas.Twine",
    version: "2.8.1",
  },
  {
    name: "Black Chocobo",
    appId: "ChrisRizzitello.BlackChocobo",
    version: "1.15.0",
  },
  {
    name: "Glass Cannon",
    appId: "ChristianAviBulan.GlassCannon",
    version: "0.1.4",
  },
  {
    name: "Auto Start Confirm",
    appId: "ChristianGalla.AutoStartConfirm",
    version: "3.1.8968",
  },
  {
    name: "XCA",
    appId: "ChristianHohnstadt.xca",
    version: "2.7.0",
  },
  {
    name: "Lightscreen",
    appId: "ChristianKaiser.Lightscreen",
    version: "2.5",
  },
  {
    name: "InfraRecorder",
    appId: "ChristianKindahl.InfraRecorder",
    version: "0.53.00.00",
  },
  {
    name: "ChromeDriver for Chrome 111",
    appId: "Chromium.ChromeDriver",
    version: "129.0.6668.58",
  },
  {
    name: "My Family Tree",
    appId: "ChronoplexSoftware.MyFamilyTree",
    version: "14.1.1.0",
  },
  {
    name: "notepanda",
    appId: "ChungZH.notepanda",
    version: "0.1.4",
  },
  {
    name: "HiCOS Client",
    appId: "ChunghwaTelecom.HiCOSClient",
    version: "3.1.0",
  },
  {
    name: "CeVIO AI Voice Package - Ci flâ€¦",
    appId: "Ci.Flower",
    version: "2.0.0",
  },
  {
    name: "Log Tag Analyzer",
    appId: "CiKSolutions.LogTagAnalyzer",
    version: "3.2.5.2",
  },
  {
    name: "Cider",
    appId: "CiderCollective.Cider",
    version: "1.6.2",
  },
  {
    name: "Cider Nightly",
    appId: "CiderCollective.Cider.Nightly",
    version: "1.6.0-beta.98",
  },
  {
    name: "Cilium CLI",
    appId: "Cilium.CiliumCLI",
    version: "0.15.7",
  },
  {
    name: "Hubble",
    appId: "Cilium.Hubble",
    version: "0.12.0",
  },
  {
    name: "pympress",
    appId: "Cimbali.pympress",
    version: "1.8.5",
  },
  {
    name: "circleci-cli",
    appId: "CircleCI.CLI",
    version: "0.1.26837",
  },
  {
    name: "Circuit Diagram",
    appId: "CircuitDiagram.CircuitDiagram",
    version: "3.1",
  },
  {
    name: "Chez Scheme",
    appId: "Cisco.ChezScheme",
    version: "10.0.0",
  },
  {
    name: "Cisco Webex Meetings",
    appId: "Cisco.CiscoWebexMeetings",
    version: "44.10.0.88",
  },
  {
    name: "ClamAV",
    appId: "Cisco.ClamAV",
    version: "1.3.1",
  },
  {
    name: "Cisco Jabber",
    appId: "Cisco.Jabber",
    version: "14.3.1.58554",
  },
  {
    name: "Proximity",
    appId: "Cisco.Proximity",
    version: "4.0.0.0",
  },
  {
    name: "Umbrella Roaming Client",
    appId: "Cisco.UmbrellaRoamingClient",
    version: "3.0.466",
  },
  {
    name: "Webex",
    appId: "Cisco.Webex",
    version: "44.10.0.30906",
  },
  {
    name: "Cisco Webex Productivity Tools",
    appId: "Cisco.webex-outlook-plugin",
    version: "41.6.1.4",
  },
  {
    name: "Citra Emulator",
    appId: "CitraEmu.Citra",
    version: "2",
  },
  {
    name: "Citrix Workspace",
    appId: "Citrix.Workspace",
    version: "24.5.10.29",
  },
  {
    name: "Citrix Workspace",
    appId: "Citrix.Workspace.LTSR",
    version: "24.2.1000.1016",
  },
  {
    name: "ClamWin Free Antivirus",
    appId: "ClamWin.ClamWin",
    version: "0.103.2.1",
  },
  {
    name: "EndNote 21",
    appId: "ClarivateAnalytics.EndNote",
    version: "21.4.0.18113",
  },
  {
    name: "Clash Verge",
    appId: "ClashVergeRev.ClashVergeRev",
    version: "1.7.7",
  },
  {
    name: "ModbusTool",
    appId: "ClassicDIY.ModbusTool",
    version: "2.1.0.0",
  },
  {
    name: "Claws Mail",
    appId: "ClawsMail.ClawsMail",
    version: "4.1.1-1",
  },
  {
    name: "bottom",
    appId: "Clement.bottom",
    version: "0.10.2",
  },
  {
    name: "Clementine",
    appId: "Clementine.Clementine",
    version: "1.3.1",
  },
  {
    name: "Disk Drill",
    appId: "CleverFiles.DiskDrill",
    version: "5.6.913.0",
  },
  {
    name: "Clevershare",
    appId: "Clevertouch.Clevershare",
    version: "5.6.0.3497",
  },
  {
    name: "ClickUp",
    appId: "ClickUp.ClickUp",
    version: "3.4.9",
  },
  {
    name: "ClipSock",
    appId: "ClipSock.ClipSock",
    version: "1.0.1",
  },
  {
    name: "ClipCC",
    appId: "ClipTeam.ClipCC",
    version: "3.1.4",
  },
  {
    name: "ClipCC Beta",
    appId: "ClipTeam.ClipCC.Beta",
    version: "3.1.2-beta2",
  },
  {
    name: "Clipto",
    appId: "CliptoTeam.Clipto",
    version: "7.2.17",
  },
  {
    name: "Clockify",
    appId: "Clockify.Clockify",
    version: "1.7.95",
  },
  {
    name: "Universal Adb Driver",
    appId: "ClockworkMod.UniversalADBDriver",
    version: "1.0.4",
  },
  {
    name: "Clone Hero",
    appId: "CloneHeroTeam.CloneHero",
    version: "1.0.0.4080",
  },
  {
    name: "CloneSpy",
    appId: "CloneSpy.CloneSpy",
    version: "3.43",
  },
  {
    name: "CloudApp for Windows",
    appId: "CloudApp.CloudApp",
    version: "6.4.3",
  },
  {
    name: "Windows Service Wrapper",
    appId: "CloudBees.WindowsServiceWrapper",
    version: "2.12.0.0",
  },
  {
    name: "CloudCompare",
    appId: "CloudCompare.CloudCompare",
    version: "2.13.0",
  },
  {
    name: "Cloud Foundry CLI v7",
    appId: "CloudFoundry.CLI.v7",
    version: "7.7.11",
  },
  {
    name: "Cloud Foundry CLI v8",
    appId: "CloudFoundry.CLI.v8",
    version: "8.7.11",
  },
  {
    name: "RSI Launcher",
    appId: "CloudImperiumGames.RSILauncher",
    version: "2.0.5",
  },
  {
    name: "Puffin Secure Browser",
    appId: "CloudMosaInc.PuffinSecureBrowser",
    version: "10.1.1.609",
  },
  {
    name: "Cloudflare WARP",
    appId: "Cloudflare.Warp",
    version: "24.8.458.0",
  },
  {
    name: "cloudflared",
    appId: "Cloudflare.cloudflared",
    version: "2024.9.1",
  },
  {
    name: "Cloudreve",
    appId: "Cloudreve.Cloudreve",
    version: "3.8.3",
  },
  {
    name: "hakchi2",
    appId: "ClusterM.hakchi2",
    version: "2.32",
  },
  {
    name: "Sourcetrail 64-bit",
    appId: "CoatiSoftware.Sourcetrail",
    version: "2021.4.19",
  },
  {
    name: "Cá»‘c Cá»‘c",
    appId: "CocCoc.CocCoc",
    version: "120.0.6099.234",
  },
  {
    name: "Cockatrice",
    appId: "Cockatrice.Cockatrice",
    version: "2.9.0",
  },
  {
    name: "LICEcap",
    appId: "Cockos.LICEcap",
    version: "1.32",
  },
  {
    name: "REAPER",
    appId: "Cockos.REAPER",
    version: "7.22",
  },
  {
    name: "Cocos Dashboard",
    appId: "Cocos.CocosDashboard",
    version: "2.1.4.2614",
  },
  {
    name: "Violin",
    appId: "CodeF0x.violin",
    version: "3.1.1",
  },
  {
    name: "Launchy",
    appId: "CodeJelly.Launchy",
    version: "2.5.0",
  },
  {
    name: "CodeLite",
    appId: "CodeLite.CodeLite",
    version: "17.0.0",
  },
  {
    name: "Kolossus Launcher",
    appId: "CodeLyokoGames.KolossusLauncher",
    version: "1.7.0-1",
  },
  {
    name: "Code.org Maker App",
    appId: "CodeOrg.MakerApp",
    version: "1.1.9.0",
  },
  {
    name: "Direct Folders",
    appId: "CodeSector.DirectFolders",
    version: "4.2",
  },
  {
    name: "TeraCopy",
    appId: "CodeSector.TeraCopy",
    version: "3.17",
  },
  {
    name: "Code::Blocks",
    appId: "Codeblocks.Codeblocks",
    version: "20.03",
  },
  {
    name: "BitMeter OS",
    appId: "Codebox.BitMeterOS",
    version: "0.7.6",
  },
  {
    name: "K-Lite Codec Pack Basic",
    appId: "CodecGuide.K-LiteCodecPack.Basic",
    version: "18.5.5",
  },
  {
    name: "K-Lite Codec Pack Full",
    appId: "CodecGuide.K-LiteCodecPack.Full",
    version: "18.5.5",
  },
  {
    name: "K-Lite Mega Codec Pack",
    appId: "CodecGuide.K-LiteCodecPack.Mega",
    version: "18.5.5",
  },
  {
    name: "K-Lite Codec Pack Standard",
    appId: "CodecGuide.K-LiteCodecPack.Standaâ€¦",
    version: "18.5.5",
  },
  {
    name: "AutoActions",
    appId: "Codectory.AutoActions",
    version: "1.9.19",
  },
  {
    name: "ScienceFair",
    appId: "CodeforScience.ScienceFair",
    version: "1.0.6",
  },
  {
    name: "ç¼–ç¨‹çŒ«å®šåˆ¶è¯¾",
    appId: "Codemao.Lessons",
    version: "3.5.0",
  },
  {
    name: "æºç æ™ºé€ ç¼–è¾‘å™¨",
    appId: "Codemao.SmartEditor",
    version: "1.1.0",
  },
  {
    name: "æµ·é¾Ÿç¼–è¾‘å™¨",
    appId: "Codemao.TurtleEditor",
    version: "1.7.6",
  },
  {
    name: "æµ·é¾Ÿç¼–è¾‘å™¨ 2.0",
    appId: "Codemao.TurtleEditor.2",
    version: "2.4.0",
  },
  {
    name: "æºç ç¼–è¾‘å™¨",
    appId: "Codemao.kitten.3",
    version: "3.8.2",
  },
  {
    name: "æºç ç¼–è¾‘å™¨4.0",
    appId: "Codemao.kitten.4",
    version: "4.11.13",
  },
  {
    name: "Coder",
    appId: "Coder.Coder",
    version: "2.16.0",
  },
  {
    name: "Quick CPU x64",
    appId: "CoderBag.QuickCPUx64",
    version: "4.10.0.0",
  },
  {
    name: "Borderless Gaming",
    appId: "Codeusa.BorderlessGaming",
    version: "9.5.6",
  },
  {
    name: "SteamCleaner",
    appId: "Codeusa.SteamCleaner",
    version: "2.4",
  },
  {
    name: "PlasticSCM Cloud Edition",
    appId: "Codice.PlasticSCM.CloudEdition",
    version: "11.0.16.7134",
  },
  {
    name: "DISMTools Preview",
    appId: "CodingWondersSoftware.DISMTools.Pâ€¦",
    version: "0.6.0.2493",
  },
  {
    name: "DISMTools",
    appId: "CodingWondersSoftware.DISMTools.Sâ€¦",
    version: "0.5.1.2493",
  },
  {
    name: "Coinomi Wallet",
    appId: "Coinomi.CoinomiWallet",
    version: "1.3.0",
  },
  {
    name: "Cold Turkey Blocker",
    appId: "ColdTurkeySoftware.ColdTurkeyBlocâ€¦",
    version: "4.5",
  },
  {
    name: "StellarPlayer",
    appId: "Coldlake.StellarPlayer",
    version: "2.24.1822.23",
  },
  {
    name: "Collapse",
    appId: "Collapse.Collapse",
    version: "1.73.8",
  },
  {
    name: "Collapse",
    appId: "CollapseLauncher.Collapse",
    version: "1.80.19",
  },
  {
    name: "Bluebook",
    appId: "CollegeBoard.Bluebook",
    version: "0.9.328",
  },
  {
    name: "XYplorer",
    appId: "CologneCodeCompany.XYplorer",
    version: "26.40.0400",
  },
  {
    name: "XYplorer Portable",
    appId: "CologneCodeCompany.XYplorerPortabâ€¦",
    version: "26.40.0400",
  },
  {
    name: "Scribe Desktop Capture",
    appId: "ColonyLabs.ScribeDesktopCapture",
    version: "3.3.5.0",
  },
  {
    name: "ColorMC",
    appId: "Coloryr.ColorMC",
    version: "1.29",
  },
  {
    name: "BitComet",
    appId: "CometNetwork.BitComet",
    version: "2.08",
  },
  {
    name: "Free Alarm Clock 5.2.0.0",
    appId: "ComfortSoftwareGroup.FreeAlarmCloâ€¦",
    version: "5.2.0.0",
  },
  {
    name: "å¥½è§†é€šäº‘ä¼šè®®",
    appId: "Comix.FastMeeting",
    version: "3.44.2.4",
  },
  {
    name: "AVPlugins",
    appId: "Comix.FastMeetingAVPlugins",
    version: "4.0.1.2",
  },
  {
    name: "å¥½è§†é€šäº‘ä¼šè®®å¯åŠ¨åŠ©æ‰‹",
    appId: "Comix.FastMeetingLauncher",
    version: "1.0.1.4",
  },
  {
    name: "Unofficial Google Docs",
    appId: "CompLabs.GoogleDocs",
    version: "2022.3.10",
  },
  {
    name: "GFXBench",
    appId: "CompuBench.GFXBench",
    version: "5.0.0",
  },
  {
    name: "Pawn embedded scripting languaâ€¦",
    appId: "Compuphase.Pawn",
    version: "4.1.7152",
  },
  {
    name: "Termite",
    appId: "Compuphase.Termite",
    version: "3.4",
  },
  {
    name: "Concept2 Utility",
    appId: "Concept2.Utility",
    version: "7.10.19",
  },
  {
    name: "RecentX",
    appId: "ConceptworldCorporation.RecentX",
    version: "5.0.26.0",
  },
  {
    name: "Concourse Fly",
    appId: "Concourse.Fly",
    version: "7.11.2",
  },
  {
    name: "Mambaforge",
    appId: "CondaForge.Mambaforge",
    version: "24.7.1-2",
  },
  {
    name: "Mambaforge-pypy3",
    appId: "CondaForge.Mambaforge.PyPy3",
    version: "24.7.1-2",
  },
  {
    name: "Miniforge3",
    appId: "CondaForge.Miniforge3",
    version: "24.7.1-2",
  },
  {
    name: "Miniforge-pypy3",
    appId: "CondaForge.Miniforge3.PyPy3",
    version: "24.7.1-2",
  },
  {
    name: "PowerArchiver 2022",
    appId: "ConeXware.PowerArchiver.2022",
    version: "21.00.18",
  },
  {
    name: "Confluent CLI",
    appId: "ConfluentInc.Confluent-CLI",
    version: "4.1.0",
  },
  {
    name: "C-Dogs SDL",
    appId: "CongusBongus.CDogsSDL",
    version: "1.5.0",
  },
  {
    name: "ECLiPSe Constraint Logic Progrâ€¦ Coninfer.ECLiPSeCLP.7.0",
    appId: "7.0",
    version: "#63",
  },
  {
    name: "ECLiPSe Constraint Logic Progrâ€¦ Coninfer.ECLiPSeCLP.7.1",
    appId: "7.1",
    version: "#13",
  },
  {
    name: "ConnectWise Manage Client 64-bâ€¦",
    appId: "ConnectWise.ConnectWiseManageClieâ€¦",
    version: "22.2.1",
  },
  {
    name: "pje-office",
    appId: "ConselhoNacionaldeJustica-CNJ.pjeâ€¦",
    version: "1.0.28",
  },
  {
    name: "Contasimple Desktop",
    appId: "Contasimple.ContasimpleDesktop",
    version: "3.1.0",
  },
  {
    name: "RMC Client",
    appId: "ConvectivaTecnologia.RMCConvectiva",
    version: "1.7",
  },
  {
    name: "FutureRestore GUI",
    appId: "CoocooFroggy.FutureRestore-GUI",
    version: "1.98.3",
  },
  {
    name: "FastGithub",
    appId: "CoolPlayLin.FastGithub",
    version: "2.1.4",
  },
  {
    name: "LANDrop",
    appId: "CoolPlayLin.Installer.LANDrop",
    version: "0.4.0",
  },
  {
    name: "CopyTranslator",
    appId: "CopyTranslator.CopyTranslator",
    version: "11.0.2",
  },
  {
    name: "Coq",
    appId: "Coq.CoqPlatform",
    version: "8.14.1",
  },
  {
    name: "Coq Beta",
    appId: "Coq.CoqPlatform.Beta",
    version: "8.14.0",
  },
  {
    name: "Core FTP Pro",
    appId: "CoreFTP.CoreFTP",
    version: "2.2.1960",
  },
  {
    name: "Core FTP Server",
    appId: "CoreFTP.FTPServer",
    version: "2.0.749",
  },
  {
    name: "MindManager",
    appId: "Corel.MindManager",
    version: "23.1.243",
  },
  {
    name: "WinZip",
    appId: "Corel.WinZip",
    version: "28.0.15640",
  },
  {
    name: "WinZip Self-Extractor",
    appId: "Corel.WinZip.SelfExtractor",
    version: "4.0.12218.0",
  },
  {
    name: "NVM for Windows",
    appId: "CoreyButler.NVMforWindows",
    version: "1.1.12",
  },
  {
    name: "Solar2D",
    appId: "Corona.Solar2D",
    version: "24.0.3706",
  },
  {
    name: "Corporate Clash Launcher",
    appId: "CorporateClashCrew.ToontownCorporâ€¦",
    version: "1.3.0",
  },
  {
    name: "CORSAIR iCUE 3 Software",
    appId: "Corsair.iCUE.3",
    version: "3.38.88",
  },
  {
    name: "CORSAIR iCUE 4 Software",
    appId: "Corsair.iCUE.4",
    version: "4.33.138",
  },
  {
    name: "Corsair iCUE5 Software",
    appId: "Corsair.iCUE.5",
    version: "5.18.106",
  },
  {
    name: "CorsixTH",
    appId: "CorsixTH.CorsixTH",
    version: "0.67",
  },
  {
    name: "Lepton",
    appId: "CosmoX.Lepton",
    version: "1.10.0",
  },
  {
    name: "Couchbase Server",
    appId: "Couchbase.ServerCommunity",
    version: "7.0.6703",
  },
  {
    name: "Couchbase Server Enterprise Edâ€¦",
    appId: "Couchbase.ServerEnterprise",
    version: "7.0.7031",
  },
  {
    name: "Logbert",
    appId: "Couchcoding.Logbert",
    version: "1.6.3.2",
  },
  {
    name: "CoupangPOS",
    appId: "Coupang.CoupangPOS",
    version: "1.10.16",
  },
  {
    name: "Cozy Drive",
    appId: "CozyCloud.CozyDrive",
    version: "3.38.0",
  },
  {
    name: "Cozy Drive (Beta)",
    appId: "CozyCloud.CozyDrive.Beta",
    version: "3.40.0-beta.1",
  },
  {
    name: "Cppcheck",
    appId: "Cppcheck.Cppcheck",
    version: "2.15.0",
  },
  {
    name: "Keyhac",
    appId: "Craftware.Keyhac",
    version: "1.82",
  },
  {
    name: "CrashPlan SMB",
    appId: "CrashPlan.CrashPlanSMB",
    version: "11.4.1.21",
  },
  {
    name: "Crazybump",
    appId: "Crazybump.Crazybump",
    version: "1.22",
  },
  {
    name: "Creative App",
    appId: "CreativeTechnology.CreativeApp",
    version: "1.16.16.00",
  },
  {
    name: "Sound Blaster Command",
    appId: "CreativeTechnology.SoundBlasterCoâ€¦",
    version: "3.5.09.00",
  },
  {
    name: "OBD Auto Doctor",
    appId: "Creosys.OBDAutoDoctor",
    version: "4.0.0",
  },
  {
    name: "lazyjj",
    appId: "Cretezy.lazyjj",
    version: "0.3.1",
  },
  {
    name: "MiniLyrics",
    appId: "Crintsoft.MiniLyrics",
    version: "7.7.49",
  },
  {
    name: "Crossplane CLI",
    appId: "Crossplane.CrossplaneCli",
    version: "1.15.1",
  },
  {
    name: "Crow Translate",
    appId: "CrowTranslate.CrowTranslate",
    version: "2.11.1",
  },
  {
    name: "CrowdSec",
    appId: "CrowdSecurity.CrowdSec",
    version: "1.6.2",
  },
  {
    name: "CrowdSec Windows Firewall Bounâ€¦",
    appId: "CrowdSecurity.CrowdSecWindowsFireâ€¦",
    version: "0.0.5",
  },
  {
    name: "Perseus",
    appId: "CrowdStrike.Perseus",
    version: "0.23.0",
  },
  {
    name: "Crucial Storage Executive",
    appId: "Crucial.StorageExecutive",
    version: "10.01.012024.â€¦",
  },
  {
    name: "MasterofGarden",
    appId: "Crunchyroll.MasterofGarden",
    version: "1.0.0",
  },
  {
    name: "Chromium-Gost",
    appId: "CryptoPro.Chromium-Gost",
    version: "120.0.6099.216",
  },
  {
    name: "OnlyKey App",
    appId: "CryptoTrust.OnlyKeyApp",
    version: "5.3.6",
  },
  {
    name: "Cryptomator",
    appId: "Cryptomator.Cryptomator",
    version: "1.14.0",
  },
  {
    name: "NewsLeecher",
    appId: "CrystalArtSoftware.NewsLeecher",
    version: "7.0.0.0",
  },
  {
    name: "CrystalDiskInfo",
    appId: "CrystalDewWorld.CrystalDiskInfo",
    version: "9.4.4",
  },
  {
    name: "CrystalDiskInfo Aoi Edition",
    appId: "CrystalDewWorld.CrystalDiskInfo.Aâ€¦",
    version: "9.4.4",
  },
  {
    name: "CrystalDiskInfo Kurei Kei Editâ€¦",
    appId: "CrystalDewWorld.CrystalDiskInfo.Kâ€¦",
    version: "9.4.4",
  },
  {
    name: "CrystalDiskInfo Shizuku Edition",
    appId: "CrystalDewWorld.CrystalDiskInfo.Sâ€¦",
    version: "9.4.4",
  },
  {
    name: "CrystalDiskMark",
    appId: "CrystalDewWorld.CrystalDiskMark",
    version: "8.0.5",
  },
  {
    name: "CrystalDiskMark Shizuku Edition",
    appId: "CrystalDewWorld.CrystalDiskMark.Sâ€¦",
    version: "8.0.4",
  },
  {
    name: "AnyToISO",
    appId: "CrystalIDEASoftware.AnyToISO",
    version: "3.9.6",
  },
  {
    name: "Uninstall Tool",
    appId: "CrystalIDEASoftware.UninstallTool",
    version: "3.7.1",
  },
  {
    name: "Crystal",
    appId: "CrystalLang.Crystal",
    version: "1.9.2",
  },
  {
    name: "InternetOff",
    appId: "CrystalRich.InternetOff",
    version: "3.0.1",
  },
  {
    name: "LockHunter",
    appId: "CrystalRich.LockHunter",
    version: "3.4.3.146",
  },
  {
    name: "USB Safely Remove",
    appId: "CrystalRich.USBSafelyRemove",
    version: "6.4.2.1297",
  },
  {
    name: "Zentimo PRO",
    appId: "CrystalRich.Zentimo",
    version: "2.4.2",
  },
  {
    name: "æ–¹å—æ¸¸æˆå¹³å°",
    appId: "Cube.CubePlatform",
    version: "3.9.0.1",
  },
  {
    name: "AMP Instance Manager",
    appId: "CubeCodersLimited.AMPInstanceManaâ€¦",
    version: "2.5.1",
  },
  {
    name: "CubeICE",
    appId: "CubeSoft.CubeICE",
    version: "2.0.0",
  },
  {
    name: "CubePDF",
    appId: "CubeSoft.CubePDF",
    version: "1.6.1",
  },
  {
    name: "CubePDF Utility",
    appId: "CubeSoft.CubePDFUtility",
    version: "1.6.7",
  },
  {
    name: "CubicSDR",
    appId: "CubicSDR.CubicSDR",
    version: "0.2.5",
  },
  {
    name: "Cue",
    appId: "CueLang.Cue",
    version: "0.8.0",
  },
  {
    name: "Curiosity",
    appId: "Curiosity.Curiosity",
    version: "23.10.42881",
  },
  {
    name: "Cute Chess",
    appId: "CuteChess.CuteChess",
    version: "1.3.1",
  },
  {
    name: "TheDesk",
    appId: "Cutls.TheDesk",
    version: "24.1.2",
  },
  {
    name: "ACNESCreator",
    appId: "Cuyler.ACNESCreator",
    version: "1.5",
  },
  {
    name: "Cwtch",
    appId: "Cwtch.Cwtch",
    version: "1.14.7",
  },
  {
    name: "NAPS2",
    appId: "Cyanfish.NAPS2",
    version: "7.5.1",
  },
  {
    name: "NAPS2 Prerelease",
    appId: "Cyanfish.NAPS2.Prerelease",
    version: "7.0b9",
  },
  {
    name: "DriversCloud.com",
    appId: "Cybelsoft.DriversCloud",
    version: "12.0.24",
  },
  {
    name: "ADB AppControl",
    appId: "CyberCat.ADBAppControl",
    version: "1.8.5",
  },
  {
    name: "CyberPower PowerPanel Personal",
    appId: "CyberPowerSystemsInc.PowerPanelPeâ€¦",
    version: "2.6.0",
  },
  {
    name: "Cygwin",
    appId: "Cygwin.Cygwin",
    version: "3.5.3",
  },
  {
    name: "Cyotek Color Palette Editor",
    appId: "Cyotek.ColorPaletteEditor",
    version: "1.7.0.411",
  },
  {
    name: "Cyotek CopyTools",
    appId: "Cyotek.CopyTools",
    version: "1.4.5.215",
  },
  {
    name: "Cyotek Sitemap Creator",
    appId: "Cyotek.SitemapCreator",
    version: "1.2.0.456",
  },
  {
    name: "Cyotek WebCopy",
    appId: "Cyotek.WebCopy",
    version: "1.9.0.822",
  },
  {
    name: "TFTP Server",
    appId: "D-Link.TFTPServer",
    version: "1",
  },
  {
    name: "WhatsappTray",
    appId: "D4koon.WhatsappTray",
    version: "1.9.0.0",
  },
  {
    name: "DB Browser for SQLite",
    appId: "DBBrowserForSQLite.DBBrowserForSQâ€¦",
    version: "3.13.0",
  },
  {
    name: "DbVisualizer",
    appId: "DBVis.DBVisualizer",
    version: "24.2.0",
  },
  {
    name: "Dungeon Crawl Stone Soup",
    appId: "DCSS.DungeonCrawlStoneSoup",
    version: "0.31.0",
  },
  {
    name: "Apache JMeter",
    appId: "DEVCOM.JMeter",
    version: "5.6.3",
  },
  {
    name: "JetBrainsMono Nerd Font",
    appId: "DEVCOM.JetBrainsMonoNerdFont",
    version: "3.2.1",
  },
  {
    name: "Lua",
    appId: "DEVCOM.Lua",
    version: "5.4.6",
  },
  {
    name: "LuaJIT",
    appId: "DEVCOM.LuaJIT",
    version: "2.1.19907",
  },
  {
    name: "Mind+",
    appId: "DFRobot.Mind+",
    version: "1.7.2-2022061â€¦",
  },
  {
    name: "HDSDR",
    appId: "DG0JBJ.HDSDR",
    version: "2.81-b9",
  },
  {
    name: "DxEnterprise",
    appId: "DH2iCompany.DxEnterprise",
    version: "23.0.297.0",
  },
  {
    name: "PW Auto Login",
    appId: "DIG.PWAutoLogin",
    version: "0.2.1",
  },
  {
    name: "Cardinal",
    appId: "DISTRHO.Cardinal",
    version: "24.09",
  },
  {
    name: "DJI Assistant 2",
    appId: "DJI.DJIAssistant2",
    version: "V1.2.5",
  },
  {
    name: "DJI Assistant 2 (Consumer Dronâ€¦",
    appId: "DJI.DJIAssistant2.ConsumerDronesSâ€¦",
    version: "V2.1.5.8",
  },
  {
    name: "DJI Assistant 2 (Enterprise Seâ€¦",
    appId: "DJI.DJIAssistant2.EnterpriseSeries",
    version: "V2.1.0.2",
  },
  {
    name: "DJI Assistant 2 (DJI FPV serieâ€¦",
    appId: "DJI.DJIAssistant2.FPV",
    version: "V2.1.1.11",
  },
  {
    name: "DJI Assistant 2 For Autopilot",
    appId: "DJI.DJIAssistant2.ForAutopilot",
    version: "V2.0.3.7",
  },
  {
    name: "DJI Assistant 2 For Battery Stâ€¦",
    appId: "DJI.DJIAssistant2.ForBatteryStatiâ€¦",
    version: "V2.0.1.9",
  },
  {
    name: "DJI Assistant 2 For MG",
    appId: "DJI.DJIAssistant2.ForMG",
    version: "V2.1.0.1",
  },
  {
    name: "DJIAssistant2ForMatrice",
    appId: "DJI.DJIAssistant2.ForMatrice",
    version: "2.0.13",
  },
  {
    name: "DJI Assistant 2 For Mavic",
    appId: "DJI.DJIAssistant2.ForMavic",
    version: "V2.0.14.1",
  },
  {
    name: "DJI Assistant 2 For Phantom",
    appId: "DJI.DJIAssistant2.ForPhantom",
    version: "V2.0.10.4",
  },
  {
    name: "DMMGamePlayer",
    appId: "DMM.GamePlayer",
    version: "5.1.20",
  },
  {
    name: "dnscrypt-proxy",
    appId: "DNSCrypt.dnscrypt-proxy",
    version: "2.1.5",
  },
  {
    name: "DOSBox",
    appId: "DOSBox.DOSBox",
    version: "0.74-3",
  },
  {
    name: "DOSBox Staging",
    appId: "DOSBoxStaging.DOSBoxStaging",
    version: "0.81.2",
  },
  {
    name: "Risen3D",
    appId: "DRDTeam.Risen3D",
    version: "2.2.35",
  },
  {
    name: "DVD Flick",
    appId: "DVDFlick.DVDFlick",
    version: "1.3.0.7",
  },
  {
    name: "QOps",
    appId: "DVSTSEOOD.QOps",
    version: "2.0.1.0",
  },
  {
    name: "DW Spectrum Client IPVMS",
    appId: "DW.Spectrum.Client",
    version: "5.1.5.39242",
  },
  {
    name: "N Air å®Ÿé¨“ç‰ˆ",
    appId: "DWANGO.NAIR.experimental",
    version: "1.1.20241001-â€¦",
  },
  {
    name: "OpenToonz",
    appId: "DWANGO.OpenToonz.Nightly",
    version: "2024.05.04",
  },
  {
    name: "SeirenVoice çµæœˆã‚†ã‹ã‚Š",
    appId: "DWANGO.SeirenVoice.yukari",
    version: "trial1.4.0-1.â€¦",
  },
  {
    name: "TrueTTY V3.33",
    appId: "DXsoft.TrueTTY",
    version: "3.33.0.569",
  },
  {
    name: "Fact downloader",
    appId: "DaCosySheeep.FactDownloader",
    version: "1.5.1",
  },
  {
    name: "DaMtech Password Generator",
    appId: "DaMtech.PasswordGenerator",
    version: "1.3.0",
  },
  {
    name: "Dagger CLI",
    appId: "Dagger.Cli",
    version: "0.13.3",
  },
  {
    name: "Win10Pcap",
    appId: "DaiyuuNobori.Win10Pcap",
    version: "10.2.5002",
  },
  {
    name: "ClassicContext",
    appId: "DanTheMan827.ClassicContext",
    version: "1.0.1",
  },
  {
    name: "MathBotCLI",
    appId: "DanielMcGuireCorporation.MathBotCâ€¦",
    version: "3.4.0",
  },
  {
    name: "Simple Browser",
    appId: "DanielMcGuireCorporation.SimpleBrâ€¦",
    version: "2.5.1",
  },
  {
    name: "Soundscape",
    appId: "Danilov.Soundscape",
    version: "1.4.6",
  },
  {
    name: "Daou Messenger",
    appId: "DaouTech.DaouMessenger",
    version: "3.5.10",
  },
  {
    name: "Dapr CLI",
    appId: "Dapr.CLI",
    version: "1.14.1",
  },
  {
    name: "CLI",
    appId: "Dapr.CLI.Preview",
    version: "1.14.0-rc.8",
  },
  {
    name: "Horizon",
    appId: "DaringDevelopmentInc.Horizon",
    version: "2.9.0",
  },
  {
    name: "srt-align",
    appId: "DarkfullDante.srtAlign",
    version: "0.6.1",
  },
  {
    name: "wol",
    appId: "DarkfullDante.wol",
    version: "1.0.2",
  },
  {
    name: "Das-Keyboard-Q",
    appId: "DasKeyboard.DasKeyboard",
    version: "3.3.3",
  },
  {
    name: "Dashlane",
    appId: "Dashlane.Dashlane",
    version: "6.2148.0.52031",
  },
  {
    name: "Hammer PDF",
    appId: "DataHammer.HammerPDF",
    version: "1.2.2",
  },
  {
    name: "ArcCommander",
    appId: "DataPLANT.ArcCommander",
    version: "1.0.0.0",
  },
  {
    name: "Save Wizard for PS4 MAX",
    appId: "DataPower.SaveWizardforPS4MAX",
    version: "1.1.0.0",
  },
  {
    name: "CAT CLI",
    appId: "DataTools.CATCLI",
    version: "1.9.1.1",
  },
  {
    name: "DatabricksCLI",
    appId: "Databricks.DatabricksCLI",
    version: "0.229.0",
  },
  {
    name: "Datadog Agent",
    appId: "Datadog.Agent",
    version: "7.57.2.1",
  },
  {
    name: "Datadog .NET Tracer",
    appId: "Datadog.dd-trace-dotnet",
    version: "2.58.0",
  },
  {
    name: "Dataflare",
    appId: "Dataflare.Dataflare",
    version: "1.7.3",
  },
  {
    name: "Seq",
    appId: "Datalust.Seq",
    version: "7.0.7449.0",
  },
  {
    name: "spacedesk Windows DRIVER",
    appId: "Datronicsoft.SpacedeskDriver.Servâ€¦",
    version: "2.1.23.0",
  },
  {
    name: "Datto Cloud Continuity Agent",
    appId: "Datto.CloudContinuityAgent",
    version: "3.0.19.12",
  },
  {
    name: "Datto Windows Agent",
    appId: "Datto.WindowsAgent",
    version: "3.0.18.11",
  },
  {
    name: "Datto Workplace",
    appId: "Datto.Workplace",
    version: "10.5.1.22",
  },
  {
    name: "Datto Workplace Desktop",
    appId: "Datto.WorkplaceClassic",
    version: "8.42.35",
  },
  {
    name: "Datto Workplace Server",
    appId: "Datto.WorkplaceServer",
    version: "8.42.34",
  },
  {
    name: "PotPlayer",
    appId: "Daum.PotPlayer",
    version: "24.08.27.0",
  },
  {
    name: "Dave Gnukem",
    appId: "DavidJoffe.DaveGnukem",
    version: "1.0.3.2",
  },
  {
    name: "Finite Element Method Magnetics",
    appId: "DavidMeeker.FEMM",
    version: "4.2",
  },
  {
    name: "IPFilter",
    appId: "DavidMoore.IPFilterUpdater",
    version: "3.0.5-beta",
  },
  {
    name: "Mine-imator",
    appId: "DavidNorgren.Mine-imator",
    version: "1.2.8",
  },
  {
    name: "Linkage",
    appId: "DavidRector.Linkage",
    version: "3.16.14",
  },
  {
    name: "Remindr",
    appId: "DavidRios.Remindr",
    version: "2.1.7",
  },
  {
    name: "FotoSketcher",
    appId: "DavidTHOIRON.FotoSketcher",
    version: "3.8",
  },
  {
    name: "Liveries Mega Pack Manager",
    appId: "DavidWheatley.fs2020-livery-managâ€¦",
    version: "0.5.3",
  },
  {
    name: "DAX Studio",
    appId: "DaxStudio.DaxStudio",
    version: "3.2.1",
  },
  {
    name: "Daytona",
    appId: "Daytonaio.Daytona",
    version: "0.3.1",
  },
  {
    name: "DeSmuME",
    appId: "DeSmuMETeam.DeSmuME",
    version: "0.9.13",
  },
  {
    name: "DeaDBeeF",
    appId: "DeaDBeeF.DeaDBeeF",
    version: "1.9.6",
  },
  {
    name: "Barrier",
    appId: "DebaucheeOpenSourceGroup.Barrier",
    version: "2.4.0",
  },
  {
    name: "Debian",
    appId: "Debian.Debian",
    version: "1.12.2.0",
  },
  {
    name: "Decrediton",
    appId: "Decred.Decrediton",
    version: "1.8.1",
  },
  {
    name: "DeepL",
    appId: "DeepL.DeepL",
    version: "24.9.1.13742",
  },
  {
    name: "Deezer",
    appId: "Deezer.Deezer",
    version: "6.0.90",
  },
  {
    name: "Defang",
    appId: "DefangLabs.Defang",
    version: "0.5.44",
  },
  {
    name: "Thycotic Agent",
    appId: "DelineaInc.ThycoticAgent",
    version: "11.4.3235",
  },
  {
    name: "Thycotic Application Control Aâ€¦",
    appId: "DelineaInc.ThycoticApplicationConâ€¦",
    version: "12.0.1016",
  },
  {
    name: "Thycotic Local Security Agent",
    appId: "DelineaInc.ThycoticLocalSecurityAâ€¦",
    version: "12.0.1016",
  },
  {
    name: "Dell Command | Configure",
    appId: "Dell.CommandConfigure",
    version: "4.12.0",
  },
  {
    name: "Dell Command | Update",
    appId: "Dell.CommandUpdate",
    version: "5.4.0",
  },
  {
    name: "Dell Command | Update for Windâ€¦",
    appId: "Dell.CommandUpdate.Universal",
    version: "5.4.0",
  },
  {
    name: "Dell Display Manager",
    appId: "Dell.DisplayManager",
    version: "2.3.1.16",
  },
  {
    name: "Deluge BitTorrent Client",
    appId: "DelugeTeam.Deluge",
    version: "2.1.1",
  },
  {
    name: "Deluge BitTorrent Client Beta",
    appId: "DelugeTeam.DelugeBeta",
    version: "2.0b1",
  },
  {
    name: "Denby Calculator",
    appId: "Denby.Calculator",
    version: "4.5",
  },
  {
    name: "Denemo",
    appId: "Denemo.Denemo",
    version: "2.44",
  },
  {
    name: "deno",
    appId: "DenoLand.Deno",
    version: "1.46.3",
  },
  {
    name: "k9s",
    appId: "Derailed.k9s",
    version: "0.32.5",
  },
  {
    name: "Sit Healthy",
    appId: "DeskRelief.SitHealthy",
    version: "1.14.3",
  },
  {
    name: "FTP Manager Lite",
    appId: "DeskShare.FTPManagerLite",
    version: "2.5.4.0",
  },
  {
    name: "IP Camera Viewer",
    appId: "DeskShare.IPCameraViewer",
    version: "4.1.2.0",
  },
  {
    name: "EarthView",
    appId: "DeskSoft.EarthView",
    version: "7.7.6",
  },
  {
    name: "Deta Space CLI",
    appId: "Deta.Space.CLI",
    version: "0.4.2",
  },
  {
    name: "Determined AI CLI",
    appId: "DeterminedAI.CLI",
    version: "0.35.0",
  },
  {
    name: "DevHub",
    appId: "DevHub.DevHub",
    version: "0.102.0",
  },
  {
    name: "DevToys",
    appId: "DevToys-app.DevToys",
    version: "2.0-preview.5",
  },
  {
    name: "Playit.gg",
    appId: "DevelopedMethodsLLC.playit",
    version: "0.15.25",
  },
  {
    name: "Flowgorithm",
    appId: "DevinCook.Flowgorithm",
    version: "4.2",
  },
  {
    name: "Launcher",
    appId: "Devolutions.Launcher",
    version: "2024.3.12.0",
  },
  {
    name: "Remote Desktop Manager",
    appId: "Devolutions.RemoteDesktopManager",
    version: "2024.3.12.0",
  },
  {
    name: "Remote Desktop Manager Agent",
    appId: "Devolutions.RemoteDesktopManagerAâ€¦",
    version: "2024.3.12.0",
  },
  {
    name: "Devolutions Workspace",
    appId: "Devolutions.Workspace",
    version: "2024.3.1.0",
  },
  {
    name: "Dialpad",
    appId: "Dialpad.Dialpad",
    version: "2409.4.0",
  },
  {
    name: "the_center_desktop",
    appId: "Dicarne.TheCenter",
    version: "1.0.5",
  },
  {
    name: "Dichromate",
    appId: "Dichromate.Browser",
    version: "111.0.5563.65",
  },
  {
    name: "iMazing",
    appId: "DigiDNA.iMazing",
    version: "2.18.1.0",
  },
  {
    name: "iMazing HEIC Converter",
    appId: "DigiDNA.iMazingHEICConverter",
    version: "1.0.14.0",
  },
  {
    name: "iMazing Profile Editor",
    appId: "DigiDNA.iMazingProfileEditor",
    version: "1.8.0.0",
  },
  {
    name: "Nitronic Rush",
    appId: "DigiPen.NitronicRush",
    version: "2012.12.21.2",
  },
  {
    name: "Dopamine 3",
    appId: "Digimezzo.Dopamine.3",
    version: "3.0.0-previewâ€¦",
  },
  {
    name: "Knowte",
    appId: "Digimezzo.Knowte",
    version: "3.0.0",
  },
  {
    name: "MaxTo",
    appId: "DigitalCreations.MaxTo",
    version: "2.2.1",
  },
  {
    name: "DD-TV",
    appId: "DigitalDevices.DD-TV",
    version: "1.15.0.0",
  },
  {
    name: "Warframe",
    appId: "DigitalExtremes.Warframe",
    version: "1.0.0",
  },
  {
    name: "doctl",
    appId: "DigitalOcean.Doctl",
    version: "1.115.0",
  },
  {
    name: "Tropy",
    appId: "DigitalScholar.Tropy",
    version: "1.16.2",
  },
  {
    name: "Zotero",
    appId: "DigitalScholar.Zotero",
    version: "7.0.7",
  },
  {
    name: "Duplicate Cleaner Free",
    appId: "DigitalVolcanoSoftware.DuplicateCâ€¦",
    version: "4.1.2",
  },
  {
    name: "Duplicate Cleaner Pro",
    appId: "DigitalVolcanoSoftware.DuplicateCâ€¦",
    version: "4.1.4",
  },
  {
    name: "7Caps",
    appId: "Digola.7Caps",
    version: "9.3",
  },
  {
    name: "Door Control",
    appId: "Digola.DoorControl",
    version: "4.9",
  },
  {
    name: "FrontSketch",
    appId: "Digola.FrontSketch",
    version: "4",
  },
  {
    name: "InstaMonitr",
    appId: "Digola.InstaMonitr",
    version: "16",
  },
  {
    name: "Lock Cursor Tools",
    appId: "Digola.LockCursorTools",
    version: "9",
  },
  {
    name: "NooG",
    appId: "Digola.NooG",
    version: "5.1",
  },
  {
    name: "ScreenGridy",
    appId: "Digola.ScreenGridy",
    version: "2",
  },
  {
    name: "SetMate",
    appId: "Digola.SetMate",
    version: "2.6",
  },
  {
    name: "Web Filtering Proxy",
    appId: "Diladele.WebProxy",
    version: "4.2.0.0",
  },
  {
    name: "DindeGDPS",
    appId: "DimisAIO.DindeGDPS",
    version: "2024.09.25",
  },
  {
    name: "doxygen",
    appId: "DimitriVanHeesch.Doxygen",
    version: "1.12.0",
  },
  {
    name: "HSM Dinamo",
    appId: "DinamoNetworks.HSMDinamo",
    version: "4.13.0",
  },
  {
    name: "Pure Codec",
    appId: "Dio.PureCodec",
    version: "20240730",
  },
  {
    name: "Accident Reconstruction Profesâ€¦",
    appId: "DirSoft.ARPro",
    version: "17.0.1.1123",
  },
  {
    name: "MailCheck 2                     DirkJansen.MailCheck2              2.138",
    appId: "(Build",
    version: "â€¦",
  },
  {
    name: "Discord",
    appId: "Discord.Discord",
    version: "1.0.9165",
  },
  {
    name: "Discord Canary",
    appId: "Discord.Discord.Canary",
    version: "1.0.456",
  },
  {
    name: "Discord Development",
    appId: "Discord.Discord.Development",
    version: "1.0.875",
  },
  {
    name: "Discord PTB",
    appId: "Discord.Discord.PTB",
    version: "1.0.1106",
  },
  {
    name: "DiskInternals Linux Reader",
    appId: "DiskInternals.LinuxReader",
    version: "4.21",
  },
  {
    name: "DkML Native",
    appId: "Diskuv.OCaml",
    version: "2.1.3",
  },
  {
    name: "DisplayLink Graphics",
    appId: "DisplayLink.GraphicsDriver",
    version: "11.5.5551.0",
  },
  {
    name: "DisplayLink Graphics (with Hotâ€¦",
    appId: "DisplayLink.GraphicsDriver.HotDesâ€¦",
    version: "11.5.5551.0",
  },
  {
    name: "BlueGriffon",
    appId: "DisruptiveInnovationsSAS.BlueGrifâ€¦",
    version: "3.1",
  },
  {
    name: "Fast Chess",
    appId: "Disservin.FastChess",
    version: "0.9.0",
  },
  {
    name: "Ditto",
    appId: "Ditto.Ditto",
    version: "3.24.246.0",
  },
  {
    name: "Dixa",
    appId: "Dixa.Dixa",
    version: "4.0.12",
  },
  {
    name: "DjVuLibre DjView",
    appId: "DjVuLibre.DjView",
    version: "3.5.28+4.12",
  },
  {
    name: "DMD",
    appId: "Dlang.DMD",
    version: "2.107.1",
  },
  {
    name: "Visual D - Visual Studio Integâ€¦",
    appId: "Dlang.VisualD",
    version: "1.3.1",
  },
  {
    name: "SASM",
    appId: "Dman95.SASM",
    version: "3.14.0",
  },
  {
    name: "MicSwitch",
    appId: "Dmitry-Farafonov.MicSwitch",
    version: "1.0.253",
  },
  {
    name: "IconEdit2",
    appId: "DmitryKozhinov.IconEdit2",
    version: "7.12.0",
  },
  {
    name: "STIG Viewer",
    appId: "DoD.STIGViewer",
    version: "3.4.0",
  },
  {
    name: "DockStation",
    appId: "DockStation.DockStation",
    version: "1.5.1",
  },
  {
    name: "Docker CLI",
    appId: "Docker.DockerCLI",
    version: "27.3.1",
  },
  {
    name: "Docker Compose",
    appId: "Docker.DockerCompose",
    version: "2.28.1",
  },
  {
    name: "Docker Desktop",
    appId: "Docker.DockerDesktop",
    version: "4.34.2",
  },
  {
    name: "Docker Desktop Edge",
    appId: "Docker.DockerDesktopEdge",
    version: "2.5.4.50534",
  },
  {
    name: "Zerabase",
    appId: "DocumizeInc.Zerabase",
    version: "3.3.0",
  },
  {
    name: "Dogecoin Core",
    appId: "DogecoinCoreproject.DogecoinCore",
    version: "1.14.8",
  },
  {
    name: "Todoist",
    appId: "Doist.Todoist",
    version: "9.7.7",
  },
  {
    name: "Dolphin",
    appId: "DolphinEmulator.Dolphin",
    version: "5",
  },
  {
    name: "Dolt",
    appId: "DoltHub.Dolt",
    version: "1.43.1",
  },
  {
    name: "KeePass",
    appId: "DominikReichl.KeePass",
    version: "2.57.0",
  },
  {
    name: "Find and Run Robot",
    appId: "DonationCoder.FindandRunRobot",
    version: "2.239.03",
  },
  {
    name: "Screenshot Captor",
    appId: "DonationCoder.ScreenshotCaptor",
    version: "4.36.2",
  },
  {
    name: "Remote Desktop Plus",
    appId: "Donkz.RemoteDesktopPlus",
    version: "7.0.1",
  },
  {
    name: "Doom Explorer",
    appId: "DoomExplorer.DoomExplorer",
    version: "2.3",
  },
  {
    name: "Doomsday Engine",
    appId: "DoomsdayEngine.DoomsdayEngine",
    version: "2.3.1.3685",
  },
  {
    name: "doppler",
    appId: "Doppler.doppler",
    version: "3.69.1",
  },
  {
    name: "Dot Browser",
    appId: "Dothq.DotBrowser",
    version: "87",
  },
  {
    name: "æ–—é±¼ç›´æ’­",
    appId: "Douyu.DouyuLive",
    version: "8.8.7.1",
  },
  {
    name: "VdhCoApp",
    appId: "DownloadHelper.VdhCoApp",
    version: "2.0.19",
  },
  {
    name: "Doxie",
    appId: "Doxie.Doxie",
    version: "2.14",
  },
  {
    name: "cpufetch",
    appId: "Dr-Noob.cpufetch",
    version: "1.05",
  },
  {
    name: "Pure Writer",
    appId: "DrakeetXu.PureWriter",
    version: "1.9.0",
  },
  {
    name: "Drawpile",
    appId: "Drawpile.Drawpile",
    version: "2.1.20",
  },
  {
    name: "UXL Launcher",
    appId: "DrewNaylor.UXL-Launcher",
    version: "4.0.0.0",
  },
  {
    name: "guinget",
    appId: "DrewNaylor.guinget",
    version: "0.3.0.2",
  },
  {
    name: "MultiExtractor",
    appId: "DrobinskiMaciejStrongRecovery.Mulâ€¦",
    version: "4.8.1.0",
  },
  {
    name: "Dropbox Capture",
    appId: "Dropbox.Capture",
    version: "101.7.0.0",
  },
  {
    name: "Dropbox",
    appId: "Dropbox.Dropbox",
    version: "209.4.3661",
  },
  {
    name: "Drovio",
    appId: "Drovio.Drovio",
    version: "3.5.2",
  },
  {
    name: "Task Separator 11",
    appId: "DrummerSi.TaskSeparator11",
    version: "1.0.2",
  },
  {
    name: "dmidiplayer",
    appId: "Drumstick.dmidiplayer",
    version: "1.7.3",
  },
  {
    name: "DS Clock",
    appId: "DualitySoftware.DSClock",
    version: "5.1.2.0",
  },
  {
    name: "UltraViewer",
    appId: "DucFabulous.UltraViewer",
    version: "6.6.108",
  },
  {
    name: "DuckDB CLI",
    appId: "DuckDB.cli",
    version: "1.1.1",
  },
  {
    name: "DuckDuckGo",
    appId: "DuckDuckGo.DesktopBrowser",
    version: "0.90.3.0",
  },
  {
    name: "ä¸­æ–‡Git",
    appId: "DuckStudio.ChineseGit",
    version: "2.9",
  },
  {
    name: "èŠ™èŠ™å·¥å…·ç®±å¼€å‘å·¥å…·åŒ…",
    appId: "DuckStudio.FufuDevTools",
    version: "2024.10.01.06â€¦",
  },
  {
    name: "èŠ™èŠ™å·¥å…·ç®±",
    appId: "DuckStudio.FufuTools",
    version: "1.3.4",
  },
  {
    name: "GitHub Labels Manager",
    appId: "DuckStudio.GitHubLabelsManager",
    version: "v1.3",
  },
  {
    name: "Rare",
    appId: "Dummerle.Rare",
    version: "1.10.11",
  },
  {
    name: "Duo Authentication for Windowsâ€¦",
    appId: "DuoSecurity.Duo2FAAuthenticationfâ€¦",
    version: "4.3.1.4861",
  },
  {
    name: "Duo Device Health",
    appId: "DuoSecurity.DuoDeviceHealth",
    version: "4.4.0.0",
  },
  {
    name: "ImageGlass",
    appId: "DuongDieuPhap.ImageGlass",
    version: "9.1.8.723",
  },
  {
    name: "dupeGuru",
    appId: "DupeGuru.DupeGuru",
    version: "4.3.1",
  },
  {
    name: "Duplicati 2",
    appId: "Duplicati.Duplicati",
    version: "2.0.8.1",
  },
  {
    name: "Duplicati 2",
    appId: "Duplicati.Duplicati.Canary",
    version: "2.0.7.101",
  },
  {
    name: "Bazecor",
    appId: "DygmaLabs.Bazecor",
    version: "1.3.11",
  },
  {
    name: "Dynalist",
    appId: "Dynalist.Dynalist",
    version: "1.0.6",
  },
  {
    name: "DynamoRIO",
    appId: "DynamoRIO.DynamoRIO",
    version: "9.93.19518",
  },
  {
    name: "Dr. Memory",
    appId: "DynamoRIO.drmemory",
    version: "2.5.19327",
  },
  {
    name: "Broot",
    appId: "Dystroy.broot",
    version: "1.44.0",
  },
  {
    name: "KLog",
    appId: "EA4K.KLog",
    version: "2.3.4",
  },
  {
    name: "Elite Dangerous Market Connectâ€¦",
    appId: "EDCD.EliteDangerousMarketConnector",
    version: "5.3.4.0",
  },
  {
    name: "Thorium",
    appId: "EDRLab.Thorium",
    version: "2.4.2",
  },
  {
    name: "HD Tune Pro",
    appId: "EFDSoftware.HDTunePro",
    version: "5.75",
  },
  {
    name: "Certbot",
    appId: "EFF.Certbot",
    version: "2.9.0",
  },
  {
    name: "EFI Boot Editor",
    appId: "EFIBootEditor.EFIBootEditor",
    version: "1.5.1",
  },
  {
    name: "VoiceHotKey",
    appId: "EMOJI-FZCO.VoiceHotKey",
    version: "1.5.44",
  },
  {
    name: "EPA SWMM 5.2.4 (64-bit)",
    appId: "EPA.SWMM",
    version: "5.2.4",
  },
  {
    name: "EPOS Connect",
    appId: "EPOS.EposConnect",
    version: "7.9.0.47628",
  },
  {
    name: "Advanced Combat Tracker",
    appId: "EQAditu.AdvancedCombatTracker",
    version: "3.6.2.279",
  },
  {
    name: "EditPlus",
    appId: "ES-Computing.EditPlus",
    version: "5.7",
  },
  {
    name: "EmulationStation Desktop Editiâ€¦",
    appId: "ES-DE.EmulationStation-DE",
    version: "3.0.1",
  },
  {
    name: "ESET AV Remover",
    appId: "ESET.AVRemover",
    version: "1.6.7.0",
  },
  {
    name: "ESET Endpoint Antivirus",
    appId: "ESET.EndpointAntivirus",
    version: "11.1.2052.0",
  },
  {
    name: "ESET Endpoint Security",
    appId: "ESET.EndpointSecurity",
    version: "11.1.2052.0",
  },
  {
    name: "ESET Nod32",
    appId: "ESET.Nod32",
    version: "17.2.7.0",
  },
  {
    name: "ESET Security",
    appId: "ESET.Security",
    version: "17.2.7.0",
  },
  {
    name: "ESUNBank WebATM Service",
    appId: "ESUNBank.WebATMService",
    version: "1.0.0.7",
  },
  {
    name: "Safe Exam Browser",
    appId: "ETHZurich.SafeExamBrowser",
    version: "3.8.0",
  },
  {
    name: "DuckDns",
    appId: "ETXSoftwareInc.DuckDns",
    version: "1.0.5",
  },
  {
    name: "EVE IPH",
    appId: "EVEIPH.EVEIPH",
    version: "5.0.8530.36296",
  },
  {
    name: "EVEMon",
    appId: "EVEMonDevelopmentTeam.EVEMon",
    version: "4.2.2",
  },
  {
    name: "MSI Wrapper",
    appId: "EXEMSI.MSIWrapper",
    version: "11.0.53.0",
  },
  {
    name: "PDF reDirect",
    appId: "EXPSystems.PDFreDirect",
    version: "v2.5.2",
  },
  {
    name: "Space Thumbnails",
    appId: "EYHN.SpaceThumbnails",
    version: "1.0.1",
  },
  {
    name: "EasyBoot",
    appId: "EZBSystems.EasyBoot",
    version: "6.6.0.800",
  },
  {
    name: "UltraISO Premium",
    appId: "EZBSystems.UltraISO",
    version: "9.76",
  },
  {
    name: "DCS World OpenBeta",
    appId: "EagleDynamics.DCSWorldOpenBeta",
    version: "2.9",
  },
  {
    name: "EaseUS Partition Master",
    appId: "EaseUS.PartitionMaster",
    version: "19",
  },
  {
    name: "EaseUS Todo Backup Free",
    appId: "EaseUS.TodoBackup",
    version: "2022.1",
  },
  {
    name: "EaseUS Todo PCTrans",
    appId: "EaseUS.TodoPCTrans",
    version: "13.9",
  },
  {
    name: "Driver Easy",
    appId: "Easeware.DriverEasy",
    version: "6.1.0.32140",
  },
  {
    name: "DiskGenius",
    appId: "Eassos.DiskGenius",
    version: "5.6.1",
  },
  {
    name: "Eassos Recovery",
    appId: "Eassos.EassosRecovery",
    version: "4.4.0",
  },
  {
    name: "Eastmoney",
    appId: "EastMoney.EastMoney",
    version: "11.5.0",
  },
  {
    name: "EasyABC",
    appId: "EasyABC.EasyABC",
    version: "1.3.8.6",
  },
  {
    name: "ebbflow",
    appId: "Ebbflow.Ebbflow",
    version: "1.1.0",
  },
  {
    name: "ReqView",
    appId: "Eccam.ReqView",
    version: "2.19.0",
  },
  {
    name: "EchoLink",
    appId: "EchoLink.EchoLink",
    version: "2.3.121.1",
  },
  {
    name: "RyuSAK",
    appId: "Ecks1337.RyuSAK",
    version: "1.6.3",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.11.JDK",
    version: "11.0.24.8",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.11.JRE",
    version: "11.0.24.8",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.16.JDK",
    version: "16.0.2.7",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.17.JDK",
    version: "17.0.12.7",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.17.JRE",
    version: "17.0.12.7",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.18.JDK",
    version: "18.0.2.101",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.18.JRE",
    version: "18.0.2.101",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.19.JDK",
    version: "19.0.2.7",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.19.JRE",
    version: "19.0.2.7",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.20.JDK",
    version: "20.0.2.9",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.20.JRE",
    version: "20.0.2.9",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.21.JDK",
    version: "21.0.4.7",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.21.JRE",
    version: "21.0.4.7",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.22.JDK",
    version: "22.0.2.9",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.22.JRE",
    version: "22.0.2.9",
  },
  {
    name: "Eclipse Temurin JDK with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.8.JDK",
    version: "8.0.422.5",
  },
  {
    name: "Eclipse Temurin JRE with Hotspâ€¦",
    appId: "EclipseAdoptium.Temurin.8.JRE",
    version: "8.0.422.5",
  },
  {
    name: "Eclipse Mosquitto MQTT broker",
    appId: "EclipseFoundation.Mosquitto",
    version: "2.0.18",
  },
  {
    name: "SUMO",
    appId: "EclipseFoundation.SUMO",
    version: "1.18.0.2427",
  },
  {
    name: "TheiaBlueprint",
    appId: "EclipseFoundation.TheiaBlueprint",
    version: "1.44.0",
  },
  {
    name: "EcoPaste",
    appId: "EcoPaste.EcoPaste",
    version: "0.1.0",
  },
  {
    name: "Ecosia Browser",
    appId: "Ecosia.EcosiaBrowser",
    version: "128.0.6613.13",
  },
  {
    name: "EdgeTX Companion",
    appId: "EdgeTX.Companion",
    version: "2.10.4",
  },
  {
    name: "EdrawInfo",
    appId: "EdrawSoft.EdrawInfo",
    version: "9.5",
  },
  {
    name: "äº¿å›¾ä¿¡æ¯å›¾åˆ¶ä½œå·¥å…·",
    appId: "EdrawSoft.EdrawInfo.CN",
    version: "9.5",
  },
  {
    name: "Wondershare EdrawMax",
    appId: "EdrawSoft.EdrawMax",
    version: "13.0.5.1119",
  },
  {
    name: "EdrawMax",
    appId: "EdrawSoft.EdrawMax.CN",
    version: "13.0.5.1107",
  },
  {
    name: "EdrawMind",
    appId: "EdrawSoft.EdrawMind",
    version: "12.0.4.931",
  },
  {
    name: "Wondershare EdrawProj",
    appId: "EdrawSoft.EdrawProj",
    version: "2.0.0",
  },
  {
    name: "EdrawProj",
    appId: "EdrawSoft.EdrawProj.CN",
    version: "2.3.8",
  },
  {
    name: "MindMaster",
    appId: "EdrawSoft.MindMaster",
    version: "12.0.4.930",
  },
  {
    name: "OrgCharting",
    appId: "EdrawSoft.OrgCharting",
    version: "1.4",
  },
  {
    name: "OrgCharting",
    appId: "EdrawSoft.OrgCharting.CN",
    version: "1.4",
  },
  {
    name: "Edraw Diagram Component",
    appId: "EdrawSoft.ViewerComponent.Diagram",
    version: "5.0.0.1302",
  },
  {
    name: "Edraw Viewer Component for Excâ€¦",
    appId: "EdrawSoft.ViewerComponent.Excel",
    version: "8.0.0.863",
  },
  {
    name: "Edraw Office Viewer Component",
    appId: "EdrawSoft.ViewerComponent.Office",
    version: "8.0.0.863",
  },
  {
    name: "PDF Viewer Component",
    appId: "EdrawSoft.ViewerComponent.PDF",
    version: "5.0.0.412",
  },
  {
    name: "Edraw Viewer Component for Word",
    appId: "EdrawSoft.ViewerComponent.Word",
    version: "8.0.0.733",
  },
  {
    name: "EduMIPS64",
    appId: "EduMIPS64.EduMIPS64",
    version: "1.3.0",
  },
  {
    name: "Egnyte Office Add-in",
    appId: "Egnyte.Addin",
    version: "4.3.2",
  },
  {
    name: "Egnyte Desktop App",
    appId: "Egnyte.EgnyteDesktopApp",
    version: "3.19.0.148",
  },
  {
    name: "Egnyte WebEdit",
    appId: "Egnyte.EgnyteWebEdit",
    version: "2.4.1000.75",
  },
  {
    name: "EiffelStudio 23.09 (x64) Standâ€¦",
    appId: "EiffelSoftware.EiffelStudio.Stable",
    version: "23.09",
  },
  {
    name: "Rickrack",
    appId: "Eigenmiao.Rickrack",
    version: "2.9.10",
  },
  {
    name: "VirtualCloneDrive",
    appId: "ElaborateBytes.VirtualCloneDrive",
    version: "5.5.2.0",
  },
  {
    name: "Elasticsearch",
    appId: "Elastic.Elasticsearch",
    version: "7.16.3",
  },
  {
    name: "Beats winlogbeat",
    appId: "Elastic.Winlogbeat",
    version: "8.12.2",
  },
  {
    name: "Advanced EFS Password Recovery",
    appId: "Elcomsoft.AdvancedEFSPasswordRecoâ€¦",
    version: "4.54.63.6314",
  },
  {
    name: "Advanced Office Password Recovâ€¦",
    appId: "Elcomsoft.AdvancedOfficePasswordRâ€¦",
    version: "7.21.2678.7207",
  },
  {
    name: "Advanced PDF Password Recovery",
    appId: "Elcomsoft.AdvancedPDFPasswordRecoâ€¦",
    version: "5.20.196.8142",
  },
  {
    name: "Advanced Archive Password Recoâ€¦",
    appId: "Elcomsoft.ArchivePassword",
    version: "4.66.266.6965",
  },
  {
    name: "Elcomsoft Blackberry Backup Exâ€¦",
    appId: "Elcomsoft.BlackberryBackup",
    version: "10.02.13.6780",
  },
  {
    name: "Elcomsoft Cloud eXplorer",
    appId: "Elcomsoft.CloudeXplorer",
    version: "2.32.37099.70â€¦",
  },
  {
    name: "Elcomsoft Forensic Disk Decrypâ€¦",
    appId: "Elcomsoft.ForensicDiskDecryptor",
    version: "2.20.1011.6893",
  },
  {
    name: "Advanced IM Password Recovery",
    appId: "Elcomsoft.IMPassword",
    version: "4.91.2534.6836",
  },
  {
    name: "Elcomsoft Internet Password Brâ€¦",
    appId: "Elcomsoft.InternetPassword",
    version: "3.30.5802.6841",
  },
  {
    name: "Advanced Intuit Password Recovâ€¦",
    appId: "Elcomsoft.IntuitPassword",
    version: "3.14.648.8144",
  },
  {
    name: "Elcomsoft Password Digger",
    appId: "Elcomsoft.PasswordDigger",
    version: "1.05.388.6661",
  },
  {
    name: "Elcomsoft Distributed Passwordâ€¦",
    appId: "Elcomsoft.PasswordRecovery",
    version: "4.60.1665.7167",
  },
  {
    name: "Elcomsoft Phone Breaker",
    appId: "Elcomsoft.PhoneBreaker",
    version: "10.14.38922.8â€¦",
  },
  {
    name: "Elcomsoft Phone Viewer",
    appId: "Elcomsoft.PhoneViewer",
    version: "5.52.39130.72â€¦",
  },
  {
    name: "Proactive Password Auditor",
    appId: "Elcomsoft.ProactivePasswordAuditor",
    version: "2.09.68.6340",
  },
  {
    name: "Advanced SQL Password Recovery",
    appId: "Elcomsoft.SQLPassword",
    version: "1.15.2215.6839",
  },
  {
    name: "Advanced Sage Password Recovery",
    appId: "Elcomsoft.SagePassword",
    version: "2.78.2530.7105",
  },
  {
    name: "Elcomsoft Wireless Security Auâ€¦",
    appId: "Elcomsoft.WirelessSecurityAuditor",
    version: "7.51.871.7010",
  },
  {
    name: "Elcomsoft eXplorer for WhatsApp",
    appId: "Elcomsoft.eXplorerforWhatsApp",
    version: "2.80.39025.69â€¦",
  },
  {
    name: "Electron Store",
    appId: "Electron-Store.electron-app-store",
    version: "0.0.4",
  },
  {
    name: "Electron Cash",
    appId: "ElectronCash.ElectronCash",
    version: "4.3.1",
  },
  {
    name: "Electron Fiddle",
    appId: "ElectronCommunity.ElectronFiddle",
    version: "0.36.2",
  },
  {
    name: "EA app",
    appId: "ElectronicArts.EADesktop",
    version: "13.310.0.5823",
  },
  {
    name: "Origin",
    appId: "ElectronicArts.Origin",
    version: "10.5.128.55504",
  },
  {
    name: "FlexiHub",
    appId: "ElectronicTeam.Flexihub",
    version: "5.3.14268",
  },
  {
    name: "USB Network Gate",
    appId: "ElectronicTeam.USBNetworkGate",
    version: "10.0.2450",
  },
  {
    name: "Virtual Serial Port Driver",
    appId: "ElectronicTeam.VirtualSerialPortDâ€¦",
    version: "11.0.1047",
  },
  {
    name: "Electrum",
    appId: "Electrum.Electrum",
    version: "4.5.5",
  },
  {
    name: "Element",
    appId: "Element.Element",
    version: "1.11.79",
  },
  {
    name: "LM Studio",
    appId: "ElementLabs.LMStudio",
    version: "0.3.3",
  },
  {
    name: "openElement",
    appId: "ElementTechnologie.openElement",
    version: "1.57.9",
  },
  {
    name: "ElexeLauncher",
    appId: "Elexe.ElexeLauncher",
    version: "1.0.0.0",
  },
  {
    name: "Elgato 4K Capture Utility",
    appId: "Elgato.4KCaptureUtility",
    version: "1.7.13.6046",
  },
  {
    name: "Elgato Camera Hub",
    appId: "Elgato.CameraHub",
    version: "1.11.0.4066",
  },
  {
    name: "Elgato Control Center",
    appId: "Elgato.ControlCenter",
    version: "1.7.1.600",
  },
  {
    name: "EpocCam drivers",
    appId: "Elgato.EpocCam",
    version: "3.4.0",
  },
  {
    name: "Game Capture 4K60 Pro MK.2",
    appId: "Elgato.GameCapture.4K60ProMK2",
    version: "1.1.0.198",
  },
  {
    name: "Elgato Game Capture HD",
    appId: "Elgato.GameCapture.HD",
    version: "3.70.56.3056",
  },
  {
    name: "Game Capture HD60 S",
    appId: "Elgato.GameCapture.HD60S",
    version: "1.1.0.194",
  },
  {
    name: "Elgato Stream Deck",
    appId: "Elgato.StreamDeck",
    version: "6.7.3.21005",
  },
  {
    name: "Elgato Wave Link",
    appId: "Elgato.WaveLink",
    version: "1.11.1.2824",
  },
  {
    name: "Eli\u0027s Enterprise Tech Toolkit",
    appId: "EliWeitzman.ETT",
    version: "1.3",
  },
  {
    name: "ETT-Admin",
    appId: "EliWeitzman.ETT-Admin",
    version: "1.2",
  },
  {
    name: "DeskPins",
    appId: "EliasFotinis.DeskPins",
    version: "1.32",
  },
  {
    name: "Music Caster",
    appId: "ElijahLopez.MusicCaster",
    version: "5.18.2",
  },
  {
    name: "UE Explorer",
    appId: "Eliot.UEExplorer",
    version: "1.3.1",
  },
  {
    name: "Elk",
    appId: "Elk.Elk",
    version: "0.4.0",
  },
  {
    name: "Ellosoft AWS Credentials Managâ€¦",
    appId: "Ellosoft.AWSCredentialsManager",
    version: "1.0.0.0",
  },
  {
    name: "Mendeley Reference Manager",
    appId: "Elsevier.MendeleyReferenceManager",
    version: "2.122.1",
  },
  {
    name: "astiga",
    appId: "ElstenSoftware.Astiga",
    version: "0.1.3",
  },
  {
    name: "Serial to Ethernet Connector",
    appId: "Eltima.SerialOverEthernet",
    version: "9.0.1253",
  },
  {
    name: "Serial Port Monitor",
    appId: "Eltima.SerialPortMonitor",
    version: "9.5",
  },
  {
    name: "Embarcadero Dev-C++",
    appId: "Embarcadero.Dev-C++",
    version: "6.3",
  },
  {
    name: "Embrava Connect",
    appId: "EmbravaPtyLtd.EmbravaConnect",
    version: "5.4.6",
  },
  {
    name: "DeezerElectron",
    appId: "EmirTunahanAlim.DeezerElectron",
    version: "1.0.0",
  },
  {
    name: "Remote Mouse",
    appId: "EmoteInteractive.RemoteMouse",
    version: "4.602",
  },
  {
    name: "Empoche",
    appId: "Empoche.Empoche",
    version: "0.4.5",
  },
  {
    name: "ArdorQuery",
    appId: "EmptyFlow.ArdorQuery",
    version: "0.0.17",
  },
  {
    name: "Emulationstation",
    appId: "Emulationstation.Emulationstation",
    version: "2.0.1",
  },
  {
    name: "EmEditor",
    appId: "Emurasoft.EmEditor",
    version: "24.3.2",
  },
  {
    name: "en-croissant",
    appId: "EnCroissant.EnCroissant",
    version: "0.10.0",
  },
  {
    name: "enarx",
    appId: "EnarxProject.enarx",
    version: "0.7.1",
  },
  {
    name: "Pyinstaller Helper",
    appId: "EnderbytePrograms.PyinstallerHelpâ€¦",
    version: "1.7",
  },
  {
    name: "StudentPick",
    appId: "EnderbytePrograms.StudentPick",
    version: "3.1",
  },
  {
    name: "timeit",
    appId: "EnderbytePrograms.TimeIt",
    version: "1.4",
  },
  {
    name: "Endicia Connect",
    appId: "Endicia.EndiciaConnect",
    version: "3.0.0.320",
  },
  {
    name: "Enigma Virtual Box",
    appId: "Enigma.VirtualBox",
    version: "11",
  },
  {
    name: "Enigma",
    appId: "EnigmaGame.Enigma",
    version: "1.3",
  },
  {
    name: "XMeters",
    appId: "Entropy6.XMeters",
    version: "1.0.103",
  },
  {
    name: "Go Spotify Cli",
    appId: "Envoy49.go-spotify-cli",
    version: "1.0.41",
  },
  {
    name: "Night Light",
    appId: "Enyium.NightLight",
    version: "0.1.0",
  },
  {
    name: "Epic Games Launcher",
    appId: "EpicGames.EpicGamesLauncher",
    version: "1.3.93.0",
  },
  {
    name: "Epilogue Operator",
    appId: "Epilogue.EpilogueOperator",
    version: "1.2.0",
  },
  {
    name: "Colobot: Gold Edition",
    appId: "Epsitec.Colobot",
    version: "alpha-0.1.12",
  },
  {
    name: "Planet Blupi",
    appId: "Epsitec.PlanetBlupi",
    version: "1.15.0",
  },
  {
    name: "Eraser",
    appId: "Eraser.Eraser",
    version: "6.2.2993",
  },
  {
    name: "ErgoFAKT V5",
    appId: "Ergosoft.ErgoFAKT_V5",
    version: "5.0.1.0",
  },
  {
    name: "FintX",
    appId: "ErikAraojo.FintX",
    version: "2.2.0",
  },
  {
    name: "Erlang OTP",
    appId: "Erlang.ErlangOTP",
    version: "27.1.1",
  },
  {
    name: "Multrin",
    appId: "ErykRakowski.Multrin",
    version: "1.3.0",
  },
  {
    name: "Gridea",
    appId: "EryouHao.Gridea",
    version: "0.9.3",
  },
  {
    name: "Espanso",
    appId: "Espanso.Espanso",
    version: "2.2.1",
  },
  {
    name: "Ecency",
    appId: "Esteem.Esteem",
    version: "3.0.9",
  },
  {
    name: "Send Anywhere",
    appId: "Estmob.SendAnywhere",
    version: "24.3.80853",
  },
  {
    name: "Ethereum - Geth - Official Go â€¦",
    appId: "Ethereum.geth",
    version: "1.10.11-7231bâ€¦",
  },
  {
    name: "Grid",
    appId: "Ethereum.grid",
    version: "1.6.2",
  },
  {
    name: "Etterna",
    appId: "EtternaProject.EtternaGame",
    version: "0.72.3",
  },
  {
    name: "å¾·è¯­åŠ©æ‰‹",
    appId: "EuSoft.Dehelper",
    version: "13.6.7.0",
  },
  {
    name: "è¥¿è¯­åŠ©æ‰‹",
    appId: "EuSoft.Eshelper",
    version: "13.6.8.0",
  },
  {
    name: "æ¬§è·¯è¯å…¸",
    appId: "EuSoft.Eudic",
    version: "13.7.2.0",
  },
  {
    name: "æ³•è¯­åŠ©æ‰‹",
    appId: "EuSoft.Frhelper",
    version: "13.7.2.0",
  },
  {
    name: "Tabby",
    appId: "Eugeny.Tabby",
    version: "1.0.215",
  },
  {
    name: "Elm",
    appId: "EvanCzaplicki.Elm",
    version: "0.19.1",
  },
  {
    name: "Image Encode",
    appId: "EvanR.ImageFiles",
    version: "0.9.4",
  },
  {
    name: "Picocrypt",
    appId: "EvanSu.Picocrypt",
    version: "1.33",
  },
  {
    name: "EverEdit",
    appId: "EverEdit.EverEdit",
    version: "4.5.0.4500",
  },
  {
    name: "Evernote",
    appId: "Evernote.Evernote",
    version: "10.107.3",
  },
  {
    name: "å°è±¡ç¬”è®°",
    appId: "Evernote.Evernote.CN",
    version: "7.2.56",
  },
  {
    name: "EvexiCLI",
    appId: "Evexi.EvexiCLI",
    version: "0.0.2",
  },
  {
    name: "Remote Helper App",
    appId: "EvgenyCherpak.RemoteHelperApp",
    version: "2024.15",
  },
  {
    name: "Evoluent Mouse Manager",
    appId: "Evoluent.EvoluentMouseManager",
    version: "6.0.9.3",
  },
  {
    name: "Pencil",
    appId: "Evolus.Pencil",
    version: "3.1.1",
  },
  {
    name: "Evope",
    appId: "Evope.Evope",
    version: "1.1.6.1",
  },
  {
    name: "exacqVision Client",
    appId: "ExacqTechnologies.exacqVisionClieâ€¦",
    version: "24.09.3.0",
  },
  {
    name: "Exclaimer Cloud Signature Updaâ€¦",
    appId: "ExclaimerLtd.CloudSignatureUpdateâ€¦",
    version: "1.18.22294.1",
  },
  {
    name: "Exercism CLI",
    appId: "Exercism.CLI",
    version: "3.1.0",
  },
  {
    name: "Exoscale CLI",
    appId: "Exoscale.CLI",
    version: "1.74.4",
  },
  {
    name: "CheckIP",
    appId: "Exploitox.CheckIP",
    version: "2.2.0.0",
  },
  {
    name: "WebRadio",
    appId: "Exploitox.WebRadio",
    version: "1.0.0.38",
  },
  {
    name: "ExpressLRS Configurator",
    appId: "ExpressLRS.ExpressLRS-Configurator",
    version: "1.6.1",
  },
  {
    name: "ExpressVPN",
    appId: "ExpressVPN.ExpressVPN",
    version: "12.88.0.36",
  },
  {
    name: "Office Tab",
    appId: "ExtendOffice.OfficeTab",
    version: "14.1",
  },
  {
    name: "Office Tab Enterprise",
    appId: "ExtendOffice.OfficeTab.Enterprise",
    version: "14.1",
  },
  {
    name: "Extensis Connect Fonts",
    appId: "Extensis.ConnectFonts",
    version: "25.1.1.11574",
  },
  {
    name: "Extreme TuxRacer",
    appId: "ExtremeTuxRacer.ExtremeTuxRacer",
    version: "0.8.0.0",
  },
  {
    name: "EyeLeo",
    appId: "EyeLeo.EyeLeo",
    version: "1.3.6",
  },
  {
    name: ".NET Reactor",
    appId: "Eziriz.DotNetReactor",
    version: "6.9.8.0",
  },
  {
    name: "ECHOOF",
    appId: "Ezoa.ECHOOF",
    version: "0.1.1",
  },
  {
    name: "ERCHA",
    appId: "Ezoa.ERCHA",
    version: "0.1.1",
  },
  {
    name: "Freedome",
    appId: "F-Secure.Freedome",
    version: "2.71.176.0",
  },
  {
    name: "MultiPSK",
    appId: "F6CTE.MultiPSK",
    version: "4.48.6",
  },
  {
    name: "FACEIT Anti-Cheat",
    appId: "FACEITLTD.FACEITAC",
    version: "2.1",
  },
  {
    name: "FACEIT",
    appId: "FACEITLTD.FACEITClient",
    version: "2.0.18",
  },
  {
    name: "Configurador FNMT",
    appId: "FNMT.ConfiguradorFNMT",
    version: "4.0.6",
  },
  {
    name: "fossa-cli",
    appId: "FOSSA.FOSSA-cli",
    version: "3.9.5",
  },
  {
    name: "VoiceMacro",
    appId: "FSC-SOFT.VoiceMacro",
    version: "1.4",
  },
  {
    name: "Hunspell",
    appId: "FSFhu.Hunspell",
    version: "1.7.0",
  },
  {
    name: "FTB Electron App",
    appId: "FTB.App",
    version: "1.25.8",
  },
  {
    name: "Antares",
    appId: "Fabio286.antares",
    version: "0.7.28",
  },
  {
    name: "Fade In Professional Screenwriâ€¦",
    appId: "FadeIn.FadeIn",
    version: "4.1.1.1038",
  },
  {
    name: "Logos Bible Software",
    appId: "Faithlife.Logos",
    version: "9.10.17",
  },
  {
    name: "WSL Toolbox",
    appId: "FalconNL93.WSLToolbox",
    version: "0.7.36.1",
  },
  {
    name: "Soundfont Midi Player",
    appId: "Falcosoft.SoundfontMidiPlayer",
    version: "6.4.0",
  },
  {
    name: "VST MIDI System Synth (Falcomoâ€¦",
    appId: "Falcosoft.VSTMidiDriver",
    version: "2.5.0.1",
  },
  {
    name: "Advanced IP Scanner",
    appId: "Famatech.AdvancedIPScanner",
    version: "2.5.4594.1",
  },
  {
    name: "Radmin Viewer",
    appId: "Famatech.Radmin.Client",
    version: "3.52.1.0000",
  },
  {
    name: "Radmin Server",
    appId: "Famatech.Radmin.Server",
    version: "3.52.1.0000",
  },
  {
    name: "Radmin VPN",
    appId: "Famatech.RadminVPN",
    version: "1.4.4642.1",
  },
  {
    name: "PxCook                          FancyNode.PxCook",
    appId: "v3.9.960",
    version: "Beta",
  },
  {
    name: "Deltarune",
    appId: "Fangamer.Deltarune",
    version: "0.6.6.6",
  },
  {
    name: "Far Manager 3",
    appId: "FarManager.FarManager",
    version: "3.0.6364",
  },
  {
    name: "FastCopy",
    appId: "FastCopy.FastCopy",
    version: "5.7.15",
  },
  {
    name: "IP Messenger for Win",
    appId: "FastCopy.IPMsg",
    version: "5.6.2",
  },
  {
    name: "FastStone Capture",
    appId: "FastStone.Capture",
    version: "10.7",
  },
  {
    name: "FastStone Image Viewer",
    appId: "FastStone.Viewer",
    version: "7.8",
  },
  {
    name: "fastfetch",
    appId: "Fastfetch-cli.Fastfetch",
    version: "2.26.1",
  },
  {
    name: "Feather Wallet",
    appId: "FeatherWallet.Feather",
    version: "2.6.8",
  },
  {
    name: "butane",
    appId: "Fedora.CoreOS.butane",
    version: "0.21.0",
  },
  {
    name: "Fedora Media Writer",
    appId: "Fedora.FedoraMediaWriter",
    version: "5.0.9",
  },
  {
    name: "Feem",
    appId: "FeePerfect.Feem.Beta",
    version: "4.3.0",
  },
  {
    name: "Klavaro",
    appId: "FelipeEFdeCastro.Klavaro",
    version: "3.13",
  },
  {
    name: "Clipboard Sync",
    appId: "FelipeSantos.ClipboardSync",
    version: "0.15.0",
  },
  {
    name: "macintosh.js",
    appId: "FelixRieseberg.MacintoshJS",
    version: "1.2.0",
  },
  {
    name: "windows95",
    appId: "FelixRieseberg.Windows95",
    version: "3.1.1",
  },
  {
    name: "markdown-oxide",
    appId: "FelixZeller.markdown-oxide",
    version: "0.23.1",
  },
  {
    name: "Fellow",
    appId: "FellowInsightInc.Fellow",
    version: "1.4.40",
  },
  {
    name: "obs-virtualcam",
    appId: "Fenrirthviti.obs-virtual-cam",
    version: "2.0.5",
  },
  {
    name: "tagLyst",
    appId: "Fenzhi.tagLyst",
    version: "4.752",
  },
  {
    name: "Mypal",
    appId: "Feodor2.Mypal",
    version: "29.3.0",
  },
  {
    name: "Ferdium",
    appId: "Ferdium.Ferdium",
    version: "6.7.7",
  },
  {
    name: "Ferdium Beta",
    appId: "Ferdium.Ferdium.Beta",
    version: "6.4.1-beta.2",
  },
  {
    name: "Ferdium Nightly",
    appId: "Ferdium.Ferdium.Nightly",
    version: "6.7.7-nightlyâ€¦",
  },
  {
    name: "FtpUse",
    appId: "FerroSoftware.FtpUse",
    version: "2.2",
  },
  {
    name: "Figma",
    appId: "Figma.Figma",
    version: "124.4.7",
  },
  {
    name: "Figma Agent",
    appId: "Figma.FigmaAgent",
    version: "124.3.3",
  },
  {
    name: "Fiji ImageJ",
    appId: "Fiji.ImageJ",
    version: "2.15.1",
  },
  {
    name: "EarTrumpet",
    appId: "File-New-Project.EarTrumpet",
    version: "2.3.0.0",
  },
  {
    name: "FileVoyager",
    appId: "FileVoyager.FileVoyager",
    version: "24.9.8.0",
  },
  {
    name: "Filen Sync",
    appId: "FilenCloud.FilenSync",
    version: "2.0.24",
  },
  {
    name: "age",
    appId: "FiloSottile.age",
    version: "1.2.0",
  },
  {
    name: "mkcert",
    appId: "FiloSottile.mkcert",
    version: "1.4.4",
  },
  {
    name: "AIDA64 Engineer",
    appId: "FinalWire.AIDA64.Engineer",
    version: "6.92",
  },
  {
    name: "AIDA64 Extreme",
    appId: "FinalWire.AIDA64.Extreme",
    version: "7.35",
  },
  {
    name: "ManicTime",
    appId: "Finkitd.o.o.ManicTime",
    version: "24.1.0.7",
  },
  {
    name: "Fiorilli Web Extension Client",
    appId: "Fiorilli.FiorilliWebExtensionClieâ€¦",
    version: "1.33.0.0",
  },
  {
    name: "FireAlpaca",
    appId: "FireAlpaca.FireAlpaca",
    version: "2.13.0.0",
  },
  {
    name: "Certify One",
    appId: "FireDaemon.CertifyOne",
    version: "4.1.0",
  },
  {
    name: "FireDaemon Fusion",
    appId: "FireDaemon.FireDaemonFusion",
    version: "7.1.8",
  },
  {
    name: "FireDaemon Lozenge",
    appId: "FireDaemon.FireDaemonLozenge",
    version: "2.0.0.0",
  },
  {
    name: "FireDaemon Pro",
    appId: "FireDaemon.FireDaemonPro",
    version: "5.4.11",
  },
  {
    name: "FireDaemon Zero",
    appId: "FireDaemon.FireDaemonZero",
    version: "3.2.5",
  },
  {
    name: "FireDaemon OpenSSL 3",
    appId: "FireDaemon.OpenSSL",
    version: "3.3.2",
  },
  {
    name: "Firebird",
    appId: "FirebirdProject.Firebird.3",
    version: "3.0.12.33787",
  },
  {
    name: "Firebird",
    appId: "FirebirdProject.Firebird.4",
    version: "4.0.5.3140",
  },
  {
    name: "Firebird",
    appId: "FirebirdProject.Firebird.5",
    version: "5.0.1.1469",
  },
  {
    name: "WinSocat",
    appId: "Firejox.WinSocat",
    version: "0.1.3",
  },
  {
    name: "MailWasher",
    appId: "Firetrust.MailWasher.Free",
    version: "7.12.67",
  },
  {
    name: "MailWasherPro",
    appId: "Firetrust.MailWasher.Pro",
    version: "7.12.188",
  },
  {
    name: "Polypane",
    appId: "Firstversionist.Polypane",
    version: "13.1.2",
  },
  {
    name: "fischertechnik ROBOPro",
    appId: "FischertechnikGMBH.ROBOPro",
    version: "4.7.0",
  },
  {
    name: "Fission CLI",
    appId: "Fission.Fission.CLI",
    version: "1.20.3",
  },
  {
    name: "Fitbit OS Simulator",
    appId: "Fitbit.FitbitOSSimulator",
    version: "0.9.4",
  },
  {
    name: "Flameshot",
    appId: "Flameshot.Flameshot",
    version: "12.1.0",
  },
  {
    name: "Flawless Widescreen",
    appId: "FlawlessWidescreen.FlawlessWidescâ€¦",
    version: "1.0.15",
  },
  {
    name: "Flax",
    appId: "FlaxEngine.Flax",
    version: "1",
  },
  {
    name: "QuickFixMyPic",
    appId: "FleetingClarityStudios.QuickFixMyâ€¦",
    version: "1.0.3",
  },
  {
    name: "RipShout",
    appId: "FleetingClarityStudios.RipShout",
    version: "1.0.6",
  },
  {
    name: "FlightGear",
    appId: "FlightGear.FlightGear",
    version: "2020.3.19",
  },
  {
    name: "ReadyRunner",
    appId: "Flinto.ReadyRunner",
    version: "1.3.3",
  },
  {
    name: "qFlipper",
    appId: "FlipperDevicesInc.qFlipper",
    version: "1.3.3",
  },
  {
    name: "Flock",
    appId: "FlockFZ.Flock",
    version: "2.2.513",
  },
  {
    name: "Cells",
    appId: "FlorianFechner.Cells",
    version: "1.0.0",
  },
  {
    name: "Mp3tag",
    appId: "FlorianHeidenreich.Mp3tag",
    version: "3.27a",
  },
  {
    name: "DisplayCAL",
    appId: "FlorianHoech.DisplayCAL",
    version: "3.8.9.3",
  },
  {
    name: "Flow Launcher",
    appId: "Flow-Launcher.Flow-Launcher",
    version: "1.19.2",
  },
  {
    name: "Flux",
    appId: "FluxCD.Flux",
    version: "2.4.0",
  },
  {
    name: "flyctl",
    appId: "Fly-io.flyctl",
    version: "0.3.14",
  },
  {
    name: "FlyByWire Installer",
    appId: "FlyByWireSimulations.FlyByWireSimâ€¦",
    version: "3.4.0",
  },
  {
    name: "Local",
    appId: "Flywheel.Local",
    version: "8.1.0",
  },
  {
    name: "Focusrite Control",
    appId: "FocusriteAudioEngineeringLtd.Focuâ€¦",
    version: "3.11.0.1983",
  },
  {
    name: "Focusrite Control 2",
    appId: "FocusriteAudioEngineeringLtd.Focuâ€¦",
    version: "1.273.0.21136",
  },
  {
    name: "FAHClient",
    appId: "FoldingAtHome.FoldingAtHome",
    version: "8.3.18",
  },
  {
    name: "Foldr",
    appId: "Foldr.Foldr",
    version: "3.1.0",
  },
  {
    name: "FontForge",
    appId: "FontForge.FontForge",
    version: "20230101",
  },
  {
    name: "è¯†å­—ä½“",
    appId: "Fontke.LikeFont",
    version: "2.0.0",
  },
  {
    name: "NoteTab Light",
    appId: "FookesHolding.NoteTabLight",
    version: "7.2",
  },
  {
    name: "ForceAutoHDR",
    appId: "ForceAutoHDR.7gxycn08",
    version: "1.0.0.4",
  },
  {
    name: "ForceBindIP",
    appId: "ForceBindIP.ForceBindIP",
    version: "1.32",
  },
  {
    name: "Picaso - Open Source",
    appId: "ForecasterCyber.Picaso",
    version: "0.5",
  },
  {
    name: "biliup-app",
    appId: "ForgQi.biliup-app",
    version: "0.5.3",
  },
  {
    name: "biliup-rs",
    appId: "ForgQi.biliup-rs",
    version: "0.2.1",
  },
  {
    name: "Fork - a fast and friendly gitâ€¦",
    appId: "Fork.Fork",
    version: "1.99.3",
  },
  {
    name: "Airtable",
    appId: "Formagrid.Airtable",
    version: "1.4.5",
  },
  {
    name: "PreForm",
    appId: "Formlabs.PreForm",
    version: "3.40.0.405",
  },
  {
    name: "Fort Firewall",
    appId: "Fort.Firewall",
    version: "3.13.14",
  },
  {
    name: "FortiClient VPN",
    appId: "Fortinet.FortiClientVPN",
    version: "7.0.1.0083",
  },
  {
    name: "Fortran Package Manager",
    appId: "FortranLang.fpm",
    version: "0.10.1",
  },
  {
    name: "Audio Switcher",
    appId: "FortyOneLtd.AudioSwitcher",
    version: "1.8.0.142",
  },
  {
    name: "Fossil",
    appId: "Fossil.Fossil",
    version: "2.24",
  },
  {
    name: "Mayo",
    appId: "Fougue.Mayo",
    version: "0.8.0",
  },
  {
    name: "æ–¹æ­£å­—åº“",
    appId: "FounderType.FounderType",
    version: "1.1.4",
  },
  {
    name: "Mailspring",
    appId: "Foundry376.Mailspring",
    version: "1.13.3",
  },
  {
    name: "Devbook",
    appId: "FoundryLabs.Devbook",
    version: "0.1.18",
  },
  {
    name: "Foxit PDF Reader",
    appId: "Foxit.FoxitReader",
    version: "2024.3.0.26795",
  },
  {
    name: "Foxit PDF Reader",
    appId: "Foxit.FoxitReader.Inno",
    version: "2024.3.0.26795",
  },
  {
    name: "Foxit PDF Editor",
    appId: "Foxit.PhantomPDF",
    version: "13.1.4.23147",
  },
  {
    name: "Foxit PDF Editor",
    appId: "Foxit.PhantomPDF.Subscription",
    version: "2024.3.0.26795",
  },
  {
    name: "Foxit PDF Editor (MSI)",
    appId: "Foxit.PhantomPDF.Subscription.MSI",
    version: "2024.3.0.26795",
  },
  {
    name: "FASTER",
    appId: "Foxlider.FASTER",
    version: "1.9e",
  },
  {
    name: "WinPower",
    appId: "FrancescoSorge.WinPower",
    version: "0.1",
  },
  {
    name: "SiriKali",
    appId: "FrancisBanyikwa.SiriKali",
    version: "1.6.0",
  },
  {
    name: "ExifToolGUI",
    appId: "FrankBijnen.ExifToolGUI",
    version: "6.3.0",
  },
  {
    name: "Fred\u0027s Controller Tester",
    appId: "FredEmmott.FredsControllerTester",
    version: "1.0.4",
  },
  {
    name: "Hand Tracked Cockpit Clicking",
    appId: "FredEmmott.HandTrackedCockpitClicâ€¦",
    version: "1.0.0.324",
  },
  {
    name: "OpenKneeboard",
    appId: "FredEmmott.OpenKneeboard",
    version: "1.8.12",
  },
  {
    name: "Siril",
    appId: "Free-Astro.Siril",
    version: "1.2.1",
  },
  {
    name: "FreeBASIC",
    appId: "FreeBASIC.FreeBASIC",
    version: "1.10.1",
  },
  {
    name: "FreeCAD",
    appId: "FreeCAD.FreeCAD",
    version: "0.21.2",
  },
  {
    name: "Freeciv",
    appId: "FreeCiv.FreeCiv",
    version: "3.1.0",
  },
  {
    name: "FreeDV",
    appId: "FreeDV.FreeDV",
    version: "1.9.9.2",
  },
  {
    name: "FreeFem",
    appId: "FreeFem.FreeFem",
    version: "4.14",
  },
  {
    name: "FreeMat",
    appId: "FreeMat.FreeMat",
    version: "4.2",
  },
  {
    name: "FreeOrion",
    appId: "FreeOrion.FreeOrion",
    version: "0.5.0.1",
  },
  {
    name: "Free Pascal Compiler",
    appId: "FreePascal.FreePascalCompiler",
    version: "3.2.2",
  },
  {
    name: "Freedom Scientific JAWS 2023",
    appId: "FreedomScientific.JAWS.2023",
    version: "2023.2402.1.4â€¦",
  },
  {
    name: "Freedom Scientific JAWS 2024",
    appId: "FreedomScientific.JAWS.2024",
    version: "2024.2405.48.â€¦",
  },
  {
    name: "FreedroidRPG",
    appId: "FreedroidRPG.FreedroidRPG",
    version: "1",
  },
  {
    name: "Freelancer Desktop App",
    appId: "Freelancer.Desktop",
    version: "2.6.3",
  },
  {
    name: "Freeplane",
    appId: "Freeplane.Freeplane",
    version: "1.12.6",
  },
  {
    name: "Friction",
    appId: "Friction.Friction",
    version: "0.9.4",
  },
  {
    name: "scrcpy+",
    appId: "Frontesque.scrcpy+",
    version: "2.1.0",
  },
  {
    name: "FrostWire",
    appId: "FrostWire.FrostWire",
    version: "6.12.0.318",
  },
  {
    name: "Trippy",
    appId: "FujiApple.Trippy",
    version: "0.11.0",
  },
  {
    name: "DeskUpdate",
    appId: "FujitsuClientComputingLimited.Desâ€¦",
    version: "5.2.56.0",
  },
  {
    name: "WorkFlowy",
    appId: "FunRoutine.WorkFlowy",
    version: "4.0.2410021315",
  },
  {
    name: "Paperlib",
    appId: "FutureScholars.Paperlib",
    version: "3.1.9",
  },
  {
    name: "ActiveChart",
    appId: "Futureglobe.ActiveChart",
    version: "1.1.0",
  },
  {
    name: "Dashy",
    appId: "Futureglobe.Dashy",
    version: "1.0.0",
  },
  {
    name: "Gibu",
    appId: "Futureglobe.Gibu",
    version: "1.1.0",
  },
  {
    name: "NorthReader",
    appId: "Futureglobe.NorthReader",
    version: "1.1.0",
  },
  {
    name: "Fuze",
    appId: "Fuze.Fuze",
    version: "23.11.14510",
  },
  {
    name: "FxSound",
    appId: "FxSoundLLC.FxSound",
    version: "1.1.26.0",
  },
  {
    name: "Cab",
    appId: "G0rocks.Cab",
    version: "V0.0.0-Alpha",
  },
  {
    name: "ultimatecube",
    appId: "G3G4X5X6.ultimate-cube",
    version: "7.0.0",
  },
  {
    name: "Got Your Back",
    appId: "GAM-Team.GotYourBack",
    version: "1.81",
  },
  {
    name: "TypeRefHasher",
    appId: "GDATA.TypeRefHasher",
    version: "1.0.3",
  },
  {
    name: "GDevelop",
    appId: "GDevelop.GDevelop",
    version: "5.4.213",
  },
  {
    name: "GeoStudio",
    appId: "GEOSLOPE.GeoStudio",
    version: "11.3.1.23726",
  },
  {
    name: "Gigabyte Control Center",
    appId: "GIGABYTE.GigabyteControlCenter",
    version: "24.07.02.01",
  },
  {
    name: "GIMP",
    appId: "GIMP.GIMP",
    version: "2.10.38",
  },
  {
    name: "GIMP Nightly",
    appId: "GIMP.GIMP.Nightly",
    version: "2.99.18",
  },
  {
    name: "GLPI Agent",
    appId: "GLPI-Project.GLPI-Agent",
    version: "1.11",
  },
  {
    name: "GLab",
    appId: "GLab.GLab",
    version: "1.46.1",
  },
  {
    name: "Dual Monitor Tools",
    appId: "GNE.DualMonitorTools",
    version: "2.10.0.0",
  },
  {
    name: "GNU Emacs",
    appId: "GNU.Emacs",
    version: "29.4",
  },
  {
    name: "Gforth",
    appId: "GNU.Gforth",
    version: "0.7.0",
  },
  {
    name: "GNU Midnight Commander",
    appId: "GNU.MidnightCommander",
    version: "4.8.31",
  },
  {
    name: "GNU Nano",
    appId: "GNU.Nano",
    version: "2.7.5",
  },
  {
    name: "Octave",
    appId: "GNU.Octave",
    version: "9.2.0",
  },
  {
    name: "GNU Solfege",
    appId: "GNU.Solfege",
    version: "3.23.4",
  },
  {
    name: "Texmacs",
    appId: "GNU.TeXmacs",
    version: "2.1.2",
  },
  {
    name: "Wget2",
    appId: "GNU.Wget2",
    version: "2.1.0",
  },
  {
    name: "GNU datamash",
    appId: "GNU.datamash",
    version: "1.3",
  },
  {
    name: "GOG GALAXY",
    appId: "GOG.Galaxy",
    version: "2.0.77.22",
  },
  {
    name: "GOM Player",
    appId: "GOMLab.GOMPlayer",
    version: "2.3.91.5361",
  },
  {
    name: "GPAC",
    appId: "GPAC.GPAC",
    version: "2.2.1",
  },
  {
    name: "SAO Utils 2",
    appId: "GPBeta.SAOUtils.2",
    version: "1.2.1.0",
  },
  {
    name: "SAO Utils",
    appId: "GPBeta.SAOUtils.Exp",
    version: "0.5.2.12300",
  },
  {
    name: "Directory Opus",
    appId: "GPSoftware.DirectoryOpus",
    version: "13.7",
  },
  {
    name: "Graphisoft BIMx Desktop Viewer",
    appId: "GRAPHISOFTSE.GraphisoftBIMxDesktoâ€¦",
    version: "2022.4567.0",
  },
  {
    name: "EmEsGi",
    appId: "GS.EmEsGi",
    version: "2",
  },
  {
    name: "GSmartControl",
    appId: "GSmartControl.GSmartControl",
    version: "1.1.4",
  },
  {
    name: "Hiworks Messenger",
    appId: "Gabia.HiworksMessenger",
    version: "3",
  },
  {
    name: "Windows Desktop Gadgets",
    appId: "GadgetsRevived.GadgetsRevived",
    version: "2",
  },
  {
    name: "GG",
    appId: "GaduGadu.GaduGadu",
    version: "12.4.112.12203",
  },
  {
    name: "CRSED Launcher",
    appId: "GaijinNetwork.CRSED",
    version: "1.0.3.109",
  },
  {
    name: "Crossout Launcher",
    appId: "GaijinNetwork.Crossout",
    version: "1.0.3.161",
  },
  {
    name: "Enlisted Launcher",
    appId: "GaijinNetwork.Enlisted",
    version: "1.0.3.95",
  },
  {
    name: "StarConflict Launcher",
    appId: "GaijinNetwork.StarConflict",
    version: "1.0.3.66",
  },
  {
    name: "War Thunder Launcher",
    appId: "GaijinNetwork.WarThunder",
    version: "1.0.3.319",
  },
  {
    name: "EXPERTool",
    appId: "Gainward.EXPERTool",
    version: "11.1",
  },
  {
    name: "Gajim",
    appId: "Gajim.Gajim",
    version: "1.9.5",
  },
  {
    name: "Galvanize Cirrus",
    appId: "GalvanizeInc.GalvanizeCirrus",
    version: "2.1.7",
  },
  {
    name: "Gama",
    appId: "GamaPlatform.Gama",
    version: "1.9.3",
  },
  {
    name: "DropPoint",
    appId: "GameGodS3.DropPoint",
    version: "1.2.1",
  },
  {
    name: "Modboy",
    appId: "Gamebanana.Modboy",
    version: "3.11",
  },
  {
    name: "GanttProject",
    appId: "GanttProject.GanttProject",
    version: "3.3",
  },
  {
    name: "HexoClient",
    appId: "GaoYoubo.HexoClient",
    version: "1.3.6",
  },
  {
    name: "ç¨¿å®šè®¾è®¡",
    appId: "Gaoding.Gaoding",
    version: "1.3.11",
  },
  {
    name: "TurboWarp",
    appId: "GarboMuffin.TurboWarp",
    version: "1.12.3",
  },
  {
    name: "Garena",
    appId: "Garena.Garena",
    version: "2.0.1909.2618",
  },
  {
    name: "Garmin BaseCamp",
    appId: "Garmin.BaseCamp",
    version: "4.7.5.0",
  },
  {
    name: "Garmin Express",
    appId: "Garmin.Express",
    version: "7.23.0.0",
  },
  {
    name: "Quoll Writer",
    appId: "GaryBentley.QuollWriter",
    version: "3.0.1",
  },
  {
    name: "CeVIO AI Voice Package - åŒè‘‰â€¦",
    appId: "GasolineAlleyInc.FutabaMinato",
    version: "2.0.0",
  },
  {
    name: "Gather",
    appId: "Gather.Gather",
    version: "1.14.0",
  },
  {
    name: "Gauge",
    appId: "Gauge.Gauge",
    version: "1.5.6",
  },
  {
    name: "NeatConverter",
    appId: "GauzyTech.NeatConverter",
    version: "4.0.1",
  },
  {
    name: "NeatReader",
    appId: "GauzyTech.NeatReader",
    version: "8.1.4",
  },
  {
    name: "WinNUT",
    appId: "Gawindx.WinNUT",
    version: "2.0.7722",
  },
  {
    name: "GNU Radio",
    appId: "Gcndevelopment.GNURadio",
    version: "3.8.2.1",
  },
  {
    name: "Geany",
    appId: "Geany.Geany",
    version: "2.0.0",
  },
  {
    name: "Threema For Desktop",
    appId: "GeekCorner.threema",
    version: "2.5.1",
  },
  {
    name: "Geek Uninstaller",
    appId: "GeekUninstaller.GeekUninstaller",
    version: "1.5.2.165",
  },
  {
    name: "FurMark",
    appId: "Geeks3D.FurMark",
    version: "1.38.1.0",
  },
  {
    name: "wxMUN",
    appId: "Geert-JanBesjes.wxMUN",
    version: "0.4",
  },
  {
    name: "Dart SDK - stable channel",
    appId: "Gekorm.Dart.stable",
    version: "1.6.0",
  },
  {
    name: "GMT6",
    appId: "GenericMappingTools.gmt",
    version: "6.5.0",
  },
  {
    name: "GenesysCloud",
    appId: "Genesys.GenesysCloud",
    version: "2.34.771",
  },
  {
    name: "ugrep",
    appId: "Genivia.ugrep",
    version: "6.5.0",
  },
  {
    name: "Gentee",
    appId: "Gentee.Gentee",
    version: "1.22.0",
  },
  {
    name: "Genymotion",
    appId: "Genymobile.Genymotion",
    version: "3.4.0",
  },
  {
    name: "scrcpy",
    appId: "Genymobile.scrcpy",
    version: "2.4",
  },
  {
    name: "GeoDa",
    appId: "GeoDa.GeoDa",
    version: "1.22",
  },
  {
    name: "GeoGebra CAS Calculator",
    appId: "GeoGebra.CASCalculator",
    version: "6.0.857",
  },
  {
    name: "GeoGebra Calculator Suite",
    appId: "GeoGebra.CalculatorSuite",
    version: "6.0.857",
  },
  {
    name: "GeoGebra Classic",
    appId: "GeoGebra.Classic",
    version: "6.0.857",
  },
  {
    name: "GeoGebra Classic 5",
    appId: "GeoGebra.Classic.5",
    version: "5.2.857.0",
  },
  {
    name: "GeoGebra Geometry",
    appId: "GeoGebra.Geometry",
    version: "6.0.857",
  },
  {
    name: "GeoGebra CAS Calculator",
    appId: "GeoGebra.GraphingCalculator",
    version: "6.0.857",
  },
  {
    name: "Geode CLI",
    appId: "GeodeSDK.GeodeCLI",
    version: "3.0.5",
  },
  {
    name: "Bridge",
    appId: "Geomitron.Bridge",
    version: "2.1.0",
  },
  {
    name: "SoundWireServer",
    appId: "GeorgieLabs.SoundWireServer",
    version: "2.5",
  },
  {
    name: "Amethyst",
    appId: "Geoxor.Amethyst",
    version: "1.9.16",
  },
  {
    name: "Geph",
    appId: "Geph.Geph",
    version: "4.8.9",
  },
  {
    name: "Gephi",
    appId: "Gephi.Gephi",
    version: "0.10.1",
  },
  {
    name: "Getscreen.me Dashboard (beta)",
    appId: "Getscreenme.Dashboard.Beta",
    version: "1.3.8",
  },
  {
    name: "Total Commander",
    appId: "Ghisler.TotalCommander",
    version: "11.03",
  },
  {
    name: "Ghostery",
    appId: "Ghostery.GhosteryDawn",
    version: "2023.6",
  },
  {
    name: "GSview",
    appId: "Ghostgum.GSview",
    version: "5",
  },
  {
    name: "Videomass",
    appId: "GianlucaPernigotto.Videomass",
    version: "3.5.8",
  },
  {
    name: "Varia",
    appId: "GiantPinkRobots.Varia",
    version: "2024.2.29-2",
  },
  {
    name: "Caption",
    appId: "GielCobben.Caption",
    version: "2.0.1",
  },
  {
    name: "i18n Manager",
    appId: "GilmarQuinelato.i18nManager",
    version: "3.0.3",
  },
  {
    name: "PeaZip",
    appId: "Giorgiotani.Peazip",
    version: "9.9.1",
  },
  {
    name: "Git",
    appId: "Git.Git",
    version: "2.46.2",
  },
  {
    name: "MinGit",
    appId: "Git.MinGit",
    version: "2.46.1",
  },
  {
    name: "BusyBox-based MinGit",
    appId: "Git.MinGit.BusyBox",
    version: "2.46.1",
  },
  {
    name: "Git for Windows SDK",
    appId: "Git.SDK",
    version: "1.0.8",
  },
  {
    name: "GitAhead",
    appId: "GitAhead.GitAhead",
    version: "2.7.1",
  },
  {
    name: "GitButler",
    appId: "GitButler.GitButler",
    version: "0.12.27",
  },
  {
    name: "Git Extensions",
    appId: "GitExtensionsTeam.GitExtensions",
    version: "4.2.1",
  },
  {
    name: "Atom",
    appId: "GitHub.Atom",
    version: "1.60.0",
  },
  {
    name: "Atom Beta",
    appId: "GitHub.Atom.Beta",
    version: "1.61.0-beta0",
  },
  {
    name: "classroom-assistant",
    appId: "GitHub.ClassroomAssistant",
    version: "2.0.4",
  },
  {
    name: "GitHub Desktop",
    appId: "GitHub.GitHubDesktop",
    version: "3.4.5",
  },
  {
    name: "GitHub Desktop Beta",
    appId: "GitHub.GitHubDesktop.Beta",
    version: "3.4.2-beta3",
  },
  {
    name: "Git LFS",
    appId: "GitHub.GitLFS",
    version: "3.5.1",
  },
  {
    name: "GitHub CLI",
    appId: "GitHub.cli",
    version: "2.58.0",
  },
  {
    name: "hub",
    appId: "GitHub.hub",
    version: "2.14.2",
  },
  {
    name: "GitKraken CLI",
    appId: "GitKraken.cli",
    version: "2.1.1",
  },
  {
    name: "GitTools GitVersion",
    appId: "GitTools.GitVersion",
    version: "6.0.2",
  },
  {
    name: "tea",
    appId: "Gitea.tea",
    version: "0.9.2",
  },
  {
    name: "Gitify",
    appId: "Gitify.Gitify",
    version: "5.14.0",
  },
  {
    name: "GitLab Runner",
    appId: "Gitlab.Runner",
    version: "17.4.0",
  },
  {
    name: "Gitleaks",
    appId: "Gitleaks.Gitleaks",
    version: "8.19.2",
  },
  {
    name: "numeronesoft backgrounds",
    appId: "GiulioSorrentino.Backgrounds",
    version: "2",
  },
  {
    name: "numeronesoft backgrounds otto",
    appId: "GiulioSorrentino.BackgroundsOtto",
    version: "2",
  },
  {
    name: "numeronesoft-backgrounds-prox",
    appId: "GiulioSorrentino.BackgroundsProX",
    version: "1.1",
  },
  {
    name: "CBriscola.Avalonia",
    appId: "GiulioSorrentino.CBriscola.Avalonâ€¦",
    version: "0.9.0.1",
  },
  {
    name: "CBriscola.WPF",
    appId: "GiulioSorrentino.CBriscola.WPF",
    version: "0.7.0.2",
  },
  {
    name: "Diario.Avalonia",
    appId: "GiulioSorrentino.Diario.Avalonia",
    version: "0.5.0.1",
  },
  {
    name: "La torre di babele",
    appId: "GiulioSorrentino.Latorredibabele",
    version: "3.0.0.1",
  },
  {
    name: "WinDateFrom",
    appId: "GiulioSorrentino.WinDateFrom",
    version: "4.6.1.2",
  },
  {
    name: "numeronesoft background otto aâ€¦",
    appId: "GiulioSorrentino.astroni",
    version: "1",
  },
  {
    name: "numerone\u0027s fortune in avalonia",
    appId: "GiulioSorrentino.numeronesfortuneâ€¦",
    version: "2.0.3.1",
  },
  {
    name: "numerone\u0027s oem information",
    appId: "GiulioSorrentino.numeronesoeminfoâ€¦",
    version: "1.1.1.1",
  },
  {
    name: "wheelofnumfortune.avalonia",
    appId: "GiulioSorrentino.wheelofnumfortunâ€¦",
    version: "0.2.0.1",
  },
  {
    name: "wxBriscola",
    appId: "GiulioSorrentino.wxBriscola",
    version: "0.6.3.1",
  },
  {
    name: "CherryTree",
    appId: "Giuspen.Cherrytree",
    version: "1.1.4.0",
  },
  {
    name: "Glarysoft File Recovery",
    appId: "Glarysoft.FileRecoveryFree",
    version: "1.24.0.24",
  },
  {
    name: "Glary Utilities",
    appId: "Glarysoft.GlaryUtilities",
    version: "6.16.0.20",
  },
  {
    name: "absolute-uninstaller",
    appId: "Glarysoft.absolute-uninstaller",
    version: "6.0.1.7",
  },
  {
    name: "GlassWire",
    appId: "GlassWire.GlassWire",
    version: "3.3.630",
  },
  {
    name: "GlassWire",
    appId: "GlassWire.GlassWire.Lite",
    version: "2.3.449",
  },
  {
    name: "TightVNC",
    appId: "GlavSoft.TightVNC",
    version: "2.8.85",
  },
  {
    name: "Gleam",
    appId: "Gleam.Gleam",
    version: "1.5.0",
  },
  {
    name: "soundboard",
    appId: "Glecun.soundboard",
    version: "0.0.6",
  },
  {
    name: "MP3Gain",
    appId: "GlenSawyer.MP3Gain",
    version: "1.2.5",
  },
  {
    name: "Snappy Driver Installer Origin",
    appId: "GlennDelahoy.SnappyDriverInstalleâ€¦",
    version: "1.13.4.771",
  },
  {
    name: "AO10003",
    appId: "GlobalMarineNet.AO10003",
    version: "1",
  },
  {
    name: "DfW",
    appId: "GlobalMarineNet.DfW",
    version: "1",
  },
  {
    name: "Iridium Pilot Site Survey Toolâ€¦",
    appId: "GlobalMarineNet.IridiumSurvey",
    version: "1",
  },
  {
    name: "CADReader",
    appId: "Glodon.CADReader",
    version: "3.7.0.17",
  },
  {
    name: "CADå¿«é€Ÿçœ‹å›¾",
    appId: "Glodon.CADReader.CN",
    version: "6.3.0.97",
  },
  {
    name: "Gloop",
    appId: "GloopProgramming.Gloop",
    version: "1",
  },
  {
    name: "SceneBuilder",
    appId: "Gluon.SceneBuilder",
    version: "20.0.0",
  },
  {
    name: "SceneBuilder 18",
    appId: "Gluon.SceneBuilder.18",
    version: "18.0.0",
  },
  {
    name: "Glyphr Studio",
    appId: "GlyphrStudio.Desktop",
    version: "0.5.6",
  },
  {
    name: "GnuCash",
    appId: "GnuCash.GnuCash",
    version: "5.6",
  },
  {
    name: "GNU Privacy Guard",
    appId: "GnuPG.GnuPG",
    version: "2.4.5",
  },
  {
    name: "Gpg4win",
    appId: "GnuPG.Gpg4win",
    version: "4.3.1",
  },
  {
    name: "GnuWin32: Bison",
    appId: "GnuWin32.Bison",
    version: "2.4.1.0",
  },
  {
    name: "GnuWin32: Cpio",
    appId: "GnuWin32.Cpio",
    version: "2.6-2",
  },
  {
    name: "GnuWin32: DiffUtils",
    appId: "GnuWin32.DiffUtils",
    version: "2.8.7-1",
  },
  {
    name: "GnuWin32: FindUtils",
    appId: "GnuWin32.FindUtils",
    version: "4.2.20-2",
  },
  {
    name: "GnuWin32: GetText",
    appId: "GnuWin32.GetText",
    version: "0.14.4",
  },
  {
    name: "GnuWin32: Gperf",
    appId: "GnuWin32.Gperf",
    version: "3.0.1",
  },
  {
    name: "GnuWin32: Grep",
    appId: "GnuWin32.Grep",
    version: "2.5.4",
  },
  {
    name: "GnuWin32: Gzip",
    appId: "GnuWin32.Gzip",
    version: "1.3.12-1",
  },
  {
    name: "GnuWin32: M4",
    appId: "GnuWin32.M4",
    version: "1.4.13.0",
  },
  {
    name: "Tar",
    appId: "GnuWin32.Tar",
    version: "1.13-1",
  },
  {
    name: "GnuWin32: Tree",
    appId: "GnuWin32.Tree",
    version: "1.5.2.2",
  },
  {
    name: "GnuWin32: UnZip",
    appId: "GnuWin32.UnZip",
    version: "5.51-1",
  },
  {
    name: "Which for Windows",
    appId: "GnuWin32.Which",
    version: "2.2",
  },
  {
    name: "GnuWin32: Zip",
    appId: "GnuWin32.Zip",
    version: "3",
  },
  {
    name: "lego",
    appId: "GoACME.lego",
    version: "4.17.3",
  },
  {
    name: "GoCD Agent",
    appId: "GoCD.Agent",
    version: "21.2.0-12498",
  },
  {
    name: "GoCD Server",
    appId: "GoCD.Server",
    version: "21.2.0-12498",
  },
  {
    name: "Harbor CLI",
    appId: "GoHarbor.Harbor",
    version: "0.0.1",
  },
  {
    name: "Go Programming Language",
    appId: "GoLang.Go",
    version: "1.23.1",
  },
  {
    name: "GoTo",
    appId: "GoTo.GoTo",
    version: "4.11.0",
  },
  {
    name: "GoToAssist Agent Desktop Consoâ€¦",
    appId: "GoTo.GoToAssistAgentDesktopConsole",
    version: "5.9.1.101",
  },
  {
    name: "GoToMeeting",
    appId: "GoTo.GoToMeeting",
    version: "10.19.0.19950",
  },
  {
    name: "GoXLR Utility",
    appId: "GoXLR-on-Linux.GoXLR-Utility",
    version: "1.1.4",
  },
  {
    name: "Godot Engine",
    appId: "GodotEngine.GodotEngine",
    version: "4.3",
  },
  {
    name: "Godot Engine (Mono)",
    appId: "GodotEngine.GodotEngine.Mono",
    version: "4.3",
  },
  {
    name: "golangci-lint",
    appId: "GolangCI.golangci-lint",
    version: "1.59.1",
  },
  {
    name: "GoldWave",
    appId: "GoldWave.GoldWave",
    version: "6.8",
  },
  {
    name: "Purple Pen",
    appId: "Golde.PurplePen",
    version: "3.4.1",
  },
  {
    name: "GoldenDict",
    appId: "GoldenDict.GoldenDict",
    version: "1.5.0",
  },
  {
    name: "Minion",
    appId: "GoodGameMods.Minion",
    version: "3",
  },
  {
    name: "Google Ads Editor",
    appId: "Google.AdsEditor",
    version: "14.7.4.0",
  },
  {
    name: "Android GPU Inspector 3.3.0",
    appId: "Google.AndroidGPUInspector",
    version: "3.3.1",
  },
  {
    name: "Android Studio",
    appId: "Google.AndroidStudio",
    version: "2024.1.2.13",
  },
  {
    name: "Android Studio Beta",
    appId: "Google.AndroidStudio.Beta",
    version: "2024.2.1.8",
  },
  {
    name: "Android Studio Canary",
    appId: "Google.AndroidStudio.Canary",
    version: "2024.2.2.4",
  },
  {
    name: "Brotli",
    appId: "Google.Brotli",
    version: "1.1.0",
  },
  {
    name: "Google Chrome",
    appId: "Google.Chrome",
    version: "129.0.6668.90",
  },
  {
    name: "Google Chrome Beta",
    appId: "Google.Chrome.Beta",
    version: "130.0.6723.19",
  },
  {
    name: "Google Chrome Beta (EXE)",
    appId: "Google.Chrome.Beta.EXE",
    version: "130.0.6723.19",
  },
  {
    name: "Google Chrome Canary",
    appId: "Google.Chrome.Canary",
    version: "131.0.6753.0",
  },
  {
    name: "Google Chrome Dev",
    appId: "Google.Chrome.Dev",
    version: "131.0.6738.0",
  },
  {
    name: "Google Chrome Dev (EXE)",
    appId: "Google.Chrome.Dev.EXE",
    version: "131.0.6738.0",
  },
  {
    name: "Google Chrome (EXE)",
    appId: "Google.Chrome.EXE",
    version: "129.0.6668.90",
  },
  {
    name: "Chrome Remote Desktop Host",
    appId: "Google.ChromeRemoteDesktopHost",
    version: "130.0.6723.14",
  },
  {
    name: "Google Cloud SDK",
    appId: "Google.CloudSDK",
    version: "494.0.0",
  },
  {
    name: "Skaffold",
    appId: "Google.ContainerTools.Skaffold",
    version: "2.13.0",
  },
  {
    name: "Google Earth Pro",
    appId: "Google.EarthPro",
    version: "7.3.6.9796",
  },
  {
    name: "Firebase CLI Tools",
    appId: "Google.FirebaseCLI",
    version: "18.5.0",
  },
  {
    name: "Google Desktop",
    appId: "Google.GoogleDesktop",
    version: "5.9.1005.12335",
  },
  {
    name: "Google Drive",
    appId: "Google.GoogleDrive",
    version: "97.0.1.0",
  },
  {
    name: "Google Update",
    appId: "Google.GoogleUpdater",
    version: "130.0.6679.2",
  },
  {
    name: "Google Web Designer",
    appId: "Google.GoogleWebDesigner",
    version: "14.0.1.0",
  },
  {
    name: "IAP Desktop",
    appId: "Google.IAPDesktop",
    version: "2.38.1281",
  },
  {
    name: "Google æ—¥æœ¬èªžå…¥åŠ›",
    appId: "Google.JapaneseIME",
    version: "2.29.5370.0",
  },
  {
    name: "libwebp",
    appId: "Google.Libwebp",
    version: "1.4.0",
  },
  {
    name: "Perfetto",
    appId: "Google.Perfetto",
    version: "34",
  },
  {
    name: "Google Pinyin IME",
    appId: "Google.Pinyin",
    version: "2.7.25.128",
  },
  {
    name: "Android SDK Platform-Tools",
    appId: "Google.PlatformTools",
    version: "35.0.1",
  },
  {
    name: "Google Play Games beta",
    appId: "Google.PlayGames.Beta",
    version: "24.9.294.5",
  },
  {
    name: "protobuf",
    appId: "Google.Protobuf",
    version: "27.1",
  },
  {
    name: "Quick Share from Google",
    appId: "Google.QuickShare",
    version: "1.0.1939.4",
  },
  {
    name: "Google Talk",
    appId: "Google.Talk",
    version: "1.0.0.105",
  },
  {
    name: "Terraformer",
    appId: "Google.Terraformer",
    version: "0.8.24",
  },
  {
    name: "VPN by Google One",
    appId: "Google.VPNByGoogleOne",
    version: "1.9.0.6",
  },
  {
    name: "Ferium",
    appId: "GorillaDevs.Ferium",
    version: "4.7.1",
  },
  {
    name: "GDLauncher",
    appId: "GorillaDevs.GDLauncher",
    version: "1.1.30",
  },
  {
    name: "FocusWriter",
    appId: "GottCode.FocusWriter",
    version: "1.8.4",
  },
  {
    name: "AusweisApp",
    appId: "Governikus.AusweisApp2",
    version: "2.2.1",
  },
  {
    name: "Website 2 APK Builder Pro",
    appId: "GoyalSoftech.Website2APKBuilderPro",
    version: "5.3",
  },
  {
    name: "ARES Commander 2022",
    appId: "Graebert.AresCommander.2022",
    version: "21.3.4329",
  },
  {
    name: "ARES Commander 2023",
    appId: "Graebert.AresCommander.2023",
    version: "22.3.4085",
  },
  {
    name: "ARES Commander 2024",
    appId: "Graebert.AresCommander.2024",
    version: "24.3.4106",
  },
  {
    name: "ARES Commander 2025",
    appId: "Graebert.AresCommander.2025",
    version: "25.1.2142",
  },
  {
    name: "ARES Map 2022",
    appId: "Graebert.AresMap.2022",
    version: "21.3.4329",
  },
  {
    name: "ARES Map 2023",
    appId: "Graebert.AresMap.2023",
    version: "22.1.2085",
  },
  {
    name: "ARES Mechanical 2022",
    appId: "Graebert.AresMechanical.2022",
    version: "21.1.3254",
  },
  {
    name: "ARES Mechanical 2023",
    appId: "Graebert.AresMechanical.2023",
    version: "22.2.3117",
  },
  {
    name: "ARES Mechanical 2024",
    appId: "Graebert.AresMechanical.2024",
    version: "24.2.3254",
  },
  {
    name: "ARES Mechanical 2025",
    appId: "Graebert.AresMechanical.2025",
    version: "25.1.2158",
  },
  {
    name: "GrafanaEnterprise",
    appId: "GrafanaLabs.Grafana.Enterprise",
    version: "10.3.3.0",
  },
  {
    name: "GrafanaOSS",
    appId: "GrafanaLabs.Grafana.OSS",
    version: "10.3.4.0",
  },
  {
    name: "Grammarly for Windows",
    appId: "Grammarly.Grammarly",
    version: "1.2.103.1485",
  },
  {
    name: "Grammarly for MicrosoftÂ® Officâ€¦",
    appId: "Grammarly.Grammarly.Office",
    version: "6.8.263",
  },
  {
    name: "GrampsAIO",
    appId: "Gramps.Gramps",
    version: "5.2.3",
  },
  {
    name: "GraphQL Playground",
    appId: "Graphcool.GraphQLPlayground",
    version: "1.8.10",
  },
  {
    name: "Graphviz",
    appId: "Graphviz.Graphviz",
    version: "12.1.2",
  },
  {
    name: "Grasshopper",
    appId: "Grasshopper.Grasshopper",
    version: "1.0.50",
  },
  {
    name: "Greenfoot",
    appId: "GreenfootTeam.Greenfoot",
    version: "3.8.2",
  },
  {
    name: "Greenshot",
    appId: "Greenshot.Greenshot",
    version: "1.2.10.6",
  },
  {
    name: "Greenshot Preview",
    appId: "Greenshot.Greenshot.Preview",
    version: "1.3.277",
  },
  {
    name: "Gridcoin",
    appId: "Gridcoin.Client",
    version: "5.4.8",
  },
  {
    name: "grist-electron",
    appId: "GristLabs.GristDesktop",
    version: "0.2.9",
  },
  {
    name: "stay-hydrated",
    appId: "GruberQuentin.stay-hydrated",
    version: "1.1.0",
  },
  {
    name: "Grunt",
    appId: "Grunt.Grunt",
    version: "20.23.2",
  },
  {
    name: "Terragrunt",
    appId: "Gruntwork.Terragrunt",
    version: "0.67.14",
  },
  {
    name: "cloud-nuke",
    appId: "Gruntwork.cloud-nuke",
    version: "0.35.0",
  },
  {
    name: "Good Commit",
    appId: "Guhan.GoodCommit",
    version: "1.0.1",
  },
  {
    name: "Guilded",
    appId: "Guilded.Guilded",
    version: "1.0.9284004-râ€¦",
  },
  {
    name: "MakeMKV",
    appId: "GuinpinSoft.MakeMKV",
    version: "v1.17.8",
  },
  {
    name: "MSI Afterburner",
    appId: "Guru3D.Afterburner",
    version: "4.6.5",
  },
  {
    name: "MSI Afterburner Beta            Guru3D.Afterburner.Beta            4.6.6",
    appId: "Beta",
    version: "3",
  },
  {
    name: "Rivatuner Statistics Server",
    appId: "Guru3D.RTSS",
    version: "7.3.6",
  },
  {
    name: "VS Code Config Helper",
    appId: "Guyutongxue.Vscch",
    version: "4.0.10",
  },
  {
    name: "Clash Verge",
    appId: "GyDi.ClashVerge",
    version: "1.3.8",
  },
  {
    name: "FFmpeg",
    appId: "Gyan.FFmpeg",
    version: "7.1",
  },
  {
    name: "FFmpeg (Essentials Build)",
    appId: "Gyan.FFmpeg.Essentials",
    version: "7.1",
  },
  {
    name: "FFmpeg (Shared)",
    appId: "Gyan.FFmpeg.Shared",
    version: "7.1",
  },
  {
    name: "Joystick Gremlin",
    appId: "H2IK.JoystickGremlin",
    version: "13.3",
  },
  {
    name: "H3C ä¼ å±åŠ©æ‰‹",
    appId: "H3C.H3CShare",
    version: "1.1.1012",
  },
  {
    name: "Adobe AIR",
    appId: "HARMAN.AdobeAIR",
    version: "51.1.1.3",
  },
  {
    name: "BrÃ¼el \u0026 KjÃ¦r TEDS Editor BZ-52â€¦",
    appId: "HBK.TEDS-Editor",
    version: "1.5.0",
  },
  {
    name: "Hard Disk Low Level Format Tool",
    appId: "HDDGURU.HDDLLFTool",
    version: "4.4",
  },
  {
    name: "HDD Raw Copy Tool",
    appId: "HDDGURU.HDDRawCopyTool",
    version: "1.1",
  },
  {
    name: "HDOS Launcher",
    appId: "HDOS.HDOSLauncher",
    version: "1.0.8",
  },
  {
    name: "Maps CLI",
    appId: "HERE.MAPMAKING.CLI",
    version: "17.0.26",
  },
  {
    name: "OLP CLI",
    appId: "HERE.OLPCLI",
    version: "17.0.26",
  },
  {
    name: "OLP CLI Native",
    appId: "HERE.OLPCLI.NATIVE",
    version: "17.0.26",
  },
  {
    name: "Zeus Radio",
    appId: "HFRElectronics.ZeusRadio",
    version: "2.9.3",
  },
  {
    name: "HHD Software DupeCare",
    appId: "HHDSoftware.DupeCare",
    version: "1.05.00.0203",
  },
  {
    name: "HHD Software Free Hex Editor Nâ€¦",
    appId: "HHDSoftware.FreeHexEditorNeo",
    version: "6.44.01.6234",
  },
  {
    name: "HHD Software Virtual Serial Poâ€¦",
    appId: "HHDSoftwareLtd.VirtualSerialPortTâ€¦",
    version: "5.01.02.0992",
  },
  {
    name: "HIKARI FIELD CLIENT",
    appId: "HIKARI-FIELD.HIKARI-FIELD-CLIENT",
    version: "1.1.8",
  },
  {
    name: "HÃ¶rbert",
    appId: "HMC.Hoerbert",
    version: "3.1.3",
  },
  {
    name: "HM NIS Edit",
    appId: "HMSoft.HMNISEdit",
    version: "2.0.3",
  },
  {
    name: "HP Client Management Script Liâ€¦",
    appId: "HP.HPCMSL",
    version: "1.6.8",
  },
  {
    name: "HP Cloud Recovery Tool",
    appId: "HP.HPCloudRecoveryTool",
    version: "2.4.2",
  },
  {
    name: "HP Image Assistant",
    appId: "HP.ImageAssistant",
    version: "5.2.1",
  },
  {
    name: "HP Prime Virtual Calculator",
    appId: "HP.PrimeVirtualCalculator",
    version: "2.1.14181.330",
  },
  {
    name: "Crypter",
    appId: "HR.Crypter",
    version: "4.0.0",
  },
  {
    name: "HTTP Toolkit",
    appId: "HTTPToolKit.HTTPToolKit",
    version: "1.14.8",
  },
  {
    name: "HTTPie",
    appId: "HTTPie.HTTPie",
    version: "2024.1.2",
  },
  {
    name: "Language Switcher",
    appId: "Haali.WinUtils.lswitch",
    version: "1.0.0",
  },
  {
    name: "DU Meter",
    appId: "HagelTechnologiesLtd.DUMeter",
    version: "8.01",
  },
  {
    name: "HakuNeko Desktop",
    appId: "HakuNeko.HakuNeko",
    version: "6.1.7",
  },
  {
    name: "HakuNeko Desktop Nightly",
    appId: "HakuNeko.HakuNeko.Nightly",
    version: "8.3.4",
  },
  {
    name: "Ham Radio Deluxe",
    appId: "HamRadioDeluxe.HamRadioDeluxe",
    version: "6.8.0.372",
  },
  {
    name: "HamsterBase",
    appId: "HamsterBase.HamsterBase.Server",
    version: "0.7.3",
  },
  {
    name: "Bob the Hamster VGA",
    appId: "HamsterRepublic.BobTheHamsterVGA",
    version: "2008-01-23",
  },
  {
    name: "OHRRPGCE",
    appId: "HamsterRepublic.OHRRPGCE",
    version: "2021.09.13",
  },
  {
    name: "HandBrake",
    appId: "HandBrake.HandBrake",
    version: "1.8.2",
  },
  {
    name: "HandBrake CLI",
    appId: "HandBrake.HandBrake.CLI",
    version: "1.8.2",
  },
  {
    name: "MaxGoWindows",
    appId: "HandheldGroup.MaxGoWindows",
    version: "0.0.0.5",
  },
  {
    name: "HandyWinget",
    appId: "HandyOrg.HandyWinget-GUI",
    version: "3.2.2.0",
  },
  {
    name: "Domino",
    appId: "Hans5958.Domino",
    version: "144",
  },
  {
    name: "Wisenet WAVE Client",
    appId: "Hanwha.WisenetWAVEClient",
    version: "5.1.0.37133",
  },
  {
    name: "Wisenet WAVE Server",
    appId: "Hanwha.WisenetWAVEServer",
    version: "5.1.0.37133",
  },
  {
    name: "Harbour",
    appId: "Harbour.Harbour",
    version: "3.0.0",
  },
  {
    name: "Harmonoid",
    appId: "Harmonoid.Harmonoid",
    version: "0.3.8.0",
  },
  {
    name: "Rainbow Board",
    appId: "HarshKhandeparkar.RainbowBoard",
    version: "0.8.1",
  },
  {
    name: "Hashicorp Boundary",
    appId: "Hashicorp.Boundary",
    version: "0.16.1",
  },
  {
    name: "Hashicorp Consul",
    appId: "Hashicorp.Consul",
    version: "1.19.0",
  },
  {
    name: "Hashicorp Nomad",
    appId: "Hashicorp.Nomad",
    version: "1.8.0",
  },
  {
    name: "Packer",
    appId: "Hashicorp.Packer",
    version: "1.11.2",
  },
  {
    name: "Hashicorp Terraform",
    appId: "Hashicorp.Terraform",
    version: "1.9.7",
  },
  {
    name: "Hashicorp Terraform",
    appId: "Hashicorp.Terraform.Alpha",
    version: "1.10.0-alpha2â€¦",
  },
  {
    name: "Hashicorp Terraform",
    appId: "Hashicorp.Terraform.Beta",
    version: "1.7.0-beta2",
  },
  {
    name: "Hashicorp Terraform",
    appId: "Hashicorp.Terraform.RC",
    version: "1.8.0-rc1",
  },
  {
    name: "Vagrant",
    appId: "Hashicorp.Vagrant",
    version: "2.4.1",
  },
  {
    name: "Hashicorp Vault",
    appId: "Hashicorp.Vault",
    version: "1.17.0",
  },
  {
    name: "Hashicorp Waypoint",
    appId: "Hashicorp.Waypoint",
    version: "0.11.3",
  },
  {
    name: "Hasleo Backup Suite",
    appId: "Hasleo.BackupSuiteFree",
    version: "4.9.3",
  },
  {
    name: "Haxe",
    appId: "HaxeFoundation.Haxe",
    version: "4.3.6",
  },
  {
    name: "QuickDash",
    appId: "Hayaku.QuickDash",
    version: "0.6.1",
  },
  {
    name: "Arq 7",
    appId: "HaystackSoftwareLLC.Arq7",
    version: "7.30.3.0",
  },
  {
    name: "æ ¸çƒå¤åˆ¶ç²˜è´´åŠ©æ‰‹",
    appId: "HeSoft.HeSoftClipboard",
    version: "1.4.0",
  },
  {
    name: "æ ¸çƒå›¾ç‰‡æ‰¹é‡æ ‡è®°æ³¨é‡Šå·¥å…·",
    appId: "HeSoft.HeSoftDrawing",
    version: "1.1.0",
  },
  {
    name: "æ ¸çƒå¤šåŠŸèƒ½åª’ä½“ç›¸å†ŒæŸ¥çœ‹å·¥å…·",
    appId: "HeSoft.HeSoftMediaViewer",
    version: "1.4.0",
  },
  {
    name: "æˆ‘çš„ABCè½¯ä»¶å·¥å…·ç®±",
    appId: "HeSoft.WodeABC",
    version: "6.55.1",
  },
  {
    name: "Headlamp",
    appId: "Headlamp.Headlamp",
    version: "0.25.1",
  },
  {
    name: "Headset",
    appId: "Headsetapp.Headset",
    version: "4.2.1",
  },
  {
    name: "Headwind Installer",
    appId: "Headwindsim.HeadwindInstaller",
    version: "1.4.9",
  },
  {
    name: "Heartbeat",
    appId: "HeartbeatChat.Heartbeat",
    version: "1.1.0",
  },
  {
    name: "Hearthstone Deck Tracker",
    appId: "HearthSim.HearthstoneDeckTracker",
    version: "1.34.0",
  },
  {
    name: "FlexHEX",
    appId: "Heaventools.FlexHex",
    version: "2.7",
  },
  {
    name: "PE Explorer",
    appId: "Heaventools.PEexplorer",
    version: "1.99.6",
  },
  {
    name: "Resource Tuner",
    appId: "Heaventools.ResourceTuner",
    version: "2.2",
  },
  {
    name: "Resource Tuner Console",
    appId: "Heaventools.ResourceTunerConsole",
    version: "2.2",
  },
  {
    name: "Hedgewars",
    appId: "Hedgewars.Hedgewars",
    version: "1.0.0",
  },
  {
    name: "HeidiSQL",
    appId: "HeidiSQL.HeidiSQL",
    version: "12.8",
  },
  {
    name: "HeiziFlashTools",
    appId: "Heizi.HeiziFlashTools",
    version: "0.0.8",
  },
  {
    name: "Hekasoft Backup \u0026 Restore",
    appId: "Hekasoft.Backup-Restore",
    version: "0.96",
  },
  {
    name: "BlackThunder",
    appId: "Heliai.BlackThunder",
    version: "2.5.25.2203",
  },
  {
    name: "Helix",
    appId: "Helix.Helix",
    version: "24.07",
  },
  {
    name: "å­—ç”±",
    appId: "Hellofont.Hellofont",
    version: "4.1.1",
  },
  {
    name: "Helm",
    appId: "Helm.Helm",
    version: "3.16.1",
  },
  {
    name: "8GadgetPack",
    appId: "HelmutBuhler.8GadgetPack",
    version: "37.0.0",
  },
  {
    name: "Melodfy",
    appId: "HemantKArya.Melodfy",
    version: "1.0.0.24",
  },
  {
    name: "Nagstamon",
    appId: "HenriWahl.Nagstamon",
    version: "3.14.0",
  },
  {
    name: "Error Lookup",
    appId: "Henry++.ErrorLookup",
    version: "2.4.2",
  },
  {
    name: "Mem Reduct",
    appId: "Henry++.MemReduct",
    version: "3.4",
  },
  {
    name: "Free Shooter",
    appId: "Henry++.freeshooter",
    version: "2.0.7",
  },
  {
    name: "simplewall",
    appId: "Henry++.simplewall",
    version: "3.8.4",
  },
  {
    name: "Link Shell Extension",
    appId: "HermannSchinagl.LinkShellExtension",
    version: "3.9.3.5",
  },
  {
    name: "Ln - Command line Hardlinks",
    appId: "HermannSchinagl.ln",
    version: "2.9.3.4",
  },
  {
    name: "Heroic",
    appId: "HeroicGamesLauncher.HeroicGamesLaâ€¦",
    version: "2.15.2",
  },
  {
    name: "heroku",
    appId: "Heroku.HerokuCLI",
    version: "7.53.0.0",
  },
  {
    name: "He3",
    appId: "Hesan.He3",
    version: "2.0.20",
  },
  {
    name: "hcloud",
    appId: "HetznerCloud.CLI",
    version: "1.46.0",
  },
  {
    name: "IDA Freeware",
    appId: "Hex-Rays.IDA.Free",
    version: "8.4",
  },
  {
    name: "HexChat",
    appId: "HexChat.HexChat",
    version: "2.16.1",
  },
  {
    name: "Desktop Icon Togglex",
    appId: "Hexandcube.DesktopIconToggle",
    version: "1.4",
  },
  {
    name: "HiBit Uninstaller",
    appId: "HiBitSoftware.HiBitUninstaller",
    version: "3.2.40.100",
  },
  {
    name: "HiBit Startup Manager",
    appId: "HiBitSoftware.StartUpManager",
    version: "2.6.50.100",
  },
  {
    name: "Chromium",
    appId: "Hibbiki.Chromium",
    version: "129.0.6668.71",
  },
  {
    name: "Hiddify Next",
    appId: "Hiddify.Next",
    version: "2.0.5",
  },
  {
    name: "Hiddify Next Beta",
    appId: "Hiddify.Next.Beta",
    version: "2.3.1",
  },
  {
    name: "SciDAVis",
    appId: "HighPerformanceCoders.SciDAVis",
    version: "2.8",
  },
  {
    name: "X-Mouse Button Control",
    appId: "Highresolution.X-MouseButtonContrâ€¦",
    version: "2.20.5",
  },
  {
    name: "chainhook",
    appId: "HiroSystems.Chainhook",
    version: "1.8.0",
  },
  {
    name: "clarinet",
    appId: "HiroSystems.Clarinet",
    version: "2.9.0",
  },
  {
    name: "onecopy-electron",
    appId: "HiroshiFuu.onecopy",
    version: "1.0.3",
  },
  {
    name: "VOICEVOX",
    appId: "HiroshibaKazuyuki.VOICEVOX",
    version: "0.19.1",
  },
  {
    name: "VOICEVOX",
    appId: "HiroshibaKazuyuki.VOICEVOX.CPU",
    version: "0.19.1",
  },
  {
    name: "NoteBook FanControl",
    appId: "Hirschmann.NotebookFanControl",
    version: "1.6.3.0",
  },
  {
    name: "é¸¿åˆÏ€6",
    appId: "HiteVision.HitePai6",
    version: "6.2.312",
  },
  {
    name: "æžé€ŸPDFé˜…è¯»å™¨",
    appId: "Hitencent.JisuPDF",
    version: "3.0.0.3033",
  },
  {
    name: "æžé€ŸPDFç¼–è¾‘å™¨",
    appId: "Hitencent.JisuPDFEditor",
    version: "3",
  },
  {
    name: "æžé€ŸPDFè½¬WORD",
    appId: "Hitencent.JisuPDFToWord",
    version: "3.0.0.8",
  },
  {
    name: "æžé€ŸçŽ©è½¬",
    appId: "Hitencent.JisuTodo",
    version: "3.0.0.2",
  },
  {
    name: "Momentum",
    appId: "HolmeZ.Momentum",
    version: "3.0.0",
  },
  {
    name: "HomeBank",
    appId: "HomeBank.HomeBank",
    version: "5.8.3",
  },
  {
    name: "Cortexso",
    appId: "Homebrew.Cortexso",
    version: "0.5.0-8",
  },
  {
    name: "HonorSuite",
    appId: "Honor.HonorSuite",
    version: "11.0.0.712",
  },
  {
    name: "Project Plan 365",
    appId: "Housatonic.ProjectPlan365",
    version: "24.17.1256",
  },
  {
    name: "Project Plan 365",
    appId: "Housatonic.ProjectViewer365",
    version: "24.9.1243",
  },
  {
    name: "AppGallery",
    appId: "Huawei.AppGallery",
    version: "14.2.1.301",
  },
  {
    name: "DevEco Studio",
    appId: "Huawei.DevEco",
    version: "223.8617.56.3â€¦",
  },
  {
    name: "DevEco Device Tool",
    appId: "Huawei.DevEcoDeviceTool",
    version: "4.0.0.400",
  },
  {
    name: "HiSuite",
    appId: "Huawei.HiSuite",
    version: "14.0.0.320",
  },
  {
    name: "HUAWEI Browser",
    appId: "Huawei.HuaweiBrowser",
    version: "12.1.3.310",
  },
  {
    name: "HUAWEI CLOUD Meeting",
    appId: "Huawei.HuaweiCloudMeeting",
    version: "10.7.5",
  },
  {
    name: "Cloud",
    appId: "Huawei.HuaweiMobileCloud",
    version: "15.2.0.300",
  },
  {
    name: "IdeaShare",
    appId: "Huawei.IdeaShare",
    version: "7.03.1.01",
  },
  {
    name: "Project",
    appId: "Huawei.IdeaShareProject",
    version: "6.19.0.39",
  },
  {
    name: "KooCLI",
    appId: "Huawei.KooCLI",
    version: "5.3.13",
  },
  {
    name: "PC Clone",
    appId: "Huawei.PCClone",
    version: "14.0.3.300(C2â€¦",
  },
  {
    name: "Huawei QuickApp IDE",
    appId: "Huawei.QuickAppIde",
    version: "14.0.1",
  },
  {
    name: "HuaweiPCAssistant",
    appId: "Huawei.QuickAppPCAssistant",
    version: "3.2.2",
  },
  {
    name: "Welink",
    appId: "Huawei.Welink",
    version: "7.44.5",
  },
  {
    name: "Reemo",
    appId: "Hubitech.Reemo",
    version: "1.0.0",
  },
  {
    name: "Hugin",
    appId: "Hugin.Hugin",
    version: "20.23.0",
  },
  {
    name: "Hugo",
    appId: "Hugo.Hugo",
    version: "0.135.0",
  },
  {
    name: "Hugo (Extended)",
    appId: "Hugo.Hugo.Extended",
    version: "0.135.0",
  },
  {
    name: "Advanced Renamer",
    appId: "HulubuluSoftware.AdvancedRenamer",
    version: "3.91",
  },
  {
    name: "DJV2",
    appId: "Humanity.DJV2",
    version: "2.0.8",
  },
  {
    name: "Humble App",
    appId: "HumbleBundle.HumbleApp",
    version: "1.1.8+411",
  },
  {
    name: "HuyaClient",
    appId: "Huya.Huya",
    version: "7.0.1.0",
  },
  {
    name: "HuyaMiniClient",
    appId: "Huya.Huya.Mini",
    version: "1.12.0.0",
  },
  {
    name: "hybrid-saas",
    appId: "HybridSaaS.HybridSaaS",
    version: "24.8.36242",
  },
  {
    name: "Hydra",
    appId: "HydraLauncher.Hydra",
    version: "2.1.7",
  },
  {
    name: "Conveyor",
    appId: "Hydraulic.Conveyor",
    version: "15.0.0.0",
  },
  {
    name: "Hydrogen (Advanced drum machinâ€¦",
    appId: "Hydrogen-Music.Hydrogen",
    version: "1.2.3",
  },
  {
    name: "HEC-DSSVue",
    appId: "HydrologicEngineeringCenter.HEC-Dâ€¦",
    version: "3.2.3",
  },
  {
    name: "HEC-EFM",
    appId: "HydrologicEngineeringCenter.HEC-Eâ€¦",
    version: "5",
  },
  {
    name: "HEC-EFM Plotter",
    appId: "HydrologicEngineeringCenter.HEC-Eâ€¦",
    version: "3.1",
  },
  {
    name: "HEC-FDA",
    appId: "HydrologicEngineeringCenter.HEC-Fâ€¦",
    version: "1.4.3",
  },
  {
    name: "HEC-HMS",
    appId: "HydrologicEngineeringCenter.HEC-Hâ€¦",
    version: "4.1",
  },
  {
    name: "HEC-MetVue",
    appId: "HydrologicEngineeringCenter.HEC-Mâ€¦",
    version: "3.1",
  },
  {
    name: "HEC-RAS",
    appId: "HydrologicEngineeringCenter.HEC-Râ€¦",
    version: "6.4.1",
  },
  {
    name: "HEC-RPT",
    appId: "HydrologicEngineeringCenter.HEC-Râ€¦",
    version: "2",
  },
  {
    name: "HEC-ResSim",
    appId: "HydrologicEngineeringCenter.HEC-Râ€¦",
    version: "3.3",
  },
  {
    name: "HEC-SSP",
    appId: "HydrologicEngineeringCenter.HEC-Sâ€¦",
    version: "2.2",
  },
  {
    name: "Hydrus Network",
    appId: "HydrusNetwork.HydrusNetwork",
    version: "v592",
  },
  {
    name: "HyperSnap 9",
    appId: "Hyperionics.HyperSnap9",
    version: "9.5.1",
  },
  {
    name: "Hyperamp",
    appId: "Hypermodules.Hyperamp",
    version: "1.0.8",
  },
  {
    name: "Hyperspace Desktop",
    appId: "HyperspaceDev.HyperspaceDesktop",
    version: "1.1.4",
  },
  {
    name: "Cloud Drive Mapper",
    appId: "IAMCloud.CloudDriveMapper",
    version: "2.21.0.1",
  },
  {
    name: "HelpNDoc",
    appId: "IBESoftware.HelpNDoc",
    version: "6.9.0.577",
  },
  {
    name: "IBM Cloud CLI",
    appId: "IBM.Cloud.CLI",
    version: "2.16.1",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.11.JDK",
    version: "11.0.24.8",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.11.JRE",
    version: "11.0.24.8",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.16.JDK",
    version: "11.0.23.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.16.JRE",
    version: "11.0.23.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.17.JDK",
    version: "17.0.12.7",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.17.JRE",
    version: "17.0.12.7",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.18.JDK",
    version: "18.0.2.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.18.JRE",
    version: "18.0.2.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.19.JDK",
    version: "19.0.2.7",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.19.JRE",
    version: "19.0.2.7",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.20.JDK",
    version: "20.0.2.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.20.JRE",
    version: "20.0.2.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.21.JDK",
    version: "21.0.4.7",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.21.JRE",
    version: "21.0.4.7",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.22.JDK",
    version: "22.0.2.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.22.JRE",
    version: "22.0.2.9",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.8.JDK",
    version: "8.0.422.5",
  },
  {
    name: "IBM Semeru Runtime Open Editioâ€¦",
    appId: "IBM.Semeru.8.JRE",
    version: "8.0.422.5",
  },
  {
    name: "ICBCChromeExtension",
    appId: "ICBC.ICBCChromeExtension",
    version: "1.2.0.0",
  },
  {
    name: "ICBCEBankAssist",
    appId: "ICBC.ICBCEBankAssist",
    version: "2.4.3.0",
  },
  {
    name: "SecEditCtlHostAdv.ICBC.Setup",
    appId: "ICBC.SecEditCtl",
    version: "3.2.3.1",
  },
  {
    name: "ReadPaper",
    appId: "IDEA.ReadPaper",
    version: "1.29.0",
  },
  {
    name: "UEStudio",
    appId: "IDMComputerSolutions,Inc.UEStudio",
    version: "24.1.32",
  },
  {
    name: "UltraEdit",
    appId: "IDMComputerSolutions,Inc.UltraEdit",
    version: "31.0.35",
  },
  {
    name: "DirHash",
    appId: "IDRIX.DirHash",
    version: "1.24.0",
  },
  {
    name: "VeraCrypt",
    appId: "IDRIX.VeraCrypt",
    version: "1.26.15",
  },
  {
    name: "é›…æ€å“¥æœºè€ƒè½¯ä»¶",
    appId: "IELTSBRO.IELTS-PC",
    version: "2.1.9",
  },
  {
    name: "IGClient",
    appId: "IG.IGClient",
    version: "1.8.5",
  },
  {
    name: "IHK-GfI signature and print clâ€¦",
    appId: "IHK.SignaturePrintClient",
    version: "3.13.0.0",
  },
  {
    name: "IHMC CmapTools",
    appId: "IHMC.CmapTools",
    version: "6.0.4.0",
  },
  {
    name: "QtPass",
    appId: "IJHack.QtPass",
    version: "1.4.0",
  },
  {
    name: "CamScanner",
    appId: "INTSIG.CamScanner",
    version: "1.1.3",
  },
  {
    name: "Advanced SystemCare",
    appId: "IObit.AdvancedSystemCare",
    version: "17.6.0.322",
  },
  {
    name: "Driver Booster",
    appId: "IObit.DriverBooster",
    version: "11.6.0",
  },
  {
    name: "IObit Software Updater",
    appId: "IObit.IObitSoftwareUpdater",
    version: "7.1.1.21",
  },
  {
    name: "IObit SysInfo",
    appId: "IObit.IObitSysInfo",
    version: "1.0.0.16",
  },
  {
    name: "IObit Undelete",
    appId: "IObit.IObitUndelete",
    version: "1.0.0.369",
  },
  {
    name: "IObit Unlocker",
    appId: "IObit.IObitUnlocker",
    version: "1.3.0.11",
  },
  {
    name: "IObit Malware Fighter",
    appId: "IObit.MalwareFighter",
    version: "11.4.0.1360",
  },
  {
    name: "Protected Folder",
    appId: "IObit.ProtectedFolder",
    version: "4.3.0.51",
  },
  {
    name: "Random Password Generator",
    appId: "IObit.RandomPasswordGenerator",
    version: "1.3",
  },
  {
    name: "Smart Defrag",
    appId: "IObit.SmartDefrag",
    version: "10.1.0.419",
  },
  {
    name: "IObit Uninstaller",
    appId: "IObit.Uninstaller",
    version: "13.6.0.5",
  },
  {
    name: "iFun Screen Recorder",
    appId: "IObit.iFunScreenRecorder",
    version: "1.2.0.261",
  },
  {
    name: "iFun Screenshot",
    appId: "IObit.iFunScreenshot",
    version: "1.2.0.526",
  },
  {
    name: "Scantailor-Experimental",
    appId: "IPEP.Scantailor-Experimental",
    version: "1.2024.09.14",
  },
  {
    name: "IPFS Desktop",
    appId: "IPFS.IPFS-Desktop",
    version: "0.38.0",
  },
  {
    name: "Best Trace",
    appId: "IPIP.BestTrace",
    version: "3.9.3.0",
  },
  {
    name: "CoolTools",
    appId: "IPU.CoolTools",
    version: "1.1.0",
  },
  {
    name: "coolpack",
    appId: "IPU.coolpack",
    version: "1.5",
  },
  {
    name: "IPVanish",
    appId: "IPVanish.IPVanish",
    version: "4.2.7.6",
  },
  {
    name: "SugarSync",
    appId: "IPVanish.SugarSync",
    version: "4.1.3.2",
  },
  {
    name: "IRCCloud",
    appId: "IRCCloud.IRCCloud",
    version: "0.16.0",
  },
  {
    name: "UUP Media Creator",
    appId: "ITDevTeam.UUPMediaCreator",
    version: "3.0.26.0",
  },
  {
    name: "ITK-SNAP",
    appId: "ITK-SNAP.ITK-SNAP",
    version: "4.0.2",
  },
  {
    name: "VuePress å›¾ç‰‡ä¸‹è½½å·¥å…·",
    appId: "ITLDG.DocImageDownload",
    version: "1.0.0",
  },
  {
    name: "QuickSECS",
    appId: "ITRI.QuickSECS",
    version: "2.3.05",
  },
  {
    name: "IVPN Client",
    appId: "IVPN.IVPN",
    version: "3.14.17",
  },
  {
    name: "IZArc",
    appId: "IZArc.IZArc",
    version: "4.5",
  },
  {
    name: "Jellyfin MPV Shim",
    appId: "IanWalton.JellyfinMPVShim",
    version: "2.8.0",
  },
  {
    name: "Icarus Verilog",
    appId: "Icarus.Verilog",
    version: "12.2022.06.11",
  },
  {
    name: "IceChat",
    appId: "IceChat.IceChat",
    version: "9.53",
  },
  {
    name: "Icecat",
    appId: "Icecat.Icecat",
    version: "115.8.0esr",
  },
  {
    name: "Icecream Ebook Reader 6 Versioâ€¦",
    appId: "IcecreamApps.IcecreamEbookReader",
    version: "6.51",
  },
  {
    name: "PDF Candy Desktop",
    appId: "IcecreamApps.PDFCandy",
    version: "3.13",
  },
  {
    name: "Icedrive",
    appId: "Icedrive.Desktop",
    version: "3.11",
  },
  {
    name: "icofx 3",
    appId: "IcoFXSoftware.icofx",
    version: "3.9",
  },
  {
    name: "Lunacy",
    appId: "Icons8.Lunacy",
    version: "10.2.0.0",
  },
  {
    name: "Iconscout",
    appId: "Iconscout.Iconscout",
    version: "1.0.1",
  },
  {
    name: "TfsCmdlets",
    appId: "Igoravl.TfsCmdlets",
    version: "2.9.0",
  },
  {
    name: "Makerlapse",
    appId: "IliasHad.makerlapse",
    version: "1.2.6",
  },
  {
    name: "dBpoweramp Codec Central: m4a â€¦",
    appId: "Illustrate.dBpowerampAACiTunesEncâ€¦",
    version: "R2",
  },
  {
    name: "dBpoweramp Codec Central: CLI â€¦",
    appId: "Illustrate.dBpowerampCLIEncoder",
    version: "R6",
  },
  {
    name: "dBpoweramp Codec Central: Ogg â€¦",
    appId: "Illustrate.dBpowerampOggVorbisEncâ€¦",
    version: "R27",
  },
  {
    name: "dBpoweramp Codec Central: Waveâ€¦",
    appId: "Illustrate.dBpowerampWave64Encoder",
    version: "R2",
  },
  {
    name: "FL Studio",
    appId: "ImageLine.FLStudio",
    version: "24.1.1.4285",
  },
  {
    name: "ImageMagick Q16-HDRI",
    appId: "ImageMagick.ImageMagick",
    version: "7.1.1.38",
  },
  {
    name: "ImageMagick Q16",
    appId: "ImageMagick.ImageMagick.Q16",
    version: "7.1.1.38",
  },
  {
    name: "ImageMagick Q8",
    appId: "ImageMagick.ImageMagick.Q8",
    version: "7.1.1.38",
  },
  {
    name: "ImageMagick Q16-HDRI",
    appId: "ImageMagick.Q16-HDRI",
    version: "7.1.1.38",
  },
  {
    name: "gifski",
    appId: "ImageOptim.gifski",
    version: "1.14.4",
  },
  {
    name: "Squiid",
    appId: "ImaginaryInfinity.Squiid",
    version: "1.1.1",
  },
  {
    name: "DarkSwitcher",
    appId: "Iminetsoft.DarkSwitcher",
    version: "1.2.8463",
  },
  {
    name: "HashTab",
    appId: "Implbits.HashTab",
    version: "6.0.0.34",
  },
  {
    name: "Loop Email",
    appId: "InTheLoop.LoopEmail",
    version: "7.0.5",
  },
  {
    name: "Loop Email (Beta)",
    appId: "InTheLoop.LoopEmail.Beta",
    version: "6.23.20",
  },
  {
    name: "Access",
    appId: "Indent.Access",
    version: "0.10.13",
  },
  {
    name: "Dr.Explain",
    appId: "IndigoByte.DrExplain",
    version: "6.8.1310",
  },
  {
    name: "cybr-cli",
    appId: "InfamousJoeG.cybr-cli",
    version: "1.0.1",
  },
  {
    name: "Kodu Game Lab",
    appId: "InfiniteInstant.KoduGameLab",
    version: "1.6.12",
  },
  {
    name: "Reactotron",
    appId: "InfiniteRed.Reactotron",
    version: "3.7.0.3018",
  },
  {
    name: "Infracost",
    appId: "Infracost.Infracost",
    version: "0.10.38",
  },
  {
    name: "WinShell",
    appId: "IngoHdeBoer.WinShell",
    version: "4.0.0.6",
  },
  {
    name: "Pingus",
    appId: "IngoRuhnke.Pingus",
    version: "0.7.6",
  },
  {
    name: "Ini Translator",
    appId: "IniTranslator.IniTranslator",
    version: "1.9.0.52",
  },
  {
    name: "Proxifier",
    appId: "Initex.Proxifier",
    version: "4.12",
  },
  {
    name: "YogaDNS",
    appId: "Initex.YogaDNS",
    version: "1.45",
  },
  {
    name: "Ink/Stitch",
    appId: "InkStitch.InkStitch",
    version: "3.0.1",
  },
  {
    name: "Inkscape",
    appId: "Inkscape.Inkscape",
    version: "1.3.2",
  },
  {
    name: "FaFa Runner",
    appId: "Insco.FaFaRunner",
    version: "1.0.0.358",
  },
  {
    name: "PicGuard",
    appId: "Insco.PicGuard",
    version: "1.0.1.406",
  },
  {
    name: "Nmap",
    appId: "Insecure.Nmap",
    version: "7.8",
  },
  {
    name: "Npcap",
    appId: "Insecure.Npcap",
    version: "0.86",
  },
  {
    name: "Inso CLI",
    appId: "Insomnia.Inso",
    version: "2023.5.8",
  },
  {
    name: "Insomnia",
    appId: "Insomnia.Insomnia",
    version: "10.0.0",
  },
  {
    name: "InstEd",
    appId: "InstEd.InstEd",
    version: "1.5.15.26",
  },
  {
    name: "Insta360 Link Controller",
    appId: "Insta360.Link.Controller",
    version: "1.3.0",
  },
  {
    name: "Instant Housecall",
    appId: "InstantHousecall.InstantHousecall",
    version: "7.0.2.0",
  },
  {
    name: "Instatus Out",
    appId: "Instatus.Out",
    version: "1.0.8",
  },
  {
    name: "Insync",
    appId: "Insynchq.Insync",
    version: "3.8.6.50504",
  },
  {
    name: "FortranCompiler",
    appId: "Intel.FortranCompiler",
    version: "2024.2.1",
  },
  {
    name: "IntelÂ® Driver \u0026 Support Assistâ€¦",
    appId: "Intel.IntelDriverAndSupportAssistâ€¦",
    version: "24.5.40.11",
  },
  {
    name: "Iometer",
    appId: "Intel.Iometer",
    version: "1.1.0",
  },
  {
    name: "OSPRay",
    appId: "Intel.OSPRay",
    version: "3.1.0",
  },
  {
    name: "Intel(R) PresentMon",
    appId: "Intel.PresentMon",
    version: "2.2.0.0",
  },
  {
    name: "Intel PresentMon",
    appId: "Intel.PresentMon.Beta",
    version: "0.6.0.0",
  },
  {
    name: "PresentMon Console",
    appId: "Intel.PresentMon.Console",
    version: "2.2.0.0",
  },
  {
    name: "Intel oneAPI MKL",
    appId: "Intel.oneMKL",
    version: "2024.2.1",
  },
  {
    name: "Internxt Drive",
    appId: "Internxt.Drive",
    version: "2.0.5",
  },
  {
    name: "Interprocess Gemed Oncologia",
    appId: "Interprocess.GemedOncologia",
    version: "1.4.1",
  },
  {
    name: "Invisible Man XRay",
    appId: "InvisibleMan.InvisibleManXRay",
    version: "2.3.2",
  },
  {
    name: "Invizi",
    appId: "Invizi.Invizi",
    version: "1.0.0",
  },
  {
    name: "Invo Connect",
    appId: "Invo.InvoConnect",
    version: "1.7.4.335",
  },
  {
    name: "IrfanView",
    appId: "IrfanSkiljan.IrfanView",
    version: "4.67",
  },
  {
    name: "IrfanView PlugIns",
    appId: "IrfanSkiljan.IrfanView.PlugIns",
    version: "4.67",
  },
  {
    name: "CompactGUI",
    appId: "IridiumIO.CompactGUI",
    version: "3.5.1",
  },
  {
    name: "FullWave Viewer II",
    appId: "IrisInstruments.FullWaveViewerII",
    version: "1.0.35",
  },
  {
    name: "Iriun VR Server",
    appId: "Iriun.IriunVR",
    version: "2.4",
  },
  {
    name: "PowerShell Universal",
    appId: "IronmanSoftware.PowerShellUniversâ€¦",
    version: "5.0.0",
  },
  {
    name: "PowerShell Universal Desktop",
    appId: "IronmanSoftware.PowerShellUniversâ€¦",
    version: "4.0.12",
  },
  {
    name: "IsWiX",
    appId: "IsWiX.IsWiX",
    version: "5.0.53.0",
  },
  {
    name: "Aventuras de quintal",
    appId: "IsaqueS.AventurasDeQuintal",
    version: "1.0.0",
  },
  {
    name: "Istio",
    appId: "Istio.Istio",
    version: "1.22.2",
  },
  {
    name: "itch",
    appId: "ItchIo.Itch",
    version: "25.5.1",
  },
  {
    name: "Cyberduck",
    appId: "Iterate.Cyberduck",
    version: "9.0.3.42112",
  },
  {
    name: "Mountain Duck",
    appId: "Iterate.MountainDuck",
    version: "4.15.6.21921",
  },
  {
    name: "Data Version Control",
    appId: "Iterative.DVC",
    version: "2.58.2",
  },
  {
    name: "Geonkick Plugin",
    appId: "IurieNistor.GeonkickPlugin",
    version: "3.4.0",
  },
  {
    name: "Classic Shell",
    appId: "IvoSoft.ClassicShell",
    version: "4.3.1",
  },
  {
    name: "FileList",
    appId: "JAMSoftware.FileList",
    version: "4.3.2",
  },
  {
    name: "HeavyLoad",
    appId: "JAMSoftware.HeavyLoad",
    version: "3.9.1",
  },
  {
    name: "TreeSize",
    appId: "JAMSoftware.TreeSize",
    version: "9.2",
  },
  {
    name: "TreeSize Free",
    appId: "JAMSoftware.TreeSize.Free",
    version: "4.7.3",
  },
  {
    name: "UltraSearch",
    appId: "JAMSoftware.UltraSearch",
    version: "4.4.1",
  },
  {
    name: "HiOffice",
    appId: "JD.HiOffice",
    version: "3.1.1.9",
  },
  {
    name: "JoyMeeting",
    appId: "JD.JoyMeeting",
    version: "V1.1.6.230907",
  },
  {
    name: "The Silver Searcher",
    appId: "JFLarvoire.Ag",
    version: "2.2.5",
  },
  {
    name: "JFrog CLI",
    appId: "JFrog.Cli",
    version: "2.49.0",
  },
  {
    name: "Conan Package Manager",
    appId: "JFrog.Conan",
    version: "2.7.1",
  },
  {
    name: "draw.io",
    appId: "JGraph.Draw",
    version: "24.7.17",
  },
  {
    name: "vDos",
    appId: "JHMSchaars.vDos",
    version: "2015.04.10",
  },
  {
    name: "JCPlayer",
    appId: "JIACHENG135.JCPlayer",
    version: "1.1.4",
  },
  {
    name: "fswt",
    appId: "JIAYOU.FSWT",
    version: "1.0.0.0",
  },
  {
    name: "EasyEDA",
    appId: "JLC.EasyEDA",
    version: "6.5.46",
  },
  {
    name: "EasyEDA Pro",
    appId: "JLC.EasyEDA.Pro",
    version: "2.2.28.1",
  },
  {
    name: "å˜‰ç«‹åˆ›EDA",
    appId: "JLC.LCEDA",
    version: "6.5.46",
  },
  {
    name: "å˜‰ç«‹åˆ›EDA(ä¸“ä¸šç‰ˆ)",
    appId: "JLC.LCEDA.Pro",
    version: "2.2.31.6",
  },
  {
    name: "JPEXS Free Flash Decompiler",
    appId: "JPEXS.FFDec",
    version: "21.1.0",
  },
  {
    name: "LGTVCompanion",
    appId: "JPersson77.LGTVCompanion",
    version: "3.4.0",
  },
  {
    name: "Inno Setup",
    appId: "JRSoftware.InnoSetup",
    version: "6.3.3",
  },
  {
    name: "JRiver Media Center",
    appId: "JRiver.MediaCenter",
    version: "31",
  },
  {
    name: "Appium Server GUI",
    appId: "JSFoundation.Appium",
    version: "1.22.3",
  },
  {
    name: "JTDX",
    appId: "JTDX.JTDX",
    version: "2.2.159",
  },
  {
    name: "JoyToKey",
    appId: "JTKsoftware.JoyToKey",
    version: "7.0.0",
  },
  {
    name: "JTL-Wawi",
    appId: "JTL.Wawi",
    version: "1.9.4.5",
  },
  {
    name: "JumpGo Browser",
    appId: "JTechMe.JumpGoBrowser.Legacy",
    version: "4.4",
  },
  {
    name: "JabRef",
    appId: "JabRef.JabRef",
    version: "5.15.60000",
  },
  {
    name: "SprintPlus Viewer",
    appId: "Jabbla.SprintPlusViewer",
    version: "3.0.0.920",
  },
  {
    name: "Jabra Direct",
    appId: "Jabra.Direct",
    version: "6.18.26101",
  },
  {
    name: "Lux",
    appId: "JackDevey.Lux",
    version: "1.1.1",
  },
  {
    name: "Socially",
    appId: "JackHumphries.Socially",
    version: "1.0.0",
  },
  {
    name: "icnsify",
    appId: "JackMordaunt.icnsify",
    version: "2.2.7",
  },
  {
    name: "JACK2",
    appId: "Jackaudio.JACK2",
    version: "v1.9.22",
  },
  {
    name: "Jackbox Utility",
    appId: "Jackbox.Utility",
    version: "1.4.2+2",
  },
  {
    name: "Jackett",
    appId: "Jackett.Jackett",
    version: "0.22.703",
  },
  {
    name: "Notepads",
    appId: "JackieLiu.NotepadsApp",
    version: "1.5.5.0",
  },
  {
    name: "Instigator",
    appId: "Jacksta.Instigator",
    version: "2.1.1",
  },
  {
    name: "Oldschool RuneScape",
    appId: "Jagex.OldSchoolRunescape",
    version: "1.2.7",
  },
  {
    name: "Runescape Launcher",
    appId: "Jagex.Runescape",
    version: "2.2.11",
  },
  {
    name: "NxFilter",
    appId: "Jahastech.NxFilter",
    version: "4.6.9.4",
  },
  {
    name: "jdAppStreamEdit",
    appId: "JakobDev.jdAppStreamEdit",
    version: "9.1",
  },
  {
    name: "jdDesktopEntryEdit",
    appId: "JakobDev.jdDesktopEntryEdit",
    version: "1.4",
  },
  {
    name: "jdMinecraftLauncher",
    appId: "JakobDev.jdMinecraftLauncher",
    version: "6",
  },
  {
    name: "jdMrpackInstaller",
    appId: "JakobDev.jdMrpackInstaller",
    version: "1",
  },
  {
    name: "jdNBTExplorer",
    appId: "JakobDev.jdNBTExplorer",
    version: "2.1",
  },
  {
    name: "jdReplace",
    appId: "JakobDev.jdReplace",
    version: "4.2",
  },
  {
    name: "jdTextEdit",
    appId: "JakobDev.jdTextEdit",
    version: "11.1",
  },
  {
    name: "Atlas",
    appId: "JakobHellermann.Atlas",
    version: "1.2.0.0",
  },
  {
    name: "Universal x86 Tuning Utility",
    appId: "JamesCJ60.Universalx86TuningUtiliâ€¦",
    version: "2.3.2",
  },
  {
    name: "SPIM",
    appId: "JamesLarus.SPIM",
    version: "9.1.21",
  },
  {
    name: "Hourglass",
    appId: "JamesWestman.Hourglass",
    version: "0.9.4",
  },
  {
    name: "MIDI-OX",
    appId: "JamieOConnell.MIDI-OX",
    version: "7.0.2",
  },
  {
    name: "CacheMonkey",
    appId: "JamiePine.CacheMonkey",
    version: "1.0.7",
  },
  {
    name: "Jan",
    appId: "Jan.Jan",
    version: "0.5.5",
  },
  {
    name: "Aliae",
    appId: "JanDeDobbeleer.Aliae",
    version: "0.22.2",
  },
  {
    name: "Oh My Posh",
    appId: "JanDeDobbeleer.OhMyPosh",
    version: "23.15.3",
  },
  {
    name: "PSPad editor",
    appId: "JanFiala.PSpad.x64",
    version: "5.0.7.775",
  },
  {
    name: "PSPad editor",
    appId: "JanFiala.PSpad.x86",
    version: "5.0.7.775",
  },
  {
    name: "Time Series Admin",
    appId: "JanGrzegorowski.TimeSeriesAdmin",
    version: "0.1.13",
  },
  {
    name: "ipaSim",
    appId: "JanJoneÅ¡.ipaSim",
    version: "1.0.1.0",
  },
  {
    name: "DbGate",
    appId: "JanProchazka.dbgate",
    version: "5.5.3",
  },
  {
    name: "Janet",
    appId: "JanetLang.Janet",
    version: "1.33.0",
  },
  {
    name: "Blockbench",
    appId: "JannisX11.Blockbench",
    version: "4.9.4",
  },
  {
    name: "Hard Disk Sentinel",
    appId: "JanosMathe.HardDiskSentinel",
    version: "6.2",
  },
  {
    name: "Hard Disk Sentinel Professional",
    appId: "JanosMathe.HardDiskSentinelPro",
    version: "6.2",
  },
  {
    name: "Ant Commander Personal",
    appId: "Japplis.AntCommander.Personal",
    version: "4.14",
  },
  {
    name: "Ant Commander Pro",
    appId: "Japplis.AntCommander.Pro",
    version: "4.14",
  },
  {
    name: "Applet Runner Pro",
    appId: "Japplis.AppletRunnerPro",
    version: "2.12",
  },
  {
    name: "Japplis Clipboard History",
    appId: "Japplis.ClipboardHistory",
    version: "1.1",
  },
  {
    name: "Japplis Clipboard History Pro",
    appId: "Japplis.ClipboardHistory.Pro",
    version: "1.1",
  },
  {
    name: "Control Dashboard",
    appId: "Japplis.ControlDashboard",
    version: "1.1",
  },
  {
    name: "Control Dashboard Pro",
    appId: "Japplis.ControlDashboard.Pro",
    version: "1.1",
  },
  {
    name: "Decoration",
    appId: "Japplis.Decoration",
    version: "5.4",
  },
  {
    name: "The Desktop Watchmaker",
    appId: "Japplis.DesktopWatchmaker",
    version: "3.3",
  },
  {
    name: "The Desktop Watchmaker Widget",
    appId: "Japplis.DesktopWatchmaker.Widget",
    version: "1.3",
  },
  {
    name: "Dictaphone",
    appId: "Japplis.Dictaphone",
    version: "1.1",
  },
  {
    name: "Directory Crop",
    appId: "Japplis.DirectoryCrop",
    version: "1.2",
  },
  {
    name: "Discotheek",
    appId: "Japplis.Discotheek",
    version: "1.5",
  },
  {
    name: "JLearnIt",
    appId: "Japplis.JLearnIt",
    version: "6.7",
  },
  {
    name: "M2 Repo Cleaner",
    appId: "Japplis.M2RepoCleaner",
    version: "1",
  },
  {
    name: "Japplis Pastel",
    appId: "Japplis.Pastel",
    version: "1.2",
  },
  {
    name: "Post On Screen",
    appId: "Japplis.PostOnScreen",
    version: "1.2",
  },
  {
    name: "Post On Screen Pro",
    appId: "Japplis.PostOnScreen.Pro",
    version: "1.2",
  },
  {
    name: "Poster Font",
    appId: "Japplis.PosterFont",
    version: "1.2",
  },
  {
    name: "Poster Font Light",
    appId: "Japplis.PosterFont.Light",
    version: "1.1",
  },
  {
    name: "Screen Highlighter",
    appId: "Japplis.ScreenHighlighter",
    version: "1.1",
  },
  {
    name: "Screen Highlighter Pro",
    appId: "Japplis.ScreenHighlighter.Pro",
    version: "1.1",
  },
  {
    name: "Screenshot Crop",
    appId: "Japplis.ScreenshotCrop",
    version: "1.2",
  },
  {
    name: "Sheet Stats",
    appId: "Japplis.SheetStats",
    version: "1.1",
  },
  {
    name: "Sheet Viewer",
    appId: "Japplis.SheetViewer",
    version: "1.2",
  },
  {
    name: "Japplis Toolbox",
    appId: "Japplis.Toolbox",
    version: "5.7",
  },
  {
    name: "Japplis Toolbox Pro",
    appId: "Japplis.Toolbox.Pro",
    version: "5.7",
  },
  {
    name: "Tree Data Explorer",
    appId: "Japplis.TreeDataExplorer",
    version: "1.1",
  },
  {
    name: "Treecell",
    appId: "Japplis.Treecell",
    version: "1.3",
  },
  {
    name: "VR Photo Converter",
    appId: "Japplis.VRPhotoConverter",
    version: "2.2",
  },
  {
    name: "Japplis Watch",
    appId: "Japplis.Watch",
    version: "1.9",
  },
  {
    name: "Japplis Watch Pro",
    appId: "Japplis.Watch.Pro",
    version: "1.9",
  },
  {
    name: "Japplis Website Optimizer",
    appId: "Japplis.WebsiteOptimizer",
    version: "4.2",
  },
  {
    name: "NBTExplorer",
    appId: "Jaquadro.NBTExplorer",
    version: "2.8.0.0",
  },
  {
    name: "Nova",
    appId: "Jasmine.Nova",
    version: "1.6.1",
  },
  {
    name: "MozBackup",
    appId: "JasnaPaka.MozBackup",
    version: "1.5.1",
  },
  {
    name: "code-radio-cli",
    appId: "JasonWei512.code-radio-cli",
    version: "1.0.5",
  },
  {
    name: "Lua JLS",
    appId: "JavaLikeScript.LuaJLS",
    version: "0.7.3",
  },
  {
    name: "Color Cop",
    appId: "JayPrall.ColorCop",
    version: "5.4.3",
  },
  {
    name: "catalyst",
    appId: "JaydenDev.Catalyst",
    version: "3.5.4",
  },
  {
    name: "Catalyst3",
    appId: "JaydenDev.Catalyst3",
    version: "3.2.2",
  },
  {
    name: "mGBA",
    appId: "JeffreyPfau.mGBA",
    version: "0.10.3",
  },
  {
    name: "Jellyfin Media Player",
    appId: "Jellyfin.JellyfinMediaPlayer",
    version: "1.11.1",
  },
  {
    name: "Jellyfin Server",
    appId: "Jellyfin.Server",
    version: "10.9.11",
  },
  {
    name: "Vieb",
    appId: "Jelmerro.Vieb",
    version: "12.0.0",
  },
  {
    name: "Dust3D",
    appId: "JeremyHu.Dust3D",
    version: "1.0.0-rc.9",
  },
  {
    name: "Wget",
    appId: "JernejSimoncic.Wget",
    version: "1.21.4",
  },
  {
    name: "Buzz",
    appId: "Jeskola.Buzz",
    version: "1503",
  },
  {
    name: "Lazydocker",
    appId: "JesseDuffield.Lazydocker",
    version: "0.23.1",
  },
  {
    name: "lazygit",
    appId: "JesseDuffield.lazygit",
    version: "0.44.1",
  },
  {
    name: "Aqua (Public Preview)",
    appId: "JetBrains.Aqua.Preview",
    version: "241.15989.156",
  },
  {
    name: "CLion",
    appId: "JetBrains.CLion",
    version: "2024.2.2",
  },
  {
    name: "CLion (EAP)",
    appId: "JetBrains.CLion.EAP",
    version: "243.16718.30",
  },
  {
    name: "DataGrip",
    appId: "JetBrains.DataGrip",
    version: "2024.2.2",
  },
  {
    name: "DataGrip (EAP)",
    appId: "JetBrains.DataGrip.EAP",
    version: "243.16718.27",
  },
  {
    name: "DataSpell",
    appId: "JetBrains.DataSpell",
    version: "2024.2.2",
  },
  {
    name: "DataSpell (EAP)",
    appId: "JetBrains.DataSpell.EAP",
    version: "243.18137.18",
  },
  {
    name: "Fleet Launcher (Early Access Pâ€¦",
    appId: "JetBrains.FleetLauncher.EAP",
    version: "1.9.221",
  },
  {
    name: "Fleet Launcher (Public Preview)",
    appId: "JetBrains.FleetLauncher.Preview",
    version: "1.40.87",
  },
  {
    name: "JetBrains Gateway",
    appId: "JetBrains.Gateway",
    version: "2024.2.3",
  },
  {
    name: "GoLand",
    appId: "JetBrains.GoLand",
    version: "2024.2.3",
  },
  {
    name: "GoLand (EAP)",
    appId: "JetBrains.GoLand.EAP",
    version: "243.18137.20",
  },
  {
    name: "JetBrains Hub",
    appId: "JetBrains.Hub",
    version: "2023.1.16990",
  },
  {
    name: "IntelliJ IDEA Community Edition",
    appId: "JetBrains.IntelliJIDEA.Community",
    version: "2024.2.3",
  },
  {
    name: "IntelliJ IDEA Community Editioâ€¦",
    appId: "JetBrains.IntelliJIDEA.Community.â€¦",
    version: "243.18137.10",
  },
  {
    name: "IntelliJ IDEA Educational Editâ€¦",
    appId: "JetBrains.IntelliJIDEA.Educational",
    version: "2022.2.2",
  },
  {
    name: "IntelliJ IDEA Ultimate Edition",
    appId: "JetBrains.IntelliJIDEA.Ultimate",
    version: "2024.2.3",
  },
  {
    name: "IntelliJ IDEA Ultimate Editionâ€¦",
    appId: "JetBrains.IntelliJIDEA.Ultimate.Eâ€¦",
    version: "243.18137.10",
  },
  {
    name: "Ktor CLI",
    appId: "JetBrains.KtorCLI",
    version: "0.2.1",
  },
  {
    name: "JetBrains License Service",
    appId: "JetBrains.LicenseService",
    version: "1.0.39687",
  },
  {
    name: "JetBrains MPS",
    appId: "JetBrains.MPS",
    version: "2024.1",
  },
  {
    name: "JetBrains MPS (EAP)",
    appId: "JetBrains.MPS.EAP",
    version: "MPS-241.18034â€¦",
  },
  {
    name: "PhpStorm",
    appId: "JetBrains.PhpStorm",
    version: "2024.2.3",
  },
  {
    name: "PhpStorm (EAP)",
    appId: "JetBrains.PhpStorm.EAP",
    version: "243.16718.38",
  },
  {
    name: "PyCharm Community Edition",
    appId: "JetBrains.PyCharm.Community",
    version: "2024.2.3",
  },
  {
    name: "PyCharm Community Edition (EAP)",
    appId: "JetBrains.PyCharm.Community.EAP",
    version: "243.16718.36",
  },
  {
    name: "PyCharm Professional Edition",
    appId: "JetBrains.PyCharm.Professional",
    version: "2024.2.3",
  },
  {
    name: "PyCharm Professional Edition (â€¦",
    appId: "JetBrains.PyCharm.Professional.EAP",
    version: "243.16718.36",
  },
  {
    name: "Qodana CLI",
    appId: "JetBrains.QodanaCLI",
    version: "2024.1.7",
  },
  {
    name: "JetBrains ReSharper",
    appId: "JetBrains.ReSharper",
    version: "2024.2.5",
  },
  {
    name: "JetBrains ReSharper (EAP)       JetBrains.ReSharper.EAP            2021.2",
    appId: "EAP",
    version: "8",
  },
  {
    name: "JetBrains Rider",
    appId: "JetBrains.Rider",
    version: "2024.2.5",
  },
  {
    name: "JetBrains Rider (EAP)",
    appId: "JetBrains.Rider.EAP",
    version: "243.16718.44",
  },
  {
    name: "RubyMine",
    appId: "JetBrains.RubyMine",
    version: "2024.2.3",
  },
  {
    name: "RubyMine (EAP)",
    appId: "JetBrains.RubyMine.EAP",
    version: "243.16718.49",
  },
  {
    name: "RustRover",
    appId: "JetBrains.RustRover",
    version: "2024.2",
  },
  {
    name: "RustRover (EAP)",
    appId: "JetBrains.RustRover.EAP",
    version: "243.15521.46",
  },
  {
    name: "JetBrains Space",
    appId: "JetBrains.Space",
    version: "2023.1.7",
  },
  {
    name: "JetBrains TeamCity",
    appId: "JetBrains.TeamCity",
    version: "2024.07.3",
  },
  {
    name: "JetBrains Toolbox",
    appId: "JetBrains.Toolbox",
    version: "2.4.2.32922",
  },
  {
    name: "WebStorm",
    appId: "JetBrains.WebStorm",
    version: "2024.2.3",
  },
  {
    name: "WebStorm (EAP)",
    appId: "JetBrains.WebStorm.EAP",
    version: "243.16718.28",
  },
  {
    name: "Writerside (EAP)",
    appId: "JetBrains.Writerside.EAP",
    version: "242.21870.138",
  },
  {
    name: "JetBrains YouTrack",
    appId: "JetBrains.YouTrack",
    version: "2023.1.16998",
  },
  {
    name: "JetBrains dotTrace",
    appId: "JetBrains.dotTrace",
    version: "2023.3.4",
  },
  {
    name: "JetBrains dotUltimate",
    appId: "JetBrains.dotUltimate",
    version: "2024.2.5",
  },
  {
    name: "å°ç»¿é²¸è‹±æ–‡æ–‡çŒ®é˜…è¯»å™¨",
    appId: "Jianjing.XLJSCI",
    version: "2.4.4.0",
  },
  {
    name: "GT4T",
    appId: "Jidifudi.GT4T",
    version: "8.46.240918",
  },
  {
    name: "Outline Manager",
    appId: "Jigsaw.OutlineManager",
    version: "1.15.2",
  },
  {
    name: "Kanban-Desktop",
    appId: "JimHan.Kanban-Desktop",
    version: "2.2.0-Beta8",
  },
  {
    name: "SuperPuTTY",
    appId: "JimRadford.SuperPuTTY",
    version: "1.5.0",
  },
  {
    name: "è“æ¹– Axure",
    appId: "JinweiZhiguang.Lanhu.Axure",
    version: "1.8.5",
  },
  {
    name: "è“æ¹–",
    appId: "JinweiZhiguang.Lanhu.Photoshop",
    version: "2.417.0",
  },
  {
    name: "MasterAgent",
    appId: "JinweiZhiguang.MasterAgent",
    version: "0.6.4",
  },
  {
    name: "MasterGo",
    appId: "JinweiZhiguang.MasterGo",
    version: "1.8.2",
  },
  {
    name: "Jw_cad",
    appId: "JiroShimizu.Jw_cad",
    version: "8.25.1.0",
  },
  {
    name: "LoT",
    appId: "Jisco.LoT",
    version: "1.1.0",
  },
  {
    name: "Visual Family Tree",
    appId: "Jisco.VisualFamilyTree",
    version: "1.4.0",
  },
  {
    name: "Jitsi Meet",
    appId: "Jitsi.Meet",
    version: "2024.6.0",
  },
  {
    name: "ropresence",
    appId: "JiveOff.roPresence",
    version: "2.2.3",
  },
  {
    name: "KDiff3",
    appId: "JoachimEibl.KDiff3",
    version: "0.9.98",
  },
  {
    name: "Jellyamp",
    appId: "JoeIpson.Jellyamp",
    version: "1.1.1",
  },
  {
    name: "YT Download",
    appId: "JoeyG.YTDownload",
    version: "1.4.2",
  },
  {
    name: "superProductivity",
    appId: "JohannesMillan.superProductivity",
    version: "10.0.11",
  },
  {
    name: "Universal Radio Hacker",
    appId: "JohannesPohl.UniversalRadioHacker",
    version: "2.9.6",
  },
  {
    name: "Juggernaut",
    appId: "JohnCantrell.Juggernaut",
    version: "0.1.2",
  },
  {
    name: "Pandoc",
    appId: "JohnMacFarlane.Pandoc",
    version: "3.4",
  },
  {
    name: "JohnnyTech BlueBook Cite Abbreâ€¦",
    appId: "JohnnyTech.Bluebook.AbbFixer",
    version: "UNKNOWN",
  },
  {
    name: "Remove Empty Directories",
    appId: "JonasJohn.RED.Beta",
    version: "2.3",
  },
  {
    name: "Heynote",
    appId: "JonatanHeyman.Heynote",
    version: "1.8.0",
  },
  {
    name: "JAERO",
    appId: "Jontio.Jaero",
    version: "1.0.4.13",
  },
  {
    name: "Joplin",
    appId: "Joplin.Joplin",
    version: "3.0.15",
  },
  {
    name: "Joplin (Pre-release)",
    appId: "Joplin.Joplin.Pre-release",
    version: "2.12.12",
  },
  {
    name: "Text Grab",
    appId: "JosephFinney.Text-Grab",
    version: "4.5.1",
  },
  {
    name: "J-language",
    appId: "Jsoftware.J.9.03",
    version: "9.03",
  },
  {
    name: "J-language",
    appId: "Jsoftware.J.9.4",
    version: "9.4.2",
  },
  {
    name: "J-language",
    appId: "Jsoftware.J.9.4.slim",
    version: "9.4.2",
  },
  {
    name: "J-language",
    appId: "Jsoftware.J.9.5",
    version: "9.5.2",
  },
  {
    name: "J-language",
    appId: "Jsoftware.J.9.5.slim",
    version: "9.5.2",
  },
  {
    name: "J-language",
    appId: "Jsoftware.J.9.6.slim",
    version: "9.6.0-beta1",
  },
  {
    name: "Jubler",
    appId: "Jubler.App",
    version: "8.0.0",
  },
  {
    name: "Julia",
    appId: "Julialang.Julia",
    version: "1.10.5",
  },
  {
    name: "Julia",
    appId: "Julialang.Juliaup",
    version: "1.17.6.0",
  },
  {
    name: "Prospect Mail",
    appId: "JulianAlarcon.ProspectMail",
    version: "0.4.0.0",
  },
  {
    name: "anyquery",
    appId: "JulienCagniart.anyquery",
    version: "0.2.2",
  },
  {
    name: "PureSync",
    appId: "JumpingBytes.PureSync.Personal",
    version: "7.2.2",
  },
  {
    name: "PdaNet+",
    appId: "JuneFabrics.PdaNet",
    version: "5.23.2",
  },
  {
    name: "InnoUnpacker",
    appId: "JurgenRathlev.InnoUnpacker",
    version: "1.9.5.0",
  },
  {
    name: "ArchiSteamFarm",
    appId: "JustArchiNET.ArchiSteamFarm",
    version: "6.0.2.6",
  },
  {
    name: "Xplorer",
    appId: "JustinMaximillianKimlim.Xplorer",
    version: "0.3.1",
  },
  {
    name: "Superscript",
    appId: "JustinPaulSilva.Superscript",
    version: "1.5.6",
  },
  {
    name: "Qt-DAB",
    appId: "JvanKatwijk.Qt-DAB",
    version: "6.5",
  },
  {
    name: "Slice Master 6000",
    appId: "K1DBO.slice-master-6000",
    version: "0.11.0g",
  },
  {
    name: "Kubazulo",
    appId: "K8stooling.Kubazulo",
    version: "1.0.1",
  },
  {
    name: "CeVIO AI Voice Package - å¯ä¸",
    appId: "KAMITSUBAKI.KAFU",
    version: "1.0.4",
  },
  {
    name: "Amarok",
    appId: "KDE.Amarok",
    version: "2.8.0",
  },
  {
    name: "falkon",
    appId: "KDE.Falkon",
    version: "3.1.0",
  },
  {
    name: "KDE Connect",
    appId: "KDE.KDEConnect",
    version: "24.02.0",
  },
  {
    name: "KDiff3",
    appId: "KDE.KDiff3",
    version: "1.11.0",
  },
  {
    name: "Kate",
    appId: "KDE.Kate",
    version: "23.04.0",
  },
  {
    name: "Kdenlive",
    appId: "KDE.Kdenlive",
    version: "24.08.1",
  },
  {
    name: "Krita",
    appId: "KDE.Krita",
    version: "5.2.6.0",
  },
  {
    name: "KritaShellExtension",
    appId: "KDE.KritaShellExtension",
    version: "1.2.4",
  },
  {
    name: "LabPlot2",
    appId: "KDE.LabPlot",
    version: "2.10.1",
  },
  {
    name: "Marble",
    appId: "KDE.Marble",
    version: "2.2.0",
  },
  {
    name: "NeoChat",
    appId: "KDE.NeoChat",
    version: "23.04.0",
  },
  {
    name: "Okular",
    appId: "KDE.Okular",
    version: "23.08.1",
  },
  {
    name: "RKWard",
    appId: "KDE.RKWard",
    version: "0.8.0",
  },
  {
    name: "digiKam",
    appId: "KDE.digikam",
    version: "8.4.0",
  },
  {
    name: "kdevelop",
    appId: "KDE.kdevelop",
    version: "5.5.0",
  },
  {
    name: "Kile",
    appId: "KDE.kile",
    version: "2.9.93",
  },
  {
    name: "KMyMoney",
    appId: "KDE.kmymoney",
    version: "5.1.3",
  },
  {
    name: "Ruqola",
    appId: "KDE.ruqola",
    version: "1.9.2",
  },
  {
    name: "Umbrello",
    appId: "KDE.umbrello",
    version: "21.12.3",
  },
  {
    name: "Timetable",
    appId: "KDani-99.timetable",
    version: "1.2.0",
  },
  {
    name: "BackupCraft",
    appId: "KLSSoft.BackupCraft",
    version: "2.0.0.32",
  },
  {
    name: "KLayout",
    appId: "KLayout.KLayout",
    version: "0.29.7",
  },
  {
    name: "JS8Call",
    appId: "KN4CRD.JS8Call",
    version: "2.2.0",
  },
  {
    name: "KNIME Analytics Platform",
    appId: "KNIMEAG.KNIMEAnalyticsPlatform",
    version: "5.3.1",
  },
  {
    name: "Elsword",
    appId: "KOG.Elsworld.en",
    version: "1.0.0.2",
  },
  {
    name: "Elsword",
    appId: "KOG.Elsworld.es",
    version: "1.0.0.2",
  },
  {
    name: "HIPIN v4",
    appId: "KPN.HIPIN",
    version: "4.3.2.6316",
  },
  {
    name: "Flemozi",
    appId: "KRTirtho.Flemozi",
    version: "0.1.1",
  },
  {
    name: "Spotube",
    appId: "KRTirtho.Spotube",
    version: "3.8.2",
  },
  {
    name: "UML .FRI",
    appId: "KST.UML.FRI",
    version: "2.2.2",
  },
  {
    name: "SpaceEye",
    appId: "KYDronePilot.SpaceEye",
    version: "1.2.1",
  },
  {
    name: "å¼¹å¼¹play",
    appId: "Kaedei.Dandanplay",
    version: "15.9.2",
  },
  {
    name: "å¡é¥­è¾“å…¥æ³•",
    appId: "Kafan.KafanInput",
    version: "1.0.0.300",
  },
  {
    name: "MiniBrowser",
    appId: "Kafan.MiniBrowser",
    version: "1.0.0.134",
  },
  {
    name: "KeyStore Explorer",
    appId: "KaiKramer.KeyStoreExplorer",
    version: "5.5.3",
  },
  {
    name: "Duet Display",
    appId: "Kairos.DuetDisplay",
    version: "2.5.0.0",
  },
  {
    name: "Kaitai Struct compiler",
    appId: "Kaitai.StructCompiler",
    version: "0.1",
  },
  {
    name: "KakaoTalk",
    appId: "Kakao.KakaoTalk",
    version: "4.1.6.4065",
  },
  {
    name: "Kakao Work",
    appId: "KakaoEnterprise.KakaoWork",
    version: "2.16.0.4948",
  },
  {
    name: "Melon Player",
    appId: "KakaoEntertainmentCorp.MelonPlayer",
    version: "1.2.4",
  },
  {
    name: "Window Centering Helper",
    appId: "KamilSzymborski.WindowCenteringHeâ€¦",
    version: "1.2.11",
  },
  {
    name: "TinyVid",
    appId: "Kamua.TinyVid",
    version: "1.0.1",
  },
  {
    name: "Kanaries Rath",
    appId: "Kanaries.Rath",
    version: "1.0.0",
  },
  {
    name: "æ°´è±šé¼ æ ‡åŠ©æ‰‹",
    appId: "Kapibala.Shuitun",
    version: "1.0.7",
  },
  {
    name: "Karen\u0027s Replicator",
    appId: "KarenWare.KarensReplicator",
    version: "3.7.6.0",
  },
  {
    name: "Live Connect",
    appId: "Kaseya.LiveConnect",
    version: "9.5.8810.8439",
  },
  {
    name: "KatKoyn Core",
    appId: "KatKoyn.KatKoynCore",
    version: "2.4",
  },
  {
    name: "TViewer",
    appId: "KatjaHoffmann.TViewer",
    version: "2.3.0.5",
  },
  {
    name: "Kebler",
    appId: "Kebler.Kebler",
    version: "0.10.8312.223â€¦",
  },
  {
    name: "Keboola CLI",
    appId: "Keboola.KeboolaCLI",
    version: "2.35.1",
  },
  {
    name: "KeePassXC",
    appId: "KeePassXCTeam.KeePassXC",
    version: "2.7.9",
  },
  {
    name: "KeeWeb",
    appId: "KeeWeb.KeeWeb",
    version: "1.18.7",
  },
  {
    name: "Keeper Commander",
    appId: "KeeperSecurity.Commander",
    version: "16.11.14",
  },
  {
    name: "KeeperÂ® Password Manager",
    appId: "KeeperSecurity.KeeperDesktop",
    version: "16.11.3.0",
  },
  {
    name: "MaxBackup",
    appId: "KellyElton.Max.Backup",
    version: "0.1.3",
  },
  {
    name: "KensingtonWorks",
    appId: "Kensington.KensingtonWorks",
    version: "3.1.4",
  },
  {
    name: "wxUiEditor",
    appId: "KeyWorks.wxUiEditor",
    version: "1.2.1",
  },
  {
    name: "Keybase",
    appId: "Keybase.Keybase",
    version: "6.2.4",
  },
  {
    name: "Keysight PathWave License Manaâ€¦",
    appId: "Keysight.PathWaveLicenseManager",
    version: "7.4.1",
  },
  {
    name: "Vulkan Runtime",
    appId: "KhronosGroup.VulkanRT",
    version: "1.3.290.0",
  },
  {
    name: "Vulkan SDK",
    appId: "KhronosGroup.VulkanSDK",
    version: "1.3.290.0",
  },
  {
    name: "KiCad",
    appId: "KiCad.KiCad",
    version: "8.0.5",
  },
  {
    name: "KiCad Lite EDA",
    appId: "KiCad.KiCad.Lite",
    version: "5.1.9",
  },
  {
    name: "RemoteApp Tool",
    appId: "KimKnight.RemoteAppTool",
    version: "6.0.0.0",
  },
  {
    name: "äº‘ä¹‹å®¶",
    appId: "Kingdee.CloudHub",
    version: "4.4.0",
  },
  {
    name: "King of Avalon",
    appId: "KingsGroup.KingOfAvalon",
    version: "1.0.6.38",
  },
  {
    name: "é‡‘å±±æ–‡æ¡£",
    appId: "Kingsoft.KDocs",
    version: "3.9.9",
  },
  {
    name: "é‡‘å±±ä¼šè®®",
    appId: "Kingsoft.KMeeting",
    version: "1.52.0",
  },
  {
    name: "é‡‘å±±PDFç‹¬ç«‹ç‰ˆ",
    appId: "Kingsoft.KingsoftPDF",
    version: "12.6.0.15593",
  },
  {
    name: "é‡‘å±±è¯éœ¸2024",
    appId: "Kingsoft.PowerWord",
    version: "2022.1.1.0141",
  },
  {
    name: "WPS Office",
    appId: "Kingsoft.WPSOffice",
    version: "12.2.0.18283",
  },
  {
    name: "WPS Office",
    appId: "Kingsoft.WPSOffice.CN",
    version: "12.1.0.18276",
  },
  {
    name: "Kingston SSD Manager x64",
    appId: "Kingston.SSDManager",
    version: "1.5.4.5",
  },
  {
    name: "MSBuild Structured Log Viewer",
    appId: "KirillOsenkov.MSBuildStructuredLoâ€¦",
    version: "2.2.350",
  },
  {
    name: "Presenter Version 5 Express Edâ€¦",
    appId: "KirraEnterprises.Presenter.Express",
    version: "5.1.20.709",
  },
  {
    name: "Presenter Version 5 Personal Eâ€¦",
    appId: "KirraEnterprises.Presenter.Personâ€¦",
    version: "5.1.20.709",
  },
  {
    name: "Presenter Version 5 Premium Edâ€¦",
    appId: "KirraEnterprises.Presenter.Premium",
    version: "5.1.20.709",
  },
  {
    name: "Presenter Version 5 Standard Eâ€¦",
    appId: "KirraEnterprises.Presenter.Standaâ€¦",
    version: "5.1.20.709",
  },
  {
    name: "Kitemaker",
    appId: "Kitemaker.Kitemaker",
    version: "2.14.0",
  },
  {
    name: "Tailviewer",
    appId: "Kittyfisto.Tailviewer",
    version: "1.0.0.39",
  },
  {
    name: "CMake",
    appId: "Kitware.CMake",
    version: "3.30.4",
  },
  {
    name: "ParaView",
    appId: "Kitware.ParaView",
    version: "5.12.0",
  },
  {
    name: "ParaView",
    appId: "Kitware.ParaView.MPI",
    version: "5.11.2",
  },
  {
    name: "Slicer",
    appId: "Kitware.Slicer",
    version: "5.6.1",
  },
  {
    name: "Kiwix JS",
    appId: "Kiwix.KiwixJS",
    version: "3.4.1.0",
  },
  {
    name: "Kiwix JS Electron",
    appId: "Kiwix.KiwixJS.Electron",
    version: "3.4.1-E",
  },
  {
    name: "WikiMed by Kiwix",
    appId: "Kiwix.WikiMed",
    version: "3.3.4.0",
  },
  {
    name: "WikiMed by Kiwix",
    appId: "Kiwix.WikiMed.Electron",
    version: "3.3.4-E",
  },
  {
    name: "Wikivoyage by Kiwix",
    appId: "Kiwix.Wikivoyage",
    version: "3.3.10.0",
  },
  {
    name: "Wikivoyage by Kiwix Electron Eâ€¦",
    appId: "Kiwix.Wikivoyage.Electron",
    version: "3.3.10-E",
  },
  {
    name: "CeVIO AI Voice Package - #kzn",
    appId: "KizunaAIInc.kzn",
    version: "2.0.0",
  },
  {
    name: "Bulk Crap Uninstaller",
    appId: "Klocman.BulkCrapUninstaller",
    version: "5.8.1.0",
  },
  {
    name: "OpenDirectoryDownloader",
    appId: "KoalaBear84.OpenDirectoryDownloadâ€¦",
    version: "2.8.0.1",
  },
  {
    name: "SoporteKM",
    appId: "KonicaMinolta.SoporteKM",
    version: "1.0.3.2",
  },
  {
    name: "KopiaUI",
    appId: "Kopia.KopiaUI",
    version: "0.17.0",
  },
  {
    name: "ManguReader",
    appId: "KorigamiK.mangu",
    version: "2.3.1",
  },
  {
    name: "DSSIM",
    appId: "Kornelski.DSSIM",
    version: "3.2.3",
  },
  {
    name: "Kotatogram Desktop",
    appId: "Kotatogram.Kotatogram",
    version: "1.4.8",
  },
  {
    name: "Interactive Data Editor",
    appId: "KoushikNaskar.InteractiveDataEditâ€¦",
    version: "2.13.1.0",
  },
  {
    name: "crankshaft",
    appId: "KraXen72.crankshaft",
    version: "1.7.0",
  },
  {
    name: "Krisp",
    appId: "Krisp.Krisp",
    version: "2.42.5",
  },
  {
    name: "Nyrna",
    appId: "KristenMcWilliam.Nyrna",
    version: "2.20.0",
  },
  {
    name: "æ‰‹å¿ƒè¾“å…¥æ³•",
    appId: "KuRuimeng.PalmInput",
    version: "2.7.0.1702",
  },
  {
    name: "DooTask",
    appId: "KuaiFan.DooTask",
    version: "0.38.27",
  },
  {
    name: "ingress2gateway",
    appId: "Kubernetes.ingress2gateway",
    version: "0.1.0",
  },
  {
    name: "kind",
    appId: "Kubernetes.kind",
    version: "0.24.0",
  },
  {
    name: "kompose",
    appId: "Kubernetes.kompose",
    version: "1.31.2",
  },
  {
    name: "kubectl",
    appId: "Kubernetes.kubectl",
    version: "1.30.2",
  },
  {
    name: "kustomize",
    appId: "Kubernetes.kustomize",
    version: "5.4.3",
  },
  {
    name: "Kubernetes WithOut Kubelet",
    appId: "Kubernetes.kwok",
    version: "0.5.2",
  },
  {
    name: "Kubernetes WithOut Kubelet",
    appId: "Kubernetes.kwokctl",
    version: "0.4.0",
  },
  {
    name: "Kubernetes - Minikube - A Locaâ€¦",
    appId: "Kubernetes.minikube",
    version: "1.34.0",
  },
  {
    name: "Kubri",
    appId: "Kubri.Kubri",
    version: "0.5.2",
  },
  {
    name: "Mery",
    appId: "Kuro.Mery",
    version: "2.6.7",
  },
  {
    name: "Mery",
    appId: "Kuro.Mery.Beta",
    version: "3.7.2",
  },
  {
    name: "HDCleaner",
    appId: "KurtZimmermann.HDCleaner",
    version: "2.081",
  },
  {
    name: "RegCool",
    appId: "KurtZimmermann.RegCool",
    version: "2.013",
  },
  {
    name: "TweakPower",
    appId: "KurtZimmermann.TweakPower",
    version: "2.06",
  },
  {
    name: "Simple IP Config",
    appId: "KurtisLiggett.SimpleIPConfig",
    version: "2.9.6",
  },
  {
    name: "é…·æˆ‘éŸ³ä¹",
    appId: "Kuwo.KuwoMusic",
    version: "9.3.6.0",
  },
  {
    name: "L0phtCrack",
    appId: "L0phtHoldings.L0phtCrack",
    version: "7.2.0",
  },
  {
    name: "LaiHuaVideo",
    appId: "LAIPIC.LaiHuaVideo",
    version: "1.1.1",
  },
  {
    name: "Perfoo",
    appId: "LAIPIC.Perfoo",
    version: "1.0.4",
  },
  {
    name: "LBRY",
    appId: "LBRY.LBRY",
    version: "0.53.9",
  },
  {
    name: "LDraw                           LDraw.AIOI.2023",
    appId: "2023-02",
    version: "v1",
  },
  {
    name: "ShanaEncoder",
    appId: "LEERINA.ShanaEncoder",
    version: "6.0.1.7",
  },
  {
    name: "LEGOÂ® MINDSTORMSÂ® Education EVâ€¦",
    appId: "LEGO.MindstormsEduEV3Classroom",
    version: "1.5.3",
  },
  {
    name: "LG Bridge",
    appId: "LGElectronics.LGBridge",
    version: "2370",
  },
  {
    name: "LG SmartShare",
    appId: "LGElectronics.SmartShare",
    version: "33.2.3.1511.1â€¦",
  },
  {
    name: "komokana",
    appId: "LGUG2Z.komokana",
    version: "0.1.4",
  },
  {
    name: "komorebi",
    appId: "LGUG2Z.komorebi",
    version: "0.1.29",
  },
  {
    name: "komorebi Nightly",
    appId: "LGUG2Z.komorebi.Nightly",
    version: "0.1.30",
  },
  {
    name: "whkd",
    appId: "LGUG2Z.whkd",
    version: "0.2.1",
  },
  {
    name: "U+Works Messenger",
    appId: "LGUplus.UplusWorksMessenger",
    version: "1.0.34",
  },
  {
    name: "ImgBurn",
    appId: "LIGHTNINGUK.ImgBurn",
    version: "2.5.8.0",
  },
  {
    name: "SameBoy",
    appId: "LIJI32.SameBoy",
    version: "0.16.6",
  },
  {
    name: "LINE",
    appId: "LINE.LINE",
    version: "9.2.0.3431",
  },
  {
    name: "LINQPad 5",
    appId: "LINQPad.LINQPad.5",
    version: "5.48.0",
  },
  {
    name: "LINQPad 6",
    appId: "LINQPad.LINQPad.6",
    version: "6.15.12",
  },
  {
    name: "LINQPad 7",
    appId: "LINQPad.LINQPad.7",
    version: "7.8.10",
  },
  {
    name: "LINQPad 8",
    appId: "LINQPad.LINQPad.8",
    version: "8.5.5",
  },
  {
    name: "ClangFormat",
    appId: "LLVM.ClangFormat",
    version: "18.1.6",
  },
  {
    name: "LLVM",
    appId: "LLVM.LLVM",
    version: "19.1.0",
  },
  {
    name: "clangd",
    appId: "LLVM.clangd",
    version: "17.0.3",
  },
  {
    name: "LMMS",
    appId: "LMMS.LMMS",
    version: "1.2.2",
  },
  {
    name: "Zap",
    appId: "LN-Zap.zap",
    version: "0.7.7-beta",
  },
  {
    name: "LOOT",
    appId: "LOOT.LOOT",
    version: "0.23.1",
  },
  {
    name: "Aftman",
    appId: "LPGhatguy.Aftman",
    version: "0.3.0",
  },
  {
    name: "Active@ Boot Disk",
    appId: "LSoftTechnologies.ActiveBootDisk",
    version: "22",
  },
  {
    name: "Active@ DVD Eraser",
    appId: "LSoftTechnologies.ActiveDVDEraser",
    version: "2",
  },
  {
    name: "Active@ Data Burner",
    appId: "LSoftTechnologies.ActiveDataBurner",
    version: "6",
  },
  {
    name: "Active@ Data Studio",
    appId: "LSoftTechnologies.ActiveDataStudio",
    version: "22",
  },
  {
    name: "Active@ Disk Editor",
    appId: "LSoftTechnologies.ActiveDiskEditor",
    version: "7",
  },
  {
    name: "Active@ Disk Image",
    appId: "LSoftTechnologies.ActiveDiskImage",
    version: "11",
  },
  {
    name: "Active@ Disk Monitor",
    appId: "LSoftTechnologies.ActiveDiskMonitâ€¦",
    version: "5",
  },
  {
    name: "Active@ File Recovery",
    appId: "LSoftTechnologies.ActiveFileRecovâ€¦",
    version: "22",
  },
  {
    name: "Active@ ISO Burner",
    appId: "LSoftTechnologies.ActiveISOBurner",
    version: "4",
  },
  {
    name: "Active@ ISO Manager",
    appId: "LSoftTechnologies.ActiveISOManager",
    version: "7",
  },
  {
    name: "Active@ KillDisk",
    appId: "LSoftTechnologies.ActiveKillDisk",
    version: "14",
  },
  {
    name: "Active@ LiveCD",
    appId: "LSoftTechnologies.ActiveLiveCD",
    version: "9",
  },
  {
    name: "Active@ Partition Manager",
    appId: "LSoftTechnologies.ActivePartitionâ€¦",
    version: "23",
  },
  {
    name: "Active@ Partition Recovery",
    appId: "LSoftTechnologies.ActivePartitionâ€¦",
    version: "22",
  },
  {
    name: "Active@ Password Changer",
    appId: "LSoftTechnologies.ActivePasswordCâ€¦",
    version: "12",
  },
  {
    name: "Active@ UNDELETE",
    appId: "LSoftTechnologies.ActiveUNDELETE",
    version: "19",
  },
  {
    name: "Active@ UNERASER",
    appId: "LSoftTechnologies.ActiveUNERASER",
    version: "22",
  },
  {
    name: "Active@ ZDelete",
    appId: "LSoftTechnologies.ActiveZDelete",
    version: "9",
  },
  {
    name: "NTFS Data Recovery",
    appId: "LSoftTechnologies.NTFSDataRecovery",
    version: "22",
  },
  {
    name: "PyMODA",
    appId: "LUPhysics.PyMODA",
    version: "1.1.0",
  },
  {
    name: "Lightworks",
    appId: "LWKS.lightworks",
    version: "2022.3.136244",
  },
  {
    name: "WinMute",
    appId: "LX-Systems.WinMute",
    version: "2.5.1.0",
  },
  {
    name: "OpenChrom",
    appId: "Lablicate.OpenChrom",
    version: "1.5.0",
  },
  {
    name: "armor",
    appId: "Labstack.armor",
    version: "0.4.14",
  },
  {
    name: "LabyMod Launcher",
    appId: "LabyMediaGmbH.LabyModLauncher",
    version: "2.1.7",
  },
  {
    name: "Web PKI",
    appId: "LacunaSoftware.WebPKI",
    version: "2.12.3.0",
  },
  {
    name: "CrossOver",
    appId: "LacyMorrow.CrossOver",
    version: "3.3.4",
  },
  {
    name: "Lakes Environmental SCREEN View",
    appId: "Lakes.SCREENView",
    version: "4.0.1",
  },
  {
    name: "Sticky Password Manager",
    appId: "LamantineSoftware.StickyPassword",
    version: "8.8.5.1751",
  },
  {
    name: "openexr-viewer",
    appId: "Lambda.openexr-viewer",
    version: "0.6.1",
  },
  {
    name: "LsAgent",
    appId: "Lansweeper.LsAgent",
    version: "11.1.10.0",
  },
  {
    name: "Lapce",
    appId: "Lapce.Lapce",
    version: "0.4.2",
  },
  {
    name: "LaserWeb",
    appId: "LaserWeb.LaserWeb",
    version: "4.0.999",
  },
  {
    name: "Last.fm Desktop Scrobbler",
    appId: "LastFM.LastFMDesktopScrobbler",
    version: "3.1.29",
  },
  {
    name: "LastPass",
    appId: "LastPass.LastPass",
    version: "4.133.1.465",
  },
  {
    name: "pandoc-plot",
    appId: "LaurentPRenedeCotret.pandoc-plot",
    version: "1.7.0",
  },
  {
    name: "QuestPatcher",
    appId: "Lauriethefish.QuestPatcher",
    version: "2.8.0",
  },
  {
    name: "Lazap",
    appId: "LazapDevelopment.Lazap",
    version: "0.7.0",
  },
  {
    name: "Lazarus",
    appId: "Lazarus.Lazarus",
    version: "3.2",
  },
  {
    name: "Lazesoft Recovery Suite",
    appId: "Lazesoft.LazesoftRecovery",
    version: "4.5",
  },
  {
    name: "AnimeBack",
    appId: "LeGitHubDeTai.AnimeBack",
    version: "8.0.9",
  },
  {
    name: "Laragon",
    appId: "LeNgocKhoa.Laragon",
    version: "6.0.0",
  },
  {
    name: "LeadDesk",
    appId: "LeadDeskLtd.LeadDesk",
    version: "10.00.0",
  },
  {
    name: "Questionmark Secure Browser",
    appId: "Learnosity.QuestionmarkSecure",
    version: "6.1.58.3",
  },
  {
    name: "Screenpresso",
    appId: "Learnpulse.Screenpresso",
    version: "2.1.29.0",
  },
  {
    name: "Leawo Blu-ray Player",
    appId: "LeawoSoftware.Blu-rayPlayer",
    version: "3.0.0.5",
  },
  {
    name: "Ledger Live",
    appId: "LedgerHQ.LedgerLive",
    version: "2.75.0",
  },
  {
    name: "ViPad",
    appId: "LeeSoft.ViPad",
    version: "1",
  },
  {
    name: "ViStart",
    appId: "LeeSoft.ViStart",
    version: "1",
  },
  {
    name: "Legacy Games Launcher",
    appId: "LegacyInteractive.Launcher",
    version: "1.12.0",
  },
  {
    name: "Tous les fichiers dll avec desâ€¦",
    appId: "LelanceFlamer.TLFDADIDW",
    version: "3.7.4",
  },
  {
    name: "Lemonade",
    appId: "Lemonade.Lemonade",
    version: "1.1.1",
  },
  {
    name: "è”æƒ³æ™ºèƒ½ä¼šè®®åŠ©æ‰‹",
    appId: "Lenovo.AIMeetingManager",
    version: "3.1.16.1",
  },
  {
    name: "Lenovo Dock Manager",
    appId: "Lenovo.DockManager",
    version: "1.5.2.2",
  },
  {
    name: "è”æƒ³åº”ç”¨å•†åº—",
    appId: "Lenovo.LeAppStore",
    version: "9.0.1730.814",
  },
  {
    name: "è”æƒ³ä¹äº‘",
    appId: "Lenovo.LeCloud",
    version: "2.501.25.0",
  },
  {
    name: "Legion Accessory Central",
    appId: "Lenovo.LegionAccessoryCentral",
    version: "2.0.6.06161",
  },
  {
    name: "è”æƒ³è¯­éŸ³åŠ©æ‰‹",
    appId: "Lenovo.LenovoVoice",
    version: "3.4.11.1",
  },
  {
    name: "Lenovo Migration Assistant",
    appId: "Lenovo.MigrationAssistant",
    version: "2.1.4.6",
  },
  {
    name: "Lenovo Quick Clean",
    appId: "Lenovo.QuickClean",
    version: "1.02.0051",
  },
  {
    name: "è”æƒ³æµè§ˆå™¨",
    appId: "Lenovo.SLBrowser",
    version: "9.0.5.9101",
  },
  {
    name: "Lenovo Service Bridge",
    appId: "Lenovo.ServiceBridge",
    version: "5.0.2.17",
  },
  {
    name: "Lenovo System Update",
    appId: "Lenovo.SystemUpdate",
    version: "5.08.03.59",
  },
  {
    name: "Lenovo Thin Installer",
    appId: "Lenovo.ThinInstaller",
    version: "1.04.02.0024",
  },
  {
    name: "Lenovo Update Retriever",
    appId: "Lenovo.UpdateRetriever",
    version: "5.08.01.30",
  },
  {
    name: "LeoCAD",
    appId: "LeonardoZide.LeoCAD",
    version: "23.03",
  },
  {
    name: "Leonflix",
    appId: "Leonflix.Leonflix",
    version: "0.7.0",
  },
  {
    name: "FontBase",
    appId: "Levitsky.FontBase",
    version: "2.20.7",
  },
  {
    name: "Authme",
    appId: "Levminer.Authme",
    version: "5.3.0",
  },
  {
    name: "Lexibar Greek",
    appId: "Lexicool.Lexibar.EL",
    version: "1.4f",
  },
  {
    name: "Lexibar Spanish",
    appId: "Lexicool.Lexibar.ES",
    version: "1.4f",
  },
  {
    name: "Lexibar French",
    appId: "Lexicool.Lexibar.FR",
    version: "1.4f",
  },
  {
    name: "Lexibar Russian",
    appId: "Lexicool.Lexibar.RU",
    version: "1.4f",
  },
  {
    name: "Quicker",
    appId: "LiErHeXun.Quicker",
    version: "1.43.29.0",
  },
  {
    name: "é’±è¿¹",
    appId: "LiTang.QianJi",
    version: "4.1.1",
  },
  {
    name: "L-Connect 3",
    appId: "LianLi.LConnect3",
    version: "1.6.30",
  },
  {
    name: "Clash Nyanpasu",
    appId: "LibNyanpasu.clash-nyanpasu",
    version: "1.6.1",
  },
  {
    name: "Libgen Desktop",
    appId: "LibgenApps.LibgenDesktop",
    version: "1.4.1",
  },
  {
    name: "LibreCAD",
    appId: "LibreCAD.LibreCAD",
    version: "2.2.0.2",
  },
  {
    name: "LibreHardwareMonitor",
    appId: "LibreHardwareMonitor.LibreHardwarâ€¦",
    version: "0.9.3",
  },
  {
    name: "LibrePCB",
    appId: "LibrePCB.LibrePCB",
    version: "1.1.0",
  },
  {
    name: "LibreWolf",
    appId: "LibreWolf.LibreWolf",
    version: "130.0.1-1",
  },
  {
    name: "RetroArch",
    appId: "Libretro.RetroArch",
    version: "1.19.1.0",
  },
  {
    name: "Librevault",
    appId: "LibrevaultTeam.Librevault",
    version: "0.1.17",
  },
  {
    name: "LifeAt",
    appId: "LifeAt.LifeAt",
    version: "1.18.0",
  },
  {
    name: "LightBurn",
    appId: "LightBurnSoftware.LightBurn",
    version: "1.6.03",
  },
  {
    name: "LightZone",
    appId: "LightZoneProject.LightZone",
    version: "4.2.4",
  },
  {
    name: "Lightform Creator",
    appId: "Lightform.LightformCreator",
    version: "2.2.12.1309",
  },
  {
    name: "LightyearVPN",
    appId: "LightyearVPN.LightyearVPN",
    version: "3.2.1",
  },
  {
    name: "Rise of Kingdoms",
    appId: "Lilith.RiseofKingdoms",
    version: "1.0.5.3",
  },
  {
    name: "Dislyte",
    appId: "LilithGames.Dislyte",
    version: "0.0.2",
  },
  {
    name: "LilyPond",
    appId: "LilyPond.LilyPond",
    version: "2.23.6",
  },
  {
    name: "LilyPond (Unstable)",
    appId: "LilyPond.LilyPond.Unstable",
    version: "2.23.3",
  },
  {
    name: "Lime3DS",
    appId: "Lime3DS.Lime3DS",
    version: "2118.1",
  },
  {
    name: "Line 6 Central",
    appId: "Line6.Line6Central",
    version: "1",
  },
  {
    name: "Line 6 Monkey",
    appId: "Line6.Line6Monkey",
    version: "1.77",
  },
  {
    name: "Linear",
    appId: "LinearOrbit.Linear",
    version: "1.27.0",
  },
  {
    name: "Lingdys 4",
    appId: "LingitAS.Lingdys4",
    version: "4.5.136.0",
  },
  {
    name: "Incus",
    appId: "LinuxContainers.Incus",
    version: "6.5.0",
  },
  {
    name: "HTTP downloader",
    appId: "LinuxSuRen.HTTPdownloader",
    version: "0.0.89",
  },
  {
    name: "Butterfly",
    appId: "LinwoodCloud.Butterfly",
    version: "2.2.0",
  },
  {
    name: "Butterfly (Nightly)",
    appId: "LinwoodCloud.Butterfly.Nightly",
    version: "2.2.0-rc.1",
  },
  {
    name: "Flow (Nightly)",
    appId: "LinwoodDev.Flow.Nightly",
    version: "0.2.1",
  },
  {
    name: "PiP-Tool",
    appId: "LionelJouin.PiP-Tool",
    version: "1.1.2",
  },
  {
    name: "Liquibase",
    appId: "Liquibase.Liquibase",
    version: "4.26.0",
  },
  {
    name: "Liquit Workspace Agent",
    appId: "Liquit.Workspace.Agent",
    version: "3.9.2838.5717",
  },
  {
    name: "Lisk",
    appId: "LiskFoundation.LiskHub",
    version: "4.0.0",
  },
  {
    name: "Lite XL",
    appId: "LiteXLTeam.LiteXL",
    version: "2.1.1",
  },
  {
    name: "Scrivener",
    appId: "LiteratureandLatte.Scrivener",
    version: "3.1.5.1",
  },
  {
    name: "Spooky View",
    appId: "LittleTijn.SpookyView",
    version: "1.0.6.0",
  },
  {
    name: "LiveKit CLI",
    appId: "LiveKit.LiveKitCLI",
    version: "2.2.0",
  },
  {
    name: "Livebook",
    appId: "Livebook.Livebook",
    version: "0.12.1",
  },
  {
    name: "Sunshine",
    appId: "LizardByte.Sunshine",
    version: "0.23.1",
  },
  {
    name: "LocalSend",
    appId: "LocalSend.LocalSend",
    version: "1.15.4",
  },
  {
    name: "LocalStack CLI",
    appId: "LocalStack.localstack-cli",
    version: "3.7.2",
  },
  {
    name: "DevPod",
    appId: "LoftLabs.DevPod",
    version: "0.5.4",
  },
  {
    name: "Log4OM2",
    appId: "Log4OM2.Log4OM2",
    version: "2.32.1.0",
  },
  {
    name: "LogMeIn Hamachi",
    appId: "LogMeIn.Hamachi",
    version: "2.3.0.111",
  },
  {
    name: "LogicCircuit",
    appId: "LogicCircuit.LogicCircuit",
    version: "2.23.0202",
  },
  {
    name: "Logitech Camera Settings",
    appId: "Logitech.CameraSettings",
    version: "2.12.8.0",
  },
  {
    name: "Logitech G HUB",
    appId: "Logitech.GHUB",
    version: "2024.7.1167",
  },
  {
    name: "Logitech Gaming Software",
    appId: "Logitech.LGS",
    version: "9.04.28",
  },
  {
    name: "Logi Bolt",
    appId: "Logitech.LogiBolt",
    version: "1.2.6024.0",
  },
  {
    name: "Logi Tune",
    appId: "Logitech.LogiTune",
    version: "3.7.187.0",
  },
  {
    name: "MyHarmony",
    appId: "Logitech.MyHarmony",
    version: "1.0.308",
  },
  {
    name: "Logitech Onboard Memory Manager",
    appId: "Logitech.OnboardMemoryManager",
    version: "2.1.7479",
  },
  {
    name: "Logitech Options",
    appId: "Logitech.Options",
    version: "10.20.11",
  },
  {
    name: "Logi Options+",
    appId: "Logitech.OptionsPlus",
    version: "1.82.618412",
  },
  {
    name: "Logitech Presentation",
    appId: "Logitech.Presentation",
    version: "1.60.33",
  },
  {
    name: "Logitech SetPoint",
    appId: "Logitech.SetPoint",
    version: "6.90.66",
  },
  {
    name: "Logitech Solar App",
    appId: "Logitech.Solar",
    version: "1.20.28",
  },
  {
    name: "Logitech Sync",
    appId: "Logitech.Sync",
    version: "3.5.136.0",
  },
  {
    name: "Logitech Unifying Software",
    appId: "Logitech.UnifyingSoftware",
    version: "2.52.33",
  },
  {
    name: "Logseq",
    appId: "Logseq.Logseq",
    version: "0.10.9",
  },
  {
    name: "Logtalk",
    appId: "Logtalk.Logtalk",
    version: "3.83.0",
  },
  {
    name: "Image Sort",
    appId: "Lolle2000la.ImageSort",
    version: "2.13.0.0",
  },
  {
    name: "Loom",
    appId: "Loom.Loom",
    version: "0.255.9",
  },
  {
    name: "FileMenu Tools",
    appId: "LopeSoft.FileMenuTools",
    version: "8.4.1",
  },
  {
    name: "MSBuild Community Tasks",
    appId: "LoreSoft.MSBuildCommunityTasks",
    version: "1.5.0.235",
  },
  {
    name: "Compute-A-Fan",
    appId: "LorenCookCompany.Compute-A-Fan",
    version: "10.2",
  },
  {
    name: "Loupedeck",
    appId: "Loupedeck.Loupedeck",
    version: "6.0.0.20753",
  },
  {
    name: "LOVE",
    appId: "Love2d.Love2d",
    version: "11.5",
  },
  {
    name: "MyMoney.Net",
    appId: "LovettSoftware.MyMoney.Net",
    version: "2.0.1.10",
  },
  {
    name: "procgov",
    appId: "LowLevelDesign.ProcessGovernor",
    version: "2.13.24103.12",
  },
  {
    name: "Lua Language Server",
    appId: "LuaLS.lua-language-server",
    version: "3.6.25",
  },
  {
    name: "workoffice",
    appId: "LuanRoger.WorkOffice",
    version: "0.3.0",
  },
  {
    name: "OhHai Browser",
    appId: "LucasReade.OhHaiBrowser",
    version: "3.4.0",
  },
  {
    name: "Chart Geany",
    appId: "LucasTsatiris.ChartGeany",
    version: "6.3.2",
  },
  {
    name: "Bluetooth Battery Monitor",
    appId: "LuculentSystems.BluetoothBatteryMâ€¦",
    version: "2.20.0",
  },
  {
    name: "Bluetooth Tweaker",
    appId: "LuculentSystems.BluetoothTweaker",
    version: "1.4.5",
  },
  {
    name: "Yana",
    appId: "LukasBach.Yana",
    version: "1.0.16",
  },
  {
    name: "Winpinator",
    appId: "LukaszSwiszcz.Winpinator",
    version: "0.1.2",
  },
  {
    name: "Pepys",
    appId: "LukeBriggs.Pepys",
    version: "1.5.4",
  },
  {
    name: "Craft",
    appId: "LukiLabs.Craft",
    version: "1.41.1",
  },
  {
    name: "Luminance HDR",
    appId: "LuminanceHDR.LuminanceHDR",
    version: "v.2.6.0",
  },
  {
    name: "HardlinkBackup",
    appId: "Lupinho.HardlinkBackup",
    version: "2.2.23",
  },
  {
    name: "DropIt",
    appId: "LupoPenSuite.DropIt",
    version: "8.5.1",
  },
  {
    name: "Netron",
    appId: "LutzRoeder.Netron",
    version: "7.9.3",
  },
  {
    name: "DWords",
    appId: "LuyuHuang.DWords2",
    version: "0.2.3",
  },
  {
    name: "LyX",
    appId: "LyX.LyX",
    version: "2.3.5.2",
  },
  {
    name: "Turtl",
    appId: "LyonBros.Turtl",
    version: "0.7.2.6",
  },
  {
    name: "M-Files Online",
    appId: "M-FilesCorporation.M-FilesOnline",
    version: "23.4.12528.8",
  },
  {
    name: "NanaZip",
    appId: "M2Team.NanaZip",
    version: "3.1.1080.0",
  },
  {
    name: "NanaZip Preview",
    appId: "M2Team.NanaZip.Preview",
    version: "3.5.1000.0",
  },
  {
    name: "MAILPLUG Messenger Desktop",
    appId: "MAILPLUGInc.MAILPLUGMessengerDeskâ€¦",
    version: "1.4.1",
  },
  {
    name: "MAMP \u0026 MAMP PRO",
    appId: "MAMP.MAMP",
    version: "5.0.5",
  },
  {
    name: "MAXQDA Reader",
    appId: "MAXQDA.MAXQDA",
    version: "24.3.0",
  },
  {
    name: "happytalk",
    appId: "MBISolution.happytalk",
    version: "0.1.12",
  },
  {
    name: "MComix",
    appId: "MComix.MComix",
    version: "3.1.0",
  },
  {
    name: "MCreator",
    appId: "MCreator.MCreator",
    version: "2023.3.36712",
  },
  {
    name: "Picto-Selector",
    appId: "MCvanderKooij.PictoSelector",
    version: "1.8.26",
  },
  {
    name: "I Have No Tomatoes",
    appId: "MHGames.IHaveNoTomatoes",
    version: "1.5",
  },
  {
    name: "Those Funny Funguloids!",
    appId: "MHGames.ThoseFunnyFunguloids",
    version: "1.06",
  },
  {
    name: "HxD Hex Editor",
    appId: "MHNexus.HxD",
    version: "2.5",
  },
  {
    name: "CertAid for Windows",
    appId: "MIT.CertAid",
    version: "2.2.6.0",
  },
  {
    name: "MIT Kerberos for Windows",
    appId: "MIT.Kerberos",
    version: "4.1.0",
  },
  {
    name: "Scratch",
    appId: "MIT.Scratch1",
    version: "1.4.0",
  },
  {
    name: "Scratch 3",
    appId: "MITMediaLab.Scratch.3",
    version: "3.29.1",
  },
  {
    name: "Scratch Link",
    appId: "MITMediaLab.ScratchLink",
    version: "1.4.3.0",
  },
  {
    name: "StarUML",
    appId: "MKLabs.StarUML",
    version: "5.1.0",
  },
  {
    name: "minerva",
    appId: "MKProj.Minerva",
    version: "1.1.1",
  },
  {
    name: "Pulseway",
    appId: "MMSOFTDesign.Pulseway",
    version: "9.8",
  },
  {
    name: "MOTU M Series",
    appId: "MOTU.MSeries",
    version: "4.0.9.1025",
  },
  {
    name: "MPC-BE",
    appId: "MPC-BE.MPC-BE",
    version: "1.7.3",
  },
  {
    name: "ELAN",
    appId: "MPI.ELAN",
    version: "6.7",
  },
  {
    name: "MSI Gaming Intelligence",
    appId: "MSI.GamingIntelligence",
    version: "0.0.2.80",
  },
  {
    name: "MSI Kombustor 2",
    appId: "MSI.Kombustor.2",
    version: "2.6.0.0",
  },
  {
    name: "MSI Kombustor 3",
    appId: "MSI.Kombustor.3",
    version: "3.5.2.1",
  },
  {
    name: "MSI Kombustor 4",
    appId: "MSI.Kombustor.4",
    version: "4.1.29.0",
  },
  {
    name: "MS Paint IDE",
    appId: "MSPaintIDE.MSPaintIDE",
    version: "3.0.0",
  },
  {
    name: "MSYS2 Installer",
    appId: "MSYS2.MSYS2",
    version: "20240727",
  },
  {
    name: "AllDup",
    appId: "MTSD.AllDup",
    version: "4.5.62",
  },
  {
    name: "one-wallhaven",
    appId: "MaLuns.wallhaven-electron",
    version: "1.0.0",
  },
  {
    name: "Encrypto",
    appId: "MacPaw.Encrypto",
    version: "1.0.1",
  },
  {
    name: "MacType",
    appId: "MacType.MacType",
    version: "2021.1-RC1",
  },
  {
    name: "A3Launcher",
    appId: "Maca134.A3Launcher",
    version: "0.1.6.8",
  },
  {
    name: "DayZ Launcher",
    appId: "Maca134.DZLauncher",
    version: "0.1.6.8",
  },
  {
    name: "MacroDeck",
    appId: "MacroDeck.MacroDeck",
    version: "2.12.0",
  },
  {
    name: "Villagers and Heroes",
    appId: "MadOtterGames.VillagersandHeroes",
    version: "3.0.7",
  },
  {
    name: "flow",
    appId: "MadrasCheck.flow",
    version: "2.6.4",
  },
  {
    name: "VBinDiff",
    appId: "Madsen.VBinDiff",
    version: "3.0-beta.5",
  },
  {
    name: "Maestro Ã…rsoppgjÃ¸r 2023",
    appId: "MaestroSoft.MaestroAarsoppgjoer.2â€¦",
    version: "36.06.40",
  },
  {
    name: "Mage",
    appId: "Magefile.mage",
    version: "1.15.0",
  },
  {
    name: "Magicsplat Tcl/Tk for Windows â€¦",
    appId: "Magicsplat.TclTk",
    version: "1.13.0",
  },
  {
    name: "ç½‘é€Ÿç®¡å®¶",
    appId: "Magnate.SpeedManager",
    version: "3.8.2",
  },
  {
    name: "ç½‘ç»´åŠ©æ‰‹",
    appId: "Magnate.SpeedManager.Pro",
    version: "2.9.6",
  },
  {
    name: "ICQ New",
    appId: "MailRu.ICQNew",
    version: "23.2.0.48119",
  },
  {
    name: "Mailbird",
    appId: "Mailbird.Mailbird",
    version: "3.0.18",
  },
  {
    name: "Majsoul Plus",
    appId: "MajsoulPlus.MajsoulPlus",
    version: "2.0.1",
  },
  {
    name: "Laserbox basic",
    appId: "Makeblock.LaserBox.Basic",
    version: "1.3.0",
  },
  {
    name: "Laserbox for mCreate",
    appId: "Makeblock.LaserBox.mCreate",
    version: "1.0.2",
  },
  {
    name: "xTool Creative Space",
    appId: "Makeblock.xToolCreativeSpace",
    version: "1.7.8",
  },
  {
    name: "Downloader For Reddit",
    appId: "MalloyDelacroix.DownloaderForReddâ€¦",
    version: "3.16.0",
  },
  {
    name: "Maltego",
    appId: "Maltego.Maltego",
    version: "4.8.0",
  },
  {
    name: "Malwarebytes",
    appId: "Malwarebytes.Malwarebytes",
    version: "5.1.4.112",
  },
  {
    name: "Malwarebytes Privacy",
    appId: "Malwarebytes.Privacy",
    version: "3.17.0.232",
  },
  {
    name: "Micromamba",
    appId: "Mamba.Micromamba",
    version: "2.0.2-0",
  },
  {
    name: "DeviceManagementAssistant",
    appId: "ManaManaIoT.DeviceManagementAssisâ€¦",
    version: "2.0.5.168",
  },
  {
    name: "ManaPlus",
    appId: "ManaPlus.ManaPlus",
    version: "2.1.3.17",
  },
  {
    name: "Mandelbulber2",
    appId: "Mandelbulber.Mandelbulber",
    version: "2.31.0.0",
  },
  {
    name: "Relock",
    appId: "ManfredMueller.Relock",
    version: "1.0.1",
  },
  {
    name: "LycheeSlicer",
    appId: "Mango3D.LycheeSlicer",
    version: "7.0.1",
  },
  {
    name: "ManicTime",
    appId: "ManicTime.ManicTime",
    version: "24.2.0.6",
  },
  {
    name: "Manifold System 8",
    appId: "ManifoldSoftware.Manifold.8",
    version: "8.0.35",
  },
  {
    name: "Manifold System 9",
    appId: "ManifoldSoftware.Manifold.9",
    version: "9.0.181",
  },
  {
    name: "Manifold Viewer 9",
    appId: "ManifoldSoftware.ManifoldViewer.9",
    version: "9.0.181",
  },
  {
    name: "Core",
    appId: "ManticoreGames.Core",
    version: "1.3.1.0",
  },
  {
    name: "MapMap",
    appId: "MapMapTeam.MapMap",
    version: "0.6.3",
  },
  {
    name: "MapTiler Engine",
    appId: "MapTiler.MapTilerEngine",
    version: "13.4",
  },
  {
    name: "Mapillary Tools",
    appId: "Mapillary.MapillaryTools",
    version: "4.4.1",
  },
  {
    name: "Pulse SMS",
    appId: "MapleMedia.PulseSMS",
    version: "4.5.2",
  },
  {
    name: "Graviton Editor",
    appId: "MarcEspinSanz.GravitonEditor",
    version: "2.3.0",
  },
  {
    name: "BrightScript Emulator",
    appId: "MarceloLvCabral.BrightScriptEmulaâ€¦",
    version: "0.9.0.2021062â€¦",
  },
  {
    name: "MDB Admin",
    appId: "MarcielDegasperi.MDBAdmin",
    version: "2.5.12.844",
  },
  {
    name: "MSIX Hero",
    appId: "MarcinOtorowski.MSIXHero",
    version: "3.0.0.0",
  },
  {
    name: "FreeCommander XE",
    appId: "MarekJasinski.FreeCommanderXE",
    version: "2024.0.0.901",
  },
  {
    name: "MariaDB",
    appId: "MariaDB.Server",
    version: "11.5.2.0",
  },
  {
    name: "NetTime                         MarkGriffiths.NetTime              3.20",
    appId: "Alpha",
    version: "3",
  },
  {
    name: "Mark Text",
    appId: "MarkText.MarkText",
    version: "0.17.1",
  },
  {
    name: "OLEDShift",
    appId: "Marko19907.OLEDShift",
    version: "1.1.2",
  },
  {
    name: "Rosi",
    appId: "MarkoBL.Rosi",
    version: "6.0.0.0",
  },
  {
    name: "Manyi Transformer",
    appId: "MarshallChang.ManyiTransformer",
    version: "1.0.0",
  },
  {
    name: "syncthingctl",
    appId: "Martchus.syncthingctl",
    version: "1.4.12",
  },
  {
    name: "Syncthing Tray",
    appId: "Martchus.syncthingtray",
    version: "1.6.2",
  },
  {
    name: "TitulkyCom",
    appId: "Martevax.TitulkyCom",
    version: "1.003",
  },
  {
    name: "UniGetUI (formerly WingetUI)",
    appId: "MartiCliment.UniGetUI",
    version: "3.1.1",
  },
  {
    name: "UniGetUI (formerly WingetUI) -â€¦",
    appId: "MartiCliment.UniGetUI.Pre-Release",
    version: "3.1.2-beta3",
  },
  {
    name: "YouTube Music for Desktop",
    appId: "MartinFinnerup.YouTubeMusicforDesâ€¦",
    version: "0.2.1",
  },
  {
    name: "RoboMirror",
    appId: "MartinKinkelin.RoboMirror",
    version: "2",
  },
  {
    name: "Master Packager",
    appId: "MasterPackager.MasterPackager",
    version: "24.7.9021",
  },
  {
    name: "Master Packager Dev",
    appId: "MasterPackager.MasterPackagerDev",
    version: "1.0.10",
  },
  {
    name: "MultiCommander",
    appId: "MathiasSvensson.MultiCommander",
    version: "14.2.0.3026",
  },
  {
    name: "Mathpix Snipping Tool",
    appId: "Mathpix.MathpixSnippingTool",
    version: "03.00.0114",
  },
  {
    name: "NekoRay",
    appId: "MatsuriDayo.NekoRay",
    version: "3.26",
  },
  {
    name: "Helm",
    appId: "MattTytel.Helm",
    version: "0.9.0.0",
  },
  {
    name: "iCopy",
    appId: "MatteoRossi.iCopy",
    version: "1.7.0",
  },
  {
    name: "MatterControl",
    appId: "MatterHackers.MatterControl",
    version: "2.22.04.11498",
  },
  {
    name: "Focalboard",
    appId: "Mattermost.Focalboard",
    version: "7.11.3",
  },
  {
    name: "Mattermost",
    appId: "Mattermost.MattermostDesktop",
    version: "5.9.0",
  },
  {
    name: "3RVX",
    appId: "MatthewMalensek.3RVX",
    version: "2.9.2.0",
  },
  {
    name: "Geppetto",
    appId: "MatthijsGroen.Geppetto",
    version: "1.3.1",
  },
  {
    name: "BulkStartStop",
    appId: "MaxBQb.BulkStartStop",
    version: "1.1.2",
  },
  {
    name: "Unreal Commander",
    appId: "MaxDiesel.UnrealCommander",
    version: "3.5.7.1497",
  },
  {
    name: "Unreal Commander",
    appId: "MaxDiesel.UnrealCommander.Beta",
    version: "4.2.1.1645",
  },
  {
    name: "Maxima computer algebra system",
    appId: "MaximaTeam.Maxima",
    version: "5.47.0",
  },
  {
    name: "ConEmu",
    appId: "Maximus5.ConEmu",
    version: "11.230.7240",
  },
  {
    name: "CinebenchR23",
    appId: "Maxon.CinebenchR23",
    version: "23.2",
  },
  {
    name: "Maxthon",
    appId: "Maxthon.Maxthon",
    version: "7.2.2.4800",
  },
  {
    name: "Maxthon Cloud Browser",
    appId: "Maxthon.Maxthon.4",
    version: "4.9.5.1000",
  },
  {
    name: "MX5",
    appId: "Maxthon.Maxthon.5",
    version: "5.3.8.2000",
  },
  {
    name: "Acrylic DNS",
    appId: "Mayakron.AcrylicDNS",
    version: "2.2.0",
  },
  {
    name: "McServ",
    appId: "McServ.McServ",
    version: "0.2.1",
  },
  {
    name: "Guardian Browser",
    appId: "Meazure.GuardianBrowser",
    version: "1.16.0.2",
  },
  {
    name: "Youtube-mp3",
    appId: "MedZed.youtubetomp3",
    version: "1.0.0",
  },
  {
    name: "Medal",
    appId: "MedalB.V.Medal",
    version: "4.2309.0",
  },
  {
    name: "MediaInfo-CLI",
    appId: "MediaArea.MediaInfo",
    version: "24.06",
  },
  {
    name: "MediaInfo",
    appId: "MediaArea.MediaInfo.GUI",
    version: "24.06",
  },
  {
    name: "MediaHuman Lyrics Finder",
    appId: "MediaHuman.LyricsFinder",
    version: "1.5.6",
  },
  {
    name: "MediathekView",
    appId: "MediathekViewTeam.MediathekView",
    version: "14.0.0",
  },
  {
    name: "MediBang Paint Pro",
    appId: "Medibang.MediBangPaintPro",
    version: "29.1.0.0",
  },
  {
    name: "MEGAsync",
    appId: "Mega.MEGASync",
    version: "5.5.0.0",
  },
  {
    name: "Tweeten",
    appId: "MehediHassan.Tweeten",
    version: "5.5.0",
  },
  {
    name: "Network Time Protocol",
    appId: "MeinbergGlobal.NTP",
    version: "4.2.8p15a",
  },
  {
    name: "ç¾Žå›¾äº‘ä¿®",
    appId: "Meitu.ColorByte",
    version: "5.8.0",
  },
  {
    name: "Meld",
    appId: "Meld.Meld",
    version: "3.22.2",
  },
  {
    name: "OpenFreebuds",
    appId: "MelianMiko.OpenFreebuds",
    version: "0.14.1",
  },
  {
    name: "Melodics",
    appId: "Melodics.Melodics",
    version: "2.1.8341.0",
  },
  {
    name: "Shotcut",
    appId: "Meltytech.Shotcut",
    version: "24.08.29",
  },
  {
    name: "Google Assistant",
    appId: "Melvin-Abraham.Google-Assistant",
    version: "1.1.0",
  },
  {
    name: "Google Assistant Preview",
    appId: "Melvin-Abraham.Google-Assistant.Pâ€¦",
    version: "1.0.0-rc.2",
  },
  {
    name: "Memento Database Desktop",
    appId: "MementoDB.MementoDatabaseDesktop",
    version: "2.0.0",
  },
  {
    name: "Memurai Developer",
    appId: "Memurai.MemuraiDeveloper",
    version: "4.1.2",
  },
  {
    name: "Mercurial",
    appId: "Mercurial.Mercurial",
    version: "6.3.1",
  },
  {
    name: "MeshHouse",
    appId: "MeshHouse.MeshHouse",
    version: "0.2.7",
  },
  {
    name: "Oculus",
    appId: "Meta.Oculus",
    version: "1.97.0",
  },
  {
    name: "Zstandard",
    appId: "Meta.Zstandard",
    version: "1.5.6",
  },
  {
    name: "inSSIDer",
    appId: "MetaGeek.inSSIDer",
    version: "5.5.0",
  },
  {
    name: "Metanorma",
    appId: "Metanorma.Metanorma",
    version: "1.10.5",
  },
  {
    name: "MiKTeX",
    appId: "MiKTeX.MiKTeX",
    version: "24.1",
  },
  {
    name: "HexEdit",
    appId: "MiTeC.HexEdit",
    version: "7.1.0",
  },
  {
    name: "IconExplorer",
    appId: "MiTeC.IconExplorer",
    version: "5.3.0",
  },
  {
    name: "JSON Viewer",
    appId: "MiTeC.JsonViewer",
    version: "3.2.0",
  },
  {
    name: "Network Meter",
    appId: "MiTeC.NetworkMeter",
    version: "2.5.0",
  },
  {
    name: "Network Scanner",
    appId: "MiTeC.NetworkScanner",
    version: "5.7.0",
  },
  {
    name: "WindowsFileAnalayzer",
    appId: "MiTeC.WindowsFileAnalyzer",
    version: "2.10.0",
  },
  {
    name: "mixxx",
    appId: "MiXXX.MiXXX",
    version: "2.4.0",
  },
  {
    name: "obs-virtualcam",
    appId: "MiauLightouch.obs-virtual-cam",
    version: "2.1.2",
  },
  {
    name: "Mica For Everyone",
    appId: "MicaForEveryone.MicaForEveryone",
    version: "1.3.1.2",
  },
  {
    name: "SKQW",
    appId: "MichaelBromley.SKQW",
    version: "1.0.0-beta.2",
  },
  {
    name: "PostyBirb",
    appId: "MichaelDiCarlo.PostyBirb",
    version: "2.3.44",
  },
  {
    name: "PostyBirb+",
    appId: "MichaelDiCarlo.PostyBirb+",
    version: "3.1.20.114",
  },
  {
    name: "fman",
    appId: "MichaelHerrmann.fman",
    version: "1.7.3",
  },
  {
    name: "ASIO4ALL",
    appId: "MichaelTippach.ASIO4ALL",
    version: "2.16",
  },
  {
    name: "VookiImageViewer",
    appId: "MichalDuda.VookiImageViewer",
    version: "24.05.12",
  },
  {
    name: "bflat",
    appId: "MichalStrehovsky.bflat",
    version: "8.0.2",
  },
  {
    name: "MicroDicom DICOM Viewer",
    appId: "MicroDicom.DICOMViewer",
    version: "2024.2",
  },
  {
    name: "MicroSIP",
    appId: "MicroSIP.MicroSIP",
    version: "3.21.4",
  },
  {
    name: "MicroSIP Lite",
    appId: "MicroSIP.MicroSIP.Lite",
    version: "3.21.4",
  },
  {
    name: "Micron Storage Executive",
    appId: "MicronTechnology.MicronStorageExeâ€¦",
    version: "9.09.092023.03",
  },
  {
    name: "Micronaut Launch",
    appId: "Micronaut.Launch",
    version: "3.9.3",
  },
  {
    name: "Windows Assessment and Deploymâ€¦",
    appId: "Microsoft.ADKPEAddon",
    version: "10.1.25398.1",
  },
  {
    name: "App Installer",
    appId: "Microsoft.AppInstaller",
    version: "1.23.1911.0",
  },
  {
    name: "AppInstaller File Builder(Prevâ€¦",
    appId: "Microsoft.AppInstallerFileBuilder",
    version: "1.2020.221.0",
  },
  {
    name: "Azure Developer CLI",
    appId: "Microsoft.Azd",
    version: "1.10.200",
  },
  {
    name: "AzCopy v10",
    appId: "Microsoft.Azure.AZCopy.10",
    version: "10.26.0",
  },
  {
    name: "Microsoft Azure Export for Terâ€¦",
    appId: "Microsoft.Azure.AztfExport",
    version: "0.15.0",
  },
  {
    name: "Azure Terrafy",
    appId: "Microsoft.Azure.Aztfy",
    version: "0.10.0",
  },
  {
    name: "Azure Data CLI",
    appId: "Microsoft.Azure.DataCLI",
    version: "20.3.14",
  },
  {
    name: "Azure Functions Core Tools",
    appId: "Microsoft.Azure.FunctionsCoreTools",
    version: "4.0.6280",
  },
  {
    name: "Azure IoT Explorer Preview",
    appId: "Microsoft.Azure.IoTExplorer",
    version: "0.15.8",
  },
  {
    name: "Microsoft Azure Kubelogin",
    appId: "Microsoft.Azure.Kubelogin",
    version: "0.1.4",
  },
  {
    name: "Microsoft Azure Quick Review",
    appId: "Microsoft.Azure.QuickReview",
    version: "2.0.0-previewâ€¦",
  },
  {
    name: "Microsoft Azure Storage Emulatâ€¦",
    appId: "Microsoft.Azure.StorageEmulator",
    version: "5.10.19227.21â€¦",
  },
  {
    name: "Microsoft Azure Storage Explorâ€¦",
    appId: "Microsoft.Azure.StorageExplorer",
    version: "1.35.0",
  },
  {
    name: "AKS Engine - Units of Kubernetâ€¦",
    appId: "Microsoft.Azure.aks-engine-azuresâ€¦",
    version: "0.78.0",
  },
  {
    name: "Microsoft Azure CLI",
    appId: "Microsoft.AzureCLI",
    version: "2.64.0",
  },
  {
    name: "Azure Data Studio",
    appId: "Microsoft.AzureDataStudio",
    version: "1.49.1",
  },
  {
    name: "Azure Data Studio - Insiders",
    appId: "Microsoft.AzureDataStudio.Insiders",
    version: "1.35.0",
  },
  {
    name: "Azure Media Services Explorer",
    appId: "Microsoft.AzureMediaServicesExploâ€¦",
    version: "5.8.3",
  },
  {
    name: "Azure Monitor Agent",
    appId: "Microsoft.AzureMonitorAgent",
    version: "1.29.0.0",
  },
  {
    name: "Bicep CLI",
    appId: "Microsoft.Bicep",
    version: "0.30.23",
  },
  {
    name: "Bing Wallpaper",
    appId: "Microsoft.BingWallpaper",
    version: "2.0.0.1",
  },
  {
    name: "Bot Framework Composer",
    appId: "Microsoft.BotFrameworkComposer",
    version: "2.1.2",
  },
  {
    name: "Bot Framework Emulator",
    appId: "Microsoft.BotFrameworkEmulator",
    version: "4.14.1",
  },
  {
    name: "Microsoft Build Tools 2015",
    appId: "Microsoft.BuildTools2015",
    version: "14.0.23107.10",
  },
  {
    name: "Microsoft System CLR Types forâ€¦",
    appId: "Microsoft.CLRTypesSQLServer.2019",
    version: "15.0.2000.5",
  },
  {
    name: "Debug Diagnostic Tool",
    appId: "Microsoft.DebugDiag",
    version: "2.3.0.38",
  },
  {
    name: "Microsoft Deployment Toolkit",
    appId: "Microsoft.DeploymentToolkit",
    version: "6.3.8456.1000",
  },
  {
    name: "Dev Home (Preview)",
    appId: "Microsoft.DevHome",
    version: "0.1801.640.0",
  },
  {
    name: "Dev Proxy",
    appId: "Microsoft.DevProxy",
    version: "0.21.0",
  },
  {
    name: "Dev Proxy Beta",
    appId: "Microsoft.DevProxy.Beta",
    version: "0.21.0-beta.3",
  },
  {
    name: "DirectX End-User Runtime Web Iâ€¦",
    appId: "Microsoft.DirectX",
    version: "9.29.1974.1",
  },
  {
    name: "Microsoft .NET Core Runtime - â€¦",
    appId: "Microsoft.DotNet.AspNetCore.2_1",
    version: "2.1.30.30411",
  },
  {
    name: "Microsoft .NET Core SDK 2.2.20â€¦",
    appId: "Microsoft.DotNet.AspNetCore.2_2",
    version: "2.2.207",
  },
  {
    name: "Microsoft .NET Core SDK 2.2.40â€¦",
    appId: "Microsoft.DotNet.AspNetCore.2_2_4â€¦",
    version: "2.2.402",
  },
  {
    name: "Microsoft .NET Core SDK 3.0.10â€¦",
    appId: "Microsoft.DotNet.AspNetCore.3_0",
    version: "3.0.103.14459",
  },
  {
    name: "Microsoft ASP.NET Core Runtimeâ€¦",
    appId: "Microsoft.DotNet.AspNetCore.3_1",
    version: "3.1.32",
  },
  {
    name: "Microsoft ASP.NET Core Runtimeâ€¦",
    appId: "Microsoft.DotNet.AspNetCore.5",
    version: "5.0.17",
  },
  {
    name: "Microsoft ASP.NET Core Runtimeâ€¦",
    appId: "Microsoft.DotNet.AspNetCore.6",
    version: "6.0.33",
  },
  {
    name: "Microsoft ASP.NET Core Runtimeâ€¦",
    appId: "Microsoft.DotNet.AspNetCore.7",
    version: "7.0.20",
  },
  {
    name: "Microsoft ASP.NET Core Runtimeâ€¦",
    appId: "Microsoft.DotNet.AspNetCore.8",
    version: "8.0.8",
  },
  {
    name: "Microsoft ASP.NET Core Runtimeâ€¦",
    appId: "Microsoft.DotNet.AspNetCore.Previâ€¦",
    version: "9.0.0-rc.1.24â€¦",
  },
  {
    name: "Microsoft .NET Windows Desktopâ€¦",
    appId: "Microsoft.DotNet.DesktopRuntime.3â€¦",
    version: "3.1.32",
  },
  {
    name: "Microsoft .NET Windows Desktopâ€¦",
    appId: "Microsoft.DotNet.DesktopRuntime.5",
    version: "5.0.17",
  },
  {
    name: "Microsoft .NET Windows Desktopâ€¦",
    appId: "Microsoft.DotNet.DesktopRuntime.6",
    version: "6.0.33",
  },
  {
    name: "Microsoft .NET Windows Desktopâ€¦",
    appId: "Microsoft.DotNet.DesktopRuntime.7",
    version: "7.0.20",
  },
  {
    name: "Microsoft .NET Windows Desktopâ€¦",
    appId: "Microsoft.DotNet.DesktopRuntime.8",
    version: "8.0.8",
  },
  {
    name: "Microsoft .NET Windows Desktopâ€¦",
    appId: "Microsoft.DotNet.DesktopRuntime.Pâ€¦",
    version: "9.0.0-rc.1.24â€¦",
  },
  {
    name: "Microsoft .NET Framework 4.5.1â€¦",
    appId: "Microsoft.DotNet.Framework.Develoâ€¦",
    version: "4.5.2",
  },
  {
    name: ".NET Framework",
    appId: "Microsoft.DotNet.Framework.Develoâ€¦",
    version: "4.8.1",
  },
  {
    name: "Microsoft ASP.NET Core Hostingâ€¦",
    appId: "Microsoft.DotNet.HostingBundle.3_1",
    version: "3.1.32",
  },
  {
    name: "Microsoft ASP.NET Core Hostingâ€¦",
    appId: "Microsoft.DotNet.HostingBundle.5",
    version: "5.0.17",
  },
  {
    name: "Microsoft ASP.NET Core Hostingâ€¦",
    appId: "Microsoft.DotNet.HostingBundle.6",
    version: "6.0.33",
  },
  {
    name: "Microsoft ASP.NET Core Hostingâ€¦",
    appId: "Microsoft.DotNet.HostingBundle.7",
    version: "7.0.20",
  },
  {
    name: "Microsoft ASP.NET Core Hostingâ€¦",
    appId: "Microsoft.DotNet.HostingBundle.8",
    version: "8.0.8",
  },
  {
    name: "Microsoft ASP.NET Core Hostingâ€¦",
    appId: "Microsoft.DotNet.HostingBundle.Prâ€¦",
    version: "9.0.0-rc.1.24â€¦",
  },
  {
    name: "Microsoft .NET Runtime 3.1",
    appId: "Microsoft.DotNet.Runtime.3_1",
    version: "3.1.32",
  },
  {
    name: "Microsoft .NET Runtime 5.0",
    appId: "Microsoft.DotNet.Runtime.5",
    version: "5.0.17",
  },
  {
    name: "Microsoft .NET Runtime 6.0",
    appId: "Microsoft.DotNet.Runtime.6",
    version: "6.0.33",
  },
  {
    name: "Microsoft .NET Runtime 7.0",
    appId: "Microsoft.DotNet.Runtime.7",
    version: "7.0.20",
  },
  {
    name: "Microsoft .NET Runtime 8.0",
    appId: "Microsoft.DotNet.Runtime.8",
    version: "8.0.8",
  },
  {
    name: "Microsoft .NET Runtime 9.0 Preâ€¦",
    appId: "Microsoft.DotNet.Runtime.Preview",
    version: "9.0.0-rc.1.24â€¦",
  },
  {
    name: "Microsoft .NET SDK 3.1",
    appId: "Microsoft.DotNet.SDK.3_1",
    version: "3.1.426",
  },
  {
    name: "Microsoft .NET SDK 5.0",
    appId: "Microsoft.DotNet.SDK.5",
    version: "5.0.408",
  },
  {
    name: "Microsoft .NET SDK 6.0",
    appId: "Microsoft.DotNet.SDK.6",
    version: "6.0.425",
  },
  {
    name: "Microsoft .NET SDK 7.0",
    appId: "Microsoft.DotNet.SDK.7",
    version: "7.0.410",
  },
  {
    name: "Microsoft .NET SDK 8.0",
    appId: "Microsoft.DotNet.SDK.8",
    version: "8.0.402",
  },
  {
    name: "Microsoft .NET SDK 9.0 Preview",
    appId: "Microsoft.DotNet.SDK.Preview",
    version: "9.0.100-rc.1.â€¦",
  },
  {
    name: "Microsoft .NET Core SDK Uninstâ€¦",
    appId: "Microsoft.DotNet.UninstallTool",
    version: "4.96.657",
  },
  {
    name: "Microsoft Edge",
    appId: "Microsoft.Edge",
    version: "129.0.2792.65",
  },
  {
    name: "Microsoft Edge Beta",
    appId: "Microsoft.Edge.Beta",
    version: "130.0.2849.13",
  },
  {
    name: "Microsoft Edge Canary",
    appId: "Microsoft.Edge.Canary",
    version: "112.0.1705.0",
  },
  {
    name: "Microsoft Edge Dev",
    appId: "Microsoft.Edge.Dev",
    version: "131.0.2863.0",
  },
  {
    name: "Microsoft Edge WebDriver",
    appId: "Microsoft.EdgeDriver",
    version: "129.0.2792.65",
  },
  {
    name: "Microsoft Edge WebView2 Runtime",
    appId: "Microsoft.EdgeWebView2Runtime",
    version: "129.0.2792.65",
  },
  {
    name: "FSLogix",
    appId: "Microsoft.FSLogix",
    version: "2.9.8884.27471",
  },
  {
    name: "March 2023 GDK Update 7",
    appId: "Microsoft.GDK.2303",
    version: "230307",
  },
  {
    name: "June 2023 GDK Update 4",
    appId: "Microsoft.GDK.2306",
    version: "230604",
  },
  {
    name: "October 2023 GDK Update 7",
    appId: "Microsoft.GDK.2310",
    version: "231007",
  },
  {
    name: "March 2024 GDK Update 6",
    appId: "Microsoft.GDK.2403",
    version: "240306",
  },
  {
    name: "June 2024 GDK Update 2",
    appId: "Microsoft.GDK.2406",
    version: "240602",
  },
  {
    name: "Touch Adaptation Kit Command Lâ€¦",
    appId: "Microsoft.Gaming.TAK.CLI",
    version: "11.18.0",
  },
  {
    name: "Microsoft Git",
    appId: "Microsoft.Git",
    version: "2.46.0.0.0",
  },
  {
    name: "Hanword HWP document converterâ€¦",
    appId: "Microsoft.HwpConverter",
    version: "15.0.4454.1506",
  },
  {
    name: "IronPython 2",
    appId: "Microsoft.IronPython.2",
    version: "2.7.12.1000",
  },
  {
    name: "IronPython 3",
    appId: "Microsoft.IronPython.3",
    version: "3.4.0.0001",
  },
  {
    name: "Local Administrator Password Sâ€¦",
    appId: "Microsoft.LAPS",
    version: "6.2.0.0",
  },
  {
    name: "Log Parser 2.2",
    appId: "Microsoft.LogParser",
    version: "2.2.10",
  },
  {
    name: "MFCMapi",
    appId: "Microsoft.MFCMapi",
    version: "24.0.24100.06",
  },
  {
    name: "MSIX Core",
    appId: "Microsoft.MSIXCore",
    version: "1.2.0.0",
  },
  {
    name: "Media Creation Tool",
    appId: "Microsoft.MediaCreationTool",
    version: "10.0.22621.27â€¦",
  },
  {
    name: "Microsoft Garage Mouse withoutâ€¦",
    appId: "Microsoft.MouseWithoutBorders",
    version: "2.2.1.327",
  },
  {
    name: "Microsoft Mouse and Keyboard Câ€¦",
    appId: "Microsoft.MouseandKeyboardCenter",
    version: "14.41.137.0",
  },
  {
    name: "Microsoft Network Monitor",
    appId: "Microsoft.NetMon",
    version: "3.4.2350.0",
  },
  {
    name: "NuGet",
    appId: "Microsoft.NuGet",
    version: "6.11.1",
  },
  {
    name: "Microsoft 365 Apps for enterprâ€¦",
    appId: "Microsoft.Office",
    version: "16.0.17830.20â€¦",
  },
  {
    name: "Office Deployment Tool",
    appId: "Microsoft.OfficeDeploymentTool",
    version: "16.0.17830.20â€¦",
  },
  {
    name: "Microsoft OneDrive",
    appId: "Microsoft.OneDrive",
    version: "24.171.0825.0â€¦",
  },
  {
    name: "Microsoft Build of OpenJDK witâ€¦",
    appId: "Microsoft.OpenJDK.11",
    version: "11.0.24.8",
  },
  {
    name: "Microsoft Build of OpenJDK witâ€¦",
    appId: "Microsoft.OpenJDK.16",
    version: "16.0.2.7",
  },
  {
    name: "Microsoft Build of OpenJDK witâ€¦",
    appId: "Microsoft.OpenJDK.17",
    version: "17.0.12.7",
  },
  {
    name: "Microsoft Build of OpenJDK witâ€¦",
    appId: "Microsoft.OpenJDK.21",
    version: "21.0.4.7",
  },
  {
    name: "OpenSSH Beta",
    appId: "Microsoft.OpenSSH.Beta",
    version: "9.5.0.0",
  },
  {
    name: "PC Manager",
    appId: "Microsoft.PCManager",
    version: "3.9.7.0",
  },
  {
    name: "Microsoft PC Manager (Beta)",
    appId: "Microsoft.PCManager.Beta",
    version: "3.8.10.0",
  },
  {
    name: "Microsoft PIX",
    appId: "Microsoft.PIX",
    version: "2409.23",
  },
  {
    name: "PerfView",
    appId: "Microsoft.PerfView",
    version: "3.1.15",
  },
  {
    name: "Microsoft PowerApps CLI",
    appId: "Microsoft.PowerAppsCLI",
    version: "1",
  },
  {
    name: "Power Automate for desktop",
    appId: "Microsoft.PowerAutomateDesktop",
    version: "2.48.153.24261",
  },
  {
    name: "Microsoft PowerBI Desktop",
    appId: "Microsoft.PowerBI",
    version: "2.136.1202.0",
  },
  {
    name: "PowerShell",
    appId: "Microsoft.PowerShell",
    version: "7.4.5.0",
  },
  {
    name: "PowerShell Preview",
    appId: "Microsoft.PowerShell.Preview",
    version: "7.5.0.4",
  },
  {
    name: "PowerToys (Preview)",
    appId: "Microsoft.PowerToys",
    version: "0.85.0",
  },
  {
    name: "Project My Screen App",
    appId: "Microsoft.ProjectMyScreen",
    version: "8.0.12349",
  },
  {
    name: "Microsoft Promptflow",
    appId: "Microsoft.Promptflow",
    version: "1.16.0",
  },
  {
    name: "Remote Desktop",
    appId: "Microsoft.RemoteDesktopClient",
    version: "1.2.5704.0",
  },
  {
    name: "Microsoft Report Builder",
    appId: "Microsoft.ReportBuilder",
    version: "15.0.20283.0",
  },
  {
    name: "SBOM Tool",
    appId: "Microsoft.SBOMTool",
    version: "2.2.6",
  },
  {
    name: "Microsoft SQL Server 2012 Natiâ€¦",
    appId: "Microsoft.SQLServer.2012.NativeClâ€¦",
    version: "11.4.7001.0",
  },
  {
    name: "Microsoft SQL Server 2017 Deveâ€¦",
    appId: "Microsoft.SQLServer.2017.Developer",
    version: "14.0.1000.169",
  },
  {
    name: "Microsoft SQL Server 2017 Exprâ€¦",
    appId: "Microsoft.SQLServer.2017.Express",
    version: "14.0.1000.169",
  },
  {
    name: "Microsoft SQL Server 2019 Deveâ€¦",
    appId: "Microsoft.SQLServer.2019.Developer",
    version: "15.2204.5490.2",
  },
  {
    name: "Microsoft SQL Server 2019 Exprâ€¦",
    appId: "Microsoft.SQLServer.2019.Express",
    version: "15.2204.5490.2",
  },
  {
    name: "Microsoft SQL Server 2022 Deveâ€¦",
    appId: "Microsoft.SQLServer.2022.Developer",
    version: "16.0.1000.6",
  },
  {
    name: "Microsoft SQL Server 2022 Exprâ€¦",
    appId: "Microsoft.SQLServer.2022.Express",
    version: "16.0.1000.6",
  },
  {
    name: "Microsoft SQL Server Managemenâ€¦",
    appId: "Microsoft.SQLServerManagementStudâ€¦",
    version: "20.2",
  },
  {
    name: "Microsoft Azure Service Fabric",
    appId: "Microsoft.ServiceFabricRuntime",
    version: "10.1.2175.9590",
  },
  {
    name: "Microsoft Azure Service Fabricâ€¦",
    appId: "Microsoft.ServiceFabricSDK",
    version: "7.1.2175.9590",
  },
  {
    name: "Skype",
    appId: "Microsoft.Skype",
    version: "8.129",
  },
  {
    name: "Skype Insiders",
    appId: "Microsoft.Skype.Insiders",
    version: "8.8",
  },
  {
    name: "Microsoft Small Basic",
    appId: "Microsoft.SmallBasic",
    version: "1.2.0.0",
  },
  {
    name: "Sqlcmd Tools",
    appId: "Microsoft.Sqlcmd",
    version: "1.8.0",
  },
  {
    name: "Microsoft Support and Recoveryâ€¦",
    appId: "Microsoft.SupportAndRecoveryAssisâ€¦",
    version: "17.1.268.15",
  },
  {
    name: "Surface Duo API30 Emulator",
    appId: "Microsoft.SurfaceDuoEmulator.Andrâ€¦",
    version: "2022.418.48",
  },
  {
    name: "SysInternals",
    appId: "Microsoft.Sysinternals",
    version: "2024-07-23",
  },
  {
    name: "Autoruns",
    appId: "Microsoft.Sysinternals.Autoruns",
    version: "14.1",
  },
  {
    name: "BGInfo",
    appId: "Microsoft.Sysinternals.BGInfo",
    version: "4.32",
  },
  {
    name: "Desktops",
    appId: "Microsoft.Sysinternals.Desktops",
    version: "2.01",
  },
  {
    name: "FindLinks",
    appId: "Microsoft.Sysinternals.FindLinks",
    version: "1.1",
  },
  {
    name: "Handle",
    appId: "Microsoft.Sysinternals.Handle",
    version: "5",
  },
  {
    name: "Process Explorer",
    appId: "Microsoft.Sysinternals.ProcessExpâ€¦",
    version: "17.06",
  },
  {
    name: "Process Monitor",
    appId: "Microsoft.Sysinternals.ProcessMonâ€¦",
    version: "4.01",
  },
  {
    name: "PsTools Suite",
    appId: "Microsoft.Sysinternals.PsTools",
    version: "2023.04.11",
  },
  {
    name: "RamMap",
    appId: "Microsoft.Sysinternals.RAMMap",
    version: "1.61",
  },
  {
    name: "Remote Desktop Connection Manaâ€¦",
    appId: "Microsoft.Sysinternals.RDCMan",
    version: "2.93",
  },
  {
    name: "SDelete",
    appId: "Microsoft.Sysinternals.SDelete",
    version: "2.05",
  },
  {
    name: "Sigcheck",
    appId: "Microsoft.Sysinternals.Sigcheck",
    version: "2.9",
  },
  {
    name: "Strings",
    appId: "Microsoft.Sysinternals.Strings",
    version: "2.54",
  },
  {
    name: "Sysmon",
    appId: "Microsoft.Sysinternals.Sysmon",
    version: "15.14",
  },
  {
    name: "TCPView",
    appId: "Microsoft.Sysinternals.TCPView",
    version: "4.19",
  },
  {
    name: "ZoomIt",
    appId: "Microsoft.Sysinternals.ZoomIt",
    version: "8.01",
  },
  {
    name: "TeamMate",
    appId: "Microsoft.TeamMate",
    version: "0.1.11",
  },
  {
    name: "Microsoft Teams",
    appId: "Microsoft.Teams",
    version: "24243.1309.31â€¦",
  },
  {
    name: "Microsoft Teams classic",
    appId: "Microsoft.Teams.Classic",
    version: "1.7.00.26062",
  },
  {
    name: "Microsoft Teams",
    appId: "Microsoft.Teams.Free",
    version: "24244.507.311â€¦",
  },
  {
    name: "Microsoft Teams TxNDI add-on",
    appId: "Microsoft.TeamsTxNDI",
    version: "2024.8.1.14",
  },
  {
    name: "Time Travel Debugging (TTD)",
    appId: "Microsoft.TimeTravelDebugging",
    version: "1.11.429.0",
  },
  {
    name: "Microsoft.UI.Xaml",
    appId: "Microsoft.UI.Xaml.2.7",
    version: "7.2208.15002.0",
  },
  {
    name: "Microsoft.UI.Xaml",
    appId: "Microsoft.UI.Xaml.2.8",
    version: "8.2310.30001.0",
  },
  {
    name: "Windows 10 Update Assistant",
    appId: "Microsoft.UpdateAssistant",
    version: "1.4.19041.1555",
  },
  {
    name: "Microsoft Visual C++ 2015 UWP â€¦",
    appId: "Microsoft.VCLibs.Desktop.14",
    version: "14.0.33321.0",
  },
  {
    name: "Microsoft Visual C++ 2005 Rediâ€¦",
    appId: "Microsoft.VCRedist.2005.x64",
    version: "8.0.61000",
  },
  {
    name: "Microsoft Visual C++ 2005 Rediâ€¦",
    appId: "Microsoft.VCRedist.2005.x86",
    version: "8.0.61001",
  },
  {
    name: "Microsoft Visual C++ 2008 Rediâ€¦",
    appId: "Microsoft.VCRedist.2008.x64",
    version: "9.0.30729.6161",
  },
  {
    name: "Microsoft Visual C++ 2008 Rediâ€¦",
    appId: "Microsoft.VCRedist.2008.x86",
    version: "9.0.30729.6161",
  },
  {
    name: "Microsoft Visual C++ 2010 x64 â€¦",
    appId: "Microsoft.VCRedist.2010.x64",
    version: "10.0.40219",
  },
  {
    name: "Microsoft Visual C++ 2010 x86 â€¦",
    appId: "Microsoft.VCRedist.2010.x86",
    version: "10.0.40219",
  },
  {
    name: "Microsoft Visual C++ 2012 Rediâ€¦",
    appId: "Microsoft.VCRedist.2012.x64",
    version: "11.0.61030.0",
  },
  {
    name: "Microsoft Visual C++ 2012 Rediâ€¦",
    appId: "Microsoft.VCRedist.2012.x86",
    version: "11.0.61030.0",
  },
  {
    name: "Microsoft Visual C++ 2013 Rediâ€¦",
    appId: "Microsoft.VCRedist.2013.x64",
    version: "12.0.40664.0",
  },
  {
    name: "Microsoft Visual C++ 2013 Rediâ€¦",
    appId: "Microsoft.VCRedist.2013.x86",
    version: "12.0.40664.0",
  },
  {
    name: "Microsoft Visual C++ 2015-2022â€¦",
    appId: "Microsoft.VCRedist.2015+.x64",
    version: "14.40.33810.0",
  },
  {
    name: "Microsoft Visual C++ 2015-2022â€¦",
    appId: "Microsoft.VCRedist.2015+.x86",
    version: "14.40.33810.0",
  },
  {
    name: "Microsoft Visual C++ 2019 Rediâ€¦",
    appId: "Microsoft.VCRedist.2019.arm64",
    version: "14.29.30139.0",
  },
  {
    name: "Microsoft Visual C++ 2022 Rediâ€¦",
    appId: "Microsoft.VCRedist.2022.arm64",
    version: "14.34.31823.3",
  },
  {
    name: "GVFS",
    appId: "Microsoft.VFSforGit",
    version: "1.0.24074.1",
  },
  {
    name: "VSIX Bootstrapper",
    appId: "Microsoft.VSIXBootstrapper",
    version: "1.0.37",
  },
  {
    name: "Microsoft Visual Studio 2010 Tâ€¦",
    appId: "Microsoft.VSTOR",
    version: "10.0.60917",
  },
  {
    name: "Microsoft Visio Viewer 2016",
    appId: "Microsoft.VisioViewer",
    version: "16.0.4339.1001",
  },
  {
    name: "Visual Studio BuildTools 2019",
    appId: "Microsoft.VisualStudio.2019.Buildâ€¦",
    version: "16.11.40",
  },
  {
    name: "Visual Studio Enterprise 2019",
    appId: "Microsoft.VisualStudio.2019.Enterâ€¦",
    version: "16.11.40",
  },
  {
    name: "Visual Studio Professional 2019",
    appId: "Microsoft.VisualStudio.2019.Profeâ€¦",
    version: "16.11.40",
  },
  {
    name: "Visual Studio BuildTools 2022",
    appId: "Microsoft.VisualStudio.2022.Buildâ€¦",
    version: "17.11.4",
  },
  {
    name: "Visual Studio Community 2022",
    appId: "Microsoft.VisualStudio.2022.Commuâ€¦",
    version: "17.11.4",
  },
  {
    name: "Visual Studio Community 2022 Pâ€¦",
    appId: "Microsoft.VisualStudio.2022.Commuâ€¦",
    version: "17.12.0",
  },
  {
    name: "Visual Studio Enterprise 2022",
    appId: "Microsoft.VisualStudio.2022.Enterâ€¦",
    version: "17.11.4",
  },
  {
    name: "Visual Studio Enterprise 2022 â€¦",
    appId: "Microsoft.VisualStudio.2022.Enterâ€¦",
    version: "17.12.0",
  },
  {
    name: "Visual Studio Professional 2022",
    appId: "Microsoft.VisualStudio.2022.Profeâ€¦",
    version: "17.11.4",
  },
  {
    name: "Visual Studio Professional 202â€¦",
    appId: "Microsoft.VisualStudio.2022.Profeâ€¦",
    version: "17.12.0",
  },
  {
    name: "Visual Studio Configuration Fiâ€¦",
    appId: "Microsoft.VisualStudio.ConfigFindâ€¦",
    version: "1.0.47.55350",
  },
  {
    name: "Visual Studio Locator",
    appId: "Microsoft.VisualStudio.Locator",
    version: "3.1.7",
  },
  {
    name: "Microsoft Visual Studio Code",
    appId: "Microsoft.VisualStudioCode",
    version: "1.93.1",
  },
  {
    name: "Microsoft Visual Studio Code Câ€¦",
    appId: "Microsoft.VisualStudioCode.CLI",
    version: "1.93.1",
  },
  {
    name: "Microsoft Visual Studio Code Iâ€¦",
    appId: "Microsoft.VisualStudioCode.Insideâ€¦",
    version: "1.94.0",
  },
  {
    name: "Microsoft Visual Studio Code Iâ€¦",
    appId: "Microsoft.VisualStudioCode.Insideâ€¦",
    version: "1.94.0",
  },
  {
    name: "Windows Subsystem for Linux",
    appId: "Microsoft.WSL",
    version: "2.1.5.0",
  },
  {
    name: "Microsoft Web Deploy",
    appId: "Microsoft.WebDeploy",
    version: "10.0.1973",
  },
  {
    name: "Microsoft Win32 Content Prep Tâ€¦",
    appId: "Microsoft.Win32ContentPrepTool",
    version: "1.8.6",
  },
  {
    name: "WinDbg",
    appId: "Microsoft.WinDbg",
    version: "1.2409.17001.0",
  },
  {
    name: "Windows Assessment and Deploymâ€¦",
    appId: "Microsoft.WindowsADK",
    version: "10.1.25398.1",
  },
  {
    name: "Windows Admin Center",
    appId: "Microsoft.WindowsAdminCenter",
    version: "1.5.24289.0",
  },
  {
    name: "Windows App SDK",
    appId: "Microsoft.WindowsAppRuntime.1.0",
    version: "1.0.4",
  },
  {
    name: "Windows App SDK",
    appId: "Microsoft.WindowsAppRuntime.1.1",
    version: "1.1.5",
  },
  {
    name: "Windows App SDK",
    appId: "Microsoft.WindowsAppRuntime.1.2",
    version: "1.2.2",
  },
  {
    name: "Windows App Runtime",
    appId: "Microsoft.WindowsAppRuntime.1.3",
    version: "1.3.3",
  },
  {
    name: "Windows App Runtime",
    appId: "Microsoft.WindowsAppRuntime.1.4",
    version: "1.4.5",
  },
  {
    name: "Windows App Runtime 1.5",
    appId: "Microsoft.WindowsAppRuntime.1.5",
    version: "1.5.3",
  },
  {
    name: "Windows App Runtime 1.6",
    appId: "Microsoft.WindowsAppRuntime.1.6",
    version: "1.6.0",
  },
  {
    name: "Windows Application Driver",
    appId: "Microsoft.WindowsApplicationDriver",
    version: "1.2.1.0",
  },
  {
    name: "Windows 11 Installation Assistâ€¦",
    appId: "Microsoft.WindowsInstallationAssiâ€¦",
    version: "1.4.19041.1610",
  },
  {
    name: "Windows Journal",
    appId: "Microsoft.WindowsJournal",
    version: "10.0.237.0",
  },
  {
    name: "Windows PC Health Check",
    appId: "Microsoft.WindowsPCHealthCheck",
    version: "3.7.2204.15001",
  },
  {
    name: "Windows SDK",
    appId: "Microsoft.WindowsSDK.10.0.17736",
    version: "10.0.17736.0",
  },
  {
    name: "Windows SDK",
    appId: "Microsoft.WindowsSDK.10.0.18362",
    version: "10.0.18362.0",
  },
  {
    name: "Windows Software Development Kâ€¦",
    appId: "Microsoft.WindowsSDK.10.0.19041",
    version: "10.0.19041.685",
  },
  {
    name: "Windows Software Development Kâ€¦",
    appId: "Microsoft.WindowsSDK.10.0.20348",
    version: "10.1.20348.1",
  },
  {
    name: "Windows Software Development Kâ€¦",
    appId: "Microsoft.WindowsSDK.10.0.22000",
    version: "10.0.22000.832",
  },
  {
    name: "Windows Software Development Kâ€¦",
    appId: "Microsoft.WindowsSDK.10.0.22621",
    version: "10.1.22621.24â€¦",
  },
  {
    name: "Windows Software Development Kâ€¦",
    appId: "Microsoft.WindowsSDK.10.0.26100",
    version: "10.1.26100.17â€¦",
  },
  {
    name: "Windows Terminal",
    appId: "Microsoft.WindowsTerminal",
    version: "1.21.2701.0",
  },
  {
    name: "Windows Terminal Preview",
    appId: "Microsoft.WindowsTerminal.Preview",
    version: "1.22.2702.0",
  },
  {
    name: "Remote Desktop Services Infrasâ€¦",
    appId: "Microsoft.WindowsVirtualDesktopAgâ€¦",
    version: "1.0.9103.3700",
  },
  {
    name: "Remote Desktop Agent Boot Loadâ€¦",
    appId: "Microsoft.WindowsVirtualDesktopBoâ€¦",
    version: "1.0.8925.0",
  },
  {
    name: "Windows Driver Kit",
    appId: "Microsoft.WindowsWDK.10.0.19041",
    version: "10.1.19041.685",
  },
  {
    name: "Windows Driver Kit - Windows 1â€¦",
    appId: "Microsoft.WindowsWDK.10.0.22000",
    version: "10.1.22000.1",
  },
  {
    name: "Windows Driver Kit - Windows 1â€¦",
    appId: "Microsoft.WindowsWDK.10.0.22621",
    version: "10.1.22621.24â€¦",
  },
  {
    name: "Windows Driver Kit - Windows 1â€¦",
    appId: "Microsoft.WindowsWDK.10.0.26100",
    version: "10.1.26100.15â€¦",
  },
  {
    name: "Windows Package Manager Manifeâ€¦",
    appId: "Microsoft.WingetCreate",
    version: "1.6.5.0",
  },
  {
    name: "XML Notepad",
    appId: "Microsoft.XMLNotepad",
    version: "2.9.0.13",
  },
  {
    name: "Microsoft XNA Framework Redistâ€¦",
    appId: "Microsoft.XNARedist",
    version: "4.0.30901.0",
  },
  {
    name: "BITS Manager",
    appId: "Microsoft.bitsmanager",
    version: "1.12.0.4",
  },
  {
    name: "devtunnel",
    appId: "Microsoft.devtunnel",
    version: "1.0.1338.8851",
  },
  {
    name: "Error Lookup Tool",
    appId: "Microsoft.err",
    version: "6.4.5",
  },
  {
    name: "Microsoft MPI",
    appId: "Microsoft.msmpi",
    version: "10.1.12498.18",
  },
  {
    name: "Microsoft MPI SDK",
    appId: "Microsoft.msmpisdk",
    version: "10.1.12498.18",
  },
  {
    name: "ODBC Driver 18 for SQL Server",
    appId: "Microsoft.msodbcsql",
    version: "18.3.3.1",
  },
  {
    name: "quicreach",
    appId: "Microsoft.quicreach",
    version: "1.3.0",
  },
  {
    name: "vott",
    appId: "Microsoft.vott",
    version: "2.2.0",
  },
  {
    name: "Microsoft Web Platform Installâ€¦",
    appId: "Microsoft.webpicmd",
    version: "5.1.51515.0",
  },
  {
    name: "Windows File Manager",
    appId: "Microsoft.winfile",
    version: "10.3.0.0",
  },
  {
    name: "Microstockr",
    appId: "Microstockr.Desktopapp",
    version: "3.2.2",
  },
  {
    name: "Migros Bank E-Banking",
    appId: "MigrosBank.EBanking",
    version: "9.2.2812",
  },
  {
    name: "Mihomo-Party",
    appId: "Mihomo-Party.Mihomo-Party",
    version: "1.4.1",
  },
  {
    name: "yq",
    appId: "MikeFarah.yq",
    version: "4.44.2",
  },
  {
    name: "The Dude",
    appId: "Mikrotik.TheDude",
    version: "7.16",
  },
  {
    name: "Winbox",
    appId: "Mikrotik.Winbox",
    version: "3.41",
  },
  {
    name: "GoofCord",
    appId: "MilkShift.GoofCord",
    version: "1.7.1",
  },
  {
    name: "MilkyTracker",
    appId: "MilkyTracker.MilkyTracker",
    version: "1.04.00",
  },
  {
    name: "Miller",
    appId: "Miller.Miller",
    version: "6.12.0",
  },
  {
    name: "Pd64",
    appId: "MillerPuckette.Pd64",
    version: "0.54-1",
  },
  {
    name: "Pure Data",
    appId: "MillerPuckette.PureData",
    version: "0.55-1",
  },
  {
    name: "Millie",
    appId: "Millie.millie",
    version: "5.28.0",
  },
  {
    name: "OneCommander",
    appId: "MilosParipovic.OneCommander",
    version: "3.89.1",
  },
  {
    name: "Agente Milvus Core",
    appId: "Milvus.AgenteMilvusCore",
    version: "103.0.0.0",
  },
  {
    name: "Min",
    appId: "Min.Min",
    version: "1.31.2",
  },
  {
    name: "MinIO Client",
    appId: "MinIO.Client",
    version: "2024.01.18",
  },
  {
    name: "MinIO Server",
    appId: "MinIO.Server",
    version: "2024.01.18",
  },
  {
    name: "4zur3",
    appId: "Minecodes.4zur3",
    version: "1.1.1.0",
  },
  {
    name: "Mingo",
    appId: "Mingo.Mingo",
    version: "1.13.5",
  },
  {
    name: "Midterm",
    appId: "MinhLoi.Midterm",
    version: "1.2.2",
  },
  {
    name: "MiniTool Partition Wizard Free",
    appId: "MiniTool.PartitionWizard.Free",
    version: "12.8",
  },
  {
    name: "AnythingLLM",
    appId: "MintplexLabs.AnythingLLM",
    version: "1.6.7",
  },
  {
    name: "WSLtty",
    appId: "Mintty.WSLtty",
    version: "3.7.4",
  },
  {
    name: "Miranda IM",
    appId: "MirandaIM.MirandaIM",
    version: "0.10.80",
  },
  {
    name: "Lens",
    appId: "Mirantis.Lens",
    version: "2023.9.290703â€¦",
  },
  {
    name: "AnyViz Universal Cloud Adapter",
    appId: "Mirasoft.AnyVizCloudAdapter",
    version: "0.9.9.0",
  },
  {
    name: "Action!",
    appId: "Mirillis.Action",
    version: "4.29.2",
  },
  {
    name: "Splash",
    appId: "Mirillis.SplashUltimate",
    version: "2.7.0",
  },
  {
    name: "Miro",
    appId: "Miro.Miro",
    version: "0.8.72",
  },
  {
    name: "Misfit Model 3D",
    appId: "MisfitCode.MisfitModel3D",
    version: "1.2.4",
  },
  {
    name: "Misfit Model 3D (Dev)",
    appId: "MisfitCode.MisfitModel3D.dev",
    version: "1.3.8",
  },
  {
    name: "MisiteBao",
    appId: "MisiteBao.MisiteBao",
    version: "1.1.3",
  },
  {
    name: "Signa 2010",
    appId: "MitSoft.Signa",
    version: "1.3.2023.1023",
  },
  {
    name: "MndpTray.Core",
    appId: "MndpTray.Core",
    version: "2.2.0.0",
  },
  {
    name: "MobaXterm",
    appId: "Mobatek.MobaXterm",
    version: "24.2.0.5220",
  },
  {
    name: "Mockplus RP",
    appId: "Mockplus.MockplusRP",
    version: "1.3.2",
  },
  {
    name: "Mod Organizer",
    appId: "ModOrganizer2.modorganizer",
    version: "2.5.2",
  },
  {
    name: "Modelio Open Source",
    appId: "Modeliosoft.Modelio",
    version: "5.4.1",
  },
  {
    name: "ModernFlyouts (Preview)",
    appId: "ModernFlyouts.ModernFlyouts",
    version: "0.9.3.0",
  },
  {
    name: "Modrinth App",
    appId: "Modrinth.ModrinthApp",
    version: "0.7.1",
  },
  {
    name: "Quick Picture Viewer",
    appId: "ModuleArt.QuickPictureViewer",
    version: "3.1.4",
  },
  {
    name: "Modyfi",
    appId: "Modyfi.Modyfi",
    version: "0.1.3",
  },
  {
    name: "Useful Tools for Windows",
    appId: "MoheshwarAmarnathBiswas.UsefulTooâ€¦",
    version: "2.7",
  },
  {
    name: "Moises",
    appId: "Moises.Moises",
    version: "1.0.52",
  },
  {
    name: "Bedrock Dedicated Server",
    appId: "Mojang.BedrockDedicatedServer",
    version: "1.20.61.01",
  },
  {
    name: "Minecraft Launcher",
    appId: "Mojang.MinecraftLauncher",
    version: "2.0.0.0",
  },
  {
    name: "Molotov",
    appId: "MolotovTV.Molotov",
    version: "4.6.0",
  },
  {
    name: "Momento CLI",
    appId: "Momento.cli",
    version: "0.46.0",
  },
  {
    name: "MongoDB Compass Community",
    appId: "MongoDB.Compass.Community",
    version: "1.41.0",
  },
  {
    name: "MongoDB Compass",
    appId: "MongoDB.Compass.Full",
    version: "1.44.4.0",
  },
  {
    name: "MongoDB Compass Isolated Editiâ€¦",
    appId: "MongoDB.Compass.Isolated",
    version: "1.44.4.0",
  },
  {
    name: "MongoDB Compass Readonly",
    appId: "MongoDB.Compass.Readonly",
    version: "1.44.4.0",
  },
  {
    name: "MongoDB Tools",
    appId: "MongoDB.DatabaseTools",
    version: "100.10.0",
  },
  {
    name: "MongoDB Atlas CLI",
    appId: "MongoDB.MongoDBAtlasCLI",
    version: "1.29.0",
  },
  {
    name: "MongoDB CLI",
    appId: "MongoDB.MongoDBCLI",
    version: "2.0.2",
  },
  {
    name: "MongoDB",
    appId: "MongoDB.Server",
    version: "8.0.0",
  },
  {
    name: "MongoDB Shell",
    appId: "MongoDB.Shell",
    version: "2.3.1",
  },
  {
    name: "Notejoy",
    appId: "MonkiLabs.Notejoy",
    version: "2.0.0",
  },
  {
    name: "Mono for Windows",
    appId: "Mono.Mono",
    version: "6.12.0.206",
  },
  {
    name: "MonoGame SDK",
    appId: "MonoGame.MonoGame",
    version: "3.7.1.189",
  },
  {
    name: "Pale Moon",
    appId: "MoonchildProductions.PaleMoon",
    version: "33.3.1",
  },
  {
    name: "Moonlight Game Streaming Client",
    appId: "MoonlightGameStreamingProject.Mooâ€¦",
    version: "6.1.0.0",
  },
  {
    name: "Lunar Client",
    appId: "Moonsworth.LunarClient",
    version: "3.2.6",
  },
  {
    name: "Brick Hill",
    appId: "Mooshimity.BrickHill",
    version: "0.3.0.0",
  },
  {
    name: "Morgen",
    appId: "Morgen.Morgen",
    version: "3.5.9",
  },
  {
    name: "MKVToolNix",
    appId: "MoritzBunkus.MKVToolNix",
    version: "87.0.0",
  },
  {
    name: "Morningstar Direct Prerequisite",
    appId: "Morningstar.MorningstarDirectPrerâ€¦",
    version: "3.20.004",
  },
  {
    name: "Bazarr",
    appId: "Morpheus.Bazarr",
    version: "1.4.4",
  },
  {
    name: "Motion Desktop App",
    appId: "MotionTeam.MotionDesktopApp",
    version: "0.43.0",
  },
  {
    name: "Motorola Mobile Drivers Instalâ€¦",
    appId: "Motorola.MobileDrivers",
    version: "6.4.0",
  },
  {
    name: "Ready For Assistant",
    appId: "Motorola.ReadyForAssistant",
    version: "07.0.0.019.000",
  },
  {
    name: "Mozilla Firefox",
    appId: "Mozilla.Firefox",
    version: "131",
  },
  {
    name: "Firefox Developer Edition",
    appId: "Mozilla.Firefox.DeveloperEdition",
    version: "131",
  },
  {
    name: "Mozilla Firefox ESR",
    appId: "Mozilla.Firefox.ESR",
    version: "115.15.0",
  },
  {
    name: "Firefox Nightly",
    appId: "Mozilla.Firefox.Nightly",
    version: "116.0a1",
  },
  {
    name: "geckodriver",
    appId: "Mozilla.GeckoDriver",
    version: "0.35.0",
  },
  {
    name: "Secrets OPerationS",
    appId: "Mozilla.SOPS",
    version: "3.7.3",
  },
  {
    name: "SeaMonkey",
    appId: "Mozilla.SeaMonkey",
    version: "2.53.18.1",
  },
  {
    name: "Mozilla Thunderbird (en-US)",
    appId: "Mozilla.Thunderbird",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (MSIX)",
    appId: "Mozilla.Thunderbird.MSIX",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (af)",
    appId: "Mozilla.Thunderbird.af",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ar)",
    appId: "Mozilla.Thunderbird.ar",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ast)",
    appId: "Mozilla.Thunderbird.ast",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ast-ES)",
    appId: "Mozilla.Thunderbird.ast-ES",
    version: "128.2.0",
  },
  {
    name: "Mozilla Thunderbird (be)",
    appId: "Mozilla.Thunderbird.be",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (bg)",
    appId: "Mozilla.Thunderbird.bg",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (br)",
    appId: "Mozilla.Thunderbird.br",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ca)",
    appId: "Mozilla.Thunderbird.ca",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (cs)",
    appId: "Mozilla.Thunderbird.cs",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (cy)",
    appId: "Mozilla.Thunderbird.cy",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (da)",
    appId: "Mozilla.Thunderbird.da",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (de)",
    appId: "Mozilla.Thunderbird.de",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (dsb)",
    appId: "Mozilla.Thunderbird.dsb",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (el)",
    appId: "Mozilla.Thunderbird.el",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (en-CA)",
    appId: "Mozilla.Thunderbird.en-CA",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (en-GB)",
    appId: "Mozilla.Thunderbird.en-GB",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (es-AR)",
    appId: "Mozilla.Thunderbird.es-AR",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (es-ES)",
    appId: "Mozilla.Thunderbird.es-ES",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (es-MX)",
    appId: "Mozilla.Thunderbird.es-MX",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (et)",
    appId: "Mozilla.Thunderbird.et",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (eu)",
    appId: "Mozilla.Thunderbird.eu",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (fi)",
    appId: "Mozilla.Thunderbird.fi",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (fr)",
    appId: "Mozilla.Thunderbird.fr",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (fy-NL)",
    appId: "Mozilla.Thunderbird.fy-NL",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ga-IE)",
    appId: "Mozilla.Thunderbird.ga-IE",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (gd)",
    appId: "Mozilla.Thunderbird.gd",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (gl)",
    appId: "Mozilla.Thunderbird.gl",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (he)",
    appId: "Mozilla.Thunderbird.he",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (hr)",
    appId: "Mozilla.Thunderbird.hr",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (hsb)",
    appId: "Mozilla.Thunderbird.hsb",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (hu)",
    appId: "Mozilla.Thunderbird.hu",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (hy-AM)",
    appId: "Mozilla.Thunderbird.hy-AM",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (id)",
    appId: "Mozilla.Thunderbird.id",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (is)",
    appId: "Mozilla.Thunderbird.is",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (it)",
    appId: "Mozilla.Thunderbird.it",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ja)",
    appId: "Mozilla.Thunderbird.ja",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ka)",
    appId: "Mozilla.Thunderbird.ka",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (kab)",
    appId: "Mozilla.Thunderbird.kab",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (kk)",
    appId: "Mozilla.Thunderbird.kk",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ko)",
    appId: "Mozilla.Thunderbird.ko",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (lt)",
    appId: "Mozilla.Thunderbird.lt",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (lv)",
    appId: "Mozilla.Thunderbird.lv",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ms)",
    appId: "Mozilla.Thunderbird.ms",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (nb-NO)",
    appId: "Mozilla.Thunderbird.nb-NO",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (nl)",
    appId: "Mozilla.Thunderbird.nl",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (nn-NO)",
    appId: "Mozilla.Thunderbird.nn-NO",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (pa-IN)",
    appId: "Mozilla.Thunderbird.pa-IN",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (pl)",
    appId: "Mozilla.Thunderbird.pl",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (pt-BR)",
    appId: "Mozilla.Thunderbird.pt-BR",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (pt-PT)",
    appId: "Mozilla.Thunderbird.pt-PT",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (rm)",
    appId: "Mozilla.Thunderbird.rm",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ro)",
    appId: "Mozilla.Thunderbird.ro",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (ru)",
    appId: "Mozilla.Thunderbird.ru",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (sk)",
    appId: "Mozilla.Thunderbird.sk",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (sl)",
    appId: "Mozilla.Thunderbird.sl",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (sq)",
    appId: "Mozilla.Thunderbird.sq",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (sr)",
    appId: "Mozilla.Thunderbird.sr",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (sv-SE)",
    appId: "Mozilla.Thunderbird.sv-SE",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (th)",
    appId: "Mozilla.Thunderbird.th",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (tr)",
    appId: "Mozilla.Thunderbird.tr",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (uk)",
    appId: "Mozilla.Thunderbird.uk",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (uz)",
    appId: "Mozilla.Thunderbird.uz",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (vi)",
    appId: "Mozilla.Thunderbird.vi",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (zh-CN)",
    appId: "Mozilla.Thunderbird.zh-CN",
    version: "128.3.0",
  },
  {
    name: "Mozilla Thunderbird (zh-TW)",
    appId: "Mozilla.Thunderbird.zh-TW",
    version: "128.3.0",
  },
  {
    name: "Mozilla VPN",
    appId: "Mozilla.VPN",
    version: "2.22.1.0",
  },
  {
    name: "ModBreeze",
    appId: "Mr1cecream.Modbreeze",
    version: "0.4.0",
  },
  {
    name: "Doggo",
    appId: "MrKaran.Doggo",
    version: "1.0.4",
  },
  {
    name: "é›»å­ä½›å…¸",
    appId: "MrMYHuang.cbetar2",
    version: "22.0.0",
  },
  {
    name: "yoink",
    appId: "MrMarble.yoink",
    version: "0.5.0",
  },
  {
    name: "go-cqhttp",
    appId: "Mrs4s.go-cqhttp",
    version: "1.2.0",
  },
  {
    name: "Mu Editor",
    appId: "Mu.Mu",
    version: "1.2.0",
  },
  {
    name: "å¹•å¸ƒ",
    appId: "Mubu.Mubu",
    version: "3.6.0",
  },
  {
    name: "IIUM Schedule",
    appId: "MuhammadFareezIqmal.IIUMSchedule",
    version: "1.4.3.0",
  },
  {
    name: "SeriLink Serial Monitor",
    appId: "MuhammadFareezIqmal.SeriLink",
    version: "0.0.6.0",
  },
  {
    name: "Friday Night Funkin\u0027",
    appId: "Muhammed87643.Funkin",
    version: "1.0.0",
  },
  {
    name: "OpenLens",
    appId: "MuhammedKalkan.OpenLens",
    version: "6.5.2",
  },
  {
    name: "Mullvad Browser",
    appId: "MullvadVPN.MullvadBrowser",
    version: "13.5.1",
  },
  {
    name: "Mullvad VPN",
    appId: "MullvadVPN.MullvadVPN",
    version: "2024.5",
  },
  {
    name: "Mullvad VPN",
    appId: "MullvadVPN.MullvadVPN.beta",
    version: "2024.6-beta1",
  },
  {
    name: "MultiMC",
    appId: "MultiMC.MultiMC",
    version: "0.7.0",
  },
  {
    name: "F1TV Multi-Screen Viewer for mâ€¦",
    appId: "MultiViewer.MultiViewer",
    version: "1.31.7",
  },
  {
    name: "Mumble (client)",
    appId: "Mumble.Mumble.Client",
    version: "1.5.634",
  },
  {
    name: "Mumble Server",
    appId: "Mumble.Mumble.Server",
    version: "1.5.634",
  },
  {
    name: "Mupen64",
    appId: "Mupen64.Mupen64",
    version: "0.5.1.0",
  },
  {
    name: "Gittyup",
    appId: "Murmele.Gittyup",
    version: "1.4.0",
  },
  {
    name: "Muse Hub Installer",
    appId: "Muse.MuseHub",
    version: "2.0.22.1414",
  },
  {
    name: "MuseScore",
    appId: "Musescore.Musescore",
    version: "4.4.2.2425709â€¦",
  },
  {
    name: "MuseScore 3",
    appId: "Musescore.Musescore.3",
    version: "3.6.2.5480218â€¦",
  },
  {
    name: "MusicBee",
    appId: "MusicBee.MusicBee",
    version: "3.5.8698",
  },
  {
    name: "MusicBrainz Picard",
    appId: "MusicBrainz.Picard",
    version: "2.12.3",
  },
  {
    name: "Flicker List",
    appId: "Muye.FlickerList",
    version: "5.4.3",
  },
  {
    name: "AirGame",
    appId: "MyCloudGame.AirGame",
    version: "1.7.6-x64",
  },
  {
    name: "MY.GAMES GameCenter",
    appId: "MyGames.GameCenter",
    version: "4.1655",
  },
  {
    name: "MyHeritage Family Tree Builder",
    appId: "MyHeritage.FamilyTreeBuilder",
    version: "8.0.0.8640",
  },
  {
    name: "MyMonero",
    appId: "MyMonero.MyMonero",
    version: "1.3.3",
  },
  {
    name: "MyPaint",
    appId: "MyPaint.MyPaint",
    version: "2.0.1.g478280â€¦",
  },
  {
    name: "EntraPass web",
    appId: "MySky.EntraPassWeb",
    version: "8.71.16.0",
  },
  {
    name: "MysteriumVPN",
    appId: "MysteriumNetwork.Mysterium",
    version: "10.17.7",
  },
  {
    name: "Agent Ransack",
    appId: "Mythicsoft.AgentRansack",
    version: "9.2.3435.1",
  },
  {
    name: "NASM",
    appId: "NASM.NASM",
    version: "2.16.03",
  },
  {
    name: "AvUpload",
    appId: "NASSe.K.AvUpload",
    version: "1.2.1",
  },
  {
    name: "DHLabel",
    appId: "NASSe.K.DHLabel",
    version: "1.5.2",
  },
  {
    name: "FBReconnect",
    appId: "NASSe.K.FBReconnect",
    version: "1.0.3",
  },
  {
    name: "KeepRunning",
    appId: "NASSe.K.KeepRunning",
    version: "1.0.0",
  },
  {
    name: "ado",
    appId: "NASSe.K.ado",
    version: "1.0.1",
  },
  {
    name: "NATS Command Line Interface",
    appId: "NATSAuthors.CLI",
    version: "0.0.35",
  },
  {
    name: "NATS Server",
    appId: "NATSAuthors.NATSServer",
    version: "2.9.21",
  },
  {
    name: "NAVER MYBOX Explorer",
    appId: "NAVER.MYBOX",
    version: "3.0.6.116",
  },
  {
    name: "NAVER Order",
    appId: "NAVER.Order",
    version: "1.2.1",
  },
  {
    name: "Naver Whale",
    appId: "NAVER.Whale",
    version: "3.28.266.11",
  },
  {
    name: "NAVER WORKS Drive",
    appId: "NAVERCloudCorp.NAVERWORKSDrive",
    version: "4.0.4.42",
  },
  {
    name: "MrBayes",
    appId: "NBIS.MrBayes",
    version: "3.2.7",
  },
  {
    name: "Dosvox",
    appId: "NCEUFRJ.DosVox",
    version: "6.1",
  },
  {
    name: "Classic FTP File Transfer Softâ€¦",
    appId: "NCHSoftware.ClassicFTP",
    version: "4.0.5",
  },
  {
    name: "Crescendo Music Notation Editor",
    appId: "NCHSoftware.Crescendo",
    version: "9.73",
  },
  {
    name: "VideoPad Video Editor",
    appId: "NCHSoftware.VideoPad",
    version: "16.34",
  },
  {
    name: "WavePad Sound Editor",
    appId: "NCHSoftware.WavePad",
    version: "19.5",
  },
  {
    name: "PURPLE",
    appId: "NCSoft.Purple",
    version: "2.24.910.20",
  },
  {
    name: "NDI 6 Runtime",
    appId: "NDI.NDIRuntime",
    version: "6.0.1.0",
  },
  {
    name: "NDI 6 Tools",
    appId: "NDI.NDITools",
    version: "6.0.1.0",
  },
  {
    name: "EclipseFlashTool18",
    appId: "NDXCode.EclipseFlashTool",
    version: "1.8",
  },
  {
    name: "PicPick",
    appId: "NGWIN.PicPick",
    version: "7.2.8",
  },
  {
    name: "NHI ServiSign",
    appId: "NHI.ServiSign",
    version: "1.0.21.1130",
  },
  {
    name: "Bugs",
    appId: "NHNBugs.Bugs",
    version: "4.12.0.0",
  },
  {
    name: "Dooray! Messenger",
    appId: "NHNCorporation.Dooray!Messenger",
    version: "1.1.13.2",
  },
  {
    name: "KCPPOS plus",
    appId: "NHNKCP.KCPPOSplus",
    version: "2.11.0.0",
  },
  {
    name: "PayCoOrder",
    appId: "NHNPAYCO.PayCoOrder",
    version: "1.2.0.0",
  },
  {
    name: "NI-DAQmx",
    appId: "NI.ni-daqmx",
    version: "24.6.0",
  },
  {
    name: "NI Package Manager",
    appId: "NI.ni-packagemanager",
    version: "24.5.0",
  },
  {
    name: "NI PXI Platform Services",
    appId: "NI.ni-pxiplatformservices",
    version: "24.5.0",
  },
  {
    name: "NI-Serial",
    appId: "NI.ni-serial",
    version: "24.5.0",
  },
  {
    name: "NI System Configuration",
    appId: "NI.ni-systemconfiguration",
    version: "24.5.0",
  },
  {
    name: "NI-VISA",
    appId: "NI.ni-visa",
    version: "24.5.0",
  },
  {
    name: "NI-XNET",
    appId: "NI.ni-xnet",
    version: "24.5.0",
  },
  {
    name: "ARMPS",
    appId: "NIOSH.ARMPS",
    version: "6.2.02",
  },
  {
    name: "One-Click-Backup",
    appId: "NIS.One-Click-Backup",
    version: "1.2",
  },
  {
    name: "KEAASZ",
    appId: "NISZ.KEAASZ",
    version: "1.33.0",
  },
  {
    name: "WISER for Windows",
    appId: "NLM.Wiser",
    version: "6.2.15",
  },
  {
    name: "Unbound",
    appId: "NLnetLabs.Unbound",
    version: "1.19.3",
  },
  {
    name: "NOW TV Player",
    appId: "NOWTV.NOWTVPlayer",
    version: "8.15.0.0",
  },
  {
    name: "Nullsoft Install System",
    appId: "NSIS.NSIS",
    version: "3.1",
  },
  {
    name: "NSSM",
    appId: "NSSM.NSSM",
    version: "2.24-101-g897â€¦",
  },
  {
    name: "WireSock VPN Client",
    appId: "NTKERNEL.WireSockVPNClient",
    version: "1.4.7",
  },
  {
    name: "WireSock VPN Gateway",
    appId: "NTKERNEL.WireSockVPNGateway",
    version: "1.1.4",
  },
  {
    name: "NVDA",
    appId: "NVAccess.NVDA",
    version: "2024.3.1",
  },
  {
    name: "NZXT CAM",
    appId: "NZXT.CAM",
    version: "4.61.7",
  },
  {
    name: "ManiaPlanet",
    appId: "Nadeo.ManiaPlanet",
    version: "4.1",
  },
  {
    name: "ManiaPlanet Dedicated Server",
    appId: "Nadeo.ManiaplanetServer",
    version: "2019-10-23",
  },
  {
    name: "TmNationsForever",
    appId: "Nadeo.TrackManiaNationsForever",
    version: "2.11.26",
  },
  {
    name: "Trackmania Forever Dedicated Sâ€¦",
    appId: "Nadeo.TrackmaniaForeverServer",
    version: "2011-02-21",
  },
  {
    name: "Packet Sender",
    appId: "NagleCode.PacketSender",
    version: "8.7.1",
  },
  {
    name: "Electrum-NMC",
    appId: "NamecoinProject.Electrum-NMC",
    version: "nc4.0.6",
  },
  {
    name: "Namecoin Core Client",
    appId: "NamecoinProject.NamecoinCore",
    version: "0.21.0.1",
  },
  {
    name: "Nanoleaf Desktop",
    appId: "Nanoleaf.NanoleafDesktop",
    version: "2.0.1",
  },
  {
    name: "IIS Crypto CLI",
    appId: "NartacSoftwareInc.IISCryptoCLI",
    version: "3.3.17.0",
  },
  {
    name: "IIS Crypto GUI",
    appId: "NartacSoftwareInc.IISCryptoGUI",
    version: "3.3.17.0",
  },
  {
    name: "WinSSH-Pageant",
    appId: "NathanBeals.WinSSH-Pageant",
    version: "2.3.1",
  },
  {
    name: "ExtractNow",
    appId: "NathanMoinvaziri.ExtractNow",
    version: "4.8.3.0",
  },
  {
    name: "NitroShare",
    appId: "NathanOsman.NitroShare",
    version: "0.3.4",
  },
  {
    name: "beatdrop",
    appId: "NathanielJohns.Beatdrop",
    version: "2.6.2",
  },
  {
    name: "Natron",
    appId: "Natron.Natron",
    version: "2.5.0",
  },
  {
    name: "NaturalReader 16",
    appId: "Naturalsoft.NaturalReader16",
    version: "16.1.2",
  },
  {
    name: "Navidrome",
    appId: "Navidrome.Navidrome",
    version: "0.49.3",
  },
  {
    name: "Navigraph Hub",
    appId: "Navigraph.NavigraphHub",
    version: "1.2.1",
  },
  {
    name: "VTFEdit Reloaded",
    appId: "Nbc66.VTFEditReloaded",
    version: "2.0.4.00",
  },
  {
    name: "Ais Decoder",
    appId: "NealArundale.AisDecoder",
    version: "3.5.149",
  },
  {
    name: "Distill Web Monitor",
    appId: "Neemb.Distill",
    version: "3.10.28-beta",
  },
  {
    name: "HidHide",
    appId: "Nefarius.HidHide",
    version: "1.5.230",
  },
  {
    name: "nefcon",
    appId: "Nefarius.nefcon",
    version: "1.11.0",
  },
  {
    name: "Nelson",
    appId: "NelsonNumericalSoftware.Nelson",
    version: "1.7.0.4255",
  },
  {
    name: "NeoAxis Launcher",
    appId: "NeoAxis.Engine",
    version: "2024.1",
  },
  {
    name: "NeoLoad",
    appId: "Neotys.NeoLoad",
    version: "8.0.0",
  },
  {
    name: "Neovide",
    appId: "Neovide.Neovide",
    version: "0.13.3",
  },
  {
    name: "Neovim",
    appId: "Neovim.Neovim",
    version: "0.10.1",
  },
  {
    name: "Neovim Nightly",
    appId: "Neovim.Neovim.Nightly",
    version: "0.11.0",
  },
  {
    name: "Nervatura",
    appId: "Nervatura.Nervatura",
    version: "5.2.9",
  },
  {
    name: "NetDocuments ndOffice",
    appId: "NetDocuments.ndOffice",
    version: "4.0.1.20604",
  },
  {
    name: "ç½‘æ˜“äº‘éŸ³ä¹",
    appId: "NetEase.CloudMusic",
    version: "2.10.13.202675",
  },
  {
    name: "ç½‘æ˜“äº‘éŸ³ä¹",
    appId: "NetEase.CloudMusic.Beta",
    version: "3.0.18.203152",
  },
  {
    name: "ç½‘æ˜“äº‘éŸ³ä¹Â·X Studio",
    appId: "NetEase.CloudMusicXStudio",
    version: "1",
  },
  {
    name: "ç½‘æ˜“DD",
    appId: "NetEase.DD",
    version: "1.0.0.1",
  },
  {
    name: "IdentityV",
    appId: "NetEase.IdentityV",
    version: "1.0.0.1",
  },
  {
    name: "ç¬¬äº”äººæ ¼",
    appId: "NetEase.IdentityV.CN",
    version: "2.0.0.1",
  },
  {
    name: "Infinite Lagrange",
    appId: "NetEase.InfiniteLagrange",
    version: "20221215",
  },
  {
    name: "ç½‘æ˜“çµçŠ€åŠžå…¬",
    appId: "NetEase.Lingxi",
    version: "1.43.1",
  },
  {
    name: "æˆ‘çš„ä¸–ç•Œå¯åŠ¨å™¨",
    appId: "NetEase.MCLauncher",
    version: "1.14.0.36188",
  },
  {
    name: "ç½‘æ˜“é‚®ç®±å¤§å¸ˆ",
    appId: "NetEase.MailMaster",
    version: "5.1.2.1013",
  },
  {
    name: "ç½‘æ˜“ä¸ƒé±¼",
    appId: "NetEase.QIYU",
    version: "2.7.0",
  },
  {
    name: "æœ‰é“äº‘ç¬”è®°",
    appId: "NetEase.YoudaoNote",
    version: "8.0.51",
  },
  {
    name: "æœ‰é“å°ç­è¯¾",
    appId: "NetEase.YoudaoPokeClass",
    version: "2.14.2",
  },
  {
    name: "æœ‰é“åŒä¼",
    appId: "NetEase.YoudaoTongchuan",
    version: "1.4.0.0",
  },
  {
    name: "æœ‰é“åŒä¼ ä¼ä¸šç‰ˆ",
    appId: "NetEase.YoudaoTongchuan.Commercial",
    version: "1.0.0.0",
  },
  {
    name: "PortX",
    appId: "NetSarangComputer.PortX",
    version: "2.2.10",
  },
  {
    name: "NetSurf - NetSurf - Web Browser",
    appId: "NetSurf.NetSurf",
    version: "3.10.0",
  },
  {
    name: "Netbird",
    appId: "Netbird.Netbird",
    version: "0.29.4",
  },
  {
    name: "Nethack",
    appId: "Nethack.Nethack",
    version: "3.6.7",
  },
  {
    name: "Nethermind",
    appId: "Nethermind.Nethermind",
    version: "1.28.0",
  },
  {
    name: "Netmaker",
    appId: "Netmaker.Netmaker",
    version: "0.24.0",
  },
  {
    name: "Vision Teacher for Chromebooksâ€¦",
    appId: "Netop.VisionTeacher",
    version: "1.7.6.0",
  },
  {
    name: "S3 Browser",
    appId: "NetsdkSoftwareFZE.S3Browser",
    version: "12.0.1",
  },
  {
    name: "OneMark",
    appId: "Neux.OneMark",
    version: "1.0.2",
  },
  {
    name: "LAV Filters",
    appId: "Nevcairiel.LAVFilters",
    version: "0.79.2",
  },
  {
    name: "Tux Paint",
    appId: "NewBreedSoftware.TuxPaint",
    version: "0.9.33",
  },
  {
    name: "NewSS Student",
    appId: "NewCloud.NewSSStudent",
    version: "1.03.1236",
  },
  {
    name: "NewSS Teacher",
    appId: "NewCloud.NewSSTeacher",
    version: "1.03.1236",
  },
  {
    name: "NewCloud.ScreenCapturerRecorder",
    appId: "NewCloud.ScreenCaptureRecorder",
    version: "0.13.3",
  },
  {
    name: "WakeOnLan",
    appId: "NewCloud.WakeOnLan",
    version: "1.0.2",
  },
  {
    name: "NewReleases",
    appId: "NewReleases.NewReleasesCLI",
    version: "0.1.16",
  },
  {
    name: "NDI 5 Runtime",
    appId: "NewTek.NDI5Runtime",
    version: "5.6.1.0",
  },
  {
    name: "NDI 5 Tools",
    appId: "NewTek.NDI5Tools",
    version: "5.6.1.0",
  },
  {
    name: "Newgrounds Player",
    appId: "Newgrounds.NewgroundsPlayer",
    version: "1.0.0",
  },
  {
    name: "Newline Assistant for X689",
    appId: "Newlineinteractive.Newlineassistaâ€¦",
    version: "1",
  },
  {
    name: "FeedDemon",
    appId: "NewsGator.FeedDemon",
    version: "4.5.0.0",
  },
  {
    name: "NewzenLauncher",
    appId: "NewzenMC.NewzenLauncher",
    version: "1.0.2",
  },
  {
    name: "UpdateHub",
    appId: "Nexova.UpdateHub",
    version: "2.4.0",
  },
  {
    name: "NextDNS CLI",
    appId: "NextDNS.NextDNS.CLI",
    version: "1.43.5",
  },
  {
    name: "NextDNS",
    appId: "NextDNS.NextDNS.Desktop",
    version: "3.0.12",
  },
  {
    name: "Nextcloud",
    appId: "Nextcloud.NextcloudDesktop",
    version: "3.14.1",
  },
  {
    name: "Nextiva",
    appId: "Nextiva.NextivaONE",
    version: "1.16.0",
  },
  {
    name: "Vortex",
    appId: "NexusMods.Vortex",
    version: "1.12.5",
  },
  {
    name: "Ngrok",
    appId: "Ngrok.Ngrok",
    version: "3.5.0",
  },
  {
    name: "Nheko",
    appId: "NhekoReborn.Nheko",
    version: "0.11.3",
  },
  {
    name: "NVC VHDL Simulator",
    appId: "NickGasson.NVC",
    version: "1.13.1",
  },
  {
    name: "Social Amnesia",
    appId: "NickGottschlich.SocialAmnesia",
    version: "2.0.2",
  },
  {
    name: "ScreenToGif",
    appId: "NickeManarin.ScreenToGif",
    version: "2.41.0",
  },
  {
    name: "MasterVolumeSync",
    appId: "NicoJeskeIT.MasterVolumeSync",
    version: "1.0.7",
  },
  {
    name: "Sengi",
    appId: "NicolasConstant.sengi",
    version: "1.8.0",
  },
  {
    name: "React-Explorer",
    appId: "NicolasRamz.React-Explorer",
    version: "3.1.0",
  },
  {
    name: "Nicotine+",
    appId: "Nicotine+.Nicotine+",
    version: "3.3.5",
  },
  {
    name: "NIIMBOT for Windows",
    appId: "Niimbot.NIIMBOT",
    version: "3.12.7",
  },
  {
    name: "FileOptimizer",
    appId: "Nikkho.FileOptimizer",
    version: "16.7.0.0",
  },
  {
    name: "Subtitle Edit",
    appId: "Nikse.SubtitleEdit",
    version: "4.0.8.0",
  },
  {
    name: "Nilesoft Shell",
    appId: "Nilesoft.Shell",
    version: "1.9.15",
  },
  {
    name: "NimbleText",
    appId: "NimbleThingPtyLtd.NimbleText",
    version: "4.0.0.34617",
  },
  {
    name: "Nimbus Note",
    appId: "NimbusWeb.NimbusNote",
    version: "10.0.54",
  },
  {
    name: "ninja",
    appId: "Ninja-build.Ninja",
    version: "1.12.1",
  },
  {
    name: "AdvancedRun",
    appId: "NirSoft.AdvancedRun",
    version: "1.51",
  },
  {
    name: "AppCrashView",
    appId: "NirSoft.AppCrashView",
    version: "1.35",
  },
  {
    name: "AppReadWriteCounter",
    appId: "NirSoft.AppReadWriteCounter",
    version: "1.41",
  },
  {
    name: "BlueScreenView",
    appId: "NirSoft.BlueScreenView",
    version: "1.55",
  },
  {
    name: "CSVFileView",
    appId: "NirSoft.CSVFileView",
    version: "2.64",
  },
  {
    name: "ChromeCacheView",
    appId: "NirSoft.ChromeCacheView",
    version: "2.45",
  },
  {
    name: "DNSLookupView",
    appId: "NirSoft.DNSLookupView",
    version: "1.12",
  },
  {
    name: "NirSoft DownTester",
    appId: "NirSoft.DownTester",
    version: "1.3",
  },
  {
    name: "FullEventLogView",
    appId: "NirSoft.FullEventLogView",
    version: "1.8",
  },
  {
    name: "HashMyFiles",
    appId: "NirSoft.HashMyFiles",
    version: "2.44",
  },
  {
    name: "NirSoft IPNetInfo",
    appId: "NirSoft.IPNetInfo",
    version: "1.95",
  },
  {
    name: "InsideClipboard",
    appId: "NirSoft.InsideClipboard",
    version: "1.25",
  },
  {
    name: "InstalledDriversList",
    appId: "NirSoft.InstalledDriversList",
    version: "1.05",
  },
  {
    name: "InstalledPackagesView",
    appId: "NirSoft.InstalledPackagesView",
    version: "1.05",
  },
  {
    name: "NirSoft NK2Edit",
    appId: "NirSoft.NK2Edit",
    version: "3.45",
  },
  {
    name: "NetBScanner",
    appId: "NirSoft.NetBScanner",
    version: "1.11",
  },
  {
    name: "NetRouteView",
    appId: "NirSoft.NetRouteView",
    version: "1.4",
  },
  {
    name: "NetworkInterfacesView",
    appId: "NirSoft.NetworkInterfacesView",
    version: "1.35",
  },
  {
    name: "NetworkOpenedFiles",
    appId: "NirSoft.NetworkOpenedFiles",
    version: "1.62",
  },
  {
    name: "NetworkUsageView",
    appId: "NirSoft.NetworkUsageView",
    version: "1.31",
  },
  {
    name: "NirCmd",
    appId: "NirSoft.NirCmd",
    version: "2.86",
  },
  {
    name: "OpenedFilesView",
    appId: "NirSoft.OpenedFilesView",
    version: "1.91",
  },
  {
    name: "ResourcesExtract",
    appId: "NirSoft.ResourcesExtract",
    version: "1.18",
  },
  {
    name: "SearchMyFiles",
    appId: "NirSoft.SearchMyFiles",
    version: "3.3",
  },
  {
    name: "NirSoft ShellExView",
    appId: "NirSoft.ShellExView",
    version: "2.01",
  },
  {
    name: "SimpleProgramDebugger",
    appId: "NirSoft.SimpleProgramDebugger",
    version: "1.16",
  },
  {
    name: "SoundVolumeView",
    appId: "NirSoft.SoundVolumeView",
    version: "2.46",
  },
  {
    name: "TcpLogView",
    appId: "NirSoft.TcpLogView",
    version: "1.41",
  },
  {
    name: "TurnedOnTimesView",
    appId: "NirSoft.TurnedOnTimesView",
    version: "1.46",
  },
  {
    name: "USBLogView",
    appId: "NirSoft.USBLogView",
    version: "1.26",
  },
  {
    name: "NirSoft VideoCacheView",
    appId: "NirSoft.VideoCacheView",
    version: "3.09",
  },
  {
    name: "NirSoft Volumouse",
    appId: "NirSoft.Volumouse",
    version: "2.1",
  },
  {
    name: "WakeMeOnLan",
    appId: "NirSoft.WakeMeOnLan",
    version: "1.91",
  },
  {
    name: "NirSoft WhoisThisDomain",
    appId: "NirSoft.WhoisThisDomain",
    version: "2.46",
  },
  {
    name: "WifiInfoView",
    appId: "NirSoft.WifiInfoView",
    version: "2.94",
  },
  {
    name: "NirSoft Wireless Network Watchâ€¦",
    appId: "NirSoft.WirelessNetworkWatcher",
    version: "2.31",
  },
  {
    name: "Quark",
    appId: "NishkalKashyap.Quark",
    version: "0.6.2",
  },
  {
    name: "Nitro PDF Pro",
    appId: "NitroSoftware.NitroPro",
    version: "14.28.5.0",
  },
  {
    name: "Nitrokey-App",
    appId: "NitrokeyGmbH.Nitrokey-App",
    version: "2.3.2",
  },
  {
    name: "Nitropy",
    appId: "NitrokeyGmbH.Nitropy",
    version: "0.6.0",
  },
  {
    name: "HandBrake-SVT-AV1-SPY",
    appId: "Nj0be.HandBrake-SVT-AV1-SPY",
    version: "20240922-402dâ€¦",
  },
  {
    name: "NTLite",
    appId: "Nlitesoft.NTLite",
    version: "2024.9.10073.0",
  },
  {
    name: "No-IP DUC",
    appId: "NoIP.DUC",
    version: "4.1.1",
  },
  {
    name: "NoMachine",
    appId: "NoMachine.NoMachine",
    version: "8.5.3",
  },
  {
    name: "NoMachine Enterprise Client",
    appId: "NoMachine.NoMachineClient",
    version: "7.10.2",
  },
  {
    name: "PuTTY CAC",
    appId: "NoMoreFood.PuTTY-CAC",
    version: "0.81.0.0",
  },
  {
    name: "NoSQLBooster for MongoDB",
    appId: "NoSQLBooster.NoSQLBooster",
    version: "8.1.7",
  },
  {
    name: "Nodist",
    appId: "Nodist.Nodist",
    version: "0.10.3",
  },
  {
    name: "Blink Eye",
    appId: "NomanDhoni.BlinkEye",
    version: "1.5",
  },
  {
    name: "NordLayer",
    appId: "NordSecurity.NordLayer",
    version: "3.3.7.0",
  },
  {
    name: "NordLocker",
    appId: "NordSecurity.NordLocker",
    version: "4.27.0.0",
  },
  {
    name: "NordPass",
    appId: "NordSecurity.NordPass",
    version: "5.23.10",
  },
  {
    name: "NordVPN",
    appId: "NordSecurity.NordVPN",
    version: "7.28.6.0",
  },
  {
    name: "nrfutil",
    appId: "NordicSemiconductor.nrfutil",
    version: "7.6.0",
  },
  {
    name: "Gyazo",
    appId: "Nota.Gyazo",
    version: "5.6.1",
  },
  {
    name: "Notation CLI",
    appId: "NotaryProject.Notation",
    version: "1.2.0",
  },
  {
    name: "Notepad++",
    appId: "Notepad++.Notepad++",
    version: "8.7",
  },
  {
    name: "Notepad2-mod",
    appId: "Notepad2mod.Notepad2mod",
    version: "4.2.25.998",
  },
  {
    name: "Notion",
    appId: "Notion.Notion",
    version: "3.15.1",
  },
  {
    name: "Notion Calendar",
    appId: "Notion.NotionCalendar",
    version: "1.122.0",
  },
  {
    name: "Notion Enhanced",
    appId: "NotionRepackaged.NotionEnhanced",
    version: "2.0.18-1",
  },
  {
    name: "SkEditor",
    appId: "Notro.SkEditor",
    version: "2.2.0",
  },
  {
    name: "SkEditor+",
    appId: "NotroDev.SkEditor+",
    version: "1.7.9",
  },
  {
    name: "XBatteryStatus",
    appId: "Nova_Max.XBatteryStatus",
    version: "1.3.4",
  },
  {
    name: "Novabench",
    appId: "NovabenchInc.Novabench",
    version: "5.5.3",
  },
  {
    name: "Dual Universe",
    appId: "Novaquark.DualUniverse",
    version: "1",
  },
  {
    name: "Novation USB Midi Driver",
    appId: "NovationDMS.USBMidiDriver",
    version: "2.26.2.61",
  },
  {
    name: "munixo Client",
    appId: "Novicon.Munixo.Client",
    version: "5.1.44.19818",
  },
  {
    name: "CreateInstall",
    appId: "Novostrim.CreateInstall",
    version: "8.11.0",
  },
  {
    name: "CreateInstall Free",
    appId: "Novostrim.CreateInstall.Free",
    version: "8.11.0",
  },
  {
    name: "CreateInstall Light",
    appId: "Novostrim.CreateInstall.Lite",
    version: "8.11.0",
  },
  {
    name: "Nozbe Personal",
    appId: "Nozbe.NozbePersonal",
    version: "3.20.1",
  },
  {
    name: "Npackd",
    appId: "Npackd.Npackd",
    version: "1.26.9",
  },
  {
    name: "Remotix",
    appId: "Nulana.Remotix",
    version: "6.4.4",
  },
  {
    name: "NullpoMino",
    appId: "Nullpomino.Nullpomino",
    version: "7.5",
  },
  {
    name: "NumeRe - Framework for Numericâ€¦",
    appId: "NumeRe.NumeRe",
    version: "1.1.6.2404",
  },
  {
    name: "AquaSnap",
    appId: "NurgoSoftware.AquaSnap",
    version: "1.24.0",
  },
  {
    name: "nu",
    appId: "Nushell.Nushell",
    version: "0.98.0",
  },
  {
    name: "eo2suite",
    appId: "Nutstore.EO2",
    version: "2.4.8",
  },
  {
    name: "Nutstore",
    appId: "Nutstore.Nutstore",
    version: "7.2.0",
  },
  {
    name: "Nutstore LightApp",
    appId: "Nutstore.NutstoreLightApp",
    version: "2.0.3",
  },
  {
    name: "NVIDIA Broadcast",
    appId: "Nvidia.Broadcast",
    version: "1.4.0.29",
  },
  {
    name: "NVIDIA CUDA Toolkit",
    appId: "Nvidia.CUDA",
    version: "12.6",
  },
  {
    name: "NVIDIA GeForce Experience",
    appId: "Nvidia.GeForceExperience",
    version: "3.28.0.417",
  },
  {
    name: "NVIDIA GeForce NOW",
    appId: "Nvidia.GeForceNow",
    version: "2.0.67.127",
  },
  {
    name: "ICAT",
    appId: "Nvidia.ICAT",
    version: "0.6.1",
  },
  {
    name: "NVIDIA Omniverse Launcher",
    appId: "Nvidia.Omniverse",
    version: "1.9.13.2760",
  },
  {
    name: "NVIDIA PhysX System Software",
    appId: "Nvidia.PhysX",
    version: "9.21.0713",
  },
  {
    name: "NVIDIA PhysX (Legacy)",
    appId: "Nvidia.PhysXLegacy",
    version: "9.13.0604",
  },
  {
    name: "RTX Voice",
    appId: "Nvidia.RTXVoice",
    version: "0.5.12.6",
  },
  {
    name: "NVIDIA Video Effects",
    appId: "Nvidia.VideoEffectsSDK.20xx-Turing",
    version: "0.6.5",
  },
  {
    name: "NxShell",
    appId: "NxShellTeam.NxShell",
    version: "1.9.3",
  },
  {
    name: "OBS Studio",
    appId: "OBSProject.OBSStudio",
    version: "30.2.3",
  },
  {
    name: "OBS Studio Beta",
    appId: "OBSProject.OBSStudio.Pre-release",
    version: "30.1.0",
  },
  {
    name: "AMD Encoder for OBS Studio",
    appId: "OBSProject.obs-amd-encoder",
    version: "2.6.0.0",
  },
  {
    name: "OCCT",
    appId: "OCBase.OCCT.Personal",
    version: "13.1.10.99",
  },
  {
    name: "opam",
    appId: "OCaml.opam",
    version: "2.2.1",
  },
  {
    name: "Suricata IDS/IPS",
    appId: "OISF.Suricata",
    version: "6.0.12",
  },
  {
    name: "Tucnak",
    appId: "OK1ZIA.Tucnak",
    version: "4.61",
  },
  {
    name: "RXSSTV",
    appId: "ON6MU.RXSSTV",
    version: "2.1.6",
  },
  {
    name: "ONLYOFFICE Desktop Editors",
    appId: "ONLYOFFICE.DesktopEditors",
    version: "8.1.1",
  },
  {
    name: "O\u0026O AppBuster",
    appId: "OO-Software.AppBuster",
    version: "1.4.1345",
  },
  {
    name: "O\u0026O AutoBackup",
    appId: "OO-Software.AutoBackup",
    version: "6.1.127",
  },
  {
    name: "O\u0026O BlueCon",
    appId: "OO-Software.BlueCon",
    version: "21.5.12088",
  },
  {
    name: "O\u0026O Defrag Professional",
    appId: "OO-Software.Defrag.Professional",
    version: "29.0.11110",
  },
  {
    name: "O\u0026O Defrag Server",
    appId: "OO-Software.Defrag.Server",
    version: "28.1.10015",
  },
  {
    name: "O\u0026O DeskInfo",
    appId: "OO-Software.DeskInfo",
    version: "1.3.1348",
  },
  {
    name: "O\u0026O DiskStat",
    appId: "OO-Software.DiskStat",
    version: "4.5.1364",
  },
  {
    name: "O\u0026O Lanytix",
    appId: "OO-Software.Lanytix",
    version: "1.2.1343",
  },
  {
    name: "O\u0026O SafeErase Professional",
    appId: "OO-Software.SafeErase.Professional",
    version: "19.3.1047",
  },
  {
    name: "O\u0026O ShutUp10++",
    appId: "OO-Software.ShutUp10",
    version: "1.9.1439",
  },
  {
    name: "OONI Probe",
    appId: "OONI.OONI-Probe",
    version: "3.9.8",
  },
  {
    name: "OP Auto Clicker",
    appId: "OPAutoClicker.OPAutoClicker",
    version: "1.0.0.2",
  },
  {
    name: "ORAS CLI",
    appId: "ORASProject.ORAS",
    version: "1.2.0",
  },
  {
    name: "GeoServer",
    appId: "OSGeo.GeoServer",
    version: "2.24.2",
  },
  {
    name: "QGIS",
    appId: "OSGeo.QGIS",
    version: "3.38.3",
  },
  {
    name: "QGIS (LTR)",
    appId: "OSGeo.QGIS_LTR",
    version: "3.34.11",
  },
  {
    name: "OSSEC HIDS",
    appId: "OSSEC.OSSECAgent",
    version: "3.7.0",
  },
  {
    name: "RapidCRC",
    appId: "OV2.RapidCRCUnicode",
    version: "0.3.40",
  },
  {
    name: "OpenVR Advanced Settings",
    appId: "OVRASTeam.OpenVR-AdvancedSettings",
    version: "5.8.11",
  },
  {
    name: "Amass",
    appId: "OWASP.Amass",
    version: "4.2.0",
  },
  {
    name: "ObinsKit",
    appId: "ObinsKit.ObinsKit",
    version: "1.2.11",
  },
  {
    name: "Obsidian",
    appId: "Obsidian.Obsidian",
    version: "1.6.7",
  },
  {
    name: "ocenaudio",
    appId: "Ocenaudio.Ocenaudio",
    version: "3.14.4",
  },
  {
    name: "ElyPrismLauncher",
    appId: "Octol1ttle.ElyPrismLauncher",
    version: "8.4",
  },
  {
    name: "Octopus CLI",
    appId: "OctopusDeploy.Cli",
    version: "2.10.2",
  },
  {
    name: "Octopus Deploy Server",
    appId: "OctopusDeploy.Server",
    version: "2024.3.12799",
  },
  {
    name: "Octopus Deploy Tentacle",
    appId: "OctopusDeploy.Tentacle",
    version: "8.2.2152",
  },
  {
    name: "Odamex",
    appId: "Odamex.Odamex",
    version: "10.4.0",
  },
  {
    name: "Cubox",
    appId: "OddLab.Cubox",
    version: "0.2.4",
  },
  {
    name: "JboxTransferCLI",
    appId: "Okabe-Rintarou-0.JboxTransferCLI",
    version: "1.1.4",
  },
  {
    name: "ScreenCloud",
    appId: "OlavSortlandThoresen.ScreenCloud",
    version: "1.5.3",
  },
  {
    name: "Rapid Environment Editor",
    appId: "OlegDanilov.RapidEnvironmentEditor",
    version: "9.2.0.937",
  },
  {
    name: "Zeal",
    appId: "OlegShparber.Zeal",
    version: "0.7.2",
  },
  {
    name: "OpenComic",
    appId: "OleguerLlopart.OpenComic",
    version: "1.2.0",
  },
  {
    name: "Python Launcher",
    appId: "OleksisFraga.PythonLauncher",
    version: "2.1.0.0",
  },
  {
    name: "Olive Video Editor",
    appId: "OliveTeam.OliveVideoEditor",
    version: "0.1.0",
  },
  {
    name: "ExifTool",
    appId: "OliverBetz.ExifTool",
    version: "12.97",
  },
  {
    name: "ExifTool - Dev",
    appId: "OliverBetz.ExifTool.Development",
    version: "12.65",
  },
  {
    name: "SyncMLViewer",
    appId: "OliverKieselbach.SyncMLViewer",
    version: "1.3.1",
  },
  {
    name: "ueli",
    appId: "OliverSchwendener.ueli",
    version: "8.29.0",
  },
  {
    name: "VIA",
    appId: "Olivia.VIA",
    version: "3.0.0.0",
  },
  {
    name: "Ollama",
    appId: "Ollama.Ollama",
    version: "0.3.12",
  },
  {
    name: "Olympus",
    appId: "Olympus.Olympus",
    version: "1.0.0.0",
  },
  {
    name: "Pandoc GUI",
    appId: "Ombrelin.PandocGui",
    version: "1.1.35",
  },
  {
    name: "PLEX Rich Presence",
    appId: "Ombrelin.PlexRichPresence",
    version: "2.0.25",
  },
  {
    name: "OmegaT",
    appId: "OmegaT.OmegaT",
    version: "6.0.0",
  },
  {
    name: "Avro Keyboard",
    appId: "OmicronLab.Avro",
    version: "5.6.0",
  },
  {
    name: "omsi-launcher",
    appId: "OmsiLauncher.OmsiLauncher",
    version: "0.7.1",
  },
  {
    name: "Advanced Log Viewer",
    appId: "OndrejSalplachta.AdvancedLogViewer",
    version: "9.1.1",
  },
  {
    name: "Viper",
    appId: "OneGal.Viper",
    version: "1.5.1",
  },
  {
    name: "OneKey Wallet",
    appId: "OneKey.OneKey",
    version: "4.24.0",
  },
  {
    name: "Buckets",
    appId: "OnePartRain.Buckets",
    version: "0.72.2",
  },
  {
    name: "OneScript engine",
    appId: "OneScript.OneScript",
    version: "1.9.1",
  },
  {
    name: "One Tagger",
    appId: "OneTagger.OneTagger",
    version: "1.7.0",
  },
  {
    name: "OneWare Studio",
    appId: "OneWare.OneWareStudio",
    version: "0.20.0.0",
  },
  {
    name: "OnionShare",
    appId: "OnionShare.OnionShare",
    version: "2.6.2",
  },
  {
    name: "OnionShare Dev",
    appId: "OnionShare.OnionShare.Dev",
    version: "2.6.dev1",
  },
  {
    name: "AVS Disc Creator",
    appId: "OnlineMediaTechnologiesLtd.AVSDisâ€¦",
    version: "6.3.4.568",
  },
  {
    name: "Speedtest CLI",
    appId: "Ookla.Speedtest.CLI",
    version: "1.2.0",
  },
  {
    name: "Speedtest by Ookla",
    appId: "Ookla.Speedtest.Desktop",
    version: "1.13.194.001",
  },
  {
    name: "ocm-cli",
    appId: "Open-Component-Model.ocm-cli",
    version: "0.15.0",
  },
  {
    name: "Open-Shell",
    appId: "Open-Shell.Open-Shell-Menu",
    version: "4.4.191",
  },
  {
    name: "OpenAL",
    appId: "OpenAL.OpenAL",
    version: "1.1",
  },
  {
    name: "OpenAudible",
    appId: "OpenAudible.OpenAudible",
    version: "4.4.7",
  },
  {
    name: "OpenBB Terminal",
    appId: "OpenBB-finance.OpenBBTerminal",
    version: "3.2.4",
  },
  {
    name: "RaiDrive",
    appId: "OpenBoxLab.RaiDrive",
    version: "2023.9.235",
  },
  {
    name: "RaiDrive (Managed)",
    appId: "OpenBoxLab.RaiDrive.Managed",
    version: "2023.9.235.1",
  },
  {
    name: "OpenCPN",
    appId: "OpenCPN.OpenCPN",
    version: "5.8.4",
  },
  {
    name: "Avogadro2",
    appId: "OpenChemistry.Avogadro2",
    version: "1.99.0",
  },
  {
    name: "OpenCppCoverage",
    appId: "OpenCppCoverage.OpenCppCoverage",
    version: "0.9.9.0",
  },
  {
    name: "ODA File Converter",
    appId: "OpenDesignAlliance.ODAFileConvertâ€¦",
    version: "24.11",
  },
  {
    name: "OpenBoard",
    appId: "OpenEducationFoundation.OpenBoard",
    version: "1.7.1",
  },
  {
    name: "GM8Decompiler (GNU Build)",
    appId: "OpenGMK.GM8Decompiler.GNU",
    version: "2.1.1",
  },
  {
    name: "GM8Decompiler (MSVC Build)",
    appId: "OpenGMK.GM8Decompiler.MSVC",
    version: "2.2.0",
  },
  {
    name: "PowerSDR",
    appId: "OpenHPSDR-TAPR.PowerSDR",
    version: "3.4.9.0",
  },
  {
    name: "Thetis",
    appId: "OpenHPSDR-TAPR.Thetis",
    version: "2.10.0.0",
  },
  {
    name: "OpenHV",
    appId: "OpenHV.OpenHV",
    version: "20230917",
  },
  {
    name: "OpenHantek6022",
    appId: "OpenHantek.OpenHantek6022",
    version: "3.3.3",
  },
  {
    name: "Node.js",
    appId: "OpenJS.NodeJS",
    version: "22.9.0",
  },
  {
    name: "Node.js (LTS)",
    appId: "OpenJS.NodeJS.LTS",
    version: "20.17.0",
  },
  {
    name: "OpenLP",
    appId: "OpenLPDevelopers.OpenLP",
    version: "3.0.2",
  },
  {
    name: "Open Live Writer",
    appId: "OpenLiveWriter.OpenLiveWriter",
    version: "0.6.2",
  },
  {
    name: "OpenMPT",
    appId: "OpenMPT.OpenMPT",
    version: "1.31.08.00",
  },
  {
    name: "OpenMW",
    appId: "OpenMW.OpenMW",
    version: "0.48.0",
  },
  {
    name: "4K Slideshow Maker",
    appId: "OpenMedia.4KSlideshowMaker",
    version: "2.0.1.1055",
  },
  {
    name: "4K Stogram",
    appId: "OpenMedia.4KStogram",
    version: "4.9.0.4680",
  },
  {
    name: "4K Tokkit",
    appId: "OpenMedia.4KTokkit",
    version: "2.7.3.0940",
  },
  {
    name: "4K Video Downloader",
    appId: "OpenMedia.4KVideoDownloader",
    version: "4.32.5.0116",
  },
  {
    name: "4K Video Downloader+",
    appId: "OpenMedia.4KVideoDownloaderPlus",
    version: "1.9.0.0128",
  },
  {
    name: "4K Video to MP3",
    appId: "OpenMedia.4KVideoToMP3",
    version: "3.0.1.936",
  },
  {
    name: "4K YouTube to MP3",
    appId: "OpenMedia.4KYoutubetoMP3",
    version: "5.6.1.133",
  },
  {
    name: "Minecraft Note Block Studio",
    appId: "OpenNoteBlockStudio.MinecraftNoteâ€¦",
    version: "3.10.0",
  },
  {
    name: "OpenOSRS Launcher",
    appId: "OpenOSRS.OpenOSRSLauncher",
    version: "3.0.0",
  },
  {
    name: "OpenOrienteering Mapper",
    appId: "OpenOrienteering.Mapper",
    version: "0.9.5",
  },
  {
    name: "Policy",
    appId: "OpenPolicyContainers.Policy",
    version: "0.2.18",
  },
  {
    name: "OpenRA",
    appId: "OpenRA.OpenRA",
    version: "release-20231â€¦",
  },
  {
    name: "OpenRCT2",
    appId: "OpenRCT2.OpenRCT2",
    version: "0.4.14",
  },
  {
    name: "OpenRPA",
    appId: "OpenRPAApS.OpenRPA",
    version: "1.4.57.6",
  },
  {
    name: "Open Rails",
    appId: "OpenRails.OpenRails",
    version: "1.5.1",
  },
  {
    name: "OpenRocket",
    appId: "OpenRocket.OpenRocket",
    version: "23.09",
  },
  {
    name: "OpenSC smartcard framework",
    appId: "OpenSC.OpenSC",
    version: "0.23.0.0",
  },
  {
    name: "OpenSCAD",
    appId: "OpenSCAD.OpenSCAD",
    version: "2021.01",
  },
  {
    name: "TrguiNG",
    appId: "OpenScopeProject.TrguiNG",
    version: "1.3.0",
  },
  {
    name: "Open Shop Channel Downloader",
    appId: "OpenShopChannel.Downloader",
    version: "1.4.0",
  },
  {
    name: "OpenShot Video Editor",
    appId: "OpenShot.OpenShot",
    version: "3.2.1",
  },
  {
    name: "FlashFXP",
    appId: "OpenSight.FlashFXP",
    version: "5.4.0.3970",
  },
  {
    name: "Grisbi",
    appId: "OpenSource.Grisbi",
    version: "2.0.5",
  },
  {
    name: "Plover",
    appId: "OpenStenoProject.Plover",
    version: "4.0.0.dev12",
  },
  {
    name: "JOSM",
    appId: "OpenStreetMap.Josm",
    version: "19207",
  },
  {
    name: "OpenTTD",
    appId: "OpenTTD.OpenTTD",
    version: "14.1",
  },
  {
    name: "OpenTXCompanion",
    appId: "OpenTX.OpenTXCompanion",
    version: "2.3.15",
  },
  {
    name: "OpenTofu",
    appId: "OpenTofu.Tofu",
    version: "1.8.2",
  },
  {
    name: "OpenTofu",
    appId: "OpenTofu.Tofu.Alpha",
    version: "1.8.0-alpha1",
  },
  {
    name: "OpenTofu",
    appId: "OpenTofu.Tofu.Beta",
    version: "1.8.0-beta2",
  },
  {
    name: "OpenTofu",
    appId: "OpenTofu.Tofu.RC",
    version: "1.8.0-rc1",
  },
  {
    name: "OpenVPN",
    appId: "OpenVPNTechnologies.OpenVPN",
    version: "2.6.1201",
  },
  {
    name: "OpenVPN Connect",
    appId: "OpenVPNTechnologies.OpenVPNConnect",
    version: "3.5.0",
  },
  {
    name: "Signal",
    appId: "OpenWhisperSystems.Signal",
    version: "7.27.0",
  },
  {
    name: "Signal Beta",
    appId: "OpenWhisperSystems.Signal.Beta",
    version: "7.5.0-beta.1",
  },
  {
    name: "Opera Stable",
    appId: "Opera.Opera",
    version: "114.0.5282.21",
  },
  {
    name: "Opera beta",
    appId: "Opera.Opera.Beta",
    version: "114.0.5282.12",
  },
  {
    name: "Opera developer",
    appId: "Opera.Opera.Dev",
    version: "115.0.5305.0",
  },
  {
    name: "Opera Crypto Stable",
    appId: "Opera.OperaCrypto",
    version: "108.0.5067.28",
  },
  {
    name: "Opera GX Stable",
    appId: "Opera.OperaGX",
    version: "113.0.5230.135",
  },
  {
    name: "opsly",
    appId: "OpslyCloud.opsly-cli",
    version: "0.0.1-alpha.35",
  },
  {
    name: "Optimate SOLIDWORKS Plugin",
    appId: "Optimate.OptimateSOLIDWORKSPlugin",
    version: "1.15.10",
  },
  {
    name: "Java(TM) SE Development Kit 17",
    appId: "Oracle.JDK.17",
    version: "17.0.12.0",
  },
  {
    name: "Java(TM) SE Development Kit 18",
    appId: "Oracle.JDK.18",
    version: "18.0.2.1",
  },
  {
    name: "Java(TM) SE Development Kit 19",
    appId: "Oracle.JDK.19",
    version: "19.0.2.0",
  },
  {
    name: "Java(TM) SE Development Kit 20",
    appId: "Oracle.JDK.20",
    version: "20.0.2.0",
  },
  {
    name: "Java(TM) SE Development Kit 21",
    appId: "Oracle.JDK.21",
    version: "21.0.4.0",
  },
  {
    name: "Java(TM) SE Development Kit 22",
    appId: "Oracle.JDK.22",
    version: "22.0.2.0",
  },
  {
    name: "Java(TM) SE Development Kit 23",
    appId: "Oracle.JDK.23",
    version: "23.0.0.0",
  },
  {
    name: "Java 8",
    appId: "Oracle.JavaRuntimeEnvironment",
    version: "8.0.4210.9",
  },
  {
    name: "MySQL",
    appId: "Oracle.MySQL",
    version: "8.0.39",
  },
  {
    name: "MySQL Notifier",
    appId: "Oracle.MySQLNotifier",
    version: "1.1.8",
  },
  {
    name: "MySQL Shell",
    appId: "Oracle.MySQLShell",
    version: "8.4.0",
  },
  {
    name: "MySQL Workbench 8.0 CE",
    appId: "Oracle.MySQLWorkbench",
    version: "8.0.38",
  },
  {
    name: "Oracle VM VirtualBox",
    appId: "Oracle.VirtualBox",
    version: "7.1.0",
  },
  {
    name: "Pixelorama",
    appId: "OramaInteractive.Pixelorama",
    version: "1.0.3",
  },
  {
    name: "Hurl",
    appId: "Orange-OpenSource.Hurl",
    version: "5.0.1",
  },
  {
    name: "AndroidMessages",
    appId: "OrangeDrangon.AndroidMessages.Desâ€¦",
    version: "5.4.5",
  },
  {
    name: "RuneBook",
    appId: "OrangeNote.RuneBook",
    version: "1.16.3",
  },
  {
    name: "Orbx Central",
    appId: "OrbxSimulationSystems.OrbxCentral",
    version: "4.1.43",
  },
  {
    name: "Volanta",
    appId: "OrbxSimulationSystems.Volanta",
    version: "1.4.14",
  },
  {
    name: "ProWritingAid Office Add-in",
    appId: "OrpheusTechnologyLtd.ProWritingAiâ€¦",
    version: "3.2.4269.1",
  },
  {
    name: "Dev-C++",
    appId: "Orwell.Dev-C++",
    version: "5.11",
  },
  {
    name: "BatteryBar",
    appId: "OsirisDevelopment.BatteryBar",
    version: "3.6.6",
  },
  {
    name: "Ipe extensible drawing editor",
    appId: "OtfriedCheong.Ipe",
    version: "7.2.28",
  },
  {
    name: "Otter Browser",
    appId: "OtterBrowserTeam.OtterBrowser",
    version: "1.0.02",
  },
  {
    name: "QR-Code Reader",
    appId: "OttoZumkeller.QR-CodeReader",
    version: "1.1.2",
  },
  {
    name: "CrewLink",
    appId: "Ottomated.CrewLink",
    version: "2.0.1",
  },
  {
    name: "GetDiz",
    appId: "Outertech.GetDiz",
    version: "4.9.1.0",
  },
  {
    name: "octopi-init",
    appId: "OutsourcedGuru.octopi-init",
    version: "1.0.9",
  },
  {
    name: "Bun",
    appId: "Oven-sh.Bun",
    version: "1.1.29",
  },
  {
    name: "Bun Baseline",
    appId: "Oven-sh.Bun.Baseline",
    version: "1.1.29",
  },
  {
    name: "Bun Baseline Profile",
    appId: "Oven-sh.Bun.BaselineProfile",
    version: "1.1.29",
  },
  {
    name: "Bun Profile",
    appId: "Oven-sh.Bun.Profile",
    version: "1.1.29",
  },
  {
    name: "Moosync",
    appId: "Ovenoboyo.Moosync",
    version: "10.3.2",
  },
  {
    name: "Overlayed",
    appId: "OverlayedDev.Overlayed",
    version: "0.6.2",
  },
  {
    name: "OvermindCLI",
    appId: "Overmind.OvermindCLI",
    version: "1.5.1",
  },
  {
    name: "CurseForge",
    appId: "Overwolf.CurseForge",
    version: "0.220.1-9343",
  },
  {
    name: "OwlPlug",
    appId: "OwlPlug.OwlPlug",
    version: "1.27.0",
  },
  {
    name: "Kenku FM",
    appId: "OwlbearRodeo.Kenku-FM",
    version: "1.4.3",
  },
  {
    name: "Session",
    appId: "Oxen.Session",
    version: "1.12.2",
  },
  {
    name: "Session",
    appId: "OxenLabs.Session",
    version: "1.12.3",
  },
  {
    name: "Oxford Learners Bookshelf",
    appId: "OxfordUniversityPressELT.OxfordLeâ€¦",
    version: "5.9.10",
  },
  {
    name: "odrive",
    appId: "OxygenCloud.odrive",
    version: "1.0.7292",
  },
  {
    name: "VidCutter",
    appId: "OzMartian.VidCutter",
    version: "6.0.5.1",
  },
  {
    name: "WinSSHTerm",
    appId: "P-StSoftware.WinSSHTerm",
    version: "2.37.5",
  },
  {
    name: "Austin",
    appId: "P403n1x87.austin",
    version: "3.6.0",
  },
  {
    name: "BlueDV AMBE Server",
    appId: "PA7LIM.BlueDV.AMBEServer",
    version: "1.0.0.6",
  },
  {
    name: "Doozy",
    appId: "PA7LIM.Doozy",
    version: "1.0.0.22",
  },
  {
    name: "PeerBanHelper",
    appId: "PBH-BTN.PeerBanHelper",
    version: "6.4.1",
  },
  {
    name: "PCGen",
    appId: "PCGen.PCGen",
    version: "6.08.00",
  },
  {
    name: "PCSX2",
    appId: "PCSX2Team.PCSX2",
    version: "2.0.2",
  },
  {
    name: "pdfarranger",
    appId: "PDFArranger.PDFArranger",
    version: "1.11.0",
  },
  {
    name: "PDFtk Free",
    appId: "PDFLabs.PDFtk.Free",
    version: "2.02",
  },
  {
    name: "PDFtk Server",
    appId: "PDFLabs.PDFtk.Server",
    version: "2.02",
  },
  {
    name: "PDFgear",
    appId: "PDFgear.PDFgear",
    version: "2.1.8",
  },
  {
    name: "PDFsam Basic",
    appId: "PDFsam.PDFsam",
    version: "5.2.6",
  },
  {
    name: "PDQ Deploy",
    appId: "PDQ.PDQDeploy",
    version: "19.3.625.0",
  },
  {
    name: "PDQ Inventory",
    appId: "PDQ.PDQInventory",
    version: "19.3.625.0",
  },
  {
    name: "Modern CSV",
    appId: "PFOJEnterprisesLLC.ModernCSV",
    version: "1.3.36",
  },
  {
    name: "PGPTool",
    appId: "PGPTool.PGPTool",
    version: "0.5.9.3",
  },
  {
    name: "PC_DIMMER",
    appId: "PHOENIXstudios.PC_DIMMER",
    version: "5.6.0",
  },
  {
    name: "PikPak",
    appId: "PIKCLOUD.PikPak",
    version: "2.5.7.4835",
  },
  {
    name: "NCALayer",
    appId: "PKI.NCALayer",
    version: "1.3",
  },
  {
    name: "CeVIO AI Voice Package - IA TAâ€¦",
    appId: "PLACE.IA",
    version: "1.1.0",
  },
  {
    name: "CeVIO Voice Package - IA TALK â€¦",
    appId: "PLACE.IA.CS7",
    version: "1.0.2",
  },
  {
    name: "CeVIO AI Voice Package - IA AIâ€¦",
    appId: "PLACE.IA.SING",
    version: "2.0.0",
  },
  {
    name: "CeVIO AI Voice Package - ONE Tâ€¦",
    appId: "PLACE.ONE",
    version: "1.1.0",
  },
  {
    name: "CeVIO Voice Package - ONE -ARIâ€¦",
    appId: "PLACE.ONE.CS7",
    version: "1.2.2",
  },
  {
    name: "PotatoWall",
    appId: "POQDavid.PotatoWall",
    version: "1.7",
  },
  {
    name: "PPSSPP",
    appId: "PPSSPPTeam.PPSSPP",
    version: "1.17.1",
  },
  {
    name: "PRQL compiler CLI - prqlc",
    appId: "PRQL.prqlc",
    version: "0.13.0",
  },
  {
    name: "Kube Dev Dashboard",
    appId: "PS.KubeDevDashboard",
    version: "0.14.3",
  },
  {
    name: "UVtools",
    appId: "PTRTECH.UVtools",
    version: "4.4.2",
  },
  {
    name: "PYPrime",
    appId: "PYPrime.PYPrime",
    version: "2.2.211023",
  },
  {
    name: "Kalker",
    appId: "PaddiM8.kalker",
    version: "2.0.3",
  },
  {
    name: "PRTG Desktop",
    appId: "Paessler.PRTGDesktop",
    version: "24.10.0",
  },
  {
    name: "Barcode2Win",
    appId: "Paludour.Barcode2Win",
    version: "1.8.8595",
  },
  {
    name: "TenClips",
    appId: "Paludour.TenClips",
    version: "3.2.8065",
  },
  {
    name: "Panda3D SDK",
    appId: "Panda3D.Panda3D",
    version: "1.10.14",
  },
  {
    name: "Playdate SDK",
    appId: "Panic.PlaydateSDK",
    version: "2.5.0",
  },
  {
    name: "Calliper",
    appId: "PaodingAI.Calliper",
    version: "1.1.105",
  },
  {
    name: "PDFlux",
    appId: "PaodingAI.PDFlux",
    version: "6.2.52",
  },
  {
    name: "Scriber",
    appId: "PaodingAI.Scriber",
    version: "1.0.19",
  },
  {
    name: "PaperCut Mobility Print",
    appId: "PaperCutSoftware.MobilityPrint",
    version: "2021.06.29.11â€¦",
  },
  {
    name: "PaperCut NG",
    appId: "PaperCutSoftware.NG",
    version: "21.0.3.57216",
  },
  {
    name: "Paprika Recipe Manager",
    appId: "PaprikaApp.Paprika.1",
    version: "1.2.4",
  },
  {
    name: "Paprika Recipe Manager 3",
    appId: "PaprikaApp.Paprika.3",
    version: "3.2.2",
  },
  {
    name: "Paradox Launcher",
    appId: "ParadoxInteractive.ParadoxLauncher",
    version: "2.4.0",
  },
  {
    name: "APFS for Windows by Paragon Soâ€¦",
    appId: "Paragon.APFS",
    version: "2.1.110",
  },
  {
    name: "HFS+ for Windows by Paragon Soâ€¦",
    appId: "Paragon.HFS+",
    version: "11.4.298",
  },
  {
    name: "Linux File Systems for Windowsâ€¦",
    appId: "Paragon.LinuxFileSystems",
    version: "5.2.1183",
  },
  {
    name: "Paragon Backup \u0026 Recovery CE",
    appId: "Paragon.ParagonBackupRecoveryCE",
    version: "17.9.3.4927",
  },
  {
    name: "Paragon Partition Manager CE",
    appId: "Paragon.PartitionManagerCE",
    version: "17.9.1.4890",
  },
  {
    name: "Parallels Client",
    appId: "Parallels.Parallels",
    version: "19.4.25171",
  },
  {
    name: "Parallels Client",
    appId: "ParallelsInternationalGmbH.Parallâ€¦",
    version: "19.4.25221",
  },
  {
    name: "Parsec",
    appId: "Parsec.Parsec",
    version: "150.95.1.0",
  },
  {
    name: "MSIXCommander",
    appId: "PascalBerger.MSIXCommander",
    version: "1.0.7.5",
  },
  {
    name: "BatteryMon",
    appId: "PassMark.BatteryMon",
    version: "2.1",
  },
  {
    name: "DiskCheckup",
    appId: "PassMark.DiskCheckup",
    version: "3.5.1006.0",
  },
  {
    name: "Passcovery Suite",
    appId: "Passcovery.PasscoverySuite",
    version: "24.09.48.4175",
  },
  {
    name: "PassMark Fragger",
    appId: "PassmarkSoftware.Fragger",
    version: "1",
  },
  {
    name: "OSFMount",
    appId: "PassmarkSoftware.OSFMount",
    version: "3.1.1003.0",
  },
  {
    name: "SoundCheck",
    appId: "PassmarkSoftware.SoundCheck",
    version: "2.1",
  },
  {
    name: "PasteBar",
    appId: "PasteBar.PasteBar",
    version: "0.6.0",
  },
  {
    name: "Patch My PC",
    appId: "PatchMyPC.PatchMyPC",
    version: "4.5.0.4",
  },
  {
    name: "PatchdeckWindowsAgent",
    appId: "Patchdeck.Agent",
    version: "2.15.0",
  },
  {
    name: "Stinker",
    appId: "PatentLobster.stinker",
    version: "0.2.3",
  },
  {
    name: "Path of Building Community",
    appId: "PathofBuildingCommunity.PathofBuiâ€¦",
    version: "2.48.2",
  },
  {
    name: "WIA-Loader                      PatrickMortara.WIA-Loader",
    appId: "WIA-Loader",
    version: "2.â€¦",
  },
  {
    name: "Prismatik (unofficial)",
    appId: "PatrickSiegler.PrismatikUnofficial",
    version: "5.11.2.31",
  },
  {
    name: "FLB Music",
    appId: "PatrickWaweru.FLBMusic",
    version: "1.2.1",
  },
  {
    name: "P3X Redis UI",
    appId: "PatrikLaszlo.P3XRedisUI",
    version: "2023.10.238",
  },
  {
    name: "Beaker Browser",
    appId: "PaulFrazee.BeakerBrowser",
    version: "1.1.0",
  },
  {
    name: "mStream Server",
    appId: "PaulSori.mStreamServer",
    version: "5.11.4",
  },
  {
    name: "Outlook Google Calendar Sync",
    appId: "PaulWoolcock.SyncOutlookandGoogleâ€¦",
    version: "2.9.0-beta",
  },
  {
    name: "Outlook Google Calendar Sync (â€¦",
    appId: "PaulWoolcock.SyncOutlookandGoogleâ€¦",
    version: "2.9.4-alpha",
  },
  {
    name: "Okane",
    appId: "Paulanerus.Okane",
    version: "2024.9.11",
  },
  {
    name: "Total Registry",
    appId: "PavelYosifovich.TotalRegistry",
    version: "0.9.7.2",
  },
  {
    name: "AdvancedRestClient",
    appId: "PawelPsztyc.AdvancedRestClient",
    version: "17.0.9",
  },
  {
    name: "Pass Order",
    appId: "PaytaLab.PassOrder",
    version: "3.0.0.1",
  },
  {
    name: "Black Desert",
    appId: "PearlAbyss.BlackDesert",
    version: "24.07.03.1",
  },
  {
    name: "Cacher",
    appId: "PenguinLabs.Cacher",
    version: "2.43.2",
  },
  {
    name: "AdiIRC",
    appId: "PerAmundsen.AdiIRC",
    version: "4.3",
  },
  {
    name: "å®Œç¾Žä¸–ç•Œç«žæŠ€å¹³å°",
    appId: "PerfectWorld.PerfectWorldArena",
    version: "1.0.24092611",
  },
  {
    name: "è’¸æ±½å¹³å°",
    appId: "PerfectWorld.SteamChina",
    version: "2.10.91.91",
  },
  {
    name: "Tower of Fantasy",
    appId: "PerfectWorld.TowerOfFantasy",
    version: "0.0.6.471",
  },
  {
    name: "Helix Visual Merge Tool (P4Merâ€¦",
    appId: "Perforce.P4Merge",
    version: "214.226.4565",
  },
  {
    name: "Helix Core Apps",
    appId: "Perforce.P4V",
    version: "242.263.4463",
  },
  {
    name: "Perimeter 81",
    appId: "Perimeter81Ltd.Perimeter81Ltd",
    version: "11.0.1.2083",
  },
  {
    name: "Persepolis Download Manager",
    appId: "PersepolisDownloadManager.Persepoâ€¦",
    version: "4.3.0",
  },
  {
    name: "POV-Ray for Windows",
    appId: "PersistenceOfVisionRaytracer.POVRâ€¦",
    version: "3.7",
  },
  {
    name: "QuickPar",
    appId: "PeterBClements.QuickPar",
    version: "0.9",
  },
  {
    name: "Mnemosyne",
    appId: "PeterBienstman.Mnemosyne",
    version: "2.11",
  },
  {
    name: "Transmission Remote GUI",
    appId: "PeterDaveHello.TransmissionRemoteâ€¦",
    version: "5.18.0",
  },
  {
    name: "foobar2000",
    appId: "PeterPawlowski.foobar2000",
    version: "2.1.6",
  },
  {
    name: "foobar2000 Free Encoder Pack",
    appId: "PeterPawlowski.foobar2000.Encoderâ€¦",
    version: "2024-03-03",
  },
  {
    name: "Helio Workstation",
    appId: "PeterRudenko.HelioWorkstation",
    version: "3.11",
  },
  {
    name: "ViVeTool GUI",
    appId: "PeterStrick.ViVeTool-GUI",
    version: "1.6.2",
  },
  {
    name: "Pext",
    appId: "Pext.Pext",
    version: "0.35",
  },
  {
    name: "ExifGlass",
    appId: "PhapDieuDuong.ExifGlass",
    version: "1.6.0.0",
  },
  {
    name: "PharoLauncher",
    appId: "Pharoproject.PharoLauncher",
    version: "3.0.1",
  },
  {
    name: "Sharperlight 5.4",
    appId: "PhilightPtyLtd.Sharperlight",
    version: "5.4.60",
  },
  {
    name: "Odassey",
    appId: "PhilipGerke.Odassey",
    version: "3.0.4",
  },
  {
    name: "Hue Sync",
    appId: "Philips.HueSync",
    version: "1.8.2.31",
  },
  {
    name: "TheWorld",
    appId: "Phoenix.TheWorld",
    version: "7.0.0.108",
  },
  {
    name: "PhonePresenter",
    appId: "PhonePresenter.PhonePresenter",
    version: "2.1.2",
  },
  {
    name: "PhonerLite",
    appId: "Phoner.PhonerLite",
    version: "3.26",
  },
  {
    name: "PLaSK",
    appId: "PhotonicsTUL.PLaSK",
    version: "2024.08.23",
  },
  {
    name: "PhraseExpress",
    appId: "PhraseExpress.PhraseExpress",
    version: "17.0.91",
  },
  {
    name: "Solve Elec",
    appId: "PhysicsBox.SolveElec",
    version: "2.5",
  },
  {
    name: "PicGo",
    appId: "PicGo.PicGo",
    version: "2.3.1",
  },
  {
    name: "PicGo Beta",
    appId: "PicGo.PicGo.Beta",
    version: "2.4.0-beta.8",
  },
  {
    name: "PicoScope 7",
    appId: "PicoTechnology.Picoscope",
    version: "7.1.2",
  },
  {
    name: "PicoTorrent",
    appId: "PicoTorrent.PicoTorrent",
    version: "0.25.0",
  },
  {
    name: "Wav2Bar",
    appId: "Picorims.wav2bar",
    version: "0.3.0",
  },
  {
    name: "Pidgin",
    appId: "Pidgin.Pidgin",
    version: "2.14.13",
  },
  {
    name: "Museeks",
    appId: "Pierre.Museeks",
    version: "0.13.1",
  },
  {
    name: "5e Spell Viewer",
    appId: "Pikcube.5eSpellViewer",
    version: "1.0.4",
  },
  {
    name: "OrangeJuiceModMaker",
    appId: "Pikcube.OrangeJuiceModMaker",
    version: "1.0.3",
  },
  {
    name: "Taskbar Groups",
    appId: "PikeNote.TaskbarGroups",
    version: "0.2.2.0",
  },
  {
    name: "PilotEdge Pilot Client",
    appId: "PilotEdge.MSFSclient",
    version: "1.4.5",
  },
  {
    name: "Pinta",
    appId: "Pinta.Pinta",
    version: "2.1.2",
  },
  {
    name: "Pioneer",
    appId: "PioneerDevelopers.Pioneer",
    version: "20230203",
  },
  {
    name: "Home Assistant Taskbar Menu",
    appId: "PiotrMachowski.HomeAssistantTaskbâ€¦",
    version: "1.3.0.0",
  },
  {
    name: "CCleaner",
    appId: "Piriform.CCleaner",
    version: "6.28",
  },
  {
    name: "CCleaner Professional Trial",
    appId: "Piriform.CCleaner.ProTrial",
    version: "6.27",
  },
  {
    name: "Defraggler",
    appId: "Piriform.Defraggler",
    version: "2.22",
  },
  {
    name: "Recuva",
    appId: "Piriform.Recuva",
    version: "1.54.120",
  },
  {
    name: "Speccy",
    appId: "Piriform.Speccy",
    version: "1.33",
  },
  {
    name: "GitBlade",
    appId: "Pirinel.GitBlade",
    version: "00.00.8.9",
  },
  {
    name: "PixPin",
    appId: "PixPin.PixPin",
    version: "1.8.22.0",
  },
  {
    name: "PixPin",
    appId: "PixPin.PixPin.Beta",
    version: "1.8.27.0",
  },
  {
    name: "Chimeraland SEA",
    appId: "PixelSoft.ChimeralandSEA",
    version: "0.0.6.128",
  },
  {
    name: "Peer Brain",
    appId: "PixelsLTD.PeerBrain",
    version: "0.0.2",
  },
  {
    name: "PS Remote Play",
    appId: "PlayStation.PSRemotePlay",
    version: "7.5.0.08061",
  },
  {
    name: "Playnite",
    appId: "Playnite.Playnite",
    version: "10.34",
  },
  {
    name: "Plazma Burst 2 launcher",
    appId: "PlazmaBurst2.PlazmaBurst2",
    version: "0.1.0",
  },
  {
    name: "Plex",
    appId: "Plex.Plex",
    version: "1.92.1",
  },
  {
    name: "Plex HTPC (for Windows Home Thâ€¦",
    appId: "Plex.PlexHTPC",
    version: "1.35.1",
  },
  {
    name: "Plex Media Player (Deprecated)",
    appId: "Plex.PlexMediaPlayer",
    version: "2.58.0",
  },
  {
    name: "Plex Media Server",
    appId: "Plex.PlexMediaServer",
    version: "1.41.0.8994",
  },
  {
    name: "Plexamp",
    appId: "Plex.Plexamp",
    version: "4.10.1",
  },
  {
    name: "PDFill FREE PDF Editor Basic",
    appId: "PlotSoft.PDFill",
    version: "15",
  },
  {
    name: "Pocket Sync",
    appId: "PocketSync.PocketSync",
    version: "4.12.1",
  },
  {
    name: "FileBot",
    appId: "PointPlanck.FileBot",
    version: "5.1.5",
  },
  {
    name: "PokeMMO",
    appId: "PokeMMO.PokeMMO",
    version: "0.0.0.0",
  },
  {
    name: "PokerTH",
    appId: "PokerTH.PokerTH",
    version: "1.1.2",
  },
  {
    name: "BluetoothDevicePairing",
    appId: "PolarGoose.BluetoothDevicePairing",
    version: "11",
  },
  {
    name: "CoffeeBean",
    appId: "PolarGoose.CoffeeBean",
    version: "4",
  },
  {
    name: "Handle2",
    appId: "PolarGoose.Handle2",
    version: "1",
  },
  {
    name: "ShowWhatProcessLocksFile",
    appId: "PolarGoose.ShowWhatProcessLocksFiâ€¦",
    version: "6",
  },
  {
    name: "Plantronics Hub Software",
    appId: "Poly.PlantronicsHub",
    version: "3.25.54307.37â€¦",
  },
  {
    name: "Poly Lens",
    appId: "Poly.PolyLens",
    version: "1.5.0.6070",
  },
  {
    name: "PolyMC",
    appId: "PolyMC.PolyMC",
    version: "6.1",
  },
  {
    name: "Popcorn-Time",
    appId: "PopcornTime.Popcorn-Time",
    version: "0.4.9",
  },
  {
    name: "Popcorn-Time-Ru",
    appId: "PopcornTime.Popcorn-Time-Ru",
    version: "0.4.9",
  },
  {
    name: "Popcorn-Time",
    appId: "PopcornTime.Popcorn-Time-X64",
    version: "0.5.1",
  },
  {
    name: "Classic Volume Mixer",
    appId: "PopeenCom.ClassicVolumeMixer",
    version: "24.09.1",
  },
  {
    name: "Burp Suite Community Edition",
    appId: "PortSwigger.BurpSuite.Community",
    version: "2024.8.2",
  },
  {
    name: "Burp Suite Professional",
    appId: "PortSwigger.BurpSuite.Professional",
    version: "2024.8.2",
  },
  {
    name: "Positron",
    appId: "Posit.Positron",
    version: "2024.09.0",
  },
  {
    name: "Quarto",
    appId: "Posit.Quarto",
    version: "1.5.57",
  },
  {
    name: "RStudio",
    appId: "Posit.RStudio",
    version: "2024.09.0+375",
  },
  {
    name: "rig",
    appId: "Posit.rig",
    version: "0.7.0",
  },
  {
    name: "Postbox",
    appId: "Postbox.Postbox",
    version: "7.0.56",
  },
  {
    name: "PostgreSQL 10",
    appId: "PostgreSQL.PostgreSQL.10",
    version: "10",
  },
  {
    name: "PostgreSQL 11",
    appId: "PostgreSQL.PostgreSQL.11",
    version: "11",
  },
  {
    name: "PostgreSQL 12",
    appId: "PostgreSQL.PostgreSQL.12",
    version: "12.20-1",
  },
  {
    name: "PostgreSQL 13",
    appId: "PostgreSQL.PostgreSQL.13",
    version: "13.16-1",
  },
  {
    name: "PostgreSQL 14",
    appId: "PostgreSQL.PostgreSQL.14",
    version: "14.13-1",
  },
  {
    name: "PostgreSQL 15",
    appId: "PostgreSQL.PostgreSQL.15",
    version: "15.8-1",
  },
  {
    name: "PostgreSQL 16",
    appId: "PostgreSQL.PostgreSQL.16",
    version: "16.4-1",
  },
  {
    name: "PostgreSQL 9",
    appId: "PostgreSQL.PostgreSQL.9",
    version: "9",
  },
  {
    name: "pgAdmin 4",
    appId: "PostgreSQL.pgAdmin",
    version: "8.12",
  },
  {
    name: "Postimage",
    appId: "Postimage.Postimage",
    version: "1.0.1",
  },
  {
    name: "Postman",
    appId: "Postman.Postman",
    version: "11.15.0",
  },
  {
    name: "PostmanCanary",
    appId: "Postman.Postman.Canary",
    version: "11.2.14-canarâ€¦",
  },
  {
    name: "PothosSDR",
    appId: "Pothosware.PothosSDR",
    version: "2021.07.25",
  },
  {
    name: "File Shredder",
    appId: "PowTools.FileShredder",
    version: "2.5",
  },
  {
    name: "CertoNiuchacz",
    appId: "PowerClouds.CertoNiuchacz",
    version: "2.0.1.0",
  },
  {
    name: "AnyBurn",
    appId: "PowerSoftware.AnyBurn",
    version: "6.2.0.0",
  },
  {
    name: "PowerISO",
    appId: "PowerSoftware.PowerISO",
    version: "8.9.0.0",
  },
  {
    name: "proxinject",
    appId: "PragmaTwice.proxinject",
    version: "0.5.0-pre",
  },
  {
    name: "Premake 5 (Beta)",
    appId: "Premake.Premake.5.Beta",
    version: "5.0-beta2",
  },
  {
    name: "PremiumSoft Navicat Premium",
    appId: "PremiumSoft.NavicatPremium",
    version: "16.1.15",
  },
  {
    name: "ExamDiff",
    appId: "PrestoSoft.ExamDiff",
    version: "1.9.3.0",
  },
  {
    name: "FreeTube",
    appId: "PrestonN.FreeTube",
    version: "0.21.3",
  },
  {
    name: "pretixSCAN",
    appId: "Pretix.PretixSCAN",
    version: "1.15.1",
  },
  {
    name: "Prey Anti-Theft",
    appId: "Prey.Prey",
    version: "1.13.2",
  },
  {
    name: "Prezi Classic",
    appId: "Prezi.PreziClassic",
    version: "6.26.0",
  },
  {
    name: "Geekbench 2",
    appId: "PrimateLabs.Geekbench.2",
    version: "2.4.3",
  },
  {
    name: "Geekbench 3",
    appId: "PrimateLabs.Geekbench.3",
    version: "3.4.4",
  },
  {
    name: "Geekbench 4",
    appId: "PrimateLabs.Geekbench.4",
    version: "4.4.4",
  },
  {
    name: "Geekbench 5",
    appId: "PrimateLabs.Geekbench.5",
    version: "5.5.1",
  },
  {
    name: "Geekbench 6",
    appId: "PrimateLabs.Geekbench.6",
    version: "6.3.0",
  },
  {
    name: "Geekbench AI",
    appId: "PrimateLabs.GeekbenchAI",
    version: "1.1.0",
  },
  {
    name: "Primecount",
    appId: "Primecount.Primecount",
    version: "7.14",
  },
  {
    name: "Primesieve",
    appId: "Primesieve.Primesieve",
    version: "12.4",
  },
  {
    name: "PrintNode",
    appId: "PrintNode.PrintNode",
    version: "4.28.3",
  },
  {
    name: "Prism Launcher",
    appId: "PrismLauncher.PrismLauncher",
    version: "8.4",
  },
  {
    name: "Private Internet Access",
    appId: "PrivateInternetAccess.PrivateInteâ€¦",
    version: "3.5.7+08120",
  },
  {
    name: "ProScan",
    appId: "ProScan.ProScan",
    version: "22.12",
  },
  {
    name: "ProgDVB",
    appId: "Prog.ProgDVB.Professional",
    version: "7.62.6",
  },
  {
    name: "Prog Finder",
    appId: "Prog.ProgFinder",
    version: "2.39",
  },
  {
    name: "Prog Media Server for large neâ€¦",
    appId: "Prog.ProgMediaServer.Large",
    version: "4.32",
  },
  {
    name: "Prog Media Server for small neâ€¦",
    appId: "Prog.ProgMediaServer.Small",
    version: "4.32",
  },
  {
    name: "ProgTV",
    appId: "Prog.ProgTV",
    version: "3.3.7",
  },
  {
    name: "Project64",
    appId: "Project64.Project64",
    version: "3.0.1.5664",
  },
  {
    name: "Project64 (Development)",
    appId: "Project64.Project64.Dev",
    version: "4.0.0.6456",
  },
  {
    name: "Project-Env CLI",
    appId: "ProjectEnv.ProjectEnvCli",
    version: "v3.19.0",
  },
  {
    name: "Project-Env Shell",
    appId: "ProjectEnv.ProjectEnvShell",
    version: "3.2.0",
  },
  {
    name: "JupyterLab",
    appId: "ProjectJupyter.JupyterLab",
    version: "4.2.5-1",
  },
  {
    name: "SereneScreen Marine Aquarium 3",
    appId: "ProlificPublishing.MarineAquarium",
    version: "3.3.6381",
  },
  {
    name: "windows_exporter",
    appId: "Prometheus.WMIExporter",
    version: "0.24.0",
  },
  {
    name: "Data Rescue",
    appId: "ProsoftEngineering.DataRescue",
    version: "6.0.5",
  },
  {
    name: "Proton Drive",
    appId: "Proton.ProtonDrive",
    version: "1.6.2",
  },
  {
    name: "Proton Mail",
    appId: "Proton.ProtonMail",
    version: "1.1.2",
  },
  {
    name: "Proton Mail Bridge",
    appId: "Proton.ProtonMailBridge",
    version: "3.13.0",
  },
  {
    name: "Proton Pass",
    appId: "Proton.ProtonPass",
    version: "1.16.1",
  },
  {
    name: "Proton VPN",
    appId: "Proton.ProtonVPN",
    version: "3.3.2",
  },
  {
    name: "Prowise Presenter",
    appId: "Prowise.ProwisePresenter",
    version: "1.0.0",
  },
  {
    name: "Prowise Reflect",
    appId: "ProwiseB.V.ProwiseReflect",
    version: "1.2.0",
  },
  {
    name: "Proxyman",
    appId: "Proxyman.Proxyman",
    version: "2.16.0",
  },
  {
    name: "PrusaSlicer",
    appId: "Prusa3D.PrusaSlicer",
    version: "2.8.1",
  },
  {
    name: "PrusaSlicer Alpha",
    appId: "Prusa3D.PrusaSlicer.Alpha",
    version: "2.6.0-rc2",
  },
  {
    name: "OverlayTimer",
    appId: "Psenix.OverlayTimer",
    version: "1.0.0.0",
  },
  {
    name: "PuTTY",
    appId: "PuTTY.PuTTY",
    version: "0.81.0.0",
  },
  {
    name: "Pulsar",
    appId: "Pulsar-Edit.Pulsar",
    version: "1.114.0",
  },
  {
    name: "Pulse Browser",
    appId: "PulseBroswer.PulseBrowser",
    version: "1.0.0-a.87",
  },
  {
    name: "Pulumi",
    appId: "Pulumi.Pulumi",
    version: "3.135.0",
  },
  {
    name: "RocketDock",
    appId: "PunkLabs.RocketDock",
    version: "1.3.5",
  },
  {
    name: "Puppet Development Kit",
    appId: "Puppet.pdk",
    version: "3.3.0",
  },
  {
    name: "Puppet Agent",
    appId: "Puppet.puppet-agent",
    version: "8.7.0",
  },
  {
    name: "Puppet Bolt",
    appId: "Puppet.puppet-bolt",
    version: "3.27.1",
  },
  {
    name: "Puran File Recovery",
    appId: "PuranSoftware.PuranFileRecovery",
    version: "1.2.1",
  },
  {
    name: "i2pd",
    appId: "PurpleI2P.i2pd",
    version: "2.53.0",
  },
  {
    name: "Sidekick",
    appId: "PushPlayLabs.Sidekick",
    version: "124.61.1.50294",
  },
  {
    name: "Pushbullet",
    appId: "Pushbullet.Pushbullet",
    version: "501",
  },
  {
    name: "PyPy3.9",
    appId: "PyPy.PyPy.3.9",
    version: "7.3.11",
  },
  {
    name: "pot",
    appId: "Pylogmon.pot",
    version: "3.0.5",
  },
  {
    name: "Python Launcher",
    appId: "Python.Launcher",
    version: "3.12.0",
  },
  {
    name: "Python 2",
    appId: "Python.Python.2",
    version: "2.7.18150",
  },
  {
    name: "Python 3.0",
    appId: "Python.Python.3.0",
    version: "3.0.1",
  },
  {
    name: "Python 3.1",
    appId: "Python.Python.3.1",
    version: "3.1.4",
  },
  {
    name: "Python 3.10",
    appId: "Python.Python.3.10",
    version: "3.10.11",
  },
  {
    name: "Python 3.11",
    appId: "Python.Python.3.11",
    version: "3.11.9",
  },
  {
    name: "Python 3.12",
    appId: "Python.Python.3.12",
    version: "3.12.7",
  },
  {
    name: "Python 3.13.0rc2",
    appId: "Python.Python.3.13",
    version: "3.13.0rc2",
  },
  {
    name: "Python 3.2",
    appId: "Python.Python.3.2",
    version: "3.2.5",
  },
  {
    name: "Python 3.3",
    appId: "Python.Python.3.3",
    version: "3.3.5",
  },
  {
    name: "Python 3.4",
    appId: "Python.Python.3.4",
    version: "3.4.4",
  },
  {
    name: "Python 3.5",
    appId: "Python.Python.3.5",
    version: "3.5.4",
  },
  {
    name: "Python 3.6",
    appId: "Python.Python.3.6",
    version: "3.6.8",
  },
  {
    name: "Python 3.7",
    appId: "Python.Python.3.7",
    version: "3.7.9",
  },
  {
    name: "Python 3.8",
    appId: "Python.Python.3.8",
    version: "3.8.10",
  },
  {
    name: "Python 3.9",
    appId: "Python.Python.3.9",
    version: "3.9.13",
  },
  {
    name: "GMX MillionenKlick",
    appId: "Q14siX.de.GMXMillionenKlick",
    version: "1.0.0.0",
  },
  {
    name: "Vokabular WAV-Maker",
    appId: "Q14siX.de.VokabularWAV-Maker",
    version: "1.0.5.0",
  },
  {
    name: "WEB.DE MillionenKlick",
    appId: "Q14siX.de.WEB.DEMillionenKlick",
    version: "1.0.0.0",
  },
  {
    name: "QField",
    appId: "QGIS.QField",
    version: "3.3.2",
  },
  {
    name: "QuickLook",
    appId: "QL-Win.QuickLook",
    version: "3.7.3",
  },
  {
    name: "QMK Toolbox",
    appId: "QMK.QMKToolbox",
    version: "0.3.3",
  },
  {
    name: "QMPlay2",
    appId: "QMPlay2.QMPlay2",
    version: "24.04.02",
  },
  {
    name: "QNAP External RAID Manager",
    appId: "QNAP.ExternalRAIDManager",
    version: "1.4.6.0428",
  },
  {
    name: "QNAP NetBak Replicator",
    appId: "QNAP.NetBakReplicator",
    version: "4.5.12.1108",
  },
  {
    name: "QENC Decrypter",
    appId: "QNAP.QENCDecrypter",
    version: "1.2.0.22173",
  },
  {
    name: "QNAP QVR Pro Client",
    appId: "QNAP.QVRProClient",
    version: "2.6.0.0873",
  },
  {
    name: "QNAP Qfinder Pro",
    appId: "QNAP.QfinderPro",
    version: "7.8.2.0928",
  },
  {
    name: "Qsirch PC Edition",
    appId: "QNAP.Qsirch",
    version: "1.0.7.0",
  },
  {
    name: "QNAP Qsync Client",
    appId: "QNAP.Qsync",
    version: "5.0.7.1122",
  },
  {
    name: "QuDedup Extract Tool",
    appId: "QNAP.QuDedupExtractTool",
    version: "1.1.4.21201",
  },
  {
    name: "QPDF",
    appId: "QPDF.QPDF",
    version: "11.6.3",
  },
  {
    name: "QTTabBar",
    appId: "QTTabBar.QTTabBar",
    version: "1.5.260",
  },
  {
    name: "QTextPad",
    appId: "QTextPad.QTextPad",
    version: "1.11",
  },
  {
    name: "QTodoTxt",
    appId: "QTodoTxt.QTodoTxt",
    version: "1.7.0",
  },
  {
    name: "Qalculate!",
    appId: "Qalculate.Qalculate",
    version: "5.2.0",
  },
  {
    name: "å°é»‘ç›’åŠ é€Ÿå™¨",
    appId: "Qingfeng.HeyboxAccelerator",
    version: "1.1.57",
  },
  {
    name: "é»‘ç›’å·¥åŠ",
    appId: "Qingfeng.HeyboxWow",
    version: "1.9.38",
  },
  {
    name: "Qt-based Multimedia Player",
    appId: "QmmpDevelopmentTeam.qmmp",
    version: "2.1.7",
  },
  {
    name: "Qobuz",
    appId: "Qobuz.Qobuz",
    version: "7.1.3-b010",
  },
  {
    name: "PDF Studio",
    appId: "Qoppa.PDFStudio",
    version: "2024.0.1",
  },
  {
    name: "Qt Designer",
    appId: "Qt.QtDesigner",
    version: "5.11.1",
  },
  {
    name: "QuadSpinner Gaea 2.0",
    appId: "QuadSpinner.Gaea",
    version: "2.0.4.0",
  },
  {
    name: "Arc",
    appId: "Quadren.Arc.Prerelease",
    version: "PBv1.1.3",
  },
  {
    name: "xkill",
    appId: "QuantumNovice.xkill",
    version: "1.0.0",
  },
  {
    name: "QuasselIRC",
    appId: "Quassel.QuasselIRC",
    version: "0.14.0",
  },
  {
    name: "Questrade Edge",
    appId: "Questrade.IQEdge",
    version: "6.9.0.317",
  },
  {
    name: "Quicken",
    appId: "Quicken.Quicken",
    version: "27.1.59.6",
  },
  {
    name: "Red Eclipse",
    appId: "QuintonReeves.RedEclipse",
    version: "2.0.0",
  },
  {
    name: "Quod Libet - Music Library / Eâ€¦",
    appId: "QuodLibet.QuodLibet",
    version: "4.6.0",
  },
  {
    name: "Qv2ray",
    appId: "Qv2ray.Qv2ray",
    version: "2.7.0",
  },
  {
    name: "RAGE Multiplayer",
    appId: "RAGEMultiplayerTeam.RAGEMultiplayâ€¦",
    version: "1.1.0.0",
  },
  {
    name: "WinRAR",
    appId: "RARLab.WinRAR",
    version: "7.01.0",
  },
  {
    name: "wiki",
    appId: "RCharan.wiki",
    version: "1",
  },
  {
    name: "HWiNFO",
    appId: "REALiX.HWiNFO",
    version: "8.1",
  },
  {
    name: "WolvenKit Nightly",
    appId: "REDModding.WolvenKit.Nightly",
    version: "8.8.2-nightlyâ€¦",
  },
  {
    name: "cyberJack DriverPackage",
    appId: "REINERSCT.cyberJackDriverPackage",
    version: "1.3.1",
  },
  {
    name: "PCR532",
    appId: "RFIDfans.PCR532",
    version: "1.0.6.8",
  },
  {
    name: "SpectraVue",
    appId: "RFSpace.SpectraVue",
    version: "3.44",
  },
  {
    name: "RHash",
    appId: "RHash.RHash",
    version: "1.4.4",
  },
  {
    name: "DigiDoc4 Client",
    appId: "RIA.DigiDoc4",
    version: "4.4.0.4447",
  },
  {
    name: "ë¦¬ë””ë¶ìŠ¤",
    appId: "RIDI.Ridibooks",
    version: "0.11.6",
  },
  {
    name: "Frhed",
    appId: "RKibria.frhed",
    version: "1.7.1",
  },
  {
    name: "R for Windows",
    appId: "RProject.R",
    version: "4.4.1",
  },
  {
    name: "Rtools",
    appId: "RProject.Rtools",
    version: "4.4.6104",
  },
  {
    name: "Passky",
    appId: "Rabbit-Company.Passky",
    version: "7.0.0",
  },
  {
    name: "AssaultCube",
    appId: "RabidViperProductions.AssaultCube",
    version: "1.3.0.2",
  },
  {
    name: "RaceCore24 Ignition",
    appId: "RaceCore24.Ignition",
    version: "1.1.7.58",
  },
  {
    name: "Racket",
    appId: "Racket.Racket",
    version: "8.14",
  },
  {
    name: "GtkRadiant",
    appId: "RadiantCommunity.GtkRadiant",
    version: "1.5.0",
  },
  {
    name: "Invisiwind",
    appId: "Radiantly.Invisiwind",
    version: "1.1.5",
  },
  {
    name: "Radio Eyes",
    appId: "RadioSky.RadioEyes",
    version: "1.5.7",
  },
  {
    name: "Radio-Sky Spectrograph",
    appId: "RadioSky.Spectrograph",
    version: "2.9.77",
  },
  {
    name: "Radius",
    appId: "Radius.Radius",
    version: "0.33.0",
  },
  {
    name: "AyuGram Desktop",
    appId: "RadolynLabs.AyuGramDesktop",
    version: "5.4.1",
  },
  {
    name: "Rainmeter",
    appId: "Rainmeter.Rainmeter",
    version: "4.5.20",
  },
  {
    name: "Rainlendar Lite",
    appId: "Rainy.Rainlendar.Lite",
    version: "2.21.2",
  },
  {
    name: "Rakk Talan Air Wireless",
    appId: "Rakk.TalanAir",
    version: "1",
  },
  {
    name: "Viber",
    appId: "Rakuten.Viber",
    version: "23.6.0.0",
  },
  {
    name: "RamSoft DicomProxy",
    appId: "RamSoft.DicomProxy",
    version: "0.2.332-ci.8",
  },
  {
    name: "RamSoft Omega AI Link",
    appId: "RamSoft.OmegaAILink",
    version: "0.3.680-ci.1",
  },
  {
    name: "SimpleTransfer Desktop",
    appId: "Rambax.SimpleTransfer",
    version: "3.4.2",
  },
  {
    name: "Rambox",
    appId: "Rambox.Rambox",
    version: "2.2.3",
  },
  {
    name: "Rambox",
    appId: "Rambox.Rambox.Community",
    version: "0.8.0",
  },
  {
    name: "7+ Taskbar Tweaker",
    appId: "RamenSoftware.7+TaskbarTweaker",
    version: "5.15.2",
  },
  {
    name: "Windhawk",
    appId: "RamenSoftware.Windhawk",
    version: "1.5.1",
  },
  {
    name: "VidCoder",
    appId: "RandomEngy.VidCoder",
    version: "9.2",
  },
  {
    name: "VidCoder Beta",
    appId: "RandomEngy.VidCoder.Beta",
    version: "10.1.0",
  },
  {
    name: "Objeck",
    appId: "RandyHollines.Objeck",
    version: "2024.4.1",
  },
  {
    name: "SharpKeys",
    appId: "RandyRants.SharpKeys",
    version: "3.9.4000",
  },
  {
    name: "Rao Pics",
    appId: "RaoPics.RaoPics",
    version: "0.7.16",
  },
  {
    name: "Raspberry Pi Imager",
    appId: "RaspberryPiFoundation.RaspberryPiâ€¦",
    version: "1.9.0",
  },
  {
    name: "RxView",
    appId: "RasterexSoftware.RxView",
    version: "21.0.0.470",
  },
  {
    name: "Raven Core",
    appId: "RavenProject.RavenCore",
    version: "4.6.1",
  },
  {
    name: "tiptoi Manager",
    appId: "RavensburgerAG.tiptoiManager",
    version: "5.1.0",
  },
  {
    name: "RawTherapee",
    appId: "RawTherapee.RawTherapee",
    version: "5.11",
  },
  {
    name: "RawTherapee",
    appId: "RawTherapee.RawTherapee.Dev",
    version: "5.11-71-g0036â€¦",
  },
  {
    name: "Reddit Wallpaper Changer",
    appId: "Rawns.Reddit-Wallpaper-Changer",
    version: "1.0.13",
  },
  {
    name: "Rayman Control Panel",
    appId: "RayCarrot.RaymanControlPanel",
    version: "13.4.5.0",
  },
  {
    name: "Hyper-V-Switch",
    appId: "RaynerSec.Hyper-V-Switch",
    version: "1.0.1.0",
  },
  {
    name: "Razer Synapse 3",
    appId: "RazerInc.RazerInstaller",
    version: "1.15.0.504",
  },
  {
    name: "Rclone",
    appId: "Rclone.Rclone",
    version: "1.68.1",
  },
  {
    name: "Spark Desktop",
    appId: "Readdle.Spark",
    version: "3.17.8",
  },
  {
    name: "RealVNC Server",
    appId: "RealVNC.VNCServer",
    version: "7.12.0.14",
  },
  {
    name: "RealVNC Viewer",
    appId: "RealVNC.VNCViewer",
    version: "7.12.0.14",
  },
  {
    name: "UltraMon",
    appId: "RealtimeSoft.UltraMon",
    version: "3.4.1",
  },
  {
    name: "IRPF 2023",
    appId: "ReceitaFederaldoBrasil.IRPF2023",
    version: "1.4",
  },
  {
    name: "Cantara",
    appId: "Reckel.Cantara",
    version: "2.6.0",
  },
  {
    name: "AudioBookConverter",
    appId: "Recoupler.AudioBookConverter",
    version: "6.2.10",
  },
  {
    name: "CemUI",
    appId: "RedDucks.CemUI",
    version: "2.3.3",
  },
  {
    name: "OpenShift Client",
    appId: "RedHat.OpenShift-Client",
    version: "4.16.9",
  },
  {
    name: "Podman",
    appId: "RedHat.Podman",
    version: "5.2.3",
  },
  {
    name: "Podman Desktop",
    appId: "RedHat.Podman-Desktop",
    version: "1.12.0",
  },
  {
    name: "VirtViewer",
    appId: "RedHat.VirtViewer",
    version: "11.0.256",
  },
  {
    name: "Redact",
    appId: "RedactSoftware.Redact",
    version: "0.18.0",
  },
  {
    name: "BACnet Explorer",
    appId: "Redisant.BACnetExplorer",
    version: "1.0.0.0",
  },
  {
    name: "Data Assistant",
    appId: "Redisant.DataAssistant",
    version: "1.1.2.4",
  },
  {
    name: "Etcd Assistant",
    appId: "Redisant.EtcdAssistant",
    version: "2.0.0.0",
  },
  {
    name: "Garnet Assistant",
    appId: "Redisant.GarnetAssistant",
    version: "1.0.1.1",
  },
  {
    name: "IEC104 Client Simulator",
    appId: "Redisant.IEC104ClientSimulator",
    version: "1.1.9.0",
  },
  {
    name: "IEC104 Server Simulator",
    appId: "Redisant.IEC104ServerSimulator",
    version: "1.1.9.0",
  },
  {
    name: "IEC61850ClientSimulator",
    appId: "Redisant.IEC61850ClientSimulator",
    version: "1.0.3.6",
  },
  {
    name: "IEC61850ServerSimulator",
    appId: "Redisant.IEC61850ServerSimulator",
    version: "1.0.1.0",
  },
  {
    name: "Kafka Assistant",
    appId: "Redisant.KafkaAssistant",
    version: "1.2.8.2",
  },
  {
    name: "Little Tips",
    appId: "Redisant.LittleTips",
    version: "1.0.5.1",
  },
  {
    name: "MQTT Assistant",
    appId: "Redisant.MQTTAssistant",
    version: "2.0.6.7",
  },
  {
    name: "Modbus Master Emulator",
    appId: "Redisant.ModbusMasterEmulator",
    version: "2.1.5.5",
  },
  {
    name: "Modbus Slave Emulator",
    appId: "Redisant.ModbusSlaveEmulator",
    version: "2.1.5.3",
  },
  {
    name: "NoSql Assistant",
    appId: "Redisant.NoSQLAssistant",
    version: "1.1.5.0",
  },
  {
    name: "Pulsar Assistant",
    appId: "Redisant.PulsarAssistant",
    version: "1.1.0.0",
  },
  {
    name: "RabbitMQ Assistant",
    appId: "Redisant.RabbitMQAssistant",
    version: "1.3.0.0",
  },
  {
    name: "Redis Assistant",
    appId: "Redisant.RedisAssistant",
    version: "2.0.2.5",
  },
  {
    name: "Redisant Toolbox",
    appId: "Redisant.RedisantToolbox",
    version: "1.0.7.0",
  },
  {
    name: "RocketMQ Assistant",
    appId: "Redisant.RocketMQAssistant",
    version: "2.0.0.3",
  },
  {
    name: "TinyGUI",
    appId: "Redisant.TinyGUI",
    version: "1.0.9.0",
  },
  {
    name: "ZooKeeper Assistant",
    appId: "Redisant.ZooKeeperAssistant",
    version: "2.0.0.1",
  },
  {
    name: "Reginald",
    appId: "Reginald.Reginald",
    version: "1.0.1",
  },
  {
    name: "Regressi",
    appId: "Regressi.Regressi",
    version: "4.8.17",
  },
  {
    name: "Camo Studio",
    appId: "ReincubateLtd.CamoStudio",
    version: "2.1.26.13113",
  },
  {
    name: "iPhone Backup Extractor",
    appId: "ReincubateLtd.iPhoneBackupExtractâ€¦",
    version: "7.7.42.10995",
  },
  {
    name: "PDFShow",
    appId: "RejminetGroupInc.PDFShow",
    version: "1.0.3",
  },
  {
    name: "FanControl",
    appId: "Rem0o.FanControl",
    version: "205",
  },
  {
    name: "RemNote",
    appId: "RemNote.RemNote",
    version: "1.16.16",
  },
  {
    name: "Recom (PCST)",
    appId: "Remeha.ServiceTool",
    version: "7.4.10.0",
  },
  {
    name: "deemix-gui",
    appId: "RemixDev.deemix-gui",
    version: "2022.12.14-r2â€¦",
  },
  {
    name: "Remix IDE",
    appId: "RemixTeam.RemixIDE",
    version: "1.3.4",
  },
  {
    name: "Remote Utilities - Viewer",
    appId: "RemoteUtilities.Viewer",
    version: "7.5.1.0",
  },
  {
    name: "ProPresenter",
    appId: "RenewedVision.ProPresenter",
    version: "7.9.2_1180308â€¦",
  },
  {
    name: "Renode",
    appId: "Renode.Renode",
    version: "1.15.3",
  },
  {
    name: "Renoise",
    appId: "Renoise.Renoise",
    version: "3.3.2",
  },
  {
    name: "Reolink",
    appId: "Reolink.Reolink",
    version: "8.17.6",
  },
  {
    name: "Reor",
    appId: "ReorProject.Reor",
    version: "0.2.21",
  },
  {
    name: "Replit",
    appId: "Replit.Replit",
    version: "1.0.12",
  },
  {
    name: "The Looking-Glass",
    appId: "Reptarsrage.looking-glass",
    version: "0.4.25",
  },
  {
    name: "Reqable",
    appId: "Reqable.Reqable",
    version: "2.25.0",
  },
  {
    name: "RescueTime",
    appId: "RescueTime.DesktopApp",
    version: "3.2.2.1",
  },
  {
    name: "ReShade Setup",
    appId: "Reshade.Setup",
    version: "6.1.1",
  },
  {
    name: "ReShade Setup (Full Add-on Supâ€¦",
    appId: "Reshade.Setup.AddonsSupport",
    version: "6.1.1",
  },
  {
    name: "Resolume Arena",
    appId: "Resolume.Arena",
    version: "7.21.3.38686",
  },
  {
    name: "Resolume Avenue",
    appId: "Resolume.Avenue",
    version: "7.21.3.38686",
  },
  {
    name: "LatencyMon",
    appId: "Resplendence.LatencyMon",
    version: "7.31",
  },
  {
    name: "MultiMon",
    appId: "Resplendence.MultiMon",
    version: "3.01",
  },
  {
    name: "Registrar Registry Manager",
    appId: "Resplendence.RegistrarRegistryManâ€¦",
    version: "9.2",
  },
  {
    name: "SanityCheck",
    appId: "Resplendence.SanityCheck",
    version: "3.52",
  },
  {
    name: "Undeluxe",
    appId: "Resplendence.Undeluxe",
    version: "3.01",
  },
  {
    name: "WhoCrashed",
    appId: "Resplendence.WhoCrashed",
    version: "7.06",
  },
  {
    name: "WhySoSlow",
    appId: "Resplendence.WhySoSlow",
    version: "1.61",
  },
  {
    name: "ResponsivelyApp",
    appId: "ResponsivelyApp.ResponsivelyApp",
    version: "1.3.0",
  },
  {
    name: "RestApia",
    appId: "RestApia.RestApiaDesktop",
    version: "0.1.5",
  },
  {
    name: "RetroShare",
    appId: "Retroshare.Retroshare",
    version: "0.6.7.2",
  },
  {
    name: "WordLight",
    appId: "Revival.WordLight",
    version: "7.2.4",
  },
  {
    name: "Steam-Library-Manager",
    appId: "RevoLand.Steam-Library-Manager",
    version: "1.7.1",
  },
  {
    name: "Revo Uninstaller",
    appId: "RevoUninstaller.RevoUninstaller",
    version: "2.5.0",
  },
  {
    name: "Revo Uninstaller Pro",
    appId: "RevoUninstaller.RevoUninstallerPro",
    version: "5.3.0",
  },
  {
    name: "Revolt",
    appId: "Revolt.RevoltDesktop",
    version: "1.0.6",
  },
  {
    name: "Revo Scan 5",
    appId: "Revopoint.RevoScan",
    version: "5.4.12.1526",
  },
  {
    name: "C\u0026C:Online",
    appId: "Revora.CNCOnline",
    version: "2.0.7",
  },
  {
    name: "Trading Paints",
    appId: "Rhinode.TradingPaints",
    version: "2.0.37",
  },
  {
    name: "Noesis",
    appId: "RichWhitehouse.Noesis",
    version: "4473",
  },
  {
    name: "RazorSQL",
    appId: "RichardsonSoftware.RazorSQL",
    version: "10.0.6",
  },
  {
    name: "Pullp",
    appId: "RickClark.Pullp",
    version: "4.0.2",
  },
  {
    name: "NSwagStudio",
    appId: "RicoSuter.NSwagStudio",
    version: "14.1.0.0",
  },
  {
    name: "Ricochet",
    appId: "RicochetIM.Ricochet",
    version: "1.1.4.0",
  },
  {
    name: "FAT32 Formatter",
    appId: "Ridgecrop.fat32format",
    version: "1.07",
  },
  {
    name: "FAT32 GUI Formatter",
    appId: "Ridgecrop.guiformat",
    version: "1.01",
  },
  {
    name: "Rigs of Rods",
    appId: "RigsofRods.RigsofRods",
    version: "2022.12",
  },
  {
    name: "pollapo",
    appId: "Riiid.pollapo",
    version: "0.0.70",
  },
  {
    name: "AltServer",
    appId: "RileyTestut.AltServer",
    version: "1.7.2",
  },
  {
    name: "Touch Portal",
    appId: "Rils.TouchPortal",
    version: "4.2.0",
  },
  {
    name: "Weasel",
    appId: "Rime.Weasel",
    version: "0.16.2",
  },
  {
    name: "RingCentral",
    appId: "RingCentral.RingCentral",
    version: "24.3.302.12076",
  },
  {
    name: "League of Legends (Brasil servâ€¦",
    appId: "RiotGames.LeagueOfLegends.BR",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (EU Nordic \u0026â€¦",
    appId: "RiotGames.LeagueOfLegends.EUNE",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (EU West serâ€¦",
    appId: "RiotGames.LeagueOfLegends.EUW",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Japan serveâ€¦",
    appId: "RiotGames.LeagueOfLegends.JP",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Korea serveâ€¦",
    appId: "RiotGames.LeagueOfLegends.KR",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Latin Ameriâ€¦",
    appId: "RiotGames.LeagueOfLegends.LA1",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Latin Ameriâ€¦",
    appId: "RiotGames.LeagueOfLegends.LA2",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (North Ameriâ€¦",
    appId: "RiotGames.LeagueOfLegends.NA",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Oceania serâ€¦",
    appId: "RiotGames.LeagueOfLegends.OC1",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends PBE",
    appId: "RiotGames.LeagueOfLegends.PBE",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Philippinesâ€¦",
    appId: "RiotGames.LeagueOfLegends.PH2",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Russia servâ€¦",
    appId: "RiotGames.LeagueOfLegends.RU",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Singapore sâ€¦",
    appId: "RiotGames.LeagueOfLegends.SG2",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Thailand seâ€¦",
    appId: "RiotGames.LeagueOfLegends.TH2",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Turkey servâ€¦",
    appId: "RiotGames.LeagueOfLegends.TR",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Taiwan servâ€¦",
    appId: "RiotGames.LeagueOfLegends.TW2",
    version: "95.0.1.2166",
  },
  {
    name: "League of Legends (Vietnam serâ€¦",
    appId: "RiotGames.LeagueOfLegends.VN2",
    version: "95.0.1.2166",
  },
  {
    name: "Legends of Runeterra - Americas",
    appId: "RiotGames.LegendsOfRuneterra.Amerâ€¦",
    version: "95.0.1.2166",
  },
  {
    name: "Legends of Runeterra (Asia serâ€¦",
    appId: "RiotGames.LegendsOfRuneterra.Asia",
    version: "49.0.0.4352238",
  },
  {
    name: "Legends of Runeterra - Europe",
    appId: "RiotGames.LegendsOfRuneterra.Euroâ€¦",
    version: "95.0.1.2166",
  },
  {
    name: "Legends of Runeterra (Southeasâ€¦",
    appId: "RiotGames.LegendsOfRuneterra.SEA",
    version: "95.0.1.2166",
  },
  {
    name: "VALORANT (Asia-Pacific server)",
    appId: "RiotGames.Valorant.AP",
    version: "95.0.1.2166",
  },
  {
    name: "VALORANT (Brazil server)",
    appId: "RiotGames.Valorant.BR",
    version: "95.0.1.2166",
  },
  {
    name: "VALORANT (Europe server)",
    appId: "RiotGames.Valorant.EU",
    version: "95.0.1.2166",
  },
  {
    name: "VALORANT (Korea server)",
    appId: "RiotGames.Valorant.KR",
    version: "95.0.1.2166",
  },
  {
    name: "VALORANT (Latin America server)",
    appId: "RiotGames.Valorant.LATAM",
    version: "95.0.1.2166",
  },
  {
    name: "VALORANT (North America server)",
    appId: "RiotGames.Valorant.NA",
    version: "95.0.1.2166",
  },
  {
    name: "Memento",
    appId: "Ripose.Memento",
    version: "1.2.2",
  },
  {
    name: "RiseupVPN",
    appId: "Riseup.RiseupVPN",
    version: "0.24.8",
  },
  {
    name: "Deckboard",
    appId: "RivaFarabi.Deckboard",
    version: "2.1.4",
  },
  {
    name: "Cutter",
    appId: "Rizin.Cutter",
    version: "2.3.4",
  },
  {
    name: "Rizin",
    appId: "Rizin.Rizin",
    version: "0.7.3",
  },
  {
    name: "Notepad3",
    appId: "Rizonesoft.Notepad3",
    version: "6.23.203.2",
  },
  {
    name: "Roam Research",
    appId: "RoamResearch.RoamResearch",
    version: "0.0.18",
  },
  {
    name: "PDFKeeper",
    appId: "RobertFFrasca.PDFKeeper",
    version: "9.2.0",
  },
  {
    name: "MaxLauncher",
    appId: "RobertoConcepcion.MaxLauncher",
    version: "1.31.0.0",
  },
  {
    name: "Shuttle",
    appId: "RobinJullian.Shuttle",
    version: "3.1.0",
  },
  {
    name: "Dink Smallwood HD",
    appId: "RobinsonTechnologies.DinkSmallwooâ€¦",
    version: "1.99",
  },
  {
    name: "Roblox Player",
    appId: "Roblox.Roblox",
    version: "1.6.2.6410741",
  },
  {
    name: "RVTools",
    appId: "Robware.RVTools",
    version: "4.6.1",
  },
  {
    name: "Rockbox Utility",
    appId: "Rockbox.RockboxUtility",
    version: "1.5.1",
  },
  {
    name: "Rocket.Chat",
    appId: "RocketChat.RocketChat",
    version: "3.9.14",
  },
  {
    name: "wnr",
    appId: "RoderickQiu.wnr",
    version: "1.30.1",
  },
  {
    name: "R\u0026SÂ® IETDView Autark",
    appId: "Rohde\u0026Schwarz.SDC.IETDViewAutark",
    version: "7.1.2",
  },
  {
    name: "R\u0026SÂ® IETDView Autark Bw",
    appId: "Rohde\u0026Schwarz.SDC.IETDViewAutarkBw",
    version: "7.1.2",
  },
  {
    name: "R\u0026SÂ® IETDView Publish",
    appId: "Rohde\u0026Schwarz.SDC.IETDViewPublish",
    version: "7.1.2",
  },
  {
    name: "Rojo",
    appId: "Rojo.Rojo",
    version: "7.4.2",
  },
  {
    name: "Rokkr",
    appId: "Rokkr.Rokkr",
    version: "1.8.3",
  },
  {
    name: "roku_remote_tool",
    appId: "Roku.RemoteTool",
    version: "4.0.5",
  },
  {
    name: "LDCad",
    appId: "RolandMelkert.LDCad",
    version: "1.6d2",
  },
  {
    name: "Regard3D",
    appId: "RomanHiestand.Regard3D",
    version: "1.0.0",
  },
  {
    name: "Ctrlr",
    appId: "RomanKubiak.Ctrlr",
    version: "5.6.0",
  },
  {
    name: "WiGui",
    appId: "Romanitho.WiGUI",
    version: "1.9.1",
  },
  {
    name: "Romcenter",
    appId: "Romcenter.Romcenter",
    version: "4.1.1",
  },
  {
    name: "L\u0027Math",
    appId: "RoniLehto.LMath",
    version: "r1.10.9",
  },
  {
    name: "Password Safe",
    appId: "RonyShapiro.PasswordSafe",
    version: "3.66.1",
  },
  {
    name: "Roon                            RoonLabs.Roon                      2.0",
    appId: "(build",
    version: "13â€¦",
  },
  {
    name: "RoonBridge                      RoonLabs.RoonBridge                1.8",
    appId: "(build",
    version: "11â€¦",
  },
  {
    name: "RoonServer",
    appId: "RoonLabs.RoonServer",
    version: "2.0.1259",
  },
  {
    name: "RootsMagic 10",
    appId: "RootsMagic.RootsMagic.10",
    version: "10.0.2.0",
  },
  {
    name: "RoslynPad",
    appId: "RoslynPad.RoslynPad",
    version: "20.0.0",
  },
  {
    name: "VAT-Spy",
    appId: "RossCarlson.VATSpy",
    version: "1.3.3",
  },
  {
    name: "CrossWorks for ARM",
    appId: "Rowley.CrossWorks",
    version: "4.8",
  },
  {
    name: "Red Panda C++",
    appId: "RoyQu.RedPanda-C++",
    version: "3.1",
  },
  {
    name: "obs-backgroundremoval",
    appId: "RoyShilkrot.obs-backgroundremoval",
    version: "1.1.13",
  },
  {
    name: "Royal Server",
    appId: "RoyalApps.RoyalServer",
    version: "5.02.50419.0",
  },
  {
    name: "Royal TS",
    appId: "RoyalApps.RoyalTS",
    version: "6.1.61019.0",
  },
  {
    name: "Royal TS V7",
    appId: "RoyalApps.RoyalTS.V7",
    version: "7.2.50703.0",
  },
  {
    name: "æ——é±¼æµè§ˆå™¨",
    appId: "Ruanmei.Qiyu",
    version: "2.1.1.2",
  },
  {
    name: "Rubberduck",
    appId: "Rubberduck.Rubberduck",
    version: "2.5.9.6316",
  },
  {
    name: "PicView",
    appId: "Ruben2776.PicView",
    version: "2.3.2",
  },
  {
    name: "rubick",
    appId: "Rubick.Rubick",
    version: "4.2.7",
  },
  {
    name: "Ruby 2.6",
    appId: "RubyInstallerTeam.Ruby.2.6",
    version: "2.6.10-1",
  },
  {
    name: "Ruby 2.7",
    appId: "RubyInstallerTeam.Ruby.2.7",
    version: "2.7.6-1",
  },
  {
    name: "Ruby 3.0",
    appId: "RubyInstallerTeam.Ruby.3.0",
    version: "3.0.4-1",
  },
  {
    name: "Ruby 3.1",
    appId: "RubyInstallerTeam.Ruby.3.1",
    version: "3.1.2-1",
  },
  {
    name: "Ruby 3.2",
    appId: "RubyInstallerTeam.Ruby.3.2",
    version: "3.2.1-1",
  },
  {
    name: "Ruby 2.6 with MSYS2",
    appId: "RubyInstallerTeam.RubyWithDevKit.â€¦",
    version: "2.6.10-1",
  },
  {
    name: "Ruby 2.7 with MSYS2",
    appId: "RubyInstallerTeam.RubyWithDevKit.â€¦",
    version: "2.7.6-1",
  },
  {
    name: "Ruby 3.0 with MSYS2",
    appId: "RubyInstallerTeam.RubyWithDevKit.â€¦",
    version: "3.0.4-1",
  },
  {
    name: "Ruby 3.1 with MSYS2",
    appId: "RubyInstallerTeam.RubyWithDevKit.â€¦",
    version: "3.1.2-1",
  },
  {
    name: "Ruby 3.2 with MSYS2",
    appId: "RubyInstallerTeam.RubyWithDevKit.â€¦",
    version: "3.2.4-1",
  },
  {
    name: "Rufus",
    appId: "Rufus.Rufus",
    version: "4.5",
  },
  {
    name: "Apifox",
    appId: "Ruihu.Apifox",
    version: "2.5.19",
  },
  {
    name: "RuneLite",
    appId: "RuneLite.RuneLite",
    version: "2.7.2",
  },
  {
    name: "HashHash",
    appId: "RussellBanks.HashHash",
    version: "1.12.0",
  },
  {
    name: "Komac",
    appId: "RussellBanks.Komac",
    version: "2.6.0",
  },
  {
    name: "RustDesk",
    appId: "RustDesk.RustDesk",
    version: "1.3.1",
  },
  {
    name: "Raindrop.io",
    appId: "RustemMussabekov.Raindrop",
    version: "5.6.50",
  },
  {
    name: "Rust (GNU)",
    appId: "Rustlang.Rust.GNU",
    version: "1.81.0",
  },
  {
    name: "Rust (MSVC)",
    appId: "Rustlang.Rust.MSVC",
    version: "1.81.0",
  },
  {
    name: "Rustup: the Rust toolchain insâ€¦",
    appId: "Rustlang.Rustup",
    version: "1.27.1",
  },
  {
    name: "GCFScape",
    appId: "RyanGregg.GCFScape",
    version: "1.8.6",
  },
  {
    name: "VTFEdit",
    appId: "RyanGregg.VTFEdit",
    version: "1.3.3",
  },
  {
    name: "Rye",
    appId: "Rye.Rye",
    version: "0.41.0",
  },
  {
    name: "DS4Windows",
    appId: "Ryochan7.DS4Windows",
    version: "3.3.3",
  },
  {
    name: "masterclass-dl",
    appId: "RythenGlyth.masterclass-dl",
    version: "1.0.2",
  },
  {
    name: "Ryujinx",
    appId: "Ryujinx.Ryujinx",
    version: "1.1.1403",
  },
  {
    name: "Ryujinx Emulator",
    appId: "Ryujinx.Ryujinx.Ava",
    version: "1.1.1403",
  },
  {
    name: "Ryzen Controller",
    appId: "RyzenControllerTeam.RyzenControllâ€¦",
    version: "2.5.4",
  },
  {
    name: "SABnzbd",
    appId: "SABnzbdTeam.SABnzbd",
    version: "4.3.3",
  },
  {
    name: "SAGA - System for Automated Geâ€¦",
    appId: "SAGAUserGroupAssociation.SAGAGIS",
    version: "9.2.0",
  },
  {
    name: "SapMachine 11 JDK",
    appId: "SAP.SapMachine.11.JDK",
    version: "11.0.24",
  },
  {
    name: "SapMachine 11 JRE",
    appId: "SAP.SapMachine.11.JRE",
    version: "11.0.24",
  },
  {
    name: "SapMachine 17 JDK",
    appId: "SAP.SapMachine.17.JDK",
    version: "17.0.12",
  },
  {
    name: "SapMachine 17 JRE",
    appId: "SAP.SapMachine.17.JRE",
    version: "17.0.12",
  },
  {
    name: "SapMachine 21 JDK",
    appId: "SAP.SapMachine.21.JDK",
    version: "21.0.4",
  },
  {
    name: "SapMachine 21 JRE",
    appId: "SAP.SapMachine.21.JRE",
    version: "21.0.4",
  },
  {
    name: "SapMachine 22 JDK",
    appId: "SAP.SapMachine.22.JDK",
    version: "22.0.2",
  },
  {
    name: "SapMachine 22 JRE",
    appId: "SAP.SapMachine.22.JRE",
    version: "22.0.2",
  },
  {
    name: "Steel Bank Common Lisp",
    appId: "SBCL.SBCL",
    version: "2.3.2",
  },
  {
    name: "Small Device C Compiler",
    appId: "SDCC.SDCC",
    version: "4.2.0",
  },
  {
    name: "SEA-OSS Access",
    appId: "SEA.OssAccess",
    version: "1.0.23340",
  },
  {
    name: "Assinador Serpro",
    appId: "SERPRO.AssinadorSERPRO",
    version: "4.1.0",
  },
  {
    name: "SETCCE proXSignÂ®",
    appId: "SETCCE.ProXSign",
    version: "2.2.13.374",
  },
  {
    name: "Jami (BETA)",
    appId: "SFLinux.Jami.Beta",
    version: "1.0.9004.27121",
  },
  {
    name: "openage",
    appId: "SFTtech.openage",
    version: "0.4.0",
  },
  {
    name: "SKAARHOJUpdater",
    appId: "SKAARHOJApS.SKAARHOJUpdater",
    version: "1.0.14",
  },
  {
    name: "ë„¤ì´íŠ¸ì˜¨",
    appId: "SKCommunications.NateOn",
    version: "7.0.25.1",
  },
  {
    name: "ORM_Core",
    appId: "SKDataAS.ORMCore",
    version: "2024250401",
  },
  {
    name: "Linrad",
    appId: "SM5BSZ.Linrad",
    version: "5.02",
  },
  {
    name: "Linrad-dll",
    appId: "SM5BSZ.Linrad-dll",
    version: "05.0.1",
  },
  {
    name: "SMART Education Software",
    appId: "SMARTTechnologies.SMARTNotebook",
    version: "24.0.306.0",
  },
  {
    name: "Standard ML of New Jersey",
    appId: "SMLNJ.SMLNJ.Legacy",
    version: "110.99.4",
  },
  {
    name: "SMPlayer",
    appId: "SMPlayer.SMPlayer",
    version: "24.5.0",
  },
  {
    name: "SQLite",
    appId: "SQLite.SQLite",
    version: "3.46.1",
  },
  {
    name: "Patchwork",
    appId: "SSBC.Patchwork",
    version: "3.18.1",
  },
  {
    name: "SSHFS-Win",
    appId: "SSHFS-Win.SSHFS-Win",
    version: "3.5.20357",
  },
  {
    name: "Unowhy Tools",
    appId: "STYInc.STY1001.UnowhyTools",
    version: "30.01",
  },
  {
    name: "SUPERAntiSpyware",
    appId: "SUPERAntiSpyware.SUPERAntiSpyware",
    version: "10.0.1238",
  },
  {
    name: "Let\u0027s Connect! Client",
    appId: "SURF.LetsConnectClient",
    version: "4.2",
  },
  {
    name: "eduVPN Client",
    appId: "SURF.eduVPNClient",
    version: "4.2",
  },
  {
    name: "SVG See",
    appId: "SVGExplorerExtension.SVGExplorerEâ€¦",
    version: "1.0.0",
  },
  {
    name: "GEDKeeper2",
    appId: "SVZsoft.GEDKeeper",
    version: "3.7.0",
  },
  {
    name: "SWI-Prolog",
    appId: "SWI-Prolog.SWI-Prolog",
    version: "9.2.7",
  },
  {
    name: "SWIG",
    appId: "SWIG.SWIG",
    version: "4.2.1",
  },
  {
    name: "Tower",
    appId: "SaaSGroup.Tower",
    version: "4.3.425",
  },
  {
    name: "Sabaki",
    appId: "SabakiHQ.Sabaki",
    version: "0.52.2",
  },
  {
    name: "Cosmos DB Explorer",
    appId: "SachaBruttin.CosmosDBExplorer",
    version: "0.9.9-beta",
  },
  {
    name: "Caesium Image Compressor",
    appId: "SaeraSoft.CaesiumImageCompressor",
    version: "2.6.0",
  },
  {
    name: "CaesiumPH",
    appId: "SaeraSoft.CaesiumPH",
    version: "0.9.5",
  },
  {
    name: "RegAlyzer",
    appId: "SaferNetworking.RegAlyzer.1",
    version: "1.6.2.16",
  },
  {
    name: "Spybot Anti-Beacon",
    appId: "SaferNetworking.SpybotAntiBeacon",
    version: "3.9",
  },
  {
    name: "Portmaster",
    appId: "Safing.Portmaster",
    version: "1.6.5",
  },
  {
    name: "Portmaster",
    appId: "SafingICSTechnologiesGmbH.Portmasâ€¦",
    version: "1.0.13.0",
  },
  {
    name: "OpenStore",
    appId: "SagMeinenNamen.OpenStoreInstaller",
    version: "1.0.0.0",
  },
  {
    name: "Typing Test",
    appId: "SagMeinenNamen.TypingTest",
    version: "1.0.0.0",
  },
  {
    name: "eChess",
    appId: "SagMeinenNamen.eChess",
    version: "1.8",
  },
  {
    name: "Lector",
    appId: "SagarGurtu.Lector",
    version: "1.1.0",
  },
  {
    name: "SageMath",
    appId: "SageMath.SageMath",
    version: "9.3",
  },
  {
    name: "sing-box",
    appId: "SagerNet.sing-box",
    version: "1.9.6",
  },
  {
    name: "Ten Hands",
    appId: "SaiSandeepVaddi.TenHands",
    version: "2.10.3",
  },
  {
    name: "Sailcut CAD",
    appId: "Sailcut.SailcutCAD",
    version: "1.3.902",
  },
  {
    name: "Battle Painters",
    appId: "SaitoGames.BattlePainters",
    version: "2.2.0",
  },
  {
    name: "Hopmon",
    appId: "SaitoGames.Hopmon",
    version: "2",
  },
  {
    name: "Mage Bros",
    appId: "SaitoGames.MageBros",
    version: "2",
  },
  {
    name: "PetWings",
    appId: "SaitoGames.PetWings",
    version: "1.3.0",
  },
  {
    name: "Troy 2000",
    appId: "SaitoGames.Troy2000",
    version: "1.3.0",
  },
  {
    name: "Salad",
    appId: "SaladTechnologies.Salad",
    version: "1.6.4",
  },
  {
    name: "sfdx-cli",
    appId: "Salesforce.sfdx-cli",
    version: "7.209.6",
  },
  {
    name: "Salt Minion",
    appId: "SaltStack.SaltMinion",
    version: "3007.1",
  },
  {
    name: "WinCompose",
    appId: "SamHocevar.WinCompose",
    version: "0.9.11",
  },
  {
    name: "San Andreas Multiplayer",
    appId: "SampTeam.samp",
    version: "0.3.7-r5",
  },
  {
    name: "Samsung AllShare",
    appId: "Samsung.AllShare",
    version: "2.1.0.12031_10",
  },
  {
    name: "Samsung DeX",
    appId: "Samsung.DeX",
    version: "2.4.1.22",
  },
  {
    name: "Easy Connection to Screen",
    appId: "Samsung.EasyConnectionToScreen",
    version: "5.4.2",
  },
  {
    name: "Easy Migration",
    appId: "Samsung.EasyMigration",
    version: "1",
  },
  {
    name: "GalaxyBudsManager",
    appId: "Samsung.GalaxyBudsManager",
    version: "2.1.220907.51",
  },
  {
    name: "Smart Switch",
    appId: "Samsung.SmartSwitch",
    version: "4.3.23123.1",
  },
  {
    name: "Smart View",
    appId: "Samsung.SmartView",
    version: "1.0.0.0",
  },
  {
    name: "Touch Logon",
    appId: "Samsung.TouchLogon",
    version: "2.0.0",
  },
  {
    name: "Samsung Q1 Windows Vista Manual",
    appId: "Samsung.UserManual.Q1-WinVista",
    version: "1.1",
  },
  {
    name: "Samsung Q1 Windows XP User Manâ€¦",
    appId: "Samsung.UserManual.Q1-WinXP",
    version: "2",
  },
  {
    name: "WatchFaceStudio",
    appId: "Samsung.WatchFaceStudio",
    version: "1.6.10",
  },
  {
    name: "Brity Meeting",
    appId: "SamsungSDS.BrityMeeting",
    version: "2.7.24.05281",
  },
  {
    name: "Brity Messenger",
    appId: "SamsungSDS.BrityMessenger",
    version: "2.1.39.36",
  },
  {
    name: "Google Play Music Desktop Playâ€¦",
    appId: "SamuelAttard.GooglePlayMusicDesktâ€¦",
    version: "4.7.1",
  },
  {
    name: "Nintendo Switch Online",
    appId: "SamuelElliott.NintendoSwitchOnline",
    version: "1.6.1",
  },
  {
    name: "VirusTotal Uploader",
    appId: "SamuelTulach.VirusTotalUploader",
    version: "0.1.9",
  },
  {
    name: "Remote LAN Control",
    appId: "SamyGO.RemoteLANControl",
    version: "0.8",
  },
  {
    name: "SammyWidgets",
    appId: "SamyGO.SammyWidgets",
    version: "1.1",
  },
  {
    name: "SamyGO Shell Enabler",
    appId: "SamyGO.ShellEnable",
    version: "0.1.1",
  },
  {
    name: "Signal Checker for DVB-T",
    appId: "SamyGO.SignalChecker",
    version: "0.3",
  },
  {
    name: "Thief",
    appId: "SanJin.thief",
    version: "4.0.0",
  },
  {
    name: "Nora",
    appId: "Sandakan.Nora",
    version: "3.0.0",
  },
  {
    name: "Sandboxie",
    appId: "Sandboxie.Classic",
    version: "5.69.9",
  },
  {
    name: "Sandboxie-Plus",
    appId: "Sandboxie.Plus",
    version: "1.14.9",
  },
  {
    name: "gImageReader",
    appId: "SandroMani.gImageReader",
    version: "3.4.2",
  },
  {
    name: "mbcord",
    appId: "SandwichFox.mbcord",
    version: "3.0.7",
  },
  {
    name: "DYMO Connect",
    appId: "SanfordLP.DYMOConnect",
    version: "1.4.6.37",
  },
  {
    name: "DYMO Label",
    appId: "SanfordLP.DYMOLabel",
    version: "8.7.4",
  },
  {
    name: "Zulu",
    appId: "Sangoma.Zulu",
    version: "3.5.2",
  },
  {
    name: "Audacium",
    appId: "SartoxOnlyGNU.Audacium",
    version: "1.0.0",
  },
  {
    name: "SatDump",
    appId: "SatDump.SatDump",
    version: "1.2.0",
  },
  {
    name: "Satisfactory Mod Manager",
    appId: "SatisfactoryModding.SatisfactoryMâ€¦",
    version: "2.9.3",
  },
  {
    name: "Trezor Bridge",
    appId: "SatoshiLabs.TrezorBridge",
    version: "2.0.27",
  },
  {
    name: "Trezor Suite",
    appId: "SatoshiLabs.trezor-suite",
    version: "24.9.2",
  },
  {
    name: "GpgFrontend",
    appId: "Saturneric.GpgFrontend",
    version: "2.1.3",
  },
  {
    name: "SauceConnect",
    appId: "SauceLabs.SauceConnect",
    version: "5.2.0",
  },
  {
    name: "forwarder",
    appId: "SauceLabs.forwarder",
    version: "1.3.2",
  },
  {
    name: "Cube 2: Sauerbraten",
    appId: "Sauerbraten.Cube2-Sauerbraten",
    version: "2020_12_21",
  },
  {
    name: "Cydia Impactor",
    appId: "Saurik.CydiaImpactor",
    version: "0.9.56",
  },
  {
    name: "TurboTop",
    appId: "SavardSoftware.TurboTop",
    version: "2.8.0.21",
  },
  {
    name: "Ginger Chrome",
    appId: "Saxo_Broko.GingerChrome",
    version: "93.0.4529.0",
  },
  {
    name: "Official app for https://saxobâ€¦",
    appId: "Saxo_Broko.Officialapp",
    version: "2.0.1",
  },
  {
    name: "ffftp",
    appId: "Sayuri.FFFTP",
    version: "5.8.0.0",
  },
  {
    name: "Scala Programming Language Disâ€¦",
    appId: "Scala.Scala.2",
    version: "2.13.8.400",
  },
  {
    name: "Outlook4Gmail",
    appId: "ScandLtd.Outlook4Gmail",
    version: "5.5.0",
  },
  {
    name: "WinTin++",
    appId: "Scandum.WinTin++",
    version: "2.02.31",
  },
  {
    name: "SCANOSS SBOM Workbench",
    appId: "Scanoss.SBOM-Workbench",
    version: "1.12.4",
  },
  {
    name: "Lhaplus",
    appId: "Schezo.Lhaplus",
    version: "1.7.4.0",
  },
  {
    name: "SchildiChat",
    appId: "SchildiChat.SchildiChat",
    version: "1.11.36-sc.3",
  },
  {
    name: "Tonbrett",
    appId: "Schlaubi.Tonbrett",
    version: "1.22.3",
  },
  {
    name: "Fast Node Manager",
    appId: "Schniz.fnm",
    version: "1.37.1",
  },
  {
    name: "PyMOL",
    appId: "Schrodinger.Pymol",
    version: "2.5.5",
  },
  {
    name: "SystemLoadTracker",
    appId: "Schuischta.SystemLoadTracker",
    version: "1.2",
  },
  {
    name: "scilab",
    appId: "Scilab.Scilab",
    version: "2024.0.0",
  },
  {
    name: "Sc1",
    appId: "Scintilla.Sc1",
    version: "5.3.6",
  },
  {
    name: "Beyond Compare 4",
    appId: "ScooterSoftware.BeyondCompare4",
    version: "4.4.7.28397",
  },
  {
    name: "Beyond Compare 5",
    appId: "ScooterSoftware.BeyondCompare5",
    version: "5.0.2.30045",
  },
  {
    name: "Star Trek Fleet Command",
    appId: "Scopely.StarTrekFleetCommand",
    version: "97742",
  },
  {
    name: "sco",
    appId: "Scorpio.sco",
    version: "2.3.10",
  },
  {
    name: "scov",
    appId: "Scorpio.scov",
    version: "1.0.1",
  },
  {
    name: "stools",
    appId: "Scorpio.stools",
    version: "1.0.1",
  },
  {
    name: "Pat",
    appId: "ScottMcKendry.Pat",
    version: "0.2.0",
  },
  {
    name: "Scratch For Discord",
    appId: "ScratchForDiscord.ScratchForDiscoâ€¦",
    version: "2.0.1",
  },
  {
    name: "Scratch For Discord",
    appId: "ScratchForDiscord.ScratchForDiscoâ€¦",
    version: "2.0.0-dev.13",
  },
  {
    name: "ScreenCloud Player",
    appId: "ScreenCloud.ScreenCloudPlayer",
    version: "3.6.1",
  },
  {
    name: "Scribus",
    appId: "Scribus.Scribus",
    version: "1.6.2",
  },
  {
    name: "ScummVM",
    appId: "ScummVM.ScummVM",
    version: "2.8.1",
  },
  {
    name: "AudioAnalyser",
    appId: "SeDuTec.AudioAnalyser",
    version: "2017.03",
  },
  {
    name: "Multisine",
    appId: "SeDuTec.Multisine",
    version: "1.74",
  },
  {
    name: "SeaDrive",
    appId: "Seafile.Seadrive",
    version: "3.0.10",
  },
  {
    name: "Seafile",
    appId: "Seafile.Seafile",
    version: "9.0.7",
  },
  {
    name: "SeaTools",
    appId: "Seagate.SeaTools",
    version: "5.0.137",
  },
  {
    name: "SeaTools for Windows",
    appId: "Seagate.SeaTools.Legacy",
    version: "1.4.0.7",
  },
  {
    name: "Search Deflector",
    appId: "SearchDeflector.SearchDeflector",
    version: "1.3.2",
  },
  {
    name: "RapidCRC",
    appId: "SebastianEwert.RapidCRC",
    version: "0.6.1",
  },
  {
    name: "Tough Cookies",
    appId: "SebastianFelling.ToughCookies",
    version: "0.45.0",
  },
  {
    name: "Boxcryptor",
    appId: "SecombaGmbH.Boxcryptor",
    version: "2.55.2774",
  },
  {
    name: "SecretChat",
    appId: "Secret.Chat",
    version: "2.7",
  },
  {
    name: "Secrets OPerationS",
    appId: "SecretsOPerationS.SOPS",
    version: "3.9.0",
  },
  {
    name: "Securepoint SSL VPN",
    appId: "SecurepointGmbH.SecurepointSSLVPN",
    version: "2.0.42",
  },
  {
    name: "RansomSnare",
    appId: "SecuritySnares.RansomSnare",
    version: "1.2.9.412",
  },
  {
    name: "Theseus2000",
    appId: "Seedy-Threepio.Theseus2000",
    version: "3.6",
  },
  {
    name: "Seelen UI",
    appId: "Seelen.SeelenUI",
    version: "1.10.6.0",
  },
  {
    name: "è¿œç¨‹äº’åŠ¨åŠ©æ‰‹",
    appId: "Seewo.AirTeach",
    version: "2.0.15.16991",
  },
  {
    name: "å‰ªè¾‘å¸ˆ",
    appId: "Seewo.EasiAction",
    version: "1.7.0.792",
  },
  {
    name: "çŸ¥è¯†èƒ¶å›Š",
    appId: "Seewo.EasiCapsule",
    version: "2.8.3.9883",
  },
  {
    name: "ç­çº§ä¼˜åŒ–å¤§å¸ˆ",
    appId: "Seewo.EasiCare",
    version: "2.1.0.1428",
  },
  {
    name: "å¸Œæ²ƒæ˜“è¯¾å ‚",
    appId: "Seewo.EasiClass",
    version: "1.0.0.2",
  },
  {
    name: "å¸Œæ²ƒå¯¼æ’­åŠ©æ‰‹",
    appId: "Seewo.EasiDirector",
    version: "1.0.12.271",
  },
  {
    name: "å¸Œæ²ƒç™½æ¿ 5",
    appId: "Seewo.EasiNote",
    version: "5.2.4.8298",
  },
  {
    name: "å¸Œæ²ƒè½»ç™½æ¿",
    appId: "Seewo.EasiNote3C",
    version: "1.0.0.617",
  },
  {
    name: "åé¦ˆå™¨åŠ©æ‰‹",
    appId: "Seewo.EasiQuizManager",
    version: "1.0.0.278",
  },
  {
    name: "è½»å½•æ’­",
    appId: "Seewo.EasiRecorder",
    version: "1.0.2.540",
  },
  {
    name: "PPTå°å·¥å…·",
    appId: "Seewo.PPTService",
    version: "1.0.0.795",
  },
  {
    name: "seewo browser",
    appId: "Seewo.SeewoBrowser",
    version: "2.0.10.3573",
  },
  {
    name: "å¸Œæ²ƒå¿«ä¼",
    appId: "Seewo.SeewoFileTransfer",
    version: "2.0.10",
  },
  {
    name: "å¸Œæ²ƒé›†æŽ§",
    appId: "Seewo.SeewoHugo",
    version: "1.4.5.57",
  },
  {
    name: "å¸Œæ²ƒç‰©è”æ ¡å›­å¹³å°",
    appId: "Seewo.SeewoIotManage",
    version: "1.0.0.8",
  },
  {
    name: "å¸Œæ²ƒè¯¾å ‚åŠ©æ‰‹",
    appId: "Seewo.SeewoIwbAssistant",
    version: "0.0.3.1162",
  },
  {
    name: "å¸Œæ²ƒå“è¯¾",
    appId: "Seewo.SeewoPincoGroup",
    version: "1.2.38.1673",
  },
  {
    name: "å¸Œæ²ƒæ™ºèƒ½ç¬”åŠ©æ‰‹",
    appId: "Seewo.SmartpenService",
    version: "2.0.1.749",
  },
  {
    name: "SEGGER Embedded Studio for ARM",
    appId: "Segger.EmbeddedStudioARM",
    version: "6.32b",
  },
  {
    name: "Sejda PDF Desktop",
    appId: "Sejda.PDFDesktop",
    version: "7.5.3",
  },
  {
    name: "Hybrid",
    appId: "Selur.Hybrid",
    version: "0.2.7",
  },
  {
    name: "Viewer Software USB/RS485",
    appId: "Sensirion.Viewer",
    version: "2.91.0.0",
  },
  {
    name: "Sentinel CLI",
    appId: "Sentinel.SentinelCLI",
    version: "0.3.2",
  },
  {
    name: "sentry-cli",
    appId: "Sentry.sentry-cli",
    version: "2.36.6",
  },
  {
    name: "Intuiter",
    appId: "Seonglae.Intuiter",
    version: "0.8.2",
  },
  {
    name: "Screencast",
    appId: "Seonglae.Screencast",
    version: "1.0.3",
  },
  {
    name: "The Sage Dictionary",
    appId: "SequencePublishing.TheSageDictionâ€¦",
    version: "7.60.2814",
  },
  {
    name: "Registry Finder",
    appId: "SergeyFilippov.RegistryFinder",
    version: "2.59",
  },
  {
    name: "Caramba Switcher",
    appId: "SergeyMoskalev.CarambaSwitcher",
    version: "2023.08.15",
  },
  {
    name: "TagScanner",
    appId: "SergeySerkov.TagScanner",
    version: "6.1.13",
  },
  {
    name: "Utilso",
    appId: "SerhiiSlieptsov.Utilso",
    version: "4.4.0",
  },
  {
    name: "Serial Lab",
    appId: "SerialLab.SerialLab",
    version: "1.0.0",
  },
  {
    name: "Discord Media Loader",
    appId: "Serraniel.DiscordMediaLoader",
    version: "1.5.3.0",
  },
  {
    name: "Elevate UC",
    appId: "ServerData.Elevate",
    version: "2.16.150.0",
  },
  {
    name: "Serverless Framework",
    appId: "Serverless.Serverless",
    version: "3.39.0",
  },
  {
    name: "Chatterino7",
    appId: "SevenTV.Chatterino7",
    version: "7.4.0",
  },
  {
    name: "Transcribe!",
    appId: "SeventhString.Transcribe",
    version: "9.41",
  },
  {
    name: "SpotiFlyer",
    appId: "Shabinder.SpotiFlyer",
    version: "3.6.3",
  },
  {
    name: "Shadow",
    appId: "Shadow.Shadow",
    version: "8.0.10059",
  },
  {
    name: "Shapr3D",
    appId: "Shapr3D.Shapr3D",
    version: "5.81.2757.0",
  },
  {
    name: "ShareFile For Windows",
    appId: "ShareFile.ShareFileForWindows",
    version: "24.5.3.0",
  },
  {
    name: "ShareX",
    appId: "ShareX.ShareX",
    version: "16.1.0",
  },
  {
    name: "Clownfish Voice Changer",
    appId: "SharkLabs.ClownfishVoiceChanger",
    version: "1.68.0.0",
  },
  {
    name: "vJoy Device Driver",
    appId: "ShaulEizikovich.vJoyDeviceDriver",
    version: "2.1.9.1",
  },
  {
    name: "punktf",
    appId: "Shemnei.punktf",
    version: "3.1.1",
  },
  {
    name: "BitBoxApp",
    appId: "ShiftCryptoAG.BitBoxApp",
    version: "4.43.0.0",
  },
  {
    name: "NIKKE",
    appId: "ShiftUp.NIKKE",
    version: "0.0.6.212",
  },
  {
    name: "OpenSSL 3.3.1",
    appId: "ShiningLight.OpenSSL.Dev",
    version: "3.3.2",
  },
  {
    name: "OpenSSL Light 3.3.1",
    appId: "ShiningLight.OpenSSL.Light",
    version: "3.3.2",
  },
  {
    name: "SPlayer",
    appId: "Shooter.SPlayer",
    version: "3.7.2437",
  },
  {
    name: "SPlayer",
    appId: "Shooter.SPlayerX",
    version: "4.9.4",
  },
  {
    name: "Oxipng",
    appId: "Shssoichiro.Oxipng",
    version: "9.1.2",
  },
  {
    name: "ShurePlus MOTIV",
    appId: "Shure.ShurePlusMOTIV",
    version: "1.3.1-298",
  },
  {
    name: "Shure Update Utility",
    appId: "Shure.UpdateUtility",
    version: "2.8.1",
  },
  {
    name: "Wireless Workbench",
    appId: "Shure.WirelessWorkbench",
    version: "6.15.3",
  },
  {
    name: "Wireless Workbench 7",
    appId: "Shure.WirelessWorkbench.7",
    version: "7.0.0",
  },
  {
    name: "BUtil",
    appId: "SiarheiKuchuk.BUtil",
    version: "2024.09.29",
  },
  {
    name: "GoodSync",
    appId: "SiberSystems.GoodSync",
    version: "12.7.6.6",
  },
  {
    name: "RoboForm",
    appId: "SiberSystems.RoboForm",
    version: "9.6.2.2",
  },
  {
    name: "SideQuest",
    appId: "SideQuestVR.SideQuest",
    version: "0.10.42",
  },
  {
    name: "SideQuest",
    appId: "SideQuestVR.SideQuestEasyInstaller",
    version: "0.0.12",
  },
  {
    name: "talosctl",
    appId: "Sidero.talosctl",
    version: "1.8.0",
  },
  {
    name: "PageEdit",
    appId: "Sigil-Ebook.PageEdit",
    version: "2.3.1",
  },
  {
    name: "Sigil",
    appId: "Sigil-Ebook.Sigil",
    version: "2.3.1",
  },
  {
    name: "PulseView",
    appId: "Sigrok.PulseView",
    version: "0.4.2",
  },
  {
    name: "PulseView (Nightly)",
    appId: "Sigrok.PulseView.Nightly",
    version: "nightly",
  },
  {
    name: "cosign",
    appId: "Sigstore.Cosign",
    version: "2.4.0",
  },
  {
    name: "HDHomeRun",
    appId: "Silicondust.HDHomeRun",
    version: "1.0.40143.0",
  },
  {
    name: "HDHomeRun TECH",
    appId: "Silicondust.HDHomeRunTECH",
    version: "1.0.37605.0",
  },
  {
    name: "Velocity",
    appId: "SilverlakeSoftware.Velocity",
    version: "1.2.1.20436",
  },
  {
    name: "SimAir.io-Client",
    appId: "SimAirIo.SimAirClient",
    version: "1.0.0",
  },
  {
    name: "Simba ODBC Driver for Google Bâ€¦",
    appId: "SimbaTechnologies.SimbaODBCDriverâ€¦",
    version: "3.0.0.1001",
  },
  {
    name: "Simple Sticky Notes",
    appId: "SimnetLtd.SimpleStickyNotes",
    version: "6.5",
  },
  {
    name: "Citycraft Launcher",
    appId: "Simon511000.CitycraftLauncher",
    version: "1.9.9",
  },
  {
    name: "SDR-Radio.com (V3)",
    appId: "SimonG4ELI.SDR-Radio",
    version: "3.3",
  },
  {
    name: "Simon\u0027s World Map",
    appId: "SimonG4ELI.WorldMap",
    version: "1.4.0",
  },
  {
    name: "Programmer\u0027s Notepad",
    appId: "SimonSteele.ProgrammersNotepad",
    version: "2.4.2",
  },
  {
    name: "Simon Tatham\u0027s Portable Puzzleâ€¦",
    appId: "SimonTatham.Puzzles",
    version: "0.0.13994.0",
  },
  {
    name: "Simple-TextToSpeech",
    appId: "Simple.TextToSpeech",
    version: "1.1.4.0",
  },
  {
    name: "Electron Cash SLP",
    appId: "SimpleLedger.ElectronCashSLP",
    version: "3.6.6",
  },
  {
    name: "SimpleTex",
    appId: "SimpleTex.SimpleTex",
    version: "0.2.7",
  },
  {
    name: "SimpleX Chat",
    appId: "SimpleX.SimpleX-Chat",
    version: "v5.5.6",
  },
  {
    name: "SimulIDE",
    appId: "SimulIDE.SimulIDE",
    version: "1.0.0",
  },
  {
    name: "Enpass",
    appId: "Sinew.Enpass",
    version: "6.11.3.1771",
  },
  {
    name: "CCEnhancer",
    appId: "SingularLabs.CCEnhancer",
    version: "4.5.7",
  },
  {
    name: "Ddangyo Order",
    appId: "SinhanBank.DdangyoOrder",
    version: "2.3.1",
  },
  {
    name: "KeyBridge",
    appId: "Skaarhoj.KeyBridge",
    version: "0.1.0",
  },
  {
    name: "Skiff",
    appId: "Skiff.Skiff",
    version: "1.0.9",
  },
  {
    name: "Lightshot",
    appId: "Skillbrains.Lightshot",
    version: "5.5.0.7",
  },
  {
    name: "mineSquid",
    appId: "Skrepysh.mineSquid",
    version: "3.3",
  },
  {
    name: "Sky Go",
    appId: "Sky.SkyGo",
    version: "24.1.3.0",
  },
  {
    name: "Slack",
    appId: "SlackTechnologies.Slack",
    version: "4.40.128",
  },
  {
    name: "Slack Beta",
    appId: "SlackTechnologies.Slack.Beta",
    version: "4.26.0-beta2",
  },
  {
    name: "TimeSpent",
    appId: "SlackedLime.TimeSpent",
    version: "1.2",
  },
  {
    name: "Inssist",
    appId: "SlashedIo.Inssist",
    version: "16.1.0",
  },
  {
    name: "SleepTimer Ultimate",
    appId: "SleepTimer.SleepTimer.Ultimate",
    version: "2.5.1",
  },
  {
    name: "Autopsy",
    appId: "SleuthKit.Autopsy",
    version: "4.21.0",
  },
  {
    name: "Slik Subversion",
    appId: "Slik.Subversion",
    version: "1.14.2001",
  },
  {
    name: "Slite",
    appId: "Slite.Slite",
    version: "1.2.24",
  },
  {
    name: "Stevedore",
    appId: "Slonopotamus.Stevedore",
    version: "2.3.0",
  },
  {
    name: "step",
    appId: "Smallstep.step",
    version: "0.27.4",
  },
  {
    name: "step-ca",
    appId: "Smallstep.step-ca",
    version: "0.27.4",
  },
  {
    name: "SoapUI",
    appId: "SmartBear.SoapUI",
    version: "5.7.2",
  },
  {
    name: "Smart Game Booster",
    appId: "SmartGameBooster.SmartGameBooster",
    version: "5.2.3",
  },
  {
    name: "Heads-Tails",
    appId: "SmartHoldemDAPPs.heads-tails",
    version: "1.0.14",
  },
  {
    name: "IsoBuster",
    appId: "SmartProjects.IsoBuster",
    version: "5.4.1.00",
  },
  {
    name: "SmartFTP Client",
    appId: "SmartSoft.SmartFTP",
    version: "10.0.3241.0",
  },
  {
    name: "TextExpander",
    appId: "Smile.TextExpander",
    version: "254.7.2.16",
  },
  {
    name: "Stove",
    appId: "Smilegate.Stove",
    version: "2.0.0.1003",
  },
  {
    name: "Pokemon Showdown",
    appId: "Smogon.PokemonShowdown",
    version: "0.3.1",
  },
  {
    name: "FdsPp",
    appId: "SmokeCloud.FdsPp",
    version: "0.3.0",
  },
  {
    name: "Fifo",
    appId: "SnailDOS.Fifo",
    version: "1.3.1",
  },
  {
    name: "SnailFM",
    appId: "SnailDOS.SnailFM",
    version: "2.1.8",
  },
  {
    name: "SnailKM",
    appId: "SnailDOS.SnailKM",
    version: "1.2.6",
  },
  {
    name: "StreamBop",
    appId: "SnailDOS.StreamBop",
    version: "1.6.1",
  },
  {
    name: "Snap.Net",
    appId: "SnapNet.SnapNet",
    version: "0.28.0.0",
  },
  {
    name: "Snapmaker Luban",
    appId: "SnapmakerDevTeam.SnapmakerLuban",
    version: "4.4.0",
  },
  {
    name: "Snaz",
    appId: "Snaz.Snaz",
    version: "1.12.7.0",
  },
  {
    name: "AlignCli",
    appId: "Snijderlab.AlignCli",
    version: "0.4.0",
  },
  {
    name: "Annotator",
    appId: "Snijderlab.Annotator",
    version: "0.2.2",
  },
  {
    name: "Sniptool",
    appId: "Sniptool.Sniptool",
    version: "2.1",
  },
  {
    name: "Snoop",
    appId: "SnoopWpf.Snoop",
    version: "5.1.0",
  },
  {
    name: "Snowflake ODBC Driver",
    appId: "Snowflake.OdbcDriver",
    version: "3.4.1",
  },
  {
    name: "Snyk",
    appId: "Snyk.Snyk",
    version: "1.1035.0",
  },
  {
    name: "Pi Network",
    appId: "SocialchainInc.PiNetwork",
    version: "0.4.5",
  },
  {
    name: "Free Download Manager",
    appId: "SoftDeluxe.FreeDownloadManager",
    version: "6.24.2.5857",
  },
  {
    name: "OrcaSlicer",
    appId: "SoftFever.OrcaSlicer",
    version: "2.1.1",
  },
  {
    name: "FlexiPDF 2022",
    appId: "SoftMaker.FlexiPDF.2022",
    version: "3.07",
  },
  {
    name: "SoftMaker FreeOffice 2021",
    appId: "SoftMaker.FreeOffice.2021",
    version: "1.0.5340",
  },
  {
    name: "SoftMaker FreeOffice 2024",
    appId: "SoftMaker.FreeOffice.2024",
    version: "1.0.6090",
  },
  {
    name: "FreePDF",
    appId: "SoftMaker.FreePDF",
    version: "2.1",
  },
  {
    name: "FreePDF 2022",
    appId: "SoftMaker.FreePDF.2022",
    version: "3.0.8",
  },
  {
    name: "SoftMaker Office 2021",
    appId: "SoftMaker.Office.2021",
    version: "21.0.5344",
  },
  {
    name: "SoftMaker Office 2024",
    appId: "SoftMaker.Office.2024",
    version: "24.0.6094",
  },
  {
    name: "SoftMaker Office NX",
    appId: "SoftMaker.Office.NX",
    version: "24.0.6092",
  },
  {
    name: "SoftPerfect Network Scanner",
    appId: "SoftPerfect.SoftPerfectNetworkScaâ€¦",
    version: "8.2.2",
  },
  {
    name: "Softerra LDAP Browser",
    appId: "Softerra.LDAPBrowser",
    version: "4.5.19808.0",
  },
  {
    name: "Web Signer",
    appId: "SoftplanSistemas.WebSigner",
    version: "2.11.1.0",
  },
  {
    name: "Tag\u0026Rename",
    appId: "SoftpointerInc.Tag\u0026Rename",
    version: "3.9.15",
  },
  {
    name: "QEMU",
    appId: "SoftwareFreedomConservancy.QEMU",
    version: "9.1.0",
  },
  {
    name: "QEMU guest agent",
    appId: "SoftwareFreedomConservancy.QEMUGuâ€¦",
    version: "107.0.1",
  },
  {
    name: "Q-Dir",
    appId: "SoftwareOK.Q-Dir",
    version: "11.44",
  },
  {
    name: "WinScan2PDF",
    appId: "SoftwareOK.WinScan2PDF",
    version: "8.68",
  },
  {
    name: "æœç‹—è¾“å…¥æ³•",
    appId: "Sogou.SogouInput",
    version: "14.9.0.9966",
  },
  {
    name: "æœç‹—è¾“å…¥æ³•çš®è‚¤ç¼–è¾‘å™¨",
    appId: "Sogou.SogouInputSkinEditor",
    version: "6.6",
  },
  {
    name: "æœç‹—äº”ç¬”è¾“å…¥æ³•",
    appId: "Sogou.SogouWBInput",
    version: "5.5.0.2585",
  },
  {
    name: "æœç‹å½±éŸ³",
    appId: "Sohu.SHPlayer",
    version: "7.1.18.0",
  },
  {
    name: "Kiwi Syslog Server Free",
    appId: "SolarWinds.KiwiSyslogServer",
    version: "9.8.3",
  },
  {
    name: "Starborne",
    appId: "SolidClouds.Starborne",
    version: "1.3.153",
  },
  {
    name: "eDrawings",
    appId: "SolidWorks.eDrawings",
    version: "32.40.0022",
  },
  {
    name: "SolidigmTM Storage Tool",
    appId: "Solidigm.StorageTool",
    version: "1.15",
  },
  {
    name: "Erdtree",
    appId: "Solidiquis.Erdtree",
    version: "3.1.2",
  },
  {
    name: "SolveSpace",
    appId: "SolveSpace.SolveSpace",
    version: "3.1",
  },
  {
    name: "WinThruster",
    appId: "Solvusoft.WinThruster",
    version: "7.2.0.0",
  },
  {
    name: "ElevenClock",
    appId: "SomePythonThings.ElevenClock",
    version: "4.4.1.1",
  },
  {
    name: "SomePythonThings Zip Manager",
    appId: "SomePythonThings.ZipManager",
    version: "4.3",
  },
  {
    name: "WAIUA",
    appId: "Soneliem.WAIUA",
    version: "2.0.1.0",
  },
  {
    name: "Sonic Pi",
    appId: "SonicPi.SonicPi",
    version: "4.3.0",
  },
  {
    name: "Sonic Robo Blast 2",
    appId: "SonicTeamJr.SonicRoboBlast2",
    version: "2.2.13",
  },
  {
    name: "Sonic Robo Blast 2 Kart",
    appId: "SonicTeamJr.SonicRoboBlast2Kart",
    version: "1.6",
  },
  {
    name: "Sonic Visualiser",
    appId: "SonicVisualiser.SonicVisualiser",
    version: "4.5",
  },
  {
    name: "Global VPN Client",
    appId: "SonicWALL.GlobalVPN",
    version: "4.10.4",
  },
  {
    name: "SonicWall NetExtender",
    appId: "SonicWALL.NetExtender",
    version: "10.2.341",
  },
  {
    name: "Download Manager",
    appId: "Soniczac7.DownloadManager",
    version: "5.1.0.0",
  },
  {
    name: "Sonos S2 Controller",
    appId: "Sonos.Controller",
    version: "79.1.53290",
  },
  {
    name: "Sonos Controller",
    appId: "Sonos.S1Controller",
    version: "57.9.23010",
  },
  {
    name: "SonoBus",
    appId: "Sonosaurus.SonoBus",
    version: "1.7.2",
  },
  {
    name: "ArmA3Sync",
    appId: "SonsofExiled.Arma3Sync",
    version: "1.7.107",
  },
  {
    name: "Music Center for PC",
    appId: "Sony.MusicCenter",
    version: "2.7.1.04161",
  },
  {
    name: "Sony Xperia Companion",
    appId: "Sony.XperiaCompanion",
    version: "24.10.1.20240â€¦",
  },
  {
    name: "Unsplash Wallpapers",
    appId: "SoroushChehresa.UnsplashWallpapers",
    version: "1.3.0",
  },
  {
    name: "SoulseekQt",
    appId: "Soulseek.SoulseekQt",
    version: "2024.2.1",
  },
  {
    name: "Soundly",
    appId: "Soundly.Soundly",
    version: "2024.05.0.132",
  },
  {
    name: "Soup Build",
    appId: "SoupBuild.Soup",
    version: "0.38.1",
  },
  {
    name: "Hack Fonts",
    appId: "SourceFoundry.HackFonts",
    version: "1.6.0",
  },
  {
    name: "SourceGear DiffMerge",
    appId: "SourceGear.DiffMerge",
    version: "4.2.0.697",
  },
  {
    name: "Sovranti",
    appId: "Sovranti.Sovranti",
    version: "1.6.1b1046",
  },
  {
    name: "Spacemesh",
    appId: "Spacemesh.Spacemesh",
    version: "1.6.5",
  },
  {
    name: "AutoFirma",
    appId: "SpanishGovernment.Autofirma",
    version: "1.8.3",
  },
  {
    name: "Instalador Tarjetas DNIe",
    appId: "SpanishGovernment.InstaladorDNIe",
    version: "1.1.0",
  },
  {
    name: "Viscosity",
    appId: "SparkLabs.Viscosity",
    version: "1.11.3.1828",
  },
  {
    name: "OpenVPN Configuration Generator",
    appId: "SparkLabs.openvpn-configuration-gâ€¦",
    version: "1.0.9.1009",
  },
  {
    name: "SparkleShare",
    appId: "SparkleShare.SparkleShare",
    version: "1.5.0",
  },
  {
    name: "Relative",
    appId: "SparksCommunications.Relative",
    version: "0.95",
  },
  {
    name: "Ray",
    appId: "Spatie.Ray",
    version: "2.5.1",
  },
  {
    name: "portal",
    appId: "SpatiumPortae.portal",
    version: "1.2.3",
  },
  {
    name: "Special K",
    appId: "SpecialK.SpecialK",
    version: "24.9.26",
  },
  {
    name: "Pingt",
    appId: "Speed-Soft.Pingt",
    version: "1.0.0.17",
  },
  {
    name: "Time-Sync Client",
    appId: "Speed-Soft.Time-Sync.Client",
    version: "1.8.9.0",
  },
  {
    name: "Time-Sync Server",
    appId: "Speed-Soft.Time-Sync.Server",
    version: "1.8.9.0",
  },
  {
    name: "SpeedCrunch",
    appId: "SpeedCrunch.SpeedCrunch",
    version: "0.12",
  },
  {
    name: "Speek",
    appId: "Speek.Speek",
    version: "1.7.0",
  },
  {
    name: "Chess",
    appId: "SpencerSoft.Chess",
    version: "1.3.0",
  },
  {
    name: "Spice webdavd",
    appId: "Spice.SpiceWebDAVd",
    version: "2.4.0",
  },
  {
    name: "Spice agent",
    appId: "Spice.VDAgent",
    version: "0.10.0",
  },
  {
    name: "Instant Eyedropper",
    appId: "Spicebrains.Instant-Eyedropper",
    version: "2.0.1",
  },
  {
    name: "Spicetify",
    appId: "Spicetify.Spicetify",
    version: "2.38.4",
  },
  {
    name: "Dorion",
    appId: "SpikeHD.Dorion",
    version: "6.0.2",
  },
  {
    name: "swerve",
    appId: "SpikeHD.swerve",
    version: "1.2.0",
  },
  {
    name: "Splashtop SOS - On-Demand Remoâ€¦",
    appId: "Splashtop.SOS",
    version: "3.7.0.1",
  },
  {
    name: "Splashtop Business",
    appId: "Splashtop.SplashtopBusiness",
    version: "3.7.2.0",
  },
  {
    name: "Splashtop Personal",
    appId: "Splashtop.SplashtopPersonal",
    version: "3.6.600.0",
  },
  {
    name: "Splashtop Streamer",
    appId: "Splashtop.SplashtopStreamer",
    version: "3.7.2.0",
  },
  {
    name: "Splashtop Streamer Deployment",
    appId: "Splashtop.SplashtopStreamer.Deploâ€¦",
    version: "3.7.2.0",
  },
  {
    name: "Splashtop Streamer Deployment â€¦",
    appId: "Splashtop.SplashtopStreamer.Deploâ€¦",
    version: "3.7.2.0",
  },
  {
    name: "Splashtop Wired XDisplay Agent",
    appId: "Splashtop.SplashtopWiredXDisplay",
    version: "1.5.8.3",
  },
  {
    name: "pytigon",
    appId: "Splawik.pytigon",
    version: "0.230812",
  },
  {
    name: "SplitCam",
    appId: "SplitCam.SplitCam",
    version: "10.8.5",
  },
  {
    name: "ACS",
    appId: "Splunk.ACS",
    version: "2.14.0",
  },
  {
    name: "UniversalForwarder",
    appId: "Splunk.UniversalForwarder",
    version: "9.2.2",
  },
  {
    name: "Spotify",
    appId: "Spotify.Spotify",
    version: "1.2.47.366.g0â€¦",
  },
  {
    name: "AirPodsDesktop",
    appId: "SpriteOvO.AirPodsDesktop",
    version: "0.4.1",
  },
  {
    name: "SpyShelter",
    appId: "SpyShelter.SpyShelter",
    version: "15.2.0.781",
  },
  {
    name: "Spyder",
    appId: "Spyder.Spyder",
    version: "5.5.6",
  },
  {
    name: "Square Cloud CLI",
    appId: "SquareCloud.CLI",
    version: "1.2.0",
  },
  {
    name: "Tess",
    appId: "Squitch.Tess",
    version: "0.6.3",
  },
  {
    name: "Stacher",
    appId: "Stacher.youtube-dl",
    version: "6.0.28",
  },
  {
    name: "DNSControl",
    appId: "StackExchange.DNSControl",
    version: "4.11.0",
  },
  {
    name: "Stack",
    appId: "Stackers.Stack",
    version: "3.41.1",
  },
  {
    name: "Standard Notes",
    appId: "StandardNotes.StandardNotes",
    version: "3.195.1",
  },
  {
    name: "ProtÃ©gÃ©",
    appId: "Stanford.Protege",
    version: "5.6.4",
  },
  {
    name: "StarMoney 14 Deluxe",
    appId: "StarFinanz.StarMoney14Deluxe",
    version: "14",
  },
  {
    name: "Stardock Curtains",
    appId: "Stardock.Curtains",
    version: "1.19.1",
  },
  {
    name: "Stardock Fences 4",
    appId: "Stardock.Fences",
    version: "4.2.2.1",
  },
  {
    name: "Stardock Start10",
    appId: "Stardock.Start10",
    version: "1.9.8.0",
  },
  {
    name: "Stardock Start11",
    appId: "Stardock.Start11",
    version: "1.5.5.0",
  },
  {
    name: "STARFACE UCC Client",
    appId: "StarfaceGmbH.StarfaceUCC",
    version: "6.7.3319",
  },
  {
    name: "Starface UCC Beta",
    appId: "StarfaceGmbH.StarfaceUCC.Beta",
    version: "6.8.0.108",
  },
  {
    name: "Surrealist",
    appId: "StarlaneStudios.Surrealist",
    version: "1.11.6",
  },
  {
    name: "Screenbox",
    appId: "Starpine.Screenbox",
    version: "0.13.2.0",
  },
  {
    name: "starship",
    appId: "Starship.Starship",
    version: "1.20.1",
  },
  {
    name: "StartAllBack",
    appId: "StartIsBack.StartAllBack",
    version: "3.8.10",
  },
  {
    name: "StartIsBack++",
    appId: "StartIsBack.StartIsBack",
    version: "2.9.20",
  },
  {
    name: "Firework",
    appId: "Startpack.Firework",
    version: "2.39.13.-1",
  },
  {
    name: "Status-Desktop",
    appId: "Status.Status",
    version: "2.28.0",
  },
  {
    name: "Steam Token Dumper",
    appId: "SteamDatabase.SteamTokenDumper",
    version: "2024.07.18",
  },
  {
    name: "Steam ROM Manager",
    appId: "SteamGridDB.RomManager",
    version: "2.4.17",
  },
  {
    name: "DepotDownloader",
    appId: "SteamRE.DepotDownloader",
    version: "2.7.1",
  },
  {
    name: "ProtonClient",
    appId: "Steccas.ProtonClient",
    version: "1.2.3",
  },
  {
    name: "SteelSeries GG",
    appId: "SteelSeries.GG",
    version: "72.0.0",
  },
  {
    name: "SteelSeries Engine",
    appId: "SteelSeries.SteelSeriesEngine",
    version: "3.22.1",
  },
  {
    name: "GitHubReleaseNotes",
    appId: "StefHeyenrath.GitHubReleaseNotes",
    version: "1.0.10.1",
  },
  {
    name: "N.I.N.A. Nighttime Imaging \u0027N\u0027â€¦",
    appId: "StefanBerg.NINA",
    version: "3.0.0.9001",
  },
  {
    name: "Filius",
    appId: "StefanFreischlad.Filius",
    version: "2.6.1",
  },
  {
    name: "Franz",
    appId: "StefanMalzner.Franz",
    version: "5.10.0",
  },
  {
    name: "SuperF4",
    appId: "StefanSundin.Superf4",
    version: "1.4",
  },
  {
    name: "BowPad",
    appId: "StefansTools.BowPad",
    version: "2.8.2882",
  },
  {
    name: "SKTimeStamp",
    appId: "StefansTools.SKTimeStamp",
    version: "1.3.7",
  },
  {
    name: "grepWin",
    appId: "StefansTools.grepWin",
    version: "2.1.1378",
  },
  {
    name: "Stellar Extractor for Windows â€¦",
    appId: "StellarDataRecovery.StellarExtracâ€¦",
    version: "6.0.0.0",
  },
  {
    name: "Stellarium",
    appId: "Stellarium.Stellarium",
    version: "24.3",
  },
  {
    name: "DuckStation",
    appId: "Stenzek.DuckStation",
    version: "0.1.6280",
  },
  {
    name: "StepMania 5",
    appId: "StepMania.StepMania",
    version: "5.0.12",
  },
  {
    name: "gitui",
    appId: "StephanDilly.gitui",
    version: "0.26.3",
  },
  {
    name: "CHKCPU",
    appId: "Steunebrink.CHKCPU",
    version: "2.15",
  },
  {
    name: "Coffee",
    appId: "StevenCole.Coffee",
    version: "1.0.4",
  },
  {
    name: "Sigmira",
    appId: "StevenHarlow.Sigmira",
    version: "1r17",
  },
  {
    name: "Scid vs PC",
    appId: "Stevenaaus.ScidvsPC",
    version: "4.24",
  },
  {
    name: "Stockfish",
    appId: "Stockfish.Stockfish",
    version: "16.1",
  },
  {
    name: "Prism",
    appId: "Stoplight.Prism",
    version: "5.11.2",
  },
  {
    name: "Spectral",
    appId: "Stoplight.Spectral",
    version: "6.13.1",
  },
  {
    name: "Stoplight Studio",
    appId: "Stoplight.Studio",
    version: "2.10.0",
  },
  {
    name: "Uplink",
    appId: "Storj.Uplink",
    version: "1.96.6",
  },
  {
    name: "Strawberry Perl",
    appId: "StrawberryPerl.StrawberryPerl",
    version: "5.40.0.1",
  },
  {
    name: "Stream-Pi Client",
    appId: "Stream-Pi.Client",
    version: "1",
  },
  {
    name: "Stream-Pi Server",
    appId: "Stream-Pi.Server",
    version: "1",
  },
  {
    name: "Streamlabs Desktop",
    appId: "Streamlabs.Streamlabs",
    version: "1.16.4",
  },
  {
    name: "StreamlabsOBS",
    appId: "Streamlabs.StreamlabsOBS",
    version: "0.23.2",
  },
  {
    name: "Streamlink",
    appId: "Streamlink.Streamlink",
    version: "6.10.0-1",
  },
  {
    name: "Streamlink Twitch GUI",
    appId: "Streamlink.Streamlink.TwitchGui",
    version: "2.5.2",
  },
  {
    name: "Streamway OBS Plugin",
    appId: "Streamway.OBSPlugin",
    version: "1",
  },
  {
    name: "Notesnook",
    appId: "Streetwriters.Notesnook",
    version: "2.6.16",
  },
  {
    name: "Strem Application",
    appId: "Strem.App",
    version: "0.9.32",
  },
  {
    name: "Stremio",
    appId: "Stremio.Stremio",
    version: "4.4.168",
  },
  {
    name: "Stretchly",
    appId: "Stretchly.Stretchly",
    version: "1.16",
  },
  {
    name: "Stripe Cli",
    appId: "Stripe.StripeCli",
    version: "1.21.2",
  },
  {
    name: "vMix",
    appId: "StudioCoast.vMix",
    version: "27.0.0.81",
  },
  {
    name: "StudioRack App",
    appId: "StudioRack.StudioRack",
    version: "0.1.0",
  },
  {
    name: "ProtoPie",
    appId: "StudioXID.ProtoPie",
    version: "6.0.0",
  },
  {
    name: "fSpy",
    appId: "Stuffmatic.fSpy",
    version: "1.0.3",
  },
  {
    name: "Stunt Rally",
    appId: "StuntRally.StuntRally",
    version: "3.1",
  },
  {
    name: "Write",
    appId: "StylusLabs.Write",
    version: "3.0.1489",
  },
  {
    name: "Sublime Merge",
    appId: "SublimeHQ.SublimeMerge",
    version: "2096",
  },
  {
    name: "Sublime Merge (Dev)",
    appId: "SublimeHQ.SublimeMerge.Dev",
    version: "2057",
  },
  {
    name: "Sublime Merge Dev",
    appId: "SublimeHQ.SublimeMerge.Dev.Portabâ€¦",
    version: "2085",
  },
  {
    name: "Sublime Merge",
    appId: "SublimeHQ.SublimeMerge.Portable",
    version: "2083",
  },
  {
    name: "Sublime Text 3",
    appId: "SublimeHQ.SublimeText.3",
    version: "3.2.2",
  },
  {
    name: "Sublime Text 3",
    appId: "SublimeHQ.SublimeText.3.Portable",
    version: "3211",
  },
  {
    name: "Sublime Text 4",
    appId: "SublimeHQ.SublimeText.4",
    version: "4.0.0.418000",
  },
  {
    name: "Sublime Text 4 (Dev)",
    appId: "SublimeHQ.SublimeText.4.Dev",
    version: "4.0.0.417300",
  },
  {
    name: "Sublime Text 4",
    appId: "SublimeHQ.SublimeText.4.Portable",
    version: "4143",
  },
  {
    name: "Subsurface",
    appId: "Subsurface.Subsurface",
    version: "5.0.10",
  },
  {
    name: "Habbo Launcher",
    appId: "SulakeOy.HabboLauncher",
    version: "1.0.53",
  },
  {
    name: "SumatraPDF",
    appId: "SumatraPDF.SumatraPDF",
    version: "3.5.2",
  },
  {
    name: "Sunsama",
    appId: "Summay.Sunsama",
    version: "2.3.5",
  },
  {
    name: "SuperCollider",
    appId: "SuperCollider.SuperCollider",
    version: "3.13.0",
  },
  {
    name: "Dotter",
    appId: "SuperCuber.dotter",
    version: "0.13.1",
  },
  {
    name: "SzArchiver",
    appId: "SuperFlexibleSoftware.SzArchiver",
    version: "0.84",
  },
  {
    name: "SuperTux",
    appId: "SuperTux.SuperTux",
    version: "0.6.3",
  },
  {
    name: "SuperTuxKart",
    appId: "SuperTuxKart.SuperTuxKart",
    version: "1.4",
  },
  {
    name: "UPDF",
    appId: "Superace.UPDF",
    version: "1.6.20.2",
  },
  {
    name: "Superhuman",
    appId: "Superhuman.Superhuman",
    version: "25.1.42",
  },
  {
    name: "SuperNova Player",
    appId: "Supernova.SupernovaPlayer",
    version: "0.92",
  },
  {
    name: "Surfshark",
    appId: "Surfshark.Surfshark",
    version: "5.8.3.999",
  },
  {
    name: "SST Surge",
    appId: "SurgeSynth.Surge",
    version: "1.9.0",
  },
  {
    name: "Surge XT",
    appId: "SurgeSynth.SurgeXT",
    version: "1.3.4",
  },
  {
    name: "Tachidesk-JUI",
    appId: "Suwayomi.Tachidesk-JUI",
    version: "1.3.2",
  },
  {
    name: "Tachidesk Server",
    appId: "Suwayomi.Tachidesk-Server",
    version: "0.7.0",
  },
  {
    name: "Tachidesk Sorayomi",
    appId: "Suwayomi.Tachidesk-Sorayomi",
    version: "0.5.23",
  },
  {
    name: "Tachidesk-VaadinUI",
    appId: "Suwayomi.Tachidesk-VaadinUI",
    version: "1.12.0",
  },
  {
    name: "MidiKey2Key",
    appId: "SvenRowoldt.MidiKey2Key",
    version: "2.3.5.0",
  },
  {
    name: "010 Editor",
    appId: "SweetScape.010Editor",
    version: "15",
  },
  {
    name: "010 Memorizer",
    appId: "SweetScape.010Memorizer",
    version: "1.1",
  },
  {
    name: "Hamic",
    appId: "SweetScape.Hamic",
    version: "2.1",
  },
  {
    name: "Swift",
    appId: "Swift.Toolchain",
    version: "6.0.1",
  },
  {
    name: "Pendulums",
    appId: "SwingTeam.Pendulums",
    version: "1.1.0",
  },
  {
    name: "Swit",
    appId: "SwitTechnologiesInc.Swit",
    version: "12.1.9",
  },
  {
    name: "Sylpheed E-Mail Client",
    appId: "Sylpheed.Sylpheed",
    version: "3.7",
  },
  {
    name: "Echosync",
    appId: "SylvainRougeaux.Echosync",
    version: "7.5.3.1",
  },
  {
    name: "Metatogger",
    appId: "SylvainRougeaux.Metatogger",
    version: "7.5.2.0",
  },
  {
    name: "Symflower",
    appId: "Symflower.SymflowerCLI",
    version: "1.0.21480",
  },
  {
    name: "Synergy (64-bit)",
    appId: "Symless.Synergy",
    version: "3.0.80.1-rc3",
  },
  {
    name: "SyncTERM",
    appId: "SyncTERM.SyncTERM",
    version: "1.1",
  },
  {
    name: "SyncTrayzor",
    appId: "SyncTrayzor.SyncTrayzor",
    version: "1.1.29.0",
  },
  {
    name: "Syncany",
    appId: "Syncany.Syncany",
    version: "0.4.9",
  },
  {
    name: "Syncplay",
    appId: "Syncplay.Syncplay",
    version: "1.7.3",
  },
  {
    name: "Syncplify.me Server!",
    appId: "Syncplify.Server",
    version: "5.1.30",
  },
  {
    name: "Syncthing",
    appId: "Syncthing.Syncthing",
    version: "1.27.12",
  },
  {
    name: "Synology Active Backup for Busâ€¦",
    appId: "Synology.ActiveBackupForBusinessAâ€¦",
    version: "2.6.1-3052",
  },
  {
    name: "Synology Assistant",
    appId: "Synology.Assistant",
    version: "7.0.4-50051",
  },
  {
    name: "Synology Chat",
    appId: "Synology.ChatClient",
    version: "1.2.2-0222",
  },
  {
    name: "Synology Drive Client",
    appId: "Synology.DriveClient",
    version: "7.4.0.15724",
  },
  {
    name: "Synology Note Station Client",
    appId: "Synology.NoteStationClient",
    version: "2.2.4-703",
  },
  {
    name: "Synthesia",
    appId: "Synthesia.Synthesia",
    version: "10.8.5686",
  },
  {
    name: "SmarTTY",
    appId: "Sysprogs.SmarTTY",
    version: "3.3",
  },
  {
    name: "System Explorer",
    appId: "SystemExplorer.SystemExplorer",
    version: "7.0.0",
  },
  {
    name: "Advanced Disk Recovery",
    appId: "SystweakSoftware.AdvancedDiskRecoâ€¦",
    version: "2.8.1233.18675",
  },
  {
    name: "Advanced Driver Updater",
    appId: "SystweakSoftware.AdvancedDriverUpâ€¦",
    version: "4.6.1086.5319",
  },
  {
    name: "Advanced System Optimizer",
    appId: "SystweakSoftware.AdvancedSystemOpâ€¦",
    version: "3.81.8181.234",
  },
  {
    name: "Duplicate Files Fixer",
    appId: "SystweakSoftware.DuplicateFilesFiâ€¦",
    version: "1.2.1.964",
  },
  {
    name: "Duplicate Music Fixer",
    appId: "SystweakSoftware.DuplicateMusicFiâ€¦",
    version: "2.1.1000.11070",
  },
  {
    name: "Duplicate Photos Fixer Pro",
    appId: "SystweakSoftware.DuplicatePhotosFâ€¦",
    version: "1.3.1086.659",
  },
  {
    name: "RegClean Pro",
    appId: "SystweakSoftware.RegCleanPro",
    version: "8.45.81.1204",
  },
  {
    name: "Systweak Software Updater",
    appId: "SystweakSoftware.SystweakSoftwareâ€¦",
    version: "1.0.24.10709",
  },
  {
    name: "TELUS Business Connect Phone",
    appId: "TELUS.BusinessConnectPhone",
    version: "23.2.0.46280",
  },
  {
    name: "TEdit",
    appId: "TEdit.TEdit",
    version: "4.15.0",
  },
  {
    name: "Bulk Rename Utility",
    appId: "TGRMNSoftware.BulkRenameUtility",
    version: "3.4.4.0",
  },
  {
    name: "åŒèŠ±é¡ºæœŸè´§é€š",
    appId: "THS.Futures",
    version: "4.18.1.1",
  },
  {
    name: "åŒèŠ±é¡ºé—®è´¢",
    appId: "THS.HXSmart",
    version: "1.0.2.5",
  },
  {
    name: "åŒèŠ±é¡º",
    appId: "THS.THS",
    version: "9.30.70",
  },
  {
    name: "åŒèŠ±é¡ºè¿œèˆªç‰ˆ",
    appId: "THS.THS.Hevo",
    version: "10.1.1.2",
  },
  {
    name: "TIDAL",
    appId: "TIDALMusicAS.TIDAL",
    version: "2.38.5",
  },
  {
    name: "Colour Contrast Analyser (CCA)",
    appId: "TPGi.CCA",
    version: "3.5.4",
  },
  {
    name: "iDefender",
    appId: "TRUSTSING.iDefender",
    version: "4.6.0.0",
  },
  {
    name: "iMonitor",
    appId: "TRUSTSING.iMonitor",
    version: "2.5.3.0",
  },
  {
    name: "TSDuck",
    appId: "TSDuck.TSDuck",
    version: "3.38-3822",
  },
  {
    name: "MTPuTTY",
    appId: "TTYPlus.MTPutty",
    version: "1.8",
  },
  {
    name: "TeXworks",
    appId: "TUG.TeXworks",
    version: "0.6.9",
  },
  {
    name: "TUtoolbox",
    appId: "TUitTUWien.TUtoolbox",
    version: "2024.0.0.672",
  },
  {
    name: "gobang",
    appId: "TaKO8Ki.gobang",
    version: "0.1.0-alpha.5",
  },
  {
    name: "Tabby",
    appId: "TabbyML.Tabby",
    version: "0.15.0",
  },
  {
    name: "TableCloth",
    appId: "TableClothProject.TableCloth",
    version: "1.13.2",
  },
  {
    name: "TablePlus",
    appId: "TablePlus.TablePlus",
    version: "6.1.1",
  },
  {
    name: "Tableau Desktop",
    appId: "Tableau.Desktop",
    version: "24.2.1060",
  },
  {
    name: "Tableau Prep Builder",
    appId: "Tableau.PrepBuilder",
    version: "24.2.36888",
  },
  {
    name: "Tableau Public",
    appId: "Tableau.Public",
    version: "24.2.1060",
  },
  {
    name: "Tableau Reader",
    appId: "Tableau.Reader",
    version: "24.2.1060",
  },
  {
    name: "Sofia",
    appId: "TaiStudio.Sofia",
    version: "1.0.3",
  },
  {
    name: "Sucrose Wallpaper Engine",
    appId: "Taiizor.SucroseWallpaperEngine",
    version: "24.10.1.0",
  },
  {
    name: "Tauon Music Box",
    appId: "Taiko2k.TauonMusicBox",
    version: "7.7.0",
  },
  {
    name: "Tailwind CSS",
    appId: "TailwindLabs.TailwindCSS",
    version: "3.4.13",
  },
  {
    name: "Taisei Project",
    appId: "Taisei.Taisei",
    version: "1.4",
  },
  {
    name: "Callbar",
    appId: "Talkdesk.Callbar",
    version: "1.48.16-electâ€¦",
  },
  {
    name: "Talkdesk Desktop",
    appId: "Talkdesk.Talkdesk",
    version: "2.1.0",
  },
  {
    name: "RenPyCheatGenerator",
    appId: "TamsosVardu.RenPyCheatGenerator",
    version: "1.0.0",
  },
  {
    name: "Tandem",
    appId: "Tandem.Tandem",
    version: "2.2.1130.0",
  },
  {
    name: "æ‘©å°”åº„å›­",
    appId: "Taomee.Mole",
    version: "0.0.6",
  },
  {
    name: "Kangaroo",
    appId: "Taozuhong.Kangaroo",
    version: "5.3.1.240901",
  },
  {
    name: "Nighthawk",
    appId: "TarakSharma.Nighthawk",
    version: "2.1.1",
  },
  {
    name: "Battery Mode",
    appId: "TarasovArtyom.BatteryMode",
    version: "4.3.2.204",
  },
  {
    name: "Harzing\u0027s Publish or Perish",
    appId: "Tarma.PublishOrPerish",
    version: "8.15.4710.9036",
  },
  {
    name: "Task",
    appId: "Task.Task",
    version: "3.39.1",
  },
  {
    name: "TSW Mod Manager",
    appId: "TaskPlays.TSWModManager",
    version: "2.2.1",
  },
  {
    name: "Taskade",
    appId: "TaskcadeInc.Taskade",
    version: "4.2.6",
  },
  {
    name: "WindowsGSM",
    appId: "TatLead.WindowsGSM",
    version: "1.23.1.0",
  },
  {
    name: "create-tauri-app",
    appId: "Tauri.create-tauri-app",
    version: "4.5.0",
  },
  {
    name: "ncmdump",
    appId: "TaurusXin.ncmdump",
    version: "1.1",
  },
  {
    name: "Tautulli",
    appId: "Tautulli.Tautulli",
    version: "2.14.5.1",
  },
  {
    name: "TaxDome",
    appId: "TaxDomeLLC.TaxDome",
    version: "3.82.0.28810",
  },
  {
    name: "TeXstudio",
    appId: "TeXstudio.TeXstudio",
    version: "4.8.4",
  },
  {
    name: "TeaSpeak - Client",
    appId: "TeaSpeak.TeaClient",
    version: "1.5.3-2",
  },
  {
    name: "TeamDrive",
    appId: "TeamDriveSystems.TeamDrive",
    version: "4.8.0.3230",
  },
  {
    name: "TeamIDE",
    appId: "TeamIDE.TeamIDE",
    version: "2.6.27",
  },
  {
    name: "Lidarr",
    appId: "TeamLidarr.Lidarr",
    version: "2.5.3.4341",
  },
  {
    name: "Prowlarr",
    appId: "TeamProwlarr.Prowlarr",
    version: "1.24.3",
  },
  {
    name: "Radarr",
    appId: "TeamRadarr.Radarr",
    version: "5.11.0",
  },
  {
    name: "Readarr",
    appId: "TeamReadarr.Readarr",
    version: "0.1.9.1905",
  },
  {
    name: "Hakchi2 CE",
    appId: "TeamShinkansen.Hakchi2-CE",
    version: "3.9.3",
  },
  {
    name: "Sonarr",
    appId: "TeamSonarr.Sonarr",
    version: "4.0.6.1805",
  },
  {
    name: "SophiApp",
    appId: "TeamSophia.SophiApp",
    version: "1.0.97",
  },
  {
    name: "TeamSpeak 3 Client",
    appId: "TeamSpeakSystems.TeamSpeakClient",
    version: "3.6.2",
  },
  {
    name: "TeamSpeak Beta",
    appId: "TeamSpeakSystems.TeamSpeakClient.â€¦",
    version: "5.0.0",
  },
  {
    name: "TeamViewer",
    appId: "TeamViewer.TeamViewer",
    version: "15.58.5",
  },
  {
    name: "TeamViewer Host",
    appId: "TeamViewer.TeamViewer.Host",
    version: "15.58.5",
  },
  {
    name: "TcNo Account Switcher",
    appId: "TechNobo.TcNoAccountSwitcher",
    version: "2024.08.25.00",
  },
  {
    name: "TechPowerUp GPU-Z",
    appId: "TechPowerUp.GPU-Z",
    version: "2.60.0",
  },
  {
    name: "NVCleanstall",
    appId: "TechPowerUp.NVCleanstall",
    version: "1.16.0",
  },
  {
    name: "ThrottleStop",
    appId: "TechPowerUp.ThrottleStop",
    version: "9.6",
  },
  {
    name: "Camtasia",
    appId: "TechSmith.Camtasia",
    version: "24.0.6.3686",
  },
  {
    name: "Snagit 2020",
    appId: "TechSmith.Snagit.2020",
    version: "20.1.8.16558",
  },
  {
    name: "Snagit 2021",
    appId: "TechSmith.Snagit.2021",
    version: "21.4.7",
  },
  {
    name: "Snagit 2022",
    appId: "TechSmith.Snagit.2022",
    version: "22.1.7",
  },
  {
    name: "Snagit 2023",
    appId: "TechSmith.Snagit.2023",
    version: "23.2.5",
  },
  {
    name: "Snagit 2024",
    appId: "TechSmith.Snagit.2024",
    version: "24.2.4",
  },
  {
    name: "æ¶ˆæžåŽ‹åˆ¶",
    appId: "TedZyzsdy.NegativeEncoder",
    version: "5.0.8",
  },
  {
    name: "Telegrafer",
    appId: "Telegrafer.Telegrafer",
    version: "0.0.2",
  },
  {
    name: "Telegram Desktop",
    appId: "Telegram.TelegramDesktop",
    version: "5.5.5",
  },
  {
    name: "Telegram Desktop Beta",
    appId: "Telegram.TelegramDesktop.Beta",
    version: "4.6.4",
  },
  {
    name: "Unigram",
    appId: "Telegram.Unigram",
    version: "10.8.0.9930",
  },
  {
    name: "Progress Telerik Fiddler Classâ€¦",
    appId: "Telerik.Fiddler.Classic",
    version: "5.0.20244.109â€¦",
  },
  {
    name: "Fiddler Everywhere",
    appId: "Telerik.Fiddler.Everywhere",
    version: "5.18.0",
  },
  {
    name: "Fiddler PDFView Inspector",
    appId: "Telerik.FiddlerPDFView",
    version: "1.1.0.3",
  },
  {
    name: "Nessus",
    appId: "Tenable.Nessus",
    version: "10.8.3.20010",
  },
  {
    name: "Nessus Agent",
    appId: "Tenable.NessusAgent",
    version: "10.7.3.20013",
  },
  {
    name: "Tenacity",
    appId: "TenacityTeam.Tenacity",
    version: "1.3.3",
  },
  {
    name: "ArtHub",
    appId: "Tencent.ArtHub",
    version: "1.18.0",
  },
  {
    name: "cosbrowser",
    appId: "Tencent.COSBrowser",
    version: "2.11.23",
  },
  {
    name: "COSCLI",
    appId: "Tencent.COSCLI",
    version: "1.0.1",
  },
  {
    name: "è…¾è®¯æ¡Œé¢æ•´ç†",
    appId: "Tencent.DeskGo",
    version: "3.3.1503.127",
  },
  {
    name: "è…¾è®¯è¯¾å ‚",
    appId: "Tencent.EDU",
    version: "4.6.1.2",
  },
  {
    name: "è…¾è®¯è¯¾å ‚æžé€Ÿç‰ˆ",
    appId: "Tencent.EDULite",
    version: "3.1.6.165",
  },
  {
    name: "Effidit",
    appId: "Tencent.Effidit",
    version: "0.3.0",
  },
  {
    name: "Fan Live",
    appId: "Tencent.FanLive",
    version: "2.16.2.64",
  },
  {
    name: "Foxmail",
    appId: "Tencent.Foxmail",
    version: "7.2.25.306",
  },
  {
    name: "è…¾è®¯QQ",
    appId: "Tencent.QQ",
    version: "9.7.23.29392",
  },
  {
    name: "QQ",
    appId: "Tencent.QQ.NT",
    version: "9.9.15.28418",
  },
  {
    name: "QQæµè§ˆå™¨",
    appId: "Tencent.QQBrowser",
    version: "11.1.5155.400",
  },
  {
    name: "QQå°ç¨‹åºå¼€å‘è€…å·¥å…·",
    appId: "Tencent.QQDevTools",
    version: "0.71.2402220.7",
  },
  {
    name: "QQå½±åƒ",
    appId: "Tencent.QQImage",
    version: "3.0.890.400",
  },
  {
    name: "QQéŸ³ä¹",
    appId: "Tencent.QQMusic",
    version: "20.22",
  },
  {
    name: "QQæ‹¼éŸ³è¾“å…¥æ³•",
    appId: "Tencent.QQPinyin",
    version: "6.6",
  },
  {
    name: "QQå½±éŸ³",
    appId: "Tencent.QQPlayer",
    version: "4.6.3.1104",
  },
  {
    name: "QQäº”ç¬”è¾“å…¥æ³•",
    appId: "Tencent.QQWubi",
    version: "2.4",
  },
  {
    name: "è…¾è®¯ä¼ç‚¹",
    appId: "Tencent.QiDian",
    version: "5.8.3.20262",
  },
  {
    name: "ä¼é¹…ç›´æ’­ä¼´ä¾£",
    appId: "Tencent.QieLive",
    version: "2.0.11",
  },
  {
    name: "START",
    appId: "Tencent.START",
    version: "0.11.0.19049",
  },
  {
    name: "TIM",
    appId: "Tencent.TIM",
    version: "3.4.8.22121",
  },
  {
    name: "è…¾è®¯æ–‡æ¡£",
    appId: "Tencent.TencentDocs",
    version: "3.8.2",
  },
  {
    name: "Tencent Meeting",
    appId: "Tencent.TencentMeeting",
    version: "3.29.10.471",
  },
  {
    name: "TencentMeetingRooms",
    appId: "Tencent.TencentMeetingRooms",
    version: "3.29.300.550",
  },
  {
    name: "è…¾è®¯è§†é¢‘",
    appId: "Tencent.TencentVideo",
    version: "11.103.2233.0",
  },
  {
    name: "TranSmart",
    appId: "Tencent.TranSmart",
    version: "Alpha0.11.0",
  },
  {
    name: "VooV Meeting",
    appId: "Tencent.VooVMeeting",
    version: "3.27.1.510",
  },
  {
    name: "WeChat",
    appId: "Tencent.WeChat",
    version: "3.9.12.1000",
  },
  {
    name: "ä¼ä¸šå¾®ä¿¡",
    appId: "Tencent.WeCom",
    version: "4.1.30.6008",
  },
  {
    name: "Tencent Meeting Outlook Plugin",
    appId: "Tencent.WeMeetOutlookPlugin",
    version: "1.3.0.22",
  },
  {
    name: "å…¨æ°‘Kæ­Œ",
    appId: "Tencent.WeSing",
    version: "2.21.170.63",
  },
  {
    name: "å…¨æ°‘Kæ­Œä¸»æ’­ç‰ˆ",
    appId: "Tencent.WeSingLiveAssistant",
    version: "0.0.0.0",
  },
  {
    name: "å¾®ä¿¡è¾“å…¥æ³•",
    appId: "Tencent.WeType",
    version: "1.2.5.732",
  },
  {
    name: "å¾®ä¿¡å¼€å‘è€…å·¥å…·",
    appId: "Tencent.WeixinDevTools",
    version: "1.06.2409131",
  },
  {
    name: "WeiyunApp",
    appId: "Tencent.Weiyun",
    version: "5.2.1485",
  },
  {
    name: "å¾®äº‘åŒæ­¥åŠ©æ‰‹",
    appId: "Tencent.WeiyunSync",
    version: "3",
  },
  {
    name: "åº”ç”¨å®",
    appId: "Tencent.YingYongBao",
    version: "5.8.3",
  },
  {
    name: "Music Player",
    appId: "Tenpi.MusicPlayer",
    version: "0.3.0",
  },
  {
    name: "Photo Viewer",
    appId: "Tenpi.PhotoViewer",
    version: "0.2.5",
  },
  {
    name: "Video Player",
    appId: "Tenpi.VideoPlayer",
    version: "0.2.0",
  },
  {
    name: "Waifu2x GUI",
    appId: "Tenpi.Waifu2xGUI",
    version: "0.5.1",
  },
  {
    name: "Tera Term",
    appId: "TeraTermProject.teraterm",
    version: "4.108",
  },
  {
    name: "Tera Term 5",
    appId: "TeraTermProject.teraterm5",
    version: "5.3",
  },
  {
    name: "Teradata Tools and Utilities -â€¦",
    appId: "Teradata.TTUBase",
    version: "20.00.15.00",
  },
  {
    name: "ODBC Driver for Teradata - Suiâ€¦",
    appId: "Teradata.TTUOdbc",
    version: "20.00.15.00",
  },
  {
    name: "Teradata Tools and Utilities -â€¦",
    appId: "Teradata.TeradataBaseSuite",
    version: "20.00.10.00",
  },
  {
    name: "PyDebloatX",
    appId: "Teraskull.PyDebloatX",
    version: "1.12.0",
  },
  {
    name: "Terminals",
    appId: "Terminals.Terminals",
    version: "4.0.1.0",
  },
  {
    name: "Termius",
    appId: "Termius.Termius",
    version: "9.6.1",
  },
  {
    name: "terraform-docs",
    appId: "Terraform-docs.Terraform-docs",
    version: "0.18.0",
  },
  {
    name: "TFLint",
    appId: "TerraformLinters.tflint",
    version: "0.52.0",
  },
  {
    name: "D2",
    appId: "Terrastruct.D2",
    version: "0.6.5",
  },
  {
    name: "Tesseract",
    appId: "Tesseract.Tesseract.Stable",
    version: "2014.05.12",
  },
  {
    name: "func-e",
    appId: "Tetrate.func-e",
    version: "1.1.4",
  },
  {
    name: "wazero",
    appId: "Tetrate.wazero",
    version: "1.6.0",
  },
  {
    name: "TI-Nspire CX CAS Student Softwâ€¦",
    appId: "TexasInstruments.TI-Nspire.CXCASSâ€¦",
    version: "5.3.2.129",
  },
  {
    name: "TI-Nspire CX Premium Teacher Sâ€¦",
    appId: "TexasInstruments.TI-Nspire.CXPremâ€¦",
    version: "5.3.2.129",
  },
  {
    name: "TI-Nspire CX Student Software",
    appId: "TexasInstruments.TI-Nspire.CXStudâ€¦",
    version: "5.3.2.129",
  },
  {
    name: "TI-NspireTM Computer Link",
    appId: "TexasInstruments.TI-Nspire.Computâ€¦",
    version: "3.9.0.455",
  },
  {
    name: "TI-SmartView for MathPrint Calâ€¦",
    appId: "TexasInstruments.TI-SmartView.Matâ€¦",
    version: "1.2.0.2108",
  },
  {
    name: "TI-SmartView CE pour la famillâ€¦",
    appId: "TexasInstruments.TI-SmartView.TI-â€¦",
    version: "5.5.0.2092",
  },
  {
    name: "TI-SmartViewTM TI-CollÃ¨geTM Plâ€¦",
    appId: "TexasInstruments.TI-SmartView.TI-â€¦",
    version: "1.3.0.61",
  },
  {
    name: "TI ConnectTM",
    appId: "TexasInstruments.TIConnect",
    version: "4.0.0.218",
  },
  {
    name: "Texmaker",
    appId: "Texmaker.Texmaker",
    version: "5.1.4.0",
  },
  {
    name: "Texnomic SecureDNS Terminal",
    appId: "Texnomic.SecureDNS-Terminal",
    version: "0.3",
  },
  {
    name: "tgstation-server",
    appId: "Tgstation.Server",
    version: "6.10.0",
  },
  {
    name: "Miru",
    appId: "ThaUnknown.Miru",
    version: "5.5.6",
  },
  {
    name: "Seatsmart",
    appId: "ThaddeusMcCleary.Seatsmart",
    version: "2.0.4",
  },
  {
    name: "SafeNet Authentication Client",
    appId: "Thales.SafeNetAuthenticationClient",
    version: "10.9.3283.0",
  },
  {
    name: "Discord RPC Maker",
    appId: "ThatOneCalculator.DiscordRPCMaker",
    version: "2.1.1",
  },
  {
    name: "0xGingi-Browser Installer",
    appId: "The0xGingi-BrowserAuthors.0xGingiâ€¦",
    version: "114.0.5735.91",
  },
  {
    name: "Bombermaaan",
    appId: "TheBombermaaanteam.Bombermaaan",
    version: "1.4.0.627",
  },
  {
    name: "Arc",
    appId: "TheBrowserCompany.Arc",
    version: "1.20.1.51458",
  },
  {
    name: "LibreOffice",
    appId: "TheDocumentFoundation.LibreOffice",
    version: "24.8.2.1",
  },
  {
    name: "LibreOffice Help Pack",
    appId: "TheDocumentFoundation.LibreOfficeâ€¦",
    version: "24.8.2.1",
  },
  {
    name: "LibreOffice SDK",
    appId: "TheDocumentFoundation.LibreOfficeâ€¦",
    version: "24.8.2.1",
  },
  {
    name: "Hamsket",
    appId: "TheGoddessInari.Hamsket",
    version: "0.6.3",
  },
  {
    name: "DeckMaster",
    appId: "TheOtterlord.DeckMaster",
    version: "1.0.2",
  },
  {
    name: "Blood on the Clocktower Online",
    appId: "ThePandemoniumInstitute.Bloodonthâ€¦",
    version: "3.33.0",
  },
  {
    name: "Pokemon Trading Card Game Live",
    appId: "ThePokemonCompany.PokemonTCGLive",
    version: "1.18.0.1",
  },
  {
    name: "PokÃ©mon Trading Card Game Onliâ€¦",
    appId: "ThePokemonCompany.PokemonTCGOnline",
    version: "2.95.0",
  },
  {
    name: "The Powder Toy",
    appId: "ThePowderToy.ThePowderToy",
    version: "97",
  },
  {
    name: "pyzo",
    appId: "ThePyzoteam.pyzo",
    version: "4.15.0",
  },
  {
    name: "Qucs-S",
    appId: "TheQucsTeam.Qucs-S",
    version: "24.3.2",
  },
  {
    name: "Stella",
    appId: "TheStellaTeam.Stella",
    version: "6.7.1",
  },
  {
    name: "Toontown Rewritten",
    appId: "TheTTRTeam.ToontownRewritten",
    version: "1.5.10.0",
  },
  {
    name: "Toontown Rewritten Test",
    appId: "TheTTRTeam.ToontownRewrittenTest",
    version: "1.0.0.0",
  },
  {
    name: "ZDaemon",
    appId: "TheZDaemonTeam.ZDaemon",
    version: "1.10.24",
  },
  {
    name: "ascii-image-converter",
    appId: "TheZoraiz.ascii-image-converter",
    version: "1.13.1",
  },
  {
    name: "Serust",
    appId: "Thewh1teagle.Serust",
    version: "0.0.1",
  },
  {
    name: "TIPP10",
    appId: "ThielickeITSolutions.TIPP10",
    version: "2.1.0",
  },
  {
    name: "Dimension 4",
    appId: "ThinkingManSoftware.Dimension4",
    version: "5.31",
  },
  {
    name: "Zee Drive",
    appId: "Thinkscape.ZeeDrive",
    version: "58.2.0.0",
  },
  {
    name: "Full Stack AI Meme Generator",
    appId: "ThioJoe.FullStackAIMemeGenerator",
    version: "1.0.4",
  },
  {
    name: "YT Spammer Purge",
    appId: "ThioJoe.YTSpammerPurge",
    version: "2.17.1",
  },
  {
    name: "Talisman",
    appId: "Thoughtworks.Talisman",
    version: "1.32.0",
  },
  {
    name: "threema-web",
    appId: "Threema.Threema",
    version: "1.2.45",
  },
  {
    name: "è¿…é›·",
    appId: "Thunder.Thunder",
    version: "12.0.14.2604",
  },
  {
    name: "è¿…é›·æžé€Ÿç‰ˆ",
    appId: "Thunder.Thunder.Speed",
    version: "1.0.35.366",
  },
  {
    name: "è¿…é›·å½±éŸ³",
    appId: "Thunder.Xmp",
    version: "6.2.6.622",
  },
  {
    name: "Uhm",
    appId: "Thwani.Uhm",
    version: "0.1.4",
  },
  {
    name: "SQL Schema Compare",
    appId: "TiCodeX.SQLSchemaCompare",
    version: "2024.8.1",
  },
  {
    name: "Publii",
    appId: "TidyCustoms.Publii",
    version: "0.46.0",
  },
  {
    name: "Tigris Messenger",
    appId: "TigerCompany.TigrisMessenger",
    version: "1.1.4",
  },
  {
    name: "TigerVNC",
    appId: "TigerVNCproject.TigerVNC",
    version: "1.14.0",
  },
  {
    name: "TikzEdt Beta",
    appId: "TikzEdt.TikzEdtBeta",
    version: "0.2.3",
  },
  {
    name: "Tiled",
    appId: "Tiled.Tiled",
    version: "1.11.0",
  },
  {
    name: "TKey SSH Agent",
    appId: "Tillitis.TKeySSHAgent",
    version: "1.0.0.0",
  },
  {
    name: "TKeySign",
    appId: "Tillitis.TKeySign",
    version: "1.0.0",
  },
  {
    name: "TKeyVerification",
    appId: "Tillitis.TKeyVerification",
    version: "1.0.0",
  },
  {
    name: "ffsend",
    appId: "TimVisee.ffsend",
    version: "0.2.76",
  },
  {
    name: "WebDL",
    appId: "Timber1900.WebDL",
    version: "v11.3.1",
  },
  {
    name: "Timeclockwizard",
    appId: "TimeClockWizard.TimeClockWizard",
    version: "1.43.0",
  },
  {
    name: "TimeXtender",
    appId: "TimeXtender.TimeXtender",
    version: "200.0.6431.1",
  },
  {
    name: "TimeXtender ODX",
    appId: "TimeXtender.TimeXtenderODX",
    version: "200.0.6563.1",
  },
  {
    name: "PreMiD",
    appId: "Timeraa.PreMiD",
    version: "2.2.0",
  },
  {
    name: "BasicPawn",
    appId: "Timocop.BasicPawn",
    version: "0.855",
  },
  {
    name: "Windows Update Viewer",
    appId: "Timthreetwelve.WUView",
    version: "0.5.24.0",
  },
  {
    name: "Tinn-R",
    appId: "Tinn-R.Tinn-R",
    version: "9.0.1.1",
  },
  {
    name: "TinyCAD",
    appId: "TinyCAD.TinyCAD",
    version: "3.00.04",
  },
  {
    name: "Tiny RDM",
    appId: "TinyCraft.TinyRDM",
    version: "1.2.1",
  },
  {
    name: "TinyTask",
    appId: "TinyTask.TinyTask",
    version: "1.77",
  },
  {
    name: "Tixati",
    appId: "Tixati.Tixati.Portable",
    version: "3.24",
  },
  {
    name: "ToDesktop",
    appId: "ToDesktop.ToDesktop",
    version: "0.24.1",
  },
  {
    name: "AFFiNE",
    appId: "ToEverything.AFFiNE",
    version: "0.17.2",
  },
  {
    name: "rBiblia",
    appId: "Toborek.rBiblia",
    version: "2.6.1.0",
  },
  {
    name: "DocTo",
    appId: "TobyAllen.DocTo",
    version: "1.14",
  },
  {
    name: "GitFiend",
    appId: "TobySuggate.GitFiend",
    version: "0.44.3",
  },
  {
    name: "Toggl Track",
    appId: "Toggl.TogglTrack",
    version: "10.6.0",
  },
  {
    name: "Final2x",
    appId: "Tohrusky.Final2x",
    version: "2024-07-01",
  },
  {
    name: "Colorpicker",
    appId: "Toinane.Colorpicker",
    version: "2.2.0",
  },
  {
    name: "Jaguar",
    appId: "Toit.Jaguar",
    version: "1.41.0",
  },
  {
    name: "Region To Share",
    appId: "TomEnglert.RegionToShare",
    version: "1.6.5717",
  },
  {
    name: "gron",
    appId: "TomHudson.gron",
    version: "0.7.1",
  },
  {
    name: "BreakTimer",
    appId: "TomWatson.BreakTimer",
    version: "1.2.0",
  },
  {
    name: "WonderPen",
    appId: "TominLab.WonderPen",
    version: "2.5.6",
  },
  {
    name: "Internet Download Manager",
    appId: "Tonec.InternetDownloadManager",
    version: "6.42.22",
  },
  {
    name: "ImageView",
    appId: "TonyPottier.ImageView",
    version: "2.4.6",
  },
  {
    name: "SIW",
    appId: "TopalaSoftwareSolutions.SIW",
    version: "2024.08.27.3",
  },
  {
    name: "Topaz DeNoise AI",
    appId: "TopazLabs.TopazDeNoiseAI",
    version: "3.7.0",
  },
  {
    name: "Topaz Gigapixel AI",
    appId: "TopazLabs.TopazGigapixelAI",
    version: "6.2.0",
  },
  {
    name: "Topaz Photo AI",
    appId: "TopazLabs.TopazPhotoAI",
    version: "2.3.0",
  },
  {
    name: "Topaz Sharpen AI",
    appId: "TopazLabs.TopazSharpenAI",
    version: "4.1.0",
  },
  {
    name: "Topaz Video Enhance AI",
    appId: "TopazLabs.TopazVideoEnhanceAI",
    version: "2.6.4",
  },
  {
    name: "VBoxHeadlessTray",
    appId: "ToptenSoftware.VBoxHeadlessTray",
    version: "7.0.0",
  },
  {
    name: "Tor Browser",
    appId: "TorProject.TorBrowser",
    version: "13.5.6",
  },
  {
    name: "Registry Workshop",
    appId: "Torchsoft.RegistryWorkshop",
    version: "5.1.0",
  },
  {
    name: "TortoiseGit",
    appId: "TortoiseGit.TortoiseGit",
    version: "2.16.0.0",
  },
  {
    name: "TortoiseHg",
    appId: "TortoiseHg.TortoiseHg",
    version: "6.6.3",
  },
  {
    name: "TortoiseSVN",
    appId: "TortoiseSVN.TortoiseSVN",
    version: "1.14.7.29687",
  },
  {
    name: "JANDI",
    appId: "TossLab.JANDI",
    version: "1.7.7",
  },
  {
    name: "TossPOS",
    appId: "TossPlace.TossPOS",
    version: "0.0.5667",
  },
  {
    name: "QuickSFV",
    appId: "TotallyUsefulSoftware.QuickSFV",
    version: "3.0.0",
  },
  {
    name: "qTox",
    appId: "Tox.qTox",
    version: "1.17.6",
  },
  {
    name: "PDF-Tools",
    appId: "TrackerSoftware.PDF-Tools",
    version: "9.5.368.0",
  },
  {
    name: "PDF-XChange Editor",
    appId: "TrackerSoftware.PDF-XChangeEditor",
    version: "10.4.1.389",
  },
  {
    name: "PDF-XChange PRO",
    appId: "TrackerSoftware.PDF-XChangePRO",
    version: "10.4.1.389",
  },
  {
    name: "PDF-XChange Standard",
    appId: "TrackerSoftware.PDF-XChangeStandaâ€¦",
    version: "9.5.368.0",
  },
  {
    name: "PDF-XChange Viewer",
    appId: "TrackerSoftware.PDF-XChangeViewer",
    version: "2.5.322.10",
  },
  {
    name: "TradingView",
    appId: "TradingView.TradingViewDesktop",
    version: "2.9.2.6491",
  },
  {
    name: "SDL Trados Studio 2021 SR2",
    appId: "Trados.TradosStudio.2021",
    version: "16.2.9305",
  },
  {
    name: "Trados Studio 2022",
    appId: "Trados.TradosStudio.2022",
    version: "17.2.10.19084",
  },
  {
    name: "Trados Studio 2024",
    appId: "Trados.TradosStudio.2024",
    version: "18.0.0.1013",
  },
  {
    name: "TRACE 3D Plus",
    appId: "Trane.TRACE3DPlus",
    version: "5.00.123",
  },
  {
    name: "STACK",
    appId: "TransIP.STACK",
    version: "2.8.2.20210809",
  },
  {
    name: "SSDScopeApp",
    appId: "TransendInfo.SSDScopeApp",
    version: "4.23",
  },
  {
    name: "Transmission",
    appId: "Transmission.Transmission",
    version: "4.0.6",
  },
  {
    name: "GestureSign",
    appId: "TransposonY.GestureSign",
    version: "8.1",
  },
  {
    name: "LDView",
    appId: "TravisCobbs.LDView",
    version: "4.5.0.0",
  },
  {
    name: "Mask ROM Tool",
    appId: "TravisGoodspeed.MaskROMTool",
    version: "2024-08-18",
  },
  {
    name: "Steam Art Manager",
    appId: "TravisLane.SteamArtManager",
    version: "2.9.0",
  },
  {
    name: "LibUsbDotNet",
    appId: "TravisRobinson.LibUsbDotNet",
    version: "2.2.8.104",
  },
  {
    name: "Td-agent",
    appId: "TreasureData.TDAgent",
    version: "4.3.0",
  },
  {
    name: "Driver Fusion",
    appId: "Treexy.DriverFusion",
    version: "12.0.0.2",
  },
  {
    name: "Omnify Hotspot",
    appId: "Treexy.OmnifyHotspot",
    version: "5.1.0.3",
  },
  {
    name: "Trelby",
    appId: "Trelby.Trelby",
    version: "2.2.0.0",
  },
  {
    name: "Tribler",
    appId: "Tribler.Tribler",
    version: "7.14.0",
  },
  {
    name: "NeoLoad",
    appId: "Tricentis.NeoLoad",
    version: "8.2.1",
  },
  {
    name: "Remote System Monitor Server",
    appId: "Trigone.SystemMonitor",
    version: "3.69",
  },
  {
    name: "SketchUp Pro 2022",
    appId: "Trimble.SketchUp.Pro.2022",
    version: "22.0.354",
  },
  {
    name: "SketchUp 2023",
    appId: "Trimble.SketchUp.Pro.2023",
    version: "23.1.340",
  },
  {
    name: "TripleA",
    appId: "TripleAGame.TripleA",
    version: "2.5.22294",
  },
  {
    name: "Triplex",
    appId: "Triplex.Triplex",
    version: "0.69.4",
  },
  {
    name: "Trivia",
    appId: "Trivia-Bot-Apps.trivia-desktop",
    version: "1.5.1",
  },
  {
    name: "TrueConf",
    appId: "TrueConf.TrueConf",
    version: "8.4.2",
  },
  {
    name: "Diffinity",
    appId: "TrueHumanDesign.Diffinity",
    version: "0.9.4",
  },
  {
    name: "Ganache",
    appId: "Trufflesuite.Ganache",
    version: "2.7.1",
  },
  {
    name: "ÐšÑ€Ð¸Ð¿Ñ‚Ð¾ÐÐ Ðœ Ð“ÐžÐ¡Ð¢",
    appId: "TrustedRu.CryptoARMGOST",
    version: "2.5",
  },
  {
    name: "TuneFlow",
    appId: "TuneFlow.TuneFlow",
    version: "1.9.2.12245",
  },
  {
    name: "Tunepack",
    appId: "Tunepack.Tunepack",
    version: "1.2.1",
  },
  {
    name: "AceMovi Video Editor",
    appId: "TunesKit.AceMovi",
    version: "4.10.0.160",
  },
  {
    name: "TunnelBear",
    appId: "TunnelBear.TunnelBear",
    version: "4.9.6.0",
  },
  {
    name: "Tutanota Desktop",
    appId: "Tutanota.Tutanota",
    version: "220.240411.0",
  },
  {
    name: "TuxGuitar",
    appId: "TuxGuitar.TuxGuitar",
    version: "1.6.0",
  },
  {
    name: "miniWOL",
    appId: "Tweaking4All.MiniWOL2",
    version: "2.1.3",
  },
  {
    name: "Rename My TV Series",
    appId: "Tweaking4All.RenameMyTVSeries",
    version: "2.0.10",
  },
  {
    name: "TweakShot Screen Capture",
    appId: "TweakingTechnologies.TweakShotScrâ€¦",
    version: "1.0.23.11103",
  },
  {
    name: "Links WWW Browser",
    appId: "TwibrightLabs.Links",
    version: "2.28",
  },
  {
    name: "Twingate Client",
    appId: "Twingate.Client",
    version: "2024.99.6390",
  },
  {
    name: "Twinkstar Browser",
    appId: "Twinkstar.TwinkstarBrowser",
    version: "9.2.2000.2408",
  },
  {
    name: "Weigh Station",
    appId: "Twistedst.scale-serial-reader",
    version: "1.0.3",
  },
  {
    name: "Soundtrack by Twitch",
    appId: "Twitch.Soundtrack",
    version: "8.0.0",
  },
  {
    name: "Twitch CLI",
    appId: "Twitch.TwitchCLI",
    version: "1.1.24",
  },
  {
    name: "Twitch Studio",
    appId: "Twitch.TwitchStudio",
    version: "8.0.0",
  },
  {
    name: "Torpedo Remote",
    appId: "TwonotesAudioEngineering.TorpedoRâ€¦",
    version: "5.4.14",
  },
  {
    name: "Electorrent",
    appId: "Tympanix.Electorrent",
    version: "2.8.3",
  },
  {
    name: "TypeFaster Typing Tutor",
    appId: "TypeFaster.TypeFaster",
    version: "0.4.2",
  },
  {
    name: "Typing Master",
    appId: "TypingInnovationGroup.TypingMaster",
    version: "11",
  },
  {
    name: "Typst",
    appId: "Typst.Typst",
    version: "0.11.1",
  },
  {
    name: "DiscordChatExporter.CLI",
    appId: "Tyrrrz.DiscordChatExporter.CLI",
    version: "2.43.3",
  },
  {
    name: "DiscordChatExporter.GUI",
    appId: "Tyrrrz.DiscordChatExporter.GUI",
    version: "2.43",
  },
  {
    name: "LightBulb",
    appId: "Tyrrrz.LightBulb",
    version: "2.6",
  },
  {
    name: "Tesseract-OCR - open source OCâ€¦",
    appId: "UB-Mannheim.TesseractOCR",
    version: "5.3.3.20231005",
  },
  {
    name: "BOINC",
    appId: "UCBerkeley.BOINC",
    version: "8.0.4",
  },
  {
    name: "us3browser",
    appId: "UCloud.US3Browser",
    version: "1.0.1",
  },
  {
    name: "ç»¿è”ç§æœ‰äº‘",
    appId: "UGREEN.UGREENNAS",
    version: "5.0.0",
  },
  {
    name: "ç»˜ç”»åŠ©æ‰‹",
    appId: "ULAB.PaintAid",
    version: "2.7.1.0",
  },
  {
    name: "å°æ—¨ç®¡å®¶",
    appId: "ULAB.XZAid",
    version: "1.1",
  },
  {
    name: "Ut Video Codec Suite",
    appId: "UMEZAWATakeshi.UtvideoCodecSuite",
    version: "23.1.0",
  },
  {
    name: "UPX",
    appId: "UPX.UPX",
    version: "4.2.4",
  },
  {
    name: "EPANET",
    appId: "USEPA.EPANET",
    version: "2.2.0",
  },
  {
    name: "EasyTerm",
    appId: "UZ7HO.EasyTerm",
    version: "4.9",
  },
  {
    name: "SoundModem",
    appId: "UZ7HO.SoundModem",
    version: "1.14",
  },
  {
    name: "ToastFish",
    appId: "Uahh.ToastFish",
    version: "1.0.0",
  },
  {
    name: "Ubiquiti UniFi Network Server",
    appId: "Ubiquiti.UniFiNetworkServer",
    version: "8.3.32",
  },
  {
    name: "Identity Desktop",
    appId: "UbiquitiInc.IdentityDesktop",
    version: "0.1.13.31",
  },
  {
    name: "UI",
    appId: "UbiquitiInc.UI",
    version: "0.50.1.2",
  },
  {
    name: "UniFi Network Application",
    appId: "UbiquitiInc.UnifiNetworkApplicatiâ€¦",
    version: "8.0.28",
  },
  {
    name: "WiFiman Desktop",
    appId: "UbiquitiInc.WiFimanDesktop",
    version: "0.3.1",
  },
  {
    name: "Ubisoft Connect",
    appId: "Ubisoft.Connect",
    version: "157.1.0.11142",
  },
  {
    name: "SpaceSniffer",
    appId: "UderzoSoftware.SpaceSniffer",
    version: "1.3.0.2",
  },
  {
    name: "UFRaw",
    appId: "UdiFuchs.UFRaw",
    version: "0.19.2",
  },
  {
    name: "Ultimaker Cura",
    appId: "Ultimaker.Cura",
    version: "5.8.1",
  },
  {
    name: "UHK Agent",
    appId: "UltimateGadgetLaboratories.UHKAgeâ€¦",
    version: "4.2.0",
  },
  {
    name: "Ultra",
    appId: "Ultra.Ultra",
    version: "5.0.5.0",
  },
  {
    name: "Ultra Defragmenter",
    appId: "UltraDefrag.UltraDefrag",
    version: "7.1.4",
  },
  {
    name: "Unchecky",
    appId: "Unchecky.Unchecky",
    version: "1.2",
  },
  {
    name: "Uncrustify Code Beautifier",
    appId: "Uncrustify.Uncrustify",
    version: "0.79.0",
  },
  {
    name: "UniKey",
    appId: "UniKey.UniKey",
    version: "4.5.230808",
  },
  {
    name: "Alchemist",
    appId: "Unibo.Alchemist",
    version: "34.1.4",
  },
  {
    name: "ìœ ë‹ˆì½˜ HTTPS",
    appId: "UnicornSoft.UnicornHTTPS",
    version: "1.2.72.110",
  },
  {
    name: "Unifaun OnlinePrinter",
    appId: "Unifaun.UnifaunOnlinePrinter",
    version: "1.0.56",
  },
  {
    name: "Unified Remote",
    appId: "UnifiedIntents.UnifiedRemote",
    version: "3.13.0",
  },
  {
    name: "Heaven Benchmark",
    appId: "Unigine.HeavenBenchmark",
    version: "4",
  },
  {
    name: "Unigine Superposition Benchmark",
    appId: "Unigine.SuperpositionBenchmark",
    version: "1.1",
  },
  {
    name: "Unigine Valley Benchmark",
    appId: "Unigine.ValleyBenchmark",
    version: "1",
  },
  {
    name: "Deepin Cloud Print Server",
    appId: "UnionTech.DeepinCloudPrintServer",
    version: "1.0.0.1",
  },
  {
    name: "Deepin Cloud Scan Server",
    appId: "UnionTech.DeepinCloudScanServer",
    version: "1.0.0.1",
  },
  {
    name: "Tuanjie Hub",
    appId: "Unity.TuanjieHub",
    version: "1.2.0",
  },
  {
    name: "Unity",
    appId: "Unity.Unity.2020",
    version: "2020.3.48f1",
  },
  {
    name: "Unity 2021",
    appId: "Unity.Unity.2021",
    version: "2021.3.44f1",
  },
  {
    name: "Unity 2022",
    appId: "Unity.Unity.2022",
    version: "2022.3.48f1",
  },
  {
    name: "Unity 2023",
    appId: "Unity.Unity.2023",
    version: "2023.2.20f1",
  },
  {
    name: "Unity 6000",
    appId: "Unity.Unity.6000",
    version: "6000.0.21f1",
  },
  {
    name: "Unity 6000 Android Build Suppoâ€¦",
    appId: "Unity.Unity.6000.Android",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Linux Build Supportâ€¦",
    appId: "Unity.Unity.6000.LinuxIL2CPP",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Linux Build Supportâ€¦",
    appId: "Unity.Unity.6000.LinuxMono",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Linux Dedicated Serâ€¦",
    appId: "Unity.Unity.6000.LinuxServer",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Mac Build Support (â€¦",
    appId: "Unity.Unity.6000.MacMono",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Mac Dedicated Serveâ€¦",
    appId: "Unity.Unity.6000.MacServer",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Universal Windows Pâ€¦",
    appId: "Unity.Unity.6000.UWP",
    version: "6000.0.13f1",
  },
  {
    name: "Unity 6000 WebGL Build Support",
    appId: "Unity.Unity.6000.WebGL",
    version: "6000.0.2f1",
  },
  {
    name: "Unity 6000 Windows Build Suppoâ€¦",
    appId: "Unity.Unity.6000.WindowsIL2CPP",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 Windows Dedicated Sâ€¦",
    appId: "Unity.Unity.6000.WindowsServer",
    version: "6000.0.13f1",
  },
  {
    name: "Unity 6000 iOS Build Support",
    appId: "Unity.Unity.6000.iOS",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 tvOS Build Support",
    appId: "Unity.Unity.6000.tvOS",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 visionOS Build Suppâ€¦",
    appId: "Unity.Unity.6000.visionOS",
    version: "6000.0.15f1",
  },
  {
    name: "Unity 6000 (CN Version)",
    appId: "Unity.Unity.CN.6000",
    version: "6000.0.17f1c1",
  },
  {
    name: "Unity Hub",
    appId: "Unity.UnityHub",
    version: "3.9.1",
  },
  {
    name: "Universal Android Debloater Neâ€¦",
    appId: "Universal-Debloater-Alliance.uad-â€¦",
    version: "1.0.3",
  },
  {
    name: "Universal Ctags",
    appId: "UniversalCtags.Ctags",
    version: "6.1.0",
  },
  {
    name: "Universal Ctags",
    appId: "UniversalCtags.Ctags.Nightly",
    version: "2022.12.14",
  },
  {
    name: "Universal Media Server",
    appId: "UniversalMediaServer.UniversalMedâ€¦",
    version: "14.5.0",
  },
  {
    name: "praat",
    appId: "UniversityOfAmsterdam.praat",
    version: "6.4.11",
  },
  {
    name: "QuPath",
    appId: "UniversityOfEdinburgh.QuPath",
    version: "0.5.1",
  },
  {
    name: "Weka",
    appId: "UniversityOfWaikato.Weka",
    version: "3.9.6",
  },
  {
    name: "Foldit",
    appId: "UniversityOfWashington.Foldit",
    version: "0.0.0.0",
  },
  {
    name: "Orange",
    appId: "UniversityofLjubljana.Orange",
    version: "3.35.0",
  },
  {
    name: "Unknown-Horizons",
    appId: "Unknown-HorizonsTeam.Unknown-Horiâ€¦",
    version: "2019.1",
  },
  {
    name: "Greenlight",
    appId: "UnknownSKL.Greenlight",
    version: "2.3.1",
  },
  {
    name: "STL-Thumb",
    appId: "UnlimitedBacon.STL-Thumb",
    version: "0.5.0",
  },
  {
    name: "CS2D",
    appId: "UnrealSoftware.CS2D",
    version: "1.0.1.3",
  },
  {
    name: "Upscayl",
    appId: "Upscayl.Upscayl",
    version: "2.11.5",
  },
  {
    name: "presty-installer",
    appId: "Upstairs.Presty-Installer",
    version: "1.0.0",
  },
  {
    name: "UrBackup",
    appId: "UrBackup.UrBackup.Client",
    version: "2.5.25",
  },
  {
    name: "UrBackup",
    appId: "UrBackup.UrBackup.Server",
    version: "2.5.33",
  },
  {
    name: "ComPortInfo",
    appId: "UweSieber.ComPortInfo",
    version: "1.1.9",
  },
  {
    name: "IoctlDecoder",
    appId: "UweSieber.IoctlDecoder",
    version: "0.4.0.0",
  },
  {
    name: "USB Drive Letter Manager",
    appId: "UweSieber.USBDLM",
    version: "5.6.1.0",
  },
  {
    name: "UsbDriveInfo",
    appId: "UweSieber.UsbDriveInfo",
    version: "5.5.8",
  },
  {
    name: "UsbTreeView",
    appId: "UweSieber.UsbTreeView",
    version: "4.3.4",
  },
  {
    name: "ç™½ææ¡Œé¢ç‰ˆ",
    appId: "Uzero.ScanScan",
    version: "0.3.2",
  },
  {
    name: "Voicemeeter",
    appId: "VB-Audio.Voicemeeter",
    version: "1.1.1.3",
  },
  {
    name: "Voicemeeter Banana",
    appId: "VB-Audio.Voicemeeter.Banana",
    version: "2.1.1.3",
  },
  {
    name: "Voicemeeter Potato",
    appId: "VB-Audio.Voicemeeter.Potato",
    version: "3.1.1.3",
  },
  {
    name: "VCV Rack",
    appId: "VCVRack.VCVRack",
    version: "2.5.2",
  },
  {
    name: "VK Messenger",
    appId: "VKontakte.VKMessenger",
    version: "5.3.2",
  },
  {
    name: "Virtual MIDI Piano Keyboard",
    appId: "VMPK.VMPK",
    version: "0.8.7",
  },
  {
    name: "VMPlex Workstation",
    appId: "VMPlex.VMPlex",
    version: "1.0.0.14",
  },
  {
    name: "VMware Horizon Client",
    appId: "VMware.HorizonClient",
    version: "8.13.0.8174",
  },
  {
    name: "Workspace ONE Intelligent Hub",
    appId: "VMware.IntelligentHub",
    version: "24.4.11.0",
  },
  {
    name: "Zalo",
    appId: "VNGCorp.Zalo",
    version: "23.12.1",
  },
  {
    name: "CeVIO Voice Package - çµæœˆã‚†ã‹â€¦",
    appId: "VOCALOMAKETS.YuzukiYukariRei",
    version: "2.0.0",
  },
  {
    name: "iBackupBot for Windows",
    appId: "VOWSoft.iBackupBot",
    version: "5.6.2",
  },
  {
    name: "VPNetwork LLC - TorGuard - Onlâ€¦",
    appId: "VPNetwork.TorGuard",
    version: "4.8.28",
  },
  {
    name: "VRCX",
    appId: "VRCX.VRCX",
    version: "2024.09.02",
  },
  {
    name: "VRChat Creator Companion",
    appId: "VRChat.CreatorCompanion",
    version: "2.3.2",
  },
  {
    name: "VSCodium",
    appId: "VSCodium.VSCodium",
    version: "1.93.1.24256",
  },
  {
    name: "VSCodium Insiders",
    appId: "VSCodium.VSCodium.Insiders",
    version: "1.93.0.24242",
  },
  {
    name: "VSDC Free Video Editor",
    appId: "VSDC.Editor",
    version: "9.2.6.579",
  },
  {
    name: "VSDC Free Screen Recorder",
    appId: "VSDC.ScreenRecorder",
    version: "1.3.4.0",
  },
  {
    name: "Poedit",
    appId: "VaclavSlavik.Poedit",
    version: "3.5.1",
  },
  {
    name: "Steam",
    appId: "Valve.Steam",
    version: "2.10.91.91",
  },
  {
    name: "SteamCMD",
    appId: "Valve.SteamCMD",
    version: "2.2.95.35",
  },
  {
    name: "Steam Link",
    appId: "Valve.SteamLink",
    version: "1.3.8",
  },
  {
    name: "VapourSynth",
    appId: "VapourSynth.VapourSynth",
    version: "R70",
  },
  {
    name: "Bilive_Electron",
    appId: "Vector000.bilive_electron",
    version: "1.0.6",
  },
  {
    name: "VeeCAD",
    appId: "VeeCAD.VeeCAD",
    version: "2.45.0",
  },
  {
    name: "Velociraptor",
    appId: "Velocidex.Velociraptor",
    version: "0.65.3",
  },
  {
    name: "Airshipper",
    appId: "Veloren.Airshipper",
    version: "0.14.0",
  },
  {
    name: "Vesktop",
    appId: "Vencord.Vesktop",
    version: "1.5.3",
  },
  {
    name: "Vencord",
    appId: "Vendicated.Vencord",
    version: "1.4.0",
  },
  {
    name: "Vencord",
    appId: "Vendicated.Vencord.Canary",
    version: "1.3.1",
  },
  {
    name: "Vencord",
    appId: "Vendicated.Vencord.PTB",
    version: "1.4.0",
  },
  {
    name: "MediaMonkey",
    appId: "VentisMedia.MediaMonkey.4",
    version: "4.1",
  },
  {
    name: "MediaMonkey",
    appId: "VentisMedia.MediaMonkey.5",
    version: "5",
  },
  {
    name: "Ventoy",
    appId: "Ventoy.Ventoy",
    version: "1.0.99",
  },
  {
    name: "HideVolumeOSD",
    appId: "Venturi.HideVolumeOSD",
    version: "1.4",
  },
  {
    name: "Hyper",
    appId: "Vercel.Hyper",
    version: "3.4.1",
  },
  {
    name: "One Talk",
    appId: "Verizon.OneTalk",
    version: "3.0.5",
  },
  {
    name: "ä¸å’•å‰ªè¾‘",
    appId: "Versa.MagiCut",
    version: "1.2.0",
  },
  {
    name: "HEIC File Converter",
    appId: "Vertexshare.HEICFileConverter",
    version: "1.2.0",
  },
  {
    name: "Webp Converter",
    appId: "Vertexshare.WebpConverter",
    version: "1.2.0000",
  },
  {
    name: "Veyon",
    appId: "VeyonSolutions.Veyon",
    version: "4.9.0",
  },
  {
    name: "ViGEm Bus Driver",
    appId: "ViGEm.ViGEmBus",
    version: "1.22.0",
  },
  {
    name: "Blender Launcher",
    appId: "VictorIX.BlenderLauncher",
    version: "2.2.0",
  },
  {
    name: "Victoria",
    appId: "Victoria.Victoria",
    version: "5.37",
  },
  {
    name: "VidJuice UniTube",
    appId: "VidJuice.UniTube",
    version: "6.9.0",
  },
  {
    name: "Video Comparer",
    appId: "VideoComparer.VideoComparer",
    version: "1.7.12",
  },
  {
    name: "VLC media player",
    appId: "VideoLAN.VLC",
    version: "3.0.21",
  },
  {
    name: "x264",
    appId: "VideoLAN.x264",
    version: "3190",
  },
  {
    name: "myViewBoard Display",
    appId: "ViewSonic.myViewBoard.Display",
    version: "1.0.30.3",
  },
  {
    name: "myViewBoard Whiteboard",
    appId: "ViewSonic.myViewBoard.Whiteboard",
    version: "2.73.5.0",
  },
  {
    name: "Python Launcher",
    appId: "VinaySajip.PythonLauncher",
    version: "1.0.1.6",
  },
  {
    name: "Harmony",
    appId: "VincentL.Harmony",
    version: "0.9.1",
  },
  {
    name: "IPVTest",
    appId: "Vipre.IPVTest",
    version: "1.0.0.0",
  },
  {
    name: "UDS Enterprise Client",
    appId: "VirtualCable.UDSClient",
    version: "3.6.0.18670",
  },
  {
    name: "Virtual Desktop Streamer",
    appId: "VirtualDesktop.Streamer",
    version: "1.32.13",
  },
  {
    name: "TurboVNC",
    appId: "VirtualGL.TurboVNC",
    version: "3.1",
  },
  {
    name: "VirtualGL-Utils",
    appId: "VirtualGL.VirtualGL",
    version: "3.0.1",
  },
  {
    name: "VirtualHere USB Client",
    appId: "VirtualHere.USBClient",
    version: "5.7.7",
  },
  {
    name: "VirtualHere USB Server",
    appId: "VirtualHere.USBServer",
    version: "4.6.9",
  },
  {
    name: "Virtual Magnifying Glass",
    appId: "VirtualMagnifyingGlass.VirtualMagâ€¦",
    version: "3.6",
  },
  {
    name: "Scala CLI",
    appId: "VirtusLab.ScalaCLI",
    version: "1.5.1",
  },
  {
    name: "VirusTotal Uploader",
    appId: "VirusTotal.VirusTotalUploader",
    version: "2.2",
  },
  {
    name: "YARA",
    appId: "VirusTotal.YARA",
    version: "4.5.2",
  },
  {
    name: "vt-cli",
    appId: "VirusTotal.vt-cli",
    version: "1.0.0",
  },
  {
    name: "VisIt",
    appId: "VisIt.VisIt",
    version: "3.3.3",
  },
  {
    name: "Visual Boy Advance - M",
    appId: "VisualBoyAdvance-M.VisualBoyAdvanâ€¦",
    version: "2.1.5",
  },
  {
    name: "VisualGPSView",
    appId: "VisualGPS.VisualGPSView",
    version: "1.1.401",
  },
  {
    name: "Visual Paradigm CE",
    appId: "VisualParadigm.Community",
    version: "16.3",
  },
  {
    name: "VisualSVN Repository Configuraâ€¦",
    appId: "VisualSVNSoftwareLtd.VisualSVNRepâ€¦",
    version: "5.0.3.0",
  },
  {
    name: "VisualSVN Server",
    appId: "VisualSVNSoftwareLtd.VisualSVNSerâ€¦",
    version: "5.0.3.0",
  },
  {
    name: "Vita3K",
    appId: "Vita3K.Vita3K",
    version: "0.1.9.3505",
  },
  {
    name: "ClipClip",
    appId: "Vitzo.ClipClip",
    version: "2.4.5698",
  },
  {
    name: "Vivaldi",
    appId: "Vivaldi.Vivaldi",
    version: "6.9.3447.51",
  },
  {
    name: "Vivaldi (Snapshot)",
    appId: "Vivaldi.Vivaldi.Snapshot",
    version: "6.10.3483.4",
  },
  {
    name: "WifiMouseServer",
    appId: "VividDesigns.WifiMouseServer",
    version: "1.1.0.0",
  },
  {
    name: "ElectronMail",
    appId: "VladimirYakovlev.ElectronMail",
    version: "5.2.3",
  },
  {
    name: "TinyCodes",
    appId: "Vogan.TinyCodes",
    version: "0.7.1",
  },
  {
    name: "VoiceAttack",
    appId: "VoiceAttack.VoiceAttack",
    version: "1.12",
  },
  {
    name: "Jamulus",
    appId: "VolkerFischer.Jamulus",
    version: "3.11.0",
  },
  {
    name: "Volta",
    appId: "Volta.Volta",
    version: "2.0.1",
  },
  {
    name: "VoodooShield",
    appId: "VoodooSoft.VoodooShield",
    version: "7",
  },
  {
    name: "Vrew",
    appId: "VoyagerX.Vrew",
    version: "2.6.4",
  },
  {
    name: "ChordPro",
    appId: "Vromans.ChordPro",
    version: "6.50.0.1",
  },
  {
    name: "Vup Cloud Storage",
    appId: "Vup.Vup",
    version: "0.14.2",
  },
  {
    name: "Vysor",
    appId: "Vysor.Vysor",
    version: "5.0.7",
  },
  {
    name: "WACUP Installer",
    appId: "WACUP.WACUP",
    version: "1.99.12.18980",
  },
  {
    name: "WFInfo",
    appId: "WFCD.WFInfo",
    version: "9.6.3",
  },
  {
    name: "pstoedit",
    appId: "WGlunz.pstoedit",
    version: "4.1.0.0",
  },
  {
    name: "WHONET 5.6",
    appId: "WHONET.5.6",
    version: "6.22.8",
  },
  {
    name: "AMR Interpretation Engine",
    appId: "WHONET.AMRIE",
    version: "24.8.29",
  },
  {
    name: "WHONET Automation Tool",
    appId: "WHONET.AutomationTool",
    version: "22.7.19",
  },
  {
    name: "WHONET 2024",
    appId: "WHONET.WHONET",
    version: "24.9.25",
  },
  {
    name: "Tamara",
    appId: "WHTA.Tamara",
    version: "2024.1.0.6",
  },
  {
    name: "WK Radar",
    appId: "WK.WKRadar",
    version: "7.12.0.0",
  },
  {
    name: "WPD                             WPD.WPD                            1.5.2042",
    appId: "RC",
    version: "1",
  },
  {
    name: "Wacom Tablet",
    appId: "Wacom.WacomTabletDriver",
    version: "6.4.6-2",
  },
  {
    name: "Display Driver Uninstaller",
    appId: "Wagnardsoft.DisplayDriverUninstalâ€¦",
    version: "18.0.8.1",
  },
  {
    name: "WagoApp",
    appId: "Wago.Addons",
    version: "2.5.7",
  },
  {
    name: "giddh",
    appId: "WalkoverTechnologies.giddh",
    version: "8.0.8",
  },
  {
    name: "Warcraft Logs Uploader",
    appId: "WarcraftLogs.Uploader",
    version: "8.5.10",
  },
  {
    name: "Wargaming.net Game Center",
    appId: "Wargaming.GameCenter",
    version: "24.0.0.5034",
  },
  {
    name: "World of Warships ModStation",
    appId: "Wargaming.WorldOfWarshipsModStatiâ€¦",
    version: "2.1.0.2",
  },
  {
    name: "Terraform Switcher",
    appId: "Warrensbox.TerraformSwitcher",
    version: "0.13.1308",
  },
  {
    name: "Warzone 2100",
    appId: "Warzone2100Project.Warzone2100",
    version: "4.4.2",
  },
  {
    name: "WasmEdge",
    appId: "WasmEdge.WasmEdge",
    version: "0.14.1",
  },
  {
    name: "Wasmer",
    appId: "Wasmer.Wasmer",
    version: "4.3.7",
  },
  {
    name: "WatchGuard Mobile VPN with SSLâ€¦",
    appId: "WatchGuard.MobileVPNWithSSLClient",
    version: "12.1",
  },
  {
    name: "WatchGuard System Manager",
    appId: "WatchGuardTechnologies.WatchGuardâ€¦",
    version: "12.10.4",
  },
  {
    name: "Mazerator",
    appId: "WaterbugStudios.Mazerator",
    version: "0.0.2",
  },
  {
    name: "Mazerator-Old                   WaterbugStudios.MazeratorOld",
    appId: "Nightly",
    version: "20200â€¦",
  },
  {
    name: "Waterfox",
    appId: "Waterfox.Waterfox",
    version: "G6.0.19",
  },
  {
    name: "PowerSession",
    appId: "Watfaq.PowerSession",
    version: "0.1.11",
  },
  {
    name: "Igor Pro 6",
    appId: "WaveMetrics.IgorPro6",
    version: "6.3.7.2",
  },
  {
    name: "Igor Pro 6",
    appId: "WaveMetrics.IgorPro6-64",
    version: "6.3.7.2",
  },
  {
    name: "Igor Pro 7",
    appId: "WaveMetrics.IgorPro7",
    version: "7.0.8.1",
  },
  {
    name: "Igor Pro 8",
    appId: "WaveMetrics.IgorPro8",
    version: "8.0.4.2",
  },
  {
    name: "Igor Pro 9",
    appId: "WaveMetrics.IgorPro9",
    version: "9.0.5.1",
  },
  {
    name: "Waves Central",
    appId: "WavesAudio.WavesCentral",
    version: "15.1.3.310324",
  },
  {
    name: "Wazuh Agent",
    appId: "Wazuh.WazuhAgent",
    version: "4.9.0",
  },
  {
    name: "WeMod",
    appId: "WeMod.WeMod",
    version: "9.10.3",
  },
  {
    name: "WeMod Beta",
    appId: "WeMod.WeMod.Beta",
    version: "9.10.4-beta01",
  },
  {
    name: "WeakAuras Companion",
    appId: "WeakAuras.WeakAurasCompanion",
    version: "5.1.3",
  },
  {
    name: "Weasis",
    appId: "WeasisTeam.Weasis",
    version: "4.5.1",
  },
  {
    name: "WebCatalog",
    appId: "WebCatalogLtd.WebCatalog",
    version: "46.2.0",
  },
  {
    name: "Webroot SecureAnywhere",
    appId: "Webroot.SecureAnywhere",
    version: "9.0.36.40",
  },
  {
    name: "Regedix",
    appId: "Webrox.Regedix",
    version: "2.0.0.0",
  },
  {
    name: "Webstudio",
    appId: "Webstudio.Webstudio",
    version: "1.11.0",
  },
  {
    name: "SQLyog Community",
    appId: "Webyog.SQLyogCommunity",
    version: "13.3.0",
  },
  {
    name: "imhex",
    appId: "WerWolv.ImHex",
    version: "1.35.4",
  },
  {
    name: "Wu10Man",
    appId: "WereDev.Wu10Man",
    version: "4.4.0.0",
  },
  {
    name: "Battle for Wesnoth",
    appId: "Wesnoth.BattleForWesnoth",
    version: "1.16.9",
  },
  {
    name: "Markdown Monster",
    appId: "WestWind.MarkdownMonster",
    version: "3.4.4.0",
  },
  {
    name: "hale studio",
    appId: "Wetransform.HaleStudio",
    version: "5.3.0",
  },
  {
    name: "wfview",
    appId: "Wfview.Wfview",
    version: "1.64",
  },
  {
    name: "WhatPulse",
    appId: "WhatPulse.WhatPulse",
    version: "3.6",
  },
  {
    name: "SignalRgb",
    appId: "WhirlwindFX.SignalRgb",
    version: "2.2.32",
  },
  {
    name: "WHOIS WORKS",
    appId: "Whois.Works",
    version: "1.1.2",
  },
  {
    name: "LinuxConvert",
    appId: "Whop42.LinuxConvert",
    version: "1.0.0",
  },
  {
    name: "WiX Toolset Additional Tools",
    appId: "WiXToolset.WiXAdditionalTools",
    version: "5.0.1",
  },
  {
    name: "WiX Toolset Command-Line Tools",
    appId: "WiXToolset.WiXCLI",
    version: "5.0.1.0",
  },
  {
    name: "WiX Toolset",
    appId: "WiXToolset.WiXToolset",
    version: "3.14.1.8722",
  },
  {
    name: "Widelands",
    appId: "WidelandsDevelopmentTeam.Widelands",
    version: "1",
  },
  {
    name: "W\u0026T COM Port Redirector Legacy",
    appId: "Wiesemann-Theis.Com-Legacy",
    version: "3.94",
  },
  {
    name: "W\u0026T COM Port Redirector Plug \u0026â€¦",
    appId: "Wiesemann-Theis.Com-PnP",
    version: "4.43",
  },
  {
    name: "OPC Server for W\u0026T Network Devâ€¦",
    appId: "Wiesemann-Theis.NetworkOPC",
    version: "4.89",
  },
  {
    name: "Sensobase",
    appId: "Wiesemann-Theis.Sensobase",
    version: "4.45",
  },
  {
    name: "W\u0026T USB Redirector",
    appId: "Wiesemann-Theis.USB-Redirector",
    version: "3.72",
  },
  {
    name: "WuTility",
    appId: "Wiesemann-Theis.WuTility",
    version: "4.81",
  },
  {
    name: "Wiimms ISO Tools",
    appId: "Wiimm.ISO",
    version: "3.05a",
  },
  {
    name: "WikidPad",
    appId: "WikidPad.WikidPad",
    version: "2.3rc02",
  },
  {
    name: "WikidPad (Alpha)",
    appId: "WikidPad.WikidPad.Alpha",
    version: "2.4alpha01",
  },
  {
    name: "Huggle",
    appId: "WikimediaProject.Huggle",
    version: "3.4.12.0",
  },
  {
    name: "Frescobaldi",
    appId: "WilbertBerendsen.Frescobaldi",
    version: "3.3.0",
  },
  {
    name: "0 A.D.",
    appId: "WildfireGames.0AD",
    version: "r27104-alpha",
  },
  {
    name: "Difftastic",
    appId: "Wilfred.difftastic",
    version: "0.60.0",
  },
  {
    name: "NetRadio",
    appId: "WilhelmHappe.NetRadio",
    version: "2.5.6.0",
  },
  {
    name: "Anvil Studio",
    appId: "WillowSoftware.AnvilStudio",
    version: "22.08.03",
  },
  {
    name: "WimyGit",
    appId: "Wimysoft.WimyGit",
    version: "1.0.1",
  },
  {
    name: "Win32DiskImager",
    appId: "Win32diskimager.win32diskimager",
    version: "1.0.0",
  },
  {
    name: "WinAuth",
    appId: "WinAuth.WinAuth",
    version: "3.5.1",
  },
  {
    name: "WinDirStat",
    appId: "WinDirStat.WinDirStat",
    version: "1.1.2",
  },
  {
    name: "WinEdt",
    appId: "WinEdtTeam.WinEdt",
    version: "11.1",
  },
  {
    name: "WinFsp 2023",
    appId: "WinFsp.WinFsp",
    version: "2.0.23075",
  },
  {
    name: "WinMerge",
    appId: "WinMerge.WinMerge",
    version: "2.16.42.1",
  },
  {
    name: "WinMerge Beta",
    appId: "WinMerge.WinMerge.Beta",
    version: "2.16.35.0",
  },
  {
    name: "WinSCP",
    appId: "WinSCP.WinSCP",
    version: "6.3.5",
  },
  {
    name: "WinSCP RC",
    appId: "WinSCP.WinSCP.RC",
    version: "5.18.5-",
  },
  {
    name: "NeXus",
    appId: "WinStep.Nexus",
    version: "22.7",
  },
  {
    name: "WinUAE 64-bit 5.3.0",
    appId: "WinUAE.WinUAE",
    version: "5.3.0",
  },
  {
    name: "Winamp",
    appId: "Winamp.Winamp",
    version: "5.91.0.10029",
  },
  {
    name: "Cashcash",
    appId: "Winbee.cashcash",
    version: "1.2.2",
  },
  {
    name: "studio-cli",
    appId: "WindRiver.studio-cli",
    version: "24.8.2",
  },
  {
    name: "CopyTrans Control Center",
    appId: "WindSolutions.CopyTransControlCenâ€¦",
    version: "5.003",
  },
  {
    name: "Windows-Spotlight",
    appId: "Windows-Spotlight.Windows-Spotligâ€¦",
    version: "1.0.0.0",
  },
  {
    name: "Universal Silent Switch Finder",
    appId: "WindowsPostInstallWizard.Universaâ€¦",
    version: "1.5.0.0",
  },
  {
    name: "Windscribe",
    appId: "Windscribe.Windscribe",
    version: "2.10.16",
  },
  {
    name: "Wings 3D",
    appId: "Wings3D.Wings3D",
    version: "2.2.6.1",
  },
  {
    name: "Wing 101",
    appId: "Wingware.WingIDE101",
    version: "9.1.1.1",
  },
  {
    name: "WireGuard",
    appId: "WireGuard.WireGuard",
    version: "0.5.3",
  },
  {
    name: "Wireshark",
    appId: "WiresharkFoundation.Wireshark",
    version: "4.4.0",
  },
  {
    name: "MathType 7",
    appId: "Wiris.MathType7",
    version: "7.4.10",
  },
  {
    name: "AutoScreenRecorder",
    appId: "WisdomSoftware.AutoScreenRecorder",
    version: "5.0.781",
  },
  {
    name: "Free Media Player",
    appId: "WisdomSoftware.FreeMediaPlayer",
    version: "1.0.109",
  },
  {
    name: "MotionGIF",
    appId: "WisdomSoftware.MotionGIF",
    version: "4.1",
  },
  {
    name: "MotionStudio",
    appId: "WisdomSoftware.MotionStudio",
    version: "4.1",
  },
  {
    name: "ScreenHunter",
    appId: "WisdomSoftware.ScreenHunter",
    version: "7.0.1461",
  },
  {
    name: "Wise AD Cleaner",
    appId: "WiseCleaner.WiseADCleaner",
    version: "1.2.7",
  },
  {
    name: "Wise Care 365",
    appId: "WiseCleaner.WiseCare365",
    version: "6.3.7",
  },
  {
    name: "Wise Data Recovery",
    appId: "WiseCleaner.WiseDataRecovery",
    version: "6.1.3",
  },
  {
    name: "Wise Disk Cleaner",
    appId: "WiseCleaner.WiseDiskCleaner",
    version: "11.0.9",
  },
  {
    name: "Wise Duplicate Finder",
    appId: "WiseCleaner.WiseDuplicateFinder",
    version: "2.0.2",
  },
  {
    name: "Wise Folder Hider",
    appId: "WiseCleaner.WiseFolderHider",
    version: "4.4.3",
  },
  {
    name: "Wise Game Booster",
    appId: "WiseCleaner.WiseGameBooster",
    version: "1.5.7",
  },
  {
    name: "Wise Hotkey",
    appId: "WiseCleaner.WiseHotKey",
    version: "1.2.8",
  },
  {
    name: "Wise Memory Optimizer",
    appId: "WiseCleaner.WiseMemoryOptimizer",
    version: "4.1.8",
  },
  {
    name: "Wise Program Uninstaller",
    appId: "WiseCleaner.WiseProgramUninstaller",
    version: "3.1.1",
  },
  {
    name: "Wise Toys",
    appId: "WiseCleaner.WiseToys",
    version: "1.0.5",
  },
  {
    name: "è¾…å¯¼çŒ«",
    appId: "Wisedu.CAT",
    version: "1.0.4",
  },
  {
    name: "MTGA Launcher",
    appId: "WizardsoftheCoast.MTGALauncher",
    version: "1.0.97",
  },
  {
    name: "JiDuDocumentClear",
    appId: "WlhEx.JiduDocumentClear",
    version: "1.1.0",
  },
  {
    name: "wifbox",
    appId: "WlhEx.WIFbox",
    version: "1.0.6",
  },
  {
    name: "Wolfram Engine 14",
    appId: "WolframResearch.WolframEngine",
    version: "14.1.0",
  },
  {
    name: "Animiz Animation Maker",
    appId: "WonderIdea.Animiz",
    version: "2.5.8",
  },
  {
    name: "ä¸‡å½©æ˜“ç»˜å¤§å¸ˆ",
    appId: "WonderIdea.DrawingMaster",
    version: "2.1.6",
  },
  {
    name: "Flip PDF Plus",
    appId: "WonderIdea.FlipPDFPlus",
    version: "6.27.6",
  },
  {
    name: "Flip PDF Plus Corporate",
    appId: "WonderIdea.FlipPDFPlus.Corporate",
    version: "7.2.13",
  },
  {
    name: "Flip PDF Plus Pro",
    appId: "WonderIdea.FlipPDFPlus.Pro",
    version: "5.2.12",
  },
  {
    name: "Focusky",
    appId: "WonderIdea.Focusky",
    version: "4.0.2",
  },
  {
    name: "Focusky",
    appId: "WonderIdea.Focusky.CN",
    version: "4.8.541",
  },
  {
    name: "ä¸‡å½©æ‰‹å½±å¤§å¸ˆ",
    appId: "WonderIdea.HandActionPlayer",
    version: "2.7.100",
  },
  {
    name: "Mango AM",
    appId: "WonderIdea.MangoAnimationMaker",
    version: "3.0.700",
  },
  {
    name: "Mango CM",
    appId: "WonderIdea.MangoCharacterMaker",
    version: "2.4.600",
  },
  {
    name: "Mango PM",
    appId: "WonderIdea.MangoPresentationMaker",
    version: "4.8.403",
  },
  {
    name: "Mango Video Maker",
    appId: "WonderIdea.MangoVideoMaker",
    version: "1.0.100",
  },
  {
    name: "Mango Whiteboard Animation Makâ€¦",
    appId: "WonderIdea.MangoWhiteboardAnimatiâ€¦",
    version: "2.1.900",
  },
  {
    name: "PUB HTML5",
    appId: "WonderIdea.PUBHTML5",
    version: "5.8.5",
  },
  {
    name: "ä¸‡å½©æ™ºæ¼”",
    appId: "WonderIdea.SmartSlides",
    version: "1.0.606",
  },
  {
    name: "ä¸‡å½©VR",
    appId: "WonderIdea.WanCaiVR",
    version: "1.3.0",
  },
  {
    name: "ä¸‡å½©å½±åƒå¤§å¸ˆ",
    appId: "WonderIdea.YXVideoMaker",
    version: "3.0.5",
  },
  {
    name: "Wondershare Ani3D",
    appId: "Wondershare.Ani3D",
    version: "1.0.2.26",
  },
  {
    name: "Wondershare AniSmall",
    appId: "Wondershare.AniSmall",
    version: "1.0.7.64",
  },
  {
    name: "Wondershare Anireel",
    appId: "Wondershare.Anireel",
    version: "2.3.2",
  },
  {
    name: "Wondershare Creative Center",
    appId: "Wondershare.CreativeCenter",
    version: "1.0.15",
  },
  {
    name: "Wondershare Cropro",
    appId: "Wondershare.Cropro",
    version: "1.0.3.45",
  },
  {
    name: "Wondershare DVD Creator",
    appId: "Wondershare.DVDCreator",
    version: "6.5.8",
  },
  {
    name: "Wondershare DemoCreator",
    appId: "Wondershare.DemoCreator",
    version: "8.2.0",
  },
  {
    name: "ä¸‡å…´å½•æ¼”",
    appId: "Wondershare.DemoCreator.CN",
    version: "7.0.0",
  },
  {
    name: "Wondershare FamiSafe",
    appId: "Wondershare.FamiSafe",
    version: "6.1.8.53",
  },
  {
    name: "Wondershare Filmii",
    appId: "Wondershare.Filmii",
    version: "1.7.3",
  },
  {
    name: "Wondershare Filmora 13",
    appId: "Wondershare.Filmora",
    version: "14.0.7.9572",
  },
  {
    name: "ä¸‡å…´å–µå½±",
    appId: "Wondershare.Filmora.CN",
    version: "6.2.4",
  },
  {
    name: "Wondershare FilmoraPro",
    appId: "Wondershare.Filmora.Pro",
    version: "2.6.11519.633â€¦",
  },
  {
    name: "Fotophire Photo Focus",
    appId: "Wondershare.Fotophire.Focus",
    version: "1.3.1",
  },
  {
    name: "Fotophire Photo Maximizer",
    appId: "Wondershare.Fotophire.Maximizer",
    version: "1.3.1",
  },
  {
    name: "Wondershare Fotophire Slideshoâ€¦",
    appId: "Wondershare.Fotophire.SlideshowMaâ€¦",
    version: "10.0.3",
  },
  {
    name: "Fotophire Toolkit",
    appId: "Wondershare.Fotophire.Toolkit",
    version: "1.3.1",
  },
  {
    name: "Wondershare HiPDF",
    appId: "Wondershare.HiPDF",
    version: "1.0.3",
  },
  {
    name: "Wondershare InClowdz",
    appId: "Wondershare.InClowdz",
    version: "2.0.9",
  },
  {
    name: "Wondershare MirrorGo",
    appId: "Wondershare.MirrorGo",
    version: "2.0.11.346",
  },
  {
    name: "Wondershare MobileTrans",
    appId: "Wondershare.MobileTrans",
    version: "4.5.23",
  },
  {
    name: "Wondershare Mockitt",
    appId: "Wondershare.Mockitt",
    version: "6.0.0",
  },
  {
    name: "mockingbot-studio",
    appId: "Wondershare.Mockitt.CN",
    version: "1.3.6",
  },
  {
    name: "Wondershare PDF Converter Pro",
    appId: "Wondershare.PDFConverter.Pro",
    version: "5.1.0",
  },
  {
    name: "Wondershare PDF Password Removâ€¦",
    appId: "Wondershare.PDFPasswordRemover",
    version: "1.5.3",
  },
  {
    name: "Wondershare PDF Reader",
    appId: "Wondershare.PDFReader",
    version: "1.0.9",
  },
  {
    name: "ä¸‡å…´PDFé˜…è¯»å™¨",
    appId: "Wondershare.PDFReader.CN",
    version: "1.0.11",
  },
  {
    name: "Wondershare PDFelement",
    appId: "Wondershare.PDFelement.10",
    version: "10.4.10",
  },
  {
    name: "Wondershare PDFelement",
    appId: "Wondershare.PDFelement.11",
    version: "11.1.3",
  },
  {
    name: "Wondershare PDFelement 6",
    appId: "Wondershare.PDFelement.6",
    version: "6.8.9.4193",
  },
  {
    name: "Wondershare PDFelement 6 Pro",
    appId: "Wondershare.PDFelement.6.Pro",
    version: "6.8.9.4193",
  },
  {
    name: "Wondershare PDFelement",
    appId: "Wondershare.PDFelement.7",
    version: "7.6.10.5064",
  },
  {
    name: "Wondershare PDFelement",
    appId: "Wondershare.PDFelement.8",
    version: "8.4.13",
  },
  {
    name: "Wondershare PDFelement",
    appId: "Wondershare.PDFelement.9",
    version: "10.4.5",
  },
  {
    name: "ä¸‡å…´PDF",
    appId: "Wondershare.PDFelement.CN",
    version: "11.0.7",
  },
  {
    name: "Wondershare Recoverit",
    appId: "Wondershare.Recoverit",
    version: "13.0.7.7",
  },
  {
    name: "ä¸‡å…´æ¢å¤ä¸“å®¶",
    appId: "Wondershare.Recoverit.CN",
    version: "8.0.3.6",
  },
  {
    name: "Wondershare Repairit",
    appId: "Wondershare.Repairit",
    version: "6.0.3.11",
  },
  {
    name: "ä¸‡å…´æ˜“ä¿®",
    appId: "Wondershare.Repairit.CN",
    version: "4.0.4.2",
  },
  {
    name: "Wondershare UBackit",
    appId: "Wondershare.UBackit",
    version: "4.0.18.8",
  },
  {
    name: "Wondershare UniConverter 13",
    appId: "Wondershare.UniConverter.13",
    version: "13.6.4.1",
  },
  {
    name: "Wondershare UniConverter 14",
    appId: "Wondershare.UniConverter.14",
    version: "14.1.11.147",
  },
  {
    name: "Wondershare UniConverter 15",
    appId: "Wondershare.UniConverter.15",
    version: "15.6.1.25",
  },
  {
    name: "ä¸‡å…´ä¼˜è½¬",
    appId: "Wondershare.UniConverter.CN",
    version: "14.0.11.49",
  },
  {
    name: "Wondershare Virbo",
    appId: "Wondershare.Virbo",
    version: "1.5.25",
  },
  {
    name: "ä¸‡å…´æ’­çˆ†",
    appId: "Wondershare.Virbo.CN",
    version: "1.5.23",
  },
  {
    name: "ä¸‡å…´æ•°æ®ç®¡å®¶",
    appId: "Wondershare.WXRecovery",
    version: "3.5.20.4",
  },
  {
    name: "Baemin Order Relay",
    appId: "WoowaBrothersCorp.BaeminOrder",
    version: "(0.8.2880.0)",
  },
  {
    name: "Planning for Excel",
    appId: "WorkdayInc.PlanningforExcel",
    version: "2024.209.1006â€¦",
  },
  {
    name: "Workrave",
    appId: "Workrave.Workrave",
    version: "1.10.52",
  },
  {
    name: "WORKS",
    appId: "WorksMobile.NAVERWORKS",
    version: "4.0.4.1",
  },
  {
    name: "World of Workflows PE",
    appId: "WorldofWorkflows.WorldofWorkflowsâ€¦",
    version: "1.6.180",
  },
  {
    name: "WowUp beta",
    appId: "WowUp.Beta",
    version: "2.9.0-beta.2",
  },
  {
    name: "WowUp with CurseForge",
    appId: "WowUp.CF",
    version: "2.20.0",
  },
  {
    name: "WowUp with CurseForge beta",
    appId: "WowUp.CFbeta",
    version: "2.9.1-beta.8",
  },
  {
    name: "WowUp",
    appId: "WowUp.Wowup",
    version: "2.20.0",
  },
  {
    name: "Wox",
    appId: "Wox.Wox",
    version: "1.4.1196",
  },
  {
    name: "wolai",
    appId: "Woyun.wolai",
    version: "1.2.10",
  },
  {
    name: "X2Go Client for Windows",
    appId: "X2go.x2goclient",
    version: "4.1.2.2-2020.â€¦",
  },
  {
    name: "tokei",
    appId: "XAMPPRocky.Tokei",
    version: "12.1.2",
  },
  {
    name: "Kodi",
    appId: "XBMCFoundation.Kodi",
    version: "21.1.0.0",
  },
  {
    name: "XCP-ng Center",
    appId: "XCP-ng.Center",
    version: "20.04.01.33",
  },
  {
    name: "CeVIO Voice Package - Color Voâ€¦",
    appId: "XINGInc.AkasakiMinato",
    version: "1.1.2",
  },
  {
    name: "CeVIO Voice Package - Color Voâ€¦",
    appId: "XINGInc.GinsakiYamato",
    version: "1.1.2",
  },
  {
    name: "CeVIO Voice Package - ãƒãƒ«ã‚ªãƒ­â€¦",
    appId: "XINGInc.HAL-O-ROIDMinami",
    version: "2.0.0",
  },
  {
    name: "CeVIO Voice Package - Color Voâ€¦",
    appId: "XINGInc.KinzakiKoharu",
    version: "1.1.2",
  },
  {
    name: "CeVIO Voice Package - Color Voâ€¦",
    appId: "XINGInc.KizakiAiri",
    version: "1.1.2",
  },
  {
    name: "CeVIO Voice Package - Color Voâ€¦",
    appId: "XINGInc.MidorizakiKasumi",
    version: "1.1.2",
  },
  {
    name: "CeVIO Voice Package - Color Voâ€¦",
    appId: "XINGInc.ShirosakiYuudai",
    version: "1.1.2",
  },
  {
    name: "CloudflareSpeedTest",
    appId: "XIU2.CloudflareSpeedTest",
    version: "2.2.5",
  },
  {
    name: "Charles",
    appId: "XK72.Charles",
    version: "4.6.7",
  },
  {
    name: "UPnP Wizard",
    appId: "XLDevelopment.UPnPWizard",
    version: "3.4.0.3",
  },
  {
    name: "XMedia Recode",
    appId: "XMediaRecode.XMediaRecode",
    version: "3.6.0.1",
  },
  {
    name: "xmoto",
    appId: "XMoto.XMoto",
    version: "0.6.2",
  },
  {
    name: "XSplit Broadcaster",
    appId: "XSplit.Broadcaster",
    version: "4.5.2408.0703",
  },
  {
    name: "XSplit Broadcaster PTR",
    appId: "XSplit.Broadcaster.PTR",
    version: "4.4.2205.2602",
  },
  {
    name: "XSplit VCam",
    appId: "XSplit.VCam",
    version: "4.2.2402.0903",
  },
  {
    name: "Xray-core",
    appId: "XTLS.Xray-core",
    version: "1.7.5",
  },
  {
    name: "DuckDNS",
    appId: "XWolfOverride.DuckDNS",
    version: "2.2b",
  },
  {
    name: "Icaros",
    appId: "Xanashi.Icaros",
    version: "3.3.2.302",
  },
  {
    name: "Afformation Requester",
    appId: "Xanthus58.AfformationRequester",
    version: "2.2",
  },
  {
    name: "Still Alive",
    appId: "Xanthus58.PortalStillAlive",
    version: "1",
  },
  {
    name: "Rock Paper Scissors CLI",
    appId: "Xanthus58.RockPaperScissorsCLI",
    version: "1.1",
  },
  {
    name: "Stanlys_Terminal",
    appId: "Xanthus58.Stanlys_Terminal",
    version: "1.0.0",
  },
  {
    name: "Valorant Randomizer",
    appId: "Xanthus58.ValorantRandomizer",
    version: "1.3.2",
  },
  {
    name: "VanillaRenewed",
    appId: "Xanthus58.VanillaRenewed",
    version: "2.3.0",
  },
  {
    name: "WinHTTrack Website Copier",
    appId: "XavierRoche.HTTrack",
    version: "3.49.2",
  },
  {
    name: "Xcas",
    appId: "Xcas.Xcas",
    version: "1.9.0",
  },
  {
    name: "Xencelabs",
    appId: "Xencelabs.Driver",
    version: "1.3.3-68",
  },
  {
    name: "Xenia",
    appId: "Xenia.Xenia",
    version: "1.0.2817",
  },
  {
    name: "XeniaCanary",
    appId: "Xenia.XeniaCanary",
    version: "57a23cf19",
  },
  {
    name: "CADè¿·ä½ ç”»å›¾",
    appId: "Xiaocai.MiniCADDraw",
    version: "2024R5",
  },
  {
    name: "CADè¿·ä½ å®¶è£…",
    appId: "Xiaocai.MiniCADHome",
    version: "2022R1",
  },
  {
    name: "CADè¿·ä½ çœ‹å›¾",
    appId: "Xiaocai.MiniCADSee",
    version: "2024R3.1",
  },
  {
    name: "å°é¹…é€šåŠ©æ‰‹",
    appId: "Xiaoe.Xiaoetong",
    version: "1.10.40",
  },
  {
    name: "MIUI+",
    appId: "Xiaomi.MIUI+",
    version: "2.5.5.643",
  },
  {
    name: "MiService",
    appId: "Xiaomi.MiService",
    version: "3.3.0.293",
  },
  {
    name: "Xiaomi Cloud",
    appId: "Xiaomi.XiaomiCloud",
    version: "2.6.2",
  },
  {
    name: "KOOK",
    appId: "Xiaoyaoyixia.KOOK",
    version: "0.88.4",
  },
  {
    name: "Xibo Player",
    appId: "XiboSignage.XiboPlayer",
    version: "3.307.0",
  },
  {
    name: "Agent Git",
    appId: "Xidicone.AgentGit",
    version: "1.88",
  },
  {
    name: "Agent SVN",
    appId: "Xidicone.AgentSVN",
    version: "2.75",
  },
  {
    name: "Zeus IDE",
    appId: "Xidicone.ZeusIDE",
    version: "3.98y",
  },
  {
    name: "Zeus Lite",
    appId: "Xidicone.ZeusLite",
    version: "3.97z",
  },
  {
    name: "å–œé©¬æ‹‰é›…",
    appId: "Ximalaya.Ximalaya",
    version: "4.0.4",
  },
  {
    name: "å–œé©¬æ‹‰é›…ç›´æ’­åŠ©æ‰‹",
    appId: "Ximalaya.XimalayaLive",
    version: "4.52.877",
  },
  {
    name: "Xlight FTP Server",
    appId: "XlightFTP.XlightFTP",
    version: "3.9.4.2",
  },
  {
    name: "Mogan Research",
    appId: "XmacsLabs.Mogan",
    version: "1.2.9.2",
  },
  {
    name: "XMake build utility",
    appId: "Xmake-io.Xmake",
    version: "2.9.5+20240914",
  },
  {
    name: "AlistHelper",
    appId: "Xmarmalade.AlistHelper",
    version: "v0.1.5",
  },
  {
    name: "Xmind",
    appId: "Xmind.Xmind",
    version: "24.4.10311",
  },
  {
    name: "XMind 8",
    appId: "Xmind.Xmind.8",
    version: "3.7.9.2019120â€¦",
  },
  {
    name: "Xming",
    appId: "Xming.Xming",
    version: "6.9.0.31",
  },
  {
    name: "OpenSCA-cli",
    appId: "XmirrorSecurity.OpenSCA-cli",
    version: "3.0.4",
  },
  {
    name: "XnConvert",
    appId: "XnSoft.XnConvert",
    version: "1.101.0.0",
  },
  {
    name: "XnView",
    appId: "XnSoft.XnView.Classic",
    version: "2.51.7",
  },
  {
    name: "XnView MP",
    appId: "XnSoft.XnViewMP",
    version: "1.8.0.0",
  },
  {
    name: "Xournal++",
    appId: "Xournal++.Xournal++",
    version: "1.2.3",
  },
  {
    name: "å³æ—¶è®¾è®¡",
    appId: "XueyunRuiChuang.JsDesign",
    version: "1.0.7",
  },
  {
    name: "jsDesignAgent",
    appId: "XueyunRuiChuang.JsDesignAgent",
    version: "1.1",
  },
  {
    name: "monolith",
    appId: "Y2Z.Monolith",
    version: "2.8.1",
  },
  {
    name: "Y8 Browser",
    appId: "Y8Games.Y8Browser",
    version: "1.0.11",
  },
  {
    name: "Yet Another Bacnet Explorer",
    appId: "YABE.YetAnotherBacnetExplorer",
    version: "1.3.2",
  },
  {
    name: "YACReader",
    appId: "YACReader.YACReader",
    version: "9.14.2",
  },
  {
    name: "PstRotator",
    appId: "YO3DMU.PstRotator",
    version: "17.66",
  },
  {
    name: "PstRotatorAz",
    appId: "YO3DMU.PstRotatorAz",
    version: "14.9",
  },
  {
    name: "csvlens",
    appId: "YS-L.csvlens",
    version: "0.9.1",
  },
  {
    name: "kaf-cli",
    appId: "YSTYLE.kaf-cli",
    version: "1.3.6",
  },
  {
    name: "kaf-wifi",
    appId: "YSTYLE.kaf-wifi",
    version: "1.0.5",
  },
  {
    name: "YY9",
    appId: "YY.YY",
    version: "9.37.0.0",
  },
  {
    name: "YYAnchor",
    appId: "YY.YYAnchor",
    version: "2.21.1.3899",
  },
  {
    name: "YYè°ƒéŸ³å°",
    appId: "YY.YYAudio",
    version: "1.19.0.1400",
  },
  {
    name: "YaCy",
    appId: "YaCy.YaCy",
    version: "1.924",
  },
  {
    name: "SimpleCom",
    appId: "YaSuenag.SimpleCom",
    version: "1.2.4",
  },
  {
    name: "SYNCROOM Ver.2",
    appId: "Yamaha.SYNCROOM",
    version: "2.0.4",
  },
  {
    name: "Steinberg USB Driver",
    appId: "Yamaha.SteinbergUSBDriver",
    version: "2.1.7",
  },
  {
    name: "Yandere Simulator",
    appId: "YandereDev.YandereSimulator",
    version: "2024.1.15",
  },
  {
    name: "Yandex",
    appId: "Yandex.Browser",
    version: "24.7.4.1316",
  },
  {
    name: "Yandex.Disk",
    appId: "Yandex.Disk",
    version: "3.2.42.5054",
  },
  {
    name: "Yandex Messenger",
    appId: "Yandex.Messenger",
    version: "2.215.1",
  },
  {
    name: "Ð¯Ð½Ð´ÐµÐºÑ ÐœÑƒÐ·Ñ‹ÐºÐ°",
    appId: "Yandex.Music",
    version: "5.20.2",
  },
  {
    name: "kubeconform",
    appId: "YannHamon.kubeconform",
    version: "0.6.6",
  },
  {
    name: "Yarn",
    appId: "Yarn.Yarn",
    version: "1.22.22",
  },
  {
    name: "Yealink USB Connect",
    appId: "Yealink.YealinkUSBConnect",
    version: "4.38.33.0",
  },
  {
    name: "Yealink USB Connect",
    appId: "Yealink.YealinkUSBConnect.CN",
    version: "1.38.33.0",
  },
  {
    name: "Official Krunker.io Client",
    appId: "YendisEntertainment.KrunkerClient",
    version: "3.0.8",
  },
  {
    name: "YAPA-2",
    appId: "YetAnotherPomodoroApp.YAPA2",
    version: "2.0.190",
  },
  {
    name: "Yggdrasil Network",
    appId: "YggdrasilNetwork.Yggdrasil",
    version: "0.5.5",
  },
  {
    name: "NextChat",
    appId: "Yidadaa.ChatGPTNextWeb",
    version: "2.15.3",
  },
  {
    name: "WebKitty",
    appId: "YikuanSun.WebKitty",
    version: "3.2.1",
  },
  {
    name: "Vs. Hex",
    appId: "YingYang48.VsHex",
    version: "D11",
  },
  {
    name: "GameMaker-Studio",
    appId: "YoYoGames.GameMaker.Studio.1",
    version: "1.4",
  },
  {
    name: "GameMaker",
    appId: "YoYoGames.GameMaker.Studio.2",
    version: "2024.8.1.171",
  },
  {
    name: "ä¼˜æ•ˆæ—¥åŽ†",
    appId: "YouXiao.YXCalendar",
    version: "2.4.8.15",
  },
  {
    name: "YXFile",
    appId: "YouXiao.YXFile",
    version: "2.3.11.22",
  },
  {
    name: "Doom Runner",
    appId: "Youda008.DoomRunner",
    version: "1.8.2",
  },
  {
    name: "ç½‘æ˜“æœ‰é“ç¿»è¯‘",
    appId: "Youdao.YoudaoTranslate",
    version: "10.2.9.0",
  },
  {
    name: "ä¼˜é…·",
    appId: "Youku.Youku",
    version: "9.2.42.1001",
  },
  {
    name: "ToDesk",
    appId: "Youqu.ToDesk",
    version: "4.7.4.3",
  },
  {
    name: "YouTube Music Desktop App",
    appId: "Ytmdesktop.Ytmdesktop",
    version: "2.0.5",
  },
  {
    name: "ç‚¹è¯»ç¬”åŠ©æ‰‹",
    appId: "Yuanfudao.TalkingPenAssistant",
    version: "1.1.1",
  },
  {
    name: "çŒ¿è¾…å¯¼",
    appId: "Yuanfudao.Yuanfudao",
    version: "6.116.0",
  },
  {
    name: "uTools",
    appId: "Yuanli.uTools",
    version: "5.2.1",
  },
  {
    name: "Yubico Authenticator",
    appId: "Yubico.Authenticator",
    version: "7.1.0",
  },
  {
    name: "Yubico PIV Tool",
    appId: "Yubico.Piv-Tool",
    version: "2.5.1",
  },
  {
    name: "YubiKey Manager CLI",
    appId: "Yubico.YubiKeyManagerCLI",
    version: "5.5.0",
  },
  {
    name: "YubiKey Personalization Tool",
    appId: "Yubico.YubiKeyPersonalizationTool",
    version: "3.1.25",
  },
  {
    name: "YubiKey Smart Card Minidriver",
    appId: "Yubico.YubiKeySmartCardMinidriver",
    version: "4.1.1.210",
  },
  {
    name: "YubiKey Manager",
    appId: "Yubico.YubikeyManager",
    version: "1.2.6",
  },
  {
    name: "Kocard",
    appId: "Yuejing.Kocard",
    version: "3.0.4",
  },
  {
    name: "Yumi Legacy (BIOS)",
    appId: "YumiUsb.Legacy",
    version: "2.0.9.4",
  },
  {
    name: "Yumi UEFI",
    appId: "YumiUsb.UEFI",
    version: "0.0.4.6",
  },
  {
    name: "MultiPar",
    appId: "YutakaSawada.MultiPar",
    version: "1.3.2.9",
  },
  {
    name: "MultiPar",
    appId: "YutakaSawada.MultiPar.Beta",
    version: "1.3.3.3",
  },
  {
    name: "Z-Cron Scheduler",
    appId: "Z-DBackup.Z-Cron",
    version: "6.4",
  },
  {
    name: "Z-Library",
    appId: "Z-Library.Z-Library",
    version: "1.1.0",
  },
  {
    name: "Zed Attack Proxy",
    appId: "ZAP.ZAP",
    version: "2.15.0",
  },
  {
    name: "BSManager",
    appId: "Zagrios.BSManager",
    version: "1.4.8",
  },
  {
    name: "AVR-GCC",
    appId: "ZakKemble.avr-gcc",
    version: "14.1.0",
  },
  {
    name: "Zandronum",
    appId: "Zandronum.Zandronum",
    version: "3.1",
  },
  {
    name: "Zello",
    appId: "ZelloInc.Zello",
    version: "2.6.0.0",
  },
  {
    name: "Zen Browser",
    appId: "Zen-Team.Zen-Browser",
    version: "1.0.1-a.7",
  },
  {
    name: "Zen Browser (Optimized build)",
    appId: "Zen-Team.Zen-Browser.Optimized",
    version: "1.0.1-a.7",
  },
  {
    name: "æžç©ºé—´",
    appId: "Zentraedi.ZSPACE",
    version: "2.4.2023051208",
  },
  {
    name: "Studio",
    appId: "ZeroBrane.Studio",
    version: "2",
  },
  {
    name: "Zero Install",
    appId: "ZeroInstall.ZeroInstall",
    version: "2.25.8",
  },
  {
    name: "ZeroTier One",
    appId: "ZeroTier.ZeroTierOne",
    version: "1.14.0",
  },
  {
    name: "Zeta Resource Editor",
    appId: "ZetaSoftwareGmbH.ZetaResourceEditâ€¦",
    version: "2.3.86.0",
  },
  {
    name: "Zettlr",
    appId: "Zettlr.Zettlr",
    version: "3.2.2",
  },
  {
    name: "Zettlr Beta",
    appId: "Zettlr.Zettlr.Beta",
    version: "3.0.0-beta.8",
  },
  {
    name: "nGlide",
    appId: "ZeusSoftware.nGlide",
    version: "2.1",
  },
  {
    name: "zg-ipchat Peer-to-peer chat toâ€¦",
    appId: "Zheguisoft.zg-ipchat",
    version: "1.00.05",
  },
  {
    name: "zg-zsso",
    appId: "Zheguisoft.zg-zsso",
    version: "2.0.2",
  },
  {
    name: "Zhegui master data management â€¦",
    appId: "Zheguisoft.zg_mdm",
    version: "6.2.0.5",
  },
  {
    name: "Zhegui turnover packaging applâ€¦",
    appId: "Zheguisoft.zg_pkg",
    version: "1.0.0.0",
  },
  {
    name: "Zhegui printing platform system",
    appId: "Zheguisoft.zg_print",
    version: "6.2.0.5",
  },
  {
    name: "Zhegui upload platform system",
    appId: "Zheguisoft.zg_upload",
    version: "6.2.0.5",
  },
  {
    name: "æ™ºè°±æ¸…è¨€",
    appId: "ZhipuAI.ChatGLM",
    version: "1.0.37",
  },
  {
    name: "Boom",
    appId: "ZhongshiHuiyun.Boom",
    version: "3.6.16",
  },
  {
    name: "Stickies",
    appId: "ZhornSoftware.Stickies",
    version: "10.1d",
  },
  {
    name: "Temp_Cleaner GUI",
    appId: "Ziad.TCG",
    version: "6.9-stable",
  },
  {
    name: "Pomatez",
    appId: "Zidoro.Pomatez",
    version: "1.7.2",
  },
  {
    name: "å­—é­‚",
    appId: "Zihun.Zihun",
    version: "2.0.3.0",
  },
  {
    name: "Zim Desktop Wiki",
    appId: "Zimwiki.Zim",
    version: "0.75.2",
  },
  {
    name: "Zint",
    appId: "Zint.Zint",
    version: "2.4.2.0",
  },
  {
    name: "Zoho WorkDrive TrueSync",
    appId: "Zoho.TrueSync",
    version: "3.9.5",
  },
  {
    name: "Zoom Workplace",
    appId: "Zoom.Zoom",
    version: "6.2.47507",
  },
  {
    name: "Zoom Workplace (EXE)            Zoom.Zoom.EXE",
    appId: "6.2.3",
    version: "(47507)",
  },
  {
    name: "Zoom VDI Workplace",
    appId: "Zoom.Zoom.VDI",
    version: "6.1.25260",
  },
  {
    name: "Zoom Outlook Plugin",
    appId: "Zoom.ZoomOutlookPlugin",
    version: "6.1.5",
  },
  {
    name: "ZoomRemoteControl",
    appId: "Zoom.ZoomRemoteControl",
    version: "6.1.351",
  },
  {
    name: "Zoom Rooms",
    appId: "Zoom.ZoomRooms",
    version: "6.1.11",
  },
  {
    name: "Zoom Skype for Business Plugin",
    appId: "Zoom.ZoomSkypeForBusinessPlugin",
    version: "5.13.10",
  },
  {
    name: "Quba",
    appId: "ZugferdCommunity.QubaViewer",
    version: "1.4.0",
  },
  {
    name: "Zulip",
    appId: "Zulip.Zulip",
    version: "5.11.1.0",
  },
  {
    name: "Zwift",
    appId: "Zwift.Zwift",
    version: "1.1.13",
  },
  {
    name: "ZNotify Cli",
    appId: "Zxilly.NotifyCli",
    version: "0.2.0",
  },
  {
    name: "Compass",
    appId: "Zype.Compass",
    version: "1.1.0",
  },
  {
    name: "YTDownloader",
    appId: "aandrew-me.ytDownloader",
    version: "3.17.1",
  },
  {
    name: "vcredist",
    appId: "abbodi1406.vcredist",
    version: "0.83.0",
  },
  {
    name: "sttr",
    appId: "abhimanyu003.sttr",
    version: "0.2.23",
  },
  {
    name: "ALEAPP",
    appId: "abrignoni.ALEAPP",
    version: "3.1.6",
  },
  {
    name: "ALEAPP CLI",
    appId: "abrignoni.ALEAPP-cli",
    version: "3.1.8",
  },
  {
    name: "iLEAPP",
    appId: "abrignoni.iLEAPP",
    version: "1.18.7",
  },
  {
    name: "iLEAPP CLI",
    appId: "abrignoni.iLEAPP-cli",
    version: "1.18.7",
  },
  {
    name: "Gource",
    appId: "acaudwell.Gource",
    version: "0.53",
  },
  {
    name: "Duplicacy Web Edition",
    appId: "acrosync.DuplicacyWeb",
    version: "1.8.0",
  },
  {
    name: "Acrosync",
    appId: "acrosync.acrosync",
    version: "1.7.611",
  },
  {
    name: "VolumeLock",
    appId: "actualsolution.VolumeLock",
    version: "2.4.1",
  },
  {
    name: "PowerToys-Run-Currency-Convertâ€¦",
    appId: "advaith.CurrencyConverterPowerToys",
    version: "1.3.0",
  },
  {
    name: "HLAE",
    appId: "advancedfx.HLAE",
    version: "2.132.3",
  },
  {
    name: "Echo",
    appId: "afractal.Echo",
    version: "1.0.0",
  },
  {
    name: "Metronome",
    appId: "afractal.Metronome",
    version: "1.0.60",
  },
  {
    name: "TwitterTron",
    appId: "afractal.TwitterTron",
    version: "1.0.2",
  },
  {
    name: "Motrix",
    appId: "agalwood.Motrix",
    version: "1.8.19",
  },
  {
    name: "Switch",
    appId: "ahkohd.switch",
    version: "1.0.23",
  },
  {
    name: "kubectx",
    appId: "ahmetb.kubectx",
    version: "0.9.5",
  },
  {
    name: "kubens",
    appId: "ahmetb.kubens",
    version: "0.9.5",
  },
  {
    name: "sioyek",
    appId: "ahrm.sioyek",
    version: "2.0.0",
  },
  {
    name: "DiscordBotClient",
    appId: "aiko-chan-ai.DiscordBotClient",
    version: "3.5.0",
  },
  {
    name: "impulsar",
    appId: "aimotrens.impulsar",
    version: "0.16.0",
  },
  {
    name: "Flame Launcher",
    appId: "aislx.FlameLauncher",
    version: "1.0.8",
  },
  {
    name: "zoxide",
    appId: "ajeetdsouza.zoxide",
    version: "0.9.6",
  },
  {
    name: "Zadig",
    appId: "akeo.ie.Zadig",
    version: "2.9.788",
  },
  {
    name: "znote",
    appId: "alagrede.znote",
    version: "2.6.6",
  },
  {
    name: "npiperelay",
    appId: "albertony.npiperelay",
    version: "1.6.2",
  },
  {
    name: "WSA PacMan",
    appId: "alesimula.wsa_pacman",
    version: "1.5.0",
  },
  {
    name: "G Desktop Suite",
    appId: "alexkim205.g-desktop-suite",
    version: "0.3.1",
  },
  {
    name: "Album Art Downloader XUI",
    appId: "alexvallat.AlbumArtDownloader",
    version: "1.05",
  },
  {
    name: "Double Commander",
    appId: "alexx2000.DoubleCommander",
    version: "1.1.18",
  },
  {
    name: "AddCurrentPath",
    appId: "ali50m.AddCurrentPath",
    version: "1.4.3",
  },
  {
    name: "aliceandbob.io",
    appId: "aliceandbob-io.aliceandbob",
    version: "1.1.0-Beta2",
  },
  {
    name: "Apache Parquet for .NET",
    appId: "aloneguid.ParquetDotnet.floor",
    version: "5.0.0",
  },
  {
    name: "Altair GraphQL Client",
    appId: "altair-graphql.altair",
    version: "7.3.6",
  },
  {
    name: "CalDavSynchronizer",
    appId: "aluxnimm.outlookcaldavsynchronizer",
    version: "4.3.0",
  },
  {
    name: "Dbmate",
    appId: "amacneil.dbmate",
    version: "2.13.0",
  },
  {
    name: "dnslookup",
    appId: "ameshkov.dnslookup",
    version: "1.11.1",
  },
  {
    name: "ABDownloadManager",
    appId: "amir1376.ABDownloadManager",
    version: "1.1.0",
  },
  {
    name: "Markdownify",
    appId: "amitmerchant1990.electron-markdowâ€¦",
    version: "1.1.6",
  },
  {
    name: "FileQL",
    appId: "amrdeveloper.fileql",
    version: "0.5.0",
  },
  {
    name: "GitQL",
    appId: "amrdeveloper.gitql",
    version: "0.25.0",
  },
  {
    name: "ams.Client",
    appId: "ams.SolutionAG.ams.Client.X64",
    version: "9.0.40588",
  },
  {
    name: "vrc-get",
    appId: "anatawa12.vrc-get",
    version: "1.8.1",
  },
  {
    name: "Windroy",
    appId: "andem81.Windroy",
    version: "0.5.5",
  },
  {
    name: "FlÅt",
    appId: "andrewbrey.flot",
    version: "3.0.0",
  },
  {
    name: "Corkscrew Updater",
    appId: "androidWG.Corkscrew",
    version: "1.1.0",
  },
  {
    name: "Angry IP Scanner",
    appId: "angryziber.AngryIPScanner",
    version: "3.9.1",
  },
  {
    name: "Google Chat Electron",
    appId: "ankurk91.GoogleChatElectron",
    version: "2.20.0",
  },
  {
    name: "Lexorium",
    appId: "antnsn.lexorium",
    version: "1.0.9",
  },
  {
    name: "walk",
    appId: "antonmedv.walk",
    version: "1.7.0",
  },
  {
    name: "massCode",
    appId: "antonreshetov.massCode",
    version: "3.11.0",
  },
  {
    name: "spotify_player",
    appId: "aome510.spotify-player",
    version: "0.19.1",
  },
  {
    name: "Vleer",
    appId: "app.vleer",
    version: "1.0.0-beta.3",
  },
  {
    name: "Typora",
    appId: "appmakes.Typora",
    version: "1.9.5",
  },
  {
    name: "aqua",
    appId: "aquaproj.aqua",
    version: "2.36.1",
  },
  {
    name: "Aegisub",
    appId: "arch1t3cht.Aegisub",
    version: "9706--cibuildâ€¦",
  },
  {
    name: "YTSubConverter",
    appId: "arcusmaximus.YTSubConverter",
    version: "1.6.3",
  },
  {
    name: "ArgoCD",
    appId: "argoproj.argocd",
    version: "2.11.3",
  },
  {
    name: "aria2",
    appId: "aria2.aria2",
    version: "1.37.0",
  },
  {
    name: "btop4win",
    appId: "aristocratos.btop4win",
    version: "1.0.4",
  },
  {
    name: "Google Meet",
    appId: "arjun-g.google-meet-desktop",
    version: "1.2.0",
  },
  {
    name: "serizawa",
    appId: "arrow2nd.serizawa",
    version: "2.1.11",
  },
  {
    name: "tokumei-player-plus",
    appId: "arrow2nd.tokumei-player-plus",
    version: "1.3.2",
  },
  {
    name: "åŒ¿åPlayer++",
    appId: "arrow2nd.tokumei-player-pp",
    version: "1.8.7",
  },
  {
    name: "agg",
    appId: "asciinema.agg",
    version: "1.4.3",
  },
  {
    name: "Jerry - Das Schachprogramm",
    appId: "asdfjkl.JerryChess",
    version: "4.2.1",
  },
  {
    name: "YAHB",
    appId: "asdfjkl.YAHB",
    version: "1.0.8.0",
  },
  {
    name: "Assetizr",
    appId: "assetizr.assetizr",
    version: "3.2.2",
  },
  {
    name: "Unfx Proxy Checker",
    appId: "assnctr.unfx-proxy-checker",
    version: "1.7.2",
  },
  {
    name: "ast-grep",
    appId: "ast-grep.ast-grep",
    version: "0.24.1",
  },
  {
    name: "Ruff",
    appId: "astral-sh.ruff",
    version: "0.6.8",
  },
  {
    name: "uv",
    appId: "astral-sh.uv",
    version: "0.4.15",
  },
  {
    name: "Spyglass",
    appId: "athlabs.Spyglass",
    version: "23.11.1",
  },
  {
    name: "Smoke \u0027Em Out Struggle",
    appId: "atsuover.Garcello",
    version: "1aec0",
  },
  {
    name: "audio-router",
    appId: "audiorouterdev.audio-router",
    version: "0.10.2",
  },
  {
    name: "Kitty Kattis Cli",
    appId: "avborup.kitty",
    version: "0.9.0",
  },
  {
    name: "Viana.NET",
    appId: "avosskuehler.viana",
    version: "6.6.1",
  },
  {
    name: "BlinkMind",
    appId: "awehook.BlinkMind",
    version: "0.1.7",
  },
  {
    name: "tartube",
    appId: "axcore.tartube",
    version: "2.5.040",
  },
  {
    name: "focus",
    appId: "ayoisaiah.focus",
    version: "1.4.3",
  },
  {
    name: "Clips",
    appId: "azure06.clips",
    version: "0.2.6",
  },
  {
    name: "aurora windows optimizer",
    appId: "azurejoga.aurorawindowsoptimizer",
    version: "17",
  },
  {
    name: "Gif Your Game",
    appId: "badpanda.GifYourGame",
    version: "6.0.23",
  },
  {
    name: "Baretail",
    appId: "baremetalsoft.baretail",
    version: "3.50a",
  },
  {
    name: "Auto Clicker",
    appId: "bbatistadaniel.autoclicker",
    version: "1",
  },
  {
    name: "Irony Mod Manager",
    appId: "bcssov.IronyModManager",
    version: "1.26.187",
  },
  {
    name: "Bdash",
    appId: "bdash-app.bdash",
    version: "1.16.3",
  },
  {
    name: "Ares",
    appId: "bee-san.Ares",
    version: "0.10.0",
  },
  {
    name: "Beekeeper Studio",
    appId: "beekeeper-studio.beekeeper-studio",
    version: "4.6.8",
  },
  {
    name: "DLSS Swapper",
    appId: "beeradmoore.dlss-swapper",
    version: "1.0.5.0",
  },
  {
    name: "X AIR Edit",
    appId: "behringer.XAIREdit",
    version: "1.7",
  },
  {
    name: "VRCFaceTracking",
    appId: "benaclejames.VRCFaceTracking",
    version: "5.1.1.0",
  },
  {
    name: "kafui",
    appId: "benny93.kafui",
    version: "0.1.31",
  },
  {
    name: "live777",
    appId: "binbat.live777",
    version: "0.5.1",
  },
  {
    name: "live777",
    appId: "binbat.liveman",
    version: "0.5.1",
  },
  {
    name: "whepfrom",
    appId: "binbat.whepfrom",
    version: "0.5.1",
  },
  {
    name: "whipinto",
    appId: "binbat.whipinto",
    version: "0.5.1",
  },
  {
    name: "binjr",
    appId: "binjr.core-x64",
    version: "3.19.0",
  },
  {
    name: "Simple DNSCrypt",
    appId: "bitbeans.SimpleDNSCrypt",
    version: "0.7.1",
  },
  {
    name: "ITS Client",
    appId: "bitmediae-SolutionsGmbH.ITSClient",
    version: "3.0.2.0",
  },
  {
    name: "Bitwig Studio",
    appId: "bitwig.bitwig",
    version: "5.2.4",
  },
  {
    name: "alarm-cron",
    appId: "bl00mber.alarm-cron",
    version: "0.1.1",
  },
  {
    name: "Todolist",
    appId: "blaadje.Todolist",
    version: "0.43.21",
  },
  {
    name: "ipsw",
    appId: "blacktop.ipsw",
    version: "3.1.548",
  },
  {
    name: "ipswd",
    appId: "blacktop.ipswd",
    version: "3.1.548",
  },
  {
    name: "Pkg Config Lite",
    appId: "bloodrock.pkg-config-lite",
    version: "0.28-1",
  },
  {
    name: "typioca",
    appId: "bloznelis.typioca",
    version: "3.1.0",
  },
  {
    name: "blueCFD-Core",
    appId: "bluecfd.bluecfd",
    version: "2020.1.0.0",
  },
  {
    name: "Android11React",
    appId: "blueedge.android11react",
    version: "0.0.3",
  },
  {
    name: "Win11React",
    appId: "blueedge.win11react",
    version: "0.2.9",
  },
  {
    name: "ClipX",
    appId: "bluemars.ClipX",
    version: "1.0.3.8",
  },
  {
    name: "Gow",
    appId: "bmatzelle.Gow",
    version: "0.8.0",
  },
  {
    name: "Boost Note",
    appId: "boostio.boostnote",
    version: "0.23.1",
  },
  {
    name: "Dust",
    appId: "bootandy.dust",
    version: "1.0.0",
  },
  {
    name: "Numara",
    appId: "bornova.numara",
    version: "5.3.1",
  },
  {
    name: "FileDisk",
    appId: "bosse.filedisk",
    version: "22",
  },
  {
    name: "HttpDisk",
    appId: "bosse.httpdisk",
    version: "10.2",
  },
  {
    name: "RomFs",
    appId: "bosse.romfs",
    version: "24",
  },
  {
    name: "SpleeterGUI",
    appId: "boy1dr.SpleeterGui",
    version: "2.9.1",
  },
  {
    name: "win-capture-audio",
    appId: "bozbez.WinCaptureAudio.beta",
    version: "2.2.3",
  },
  {
    name: "Brackets",
    appId: "brackets-cont.brackets",
    version: "2.2.1",
  },
  {
    name: "DSUManager",
    appId: "breeze2.DSUManager",
    version: "0.5.0",
  },
  {
    name: "UWPHook",
    appId: "brianlima.uwphook",
    version: "2.14.1",
  },
  {
    name: "Brim",
    appId: "brimdata.brim",
    version: "1.7.0",
  },
  {
    name: "Kafka-King",
    appId: "bronya0.Kafka-King",
    version: "0.26",
  },
  {
    name: "Browsh",
    appId: "browsh.browsh",
    version: "1.8.2",
  },
  {
    name: "Abricotine",
    appId: "brrd.abricotine",
    version: "1.1.4",
  },
  {
    name: "Companion",
    appId: "brunurd.companion",
    version: "1.5.9",
  },
  {
    name: "ppç›´è¿ž",
    appId: "bshuzhang.PPLink",
    version: "14.1.0",
  },
  {
    name: "Excel Parser Processor",
    appId: "btargac.excel-parser-processor",
    version: "1.3.1",
  },
  {
    name: "Portfolio Performance",
    appId: "buchen.portfolio",
    version: "0.71.1",
  },
  {
    name: "pack",
    appId: "buildpacks.pack",
    version: "0.34.2",
  },
  {
    name: "TypeCode",
    appId: "byCrookie.TypeCode",
    version: "1.1.11",
  },
  {
    name: "å¤©é³³",
    appId: "c-egg.tenhou",
    version: "1.3.0.0",
  },
  {
    name: "qBittorrent Enhanced Edition",
    appId: "c0re100.qBittorrent-Enhanced-Editâ€¦",
    version: "4.6.7.10",
  },
  {
    name: "mdview",
    appId: "c3er.mdview",
    version: "3.1.1",
  },
  {
    name: "cURL",
    appId: "cURL.cURL",
    version: "8.10.1.2",
  },
  {
    name: "tre-command",
    appId: "ca.duan.tre-command",
    version: "0.4.0",
  },
  {
    name: "fork-cleaner",
    appId: "caarlos0.fork-cleaner",
    version: "2.3.1",
  },
  {
    name: "timer",
    appId: "caarlos0.timer",
    version: "1.4.5",
  },
  {
    name: "Steam Tools NG",
    appId: "calendulish.SteamToolsNG",
    version: "3.3.1",
  },
  {
    name: "calibre",
    appId: "calibre.calibre",
    version: "7.19.0",
  },
  {
    name: "calibre portable",
    appId: "calibre.calibre.portable",
    version: "7.19.0.0",
  },
  {
    name: "ChampR",
    appId: "cangzhang.champ-r",
    version: "1.3.11",
  },
  {
    name: "mcfly",
    appId: "cantino.mcfly",
    version: "0.9.1",
  },
  {
    name: "ä¹å¯officeå·¥å…·ç®±",
    appId: "caobinrg.electron-office-tools",
    version: "0.0.1",
  },
  {
    name: "WindowResizer",
    appId: "caoyue.WindowResizer",
    version: "1.3.4",
  },
  {
    name: "Capâ€™n Proto",
    appId: "capnproto.capnproto",
    version: "0.10.4",
  },
  {
    name: "anime-library",
    appId: "cawa-93.anime-library",
    version: "22.3.22-1028",
  },
  {
    name: "view2er",
    appId: "cedric.view2er",
    version: "1.0.0",
  },
  {
    name: "chaiNNer",
    appId: "chaiNNer-org.chaiNNer",
    version: "0.24.1",
  },
  {
    name: "SmartTaskbar",
    appId: "chanplecai.smarttaskbar",
    version: "1.4.5",
  },
  {
    name: "freeze",
    appId: "charmbracelet.freeze",
    version: "0.1.6",
  },
  {
    name: "glow",
    appId: "charmbracelet.glow",
    version: "2.0.0",
  },
  {
    name: "gum",
    appId: "charmbracelet.gum",
    version: "0.14.5",
  },
  {
    name: "markscribe",
    appId: "charmbracelet.markscribe",
    version: "0.8.1",
  },
  {
    name: "melt",
    appId: "charmbracelet.melt",
    version: "0.6.2",
  },
  {
    name: "mods",
    appId: "charmbracelet.mods",
    version: "1.6.0",
  },
  {
    name: "pop",
    appId: "charmbracelet.pop",
    version: "0.2.0",
  },
  {
    name: "skate",
    appId: "charmbracelet.skate",
    version: "1.0.0",
  },
  {
    name: "soft-serve",
    appId: "charmbracelet.soft-serve",
    version: "0.7.6",
  },
  {
    name: "vhs",
    appId: "charmbracelet.vhs",
    version: "0.8.0",
  },
  {
    name: "wishlist",
    appId: "charmbracelet.wishlist",
    version: "0.15.0",
  },
  {
    name: "go-p2ptunnel",
    appId: "chenjia404.go-p2ptunnel",
    version: "0.2.32",
  },
  {
    name: "aleph",
    appId: "chezhe.Aleph",
    version: "0.7.1",
  },
  {
    name: "sd - search \u0026 displace",
    appId: "chmln.sd",
    version: "1.0.0",
  },
  {
    name: "SmartRename",
    appId: "chrdavis.smartrename",
    version: "1.0.0",
  },
  {
    name: "Clink",
    appId: "chrisant996.Clink",
    version: "1.6.21",
  },
  {
    name: "GB Studio",
    appId: "chrismaltby.gb-studio",
    version: "4.0.0",
  },
  {
    name: "Discord History Tracker",
    appId: "chylex.DiscordHistoryTracker",
    version: "42.1",
  },
  {
    name: "Cinny desktop",
    appId: "cinnyapp.cinny-desktop",
    version: "4.2.1",
  },
  {
    name: "Kindle Comic Converter",
    appId: "ciromattia.KCC",
    version: "6.2.0",
  },
  {
    name: "Network-Status-Check",
    appId: "cjerrington.net-check",
    version: "1.0.8",
  },
  {
    name: "clawPDF",
    appId: "clawSoft.clawPDF",
    version: "0.9.3",
  },
  {
    name: "Close",
    appId: "closeio.Close",
    version: "9.0.2",
  },
  {
    name: "CloudNet",
    appId: "cloudnet.cloudnet",
    version: "1.36.2.20",
  },
  {
    name: "MPC-HC",
    appId: "clsid2.mpc-hc",
    version: "2.3.5",
  },
  {
    name: "Cobalt SSG",
    appId: "cobalt-org.cobalt",
    version: "0.19.6",
  },
  {
    name: "carnac",
    appId: "code52.Carnac",
    version: "2.3.13",
  },
  {
    name: "Neo Cowsay",
    appId: "codehex.Neo-cowsay",
    version: "2.0.4",
  },
  {
    name: "Very Sleepy",
    appId: "codersnotes.VerySleepy",
    version: "0.91",
  },
  {
    name: "Haskell Stack",
    appId: "commercialhaskell.stack",
    version: "3.1.1",
  },
  {
    name: "commet",
    appId: "commetchat.commet",
    version: "0.2.1",
  },
  {
    name: "Converse Desktop",
    appId: "converse.converse",
    version: "10.1.5",
  },
  {
    name: "Corda Node Explorer",
    appId: "corda.node-explorer",
    version: "0.1.2",
  },
  {
    name: "MCX Studio",
    appId: "coti.mcxstudio",
    version: "v2024.2",
  },
  {
    name: "VPKEdit",
    appId: "craftablescience.VPKEdit",
    version: "4.3.0",
  },
  {
    name: "resticprofile",
    appId: "creativeprojects.resticprofile",
    version: "0.26.0",
  },
  {
    name: "roforge",
    appId: "cristiano100.roforge",
    version: "0.1",
  },
  {
    name: "a2fa",
    appId: "csyezheng.a2fa",
    version: "0.16.5",
  },
  {
    name: "Password Tech",
    appId: "cthoeing.PasswordTech",
    version: "3.5.4",
  },
  {
    name: "UserDiag",
    appId: "ctrl-f.userdiag",
    version: "24.2.5",
  },
  {
    name: "ZY Player",
    appId: "cuiocean.zyplayer",
    version: "2.8.8",
  },
  {
    name: "cyanrip",
    appId: "cyanreg.cyanrip",
    version: "0.9.3.1",
  },
  {
    name: "Notepad Next",
    appId: "dail8859.NotepadNext",
    version: "0.8",
  },
  {
    name: "procs",
    appId: "dalance.procs",
    version: "0.14.5",
  },
  {
    name: "Electron Screen Recorder",
    appId: "daltonmenezes.electron-screen-recâ€¦",
    version: "2.1.1",
  },
  {
    name: "delta",
    appId: "dandavison.delta",
    version: "0.18.2",
  },
  {
    name: "ModernDeck",
    appId: "dangeredwolf.ModernDeck",
    version: "10.0.0",
  },
  {
    name: "rmstale",
    appId: "danstis.rmstale",
    version: "1.15.2",
  },
  {
    name: "darktable",
    appId: "darktable.darktable",
    version: "4.8.1",
  },
  {
    name: "DAWG",
    appId: "dawg.dawg",
    version: "0.2.3",
  },
  {
    name: "UsbDk",
    appId: "daynix.UsbDk",
    version: "1.0.22",
  },
  {
    name: "DBeaver Community Edition",
    appId: "dbeaver.dbeaver",
    version: "24.2.1",
  },
  {
    name: "tealdeer",
    appId: "dbrgn.tealdeer",
    version: "1.6.1",
  },
  {
    name: "FlexASIO",
    appId: "dechamps.FlexASIO",
    version: "1.10b",
  },
  {
    name: "Mr.Dclutterer",
    appId: "deep5050.MrDclutterer",
    version: "1.0.0",
  },
  {
    name: "qikqr",
    appId: "deep5050.qikQR",
    version: "1.0.1",
  },
  {
    name: "LDtk",
    appId: "deepnight.LDtk",
    version: "1.5.3",
  },
  {
    name: "DeFi Wallet",
    appId: "defi.defi",
    version: "4.1.0",
  },
  {
    name: "DeltaChat",
    appId: "deltachat.deltachat",
    version: "201.42.2",
  },
  {
    name: "Colors",
    appId: "den4b.Colors",
    version: "3.2",
  },
  {
    name: "Hasher",
    appId: "den4b.Hasher",
    version: "4.2",
  },
  {
    name: "RandPass",
    appId: "den4b.RandPass",
    version: "2.2",
  },
  {
    name: "ReNamer",
    appId: "den4b.ReNamer",
    version: "7.6",
  },
  {
    name: "Resizer",
    appId: "den4b.Resizer",
    version: "2.2",
  },
  {
    name: "Shutter",
    appId: "den4b.Shutter",
    version: "4.8",
  },
  {
    name: "legendary",
    appId: "derrod.legendary",
    version: "0.20.34",
  },
  {
    name: "Deskfiler",
    appId: "deskfiler.deskfiler",
    version: "1.2.3",
  },
  {
    name: "USBPcap",
    appId: "desowin.USBPcap",
    version: "1.5.4.0",
  },
  {
    name: "DroidCam Client",
    appId: "dev47apps.DroidCam",
    version: "6.5.2",
  },
  {
    name: "NS-USBloader",
    appId: "developersu.ns-usbloader",
    version: "7.1",
  },
  {
    name: "kafkactl",
    appId: "deviceinsight.kafkactl",
    version: "5.3.0",
  },
  {
    name: "kafkactl-aws-plugin",
    appId: "deviceinsight.kafkactl-aws-plugin",
    version: "1.1.1",
  },
  {
    name: "kafkactl-azure-plugin",
    appId: "deviceinsight.kafkactl-azure-plugâ€¦",
    version: "1.1.1",
  },
  {
    name: "Mobster",
    appId: "dillonkearns.mobster",
    version: "0.0.48",
  },
  {
    name: "direnv",
    appId: "direnv.direnv",
    version: "2.34.0",
  },
  {
    name: "AAAAXY",
    appId: "divVerent.AAAAXY",
    version: "1.5.139",
  },
  {
    name: "dnGREP",
    appId: "dnGrep.dnGrep",
    version: "4.2.84.0",
  },
  {
    name: "dnSpy",
    appId: "dnSpyEx.dnSpy",
    version: "6.5.1",
  },
  {
    name: "dev-sidecar",
    appId: "docmirror.dev-sidecar",
    version: "1.8.1",
  },
  {
    name: "Dokan Library",
    appId: "dokan-dev.Dokany",
    version: "2.1.0.1000",
  },
  {
    name: "regpack",
    appId: "donkrage.regpack",
    version: "1.52",
  },
  {
    name: "usbipd-win",
    appId: "dorssel.usbipd-win",
    version: "4.3.0",
  },
  {
    name: "paint.net",
    appId: "dotPDN.PaintDotNet",
    version: "5.0.13",
  },
  {
    name: "clipboard-manager-electron",
    appId: "dotenorio.clipboard-manager-electâ€¦",
    version: "3.6.5",
  },
  {
    name: "dotenvx",
    appId: "dotenvx.dotenvx",
    version: "1.14.1",
  },
  {
    name: "Bredbandskollen CLI",
    appId: "dotse.bredbandskollen",
    version: "1.2",
  },
  {
    name: "WEHAGO",
    appId: "douzone.WEHAGO",
    version: "1.4.5",
  },
  {
    name: "SFTPGo",
    appId: "drakkan.SFTPGo",
    version: "v2.6.2",
  },
  {
    name: "FLO",
    appId: "dreamus.flo",
    version: "1.0.8",
  },
  {
    name: "RetroBar",
    appId: "dremin.RetroBar",
    version: "1.16",
  },
  {
    name: "OneLeft",
    appId: "drscaon.OneLeft",
    version: "2.0.0",
  },
  {
    name: "Helios Launcher",
    appId: "dscalzi.HeliosLauncher",
    version: "2.2.1",
  },
  {
    name: "innoextract",
    appId: "dscharrer.innoextract",
    version: "1.9",
  },
  {
    name: "puppetry",
    appId: "dsheiko.puppetry",
    version: "3.2.6.0",
  },
  {
    name: "xh",
    appId: "ducaale.xh",
    version: "0.22.2",
  },
  {
    name: "digiCamControl",
    appId: "dukus.digiCamControl",
    version: "2.1.6.0",
  },
  {
    name: "CSGO account checker",
    appId: "dumbasPL.CSGOAccountChecker",
    version: "1.4.4",
  },
  {
    name: "gdu",
    appId: "dundee.gdu",
    version: "5.29.0",
  },
  {
    name: "oatmeal",
    appId: "dustinblackman.oatmeal",
    version: "0.13.0",
  },
  {
    name: "MarkRight",
    appId: "dvcrn.markright",
    version: "0.1.11",
  },
  {
    name: "CwSkimmer",
    appId: "dxatlas.CwSkimmer",
    version: "2.1",
  },
  {
    name: "SSTV Tools",
    appId: "dxatlas.SSTVTools",
    version: "1",
  },
  {
    name: "NormCap",
    appId: "dynobo.NormCap",
    version: "0.5.8",
  },
  {
    name: "Hourglass",
    appId: "dziemborowicz.hourglass",
    version: "1.15.0.0",
  },
  {
    name: "SSHells",
    appId: "dzonder.sshells",
    version: "0.1.4",
  },
  {
    name: "iVCam",
    appId: "e2eSoft.iVCam",
    version: "7.3.2",
  },
  {
    name: "Boinc Tasks",
    appId: "eFMer.BoincTasks",
    version: "1.78",
  },
  {
    name: "eM Client",
    appId: "eMClient.eMClient",
    version: "10.0.3530.0",
  },
  {
    name: "eM Client",
    appId: "eMClientInc.eMClient",
    version: "10.0.1495.0",
  },
  {
    name: "eMule",
    appId: "eMule.eMule",
    version: "0.50a",
  },
  {
    name: "eMule (community version)",
    appId: "eMule.eMule.community",
    version: "0.70b",
  },
  {
    name: "eSpeak NG",
    appId: "eSpeak-NG.eSpeak-NG",
    version: "1.51.0",
  },
  {
    name: "Sweet Home 3D",
    appId: "eTeks.SweetHome3D",
    version: "7.4",
  },
  {
    name: "hide.me VPN",
    appId: "eVenture.HideMe",
    version: "3.17.3",
  },
  {
    name: "eask-cli",
    appId: "eask.cli",
    version: "0.10.0",
  },
  {
    name: "qimgv",
    appId: "easymodo.qimgv",
    version: "1.0.2",
  },
  {
    name: "yutu",
    appId: "eat-pray-ai.yutu",
    version: "0.9.7",
  },
  {
    name: "r2modman",
    appId: "ebkr.r2modman",
    version: "3.1.50",
  },
  {
    name: "watch",
    appId: "echocat.watch",
    version: "1.1.1",
  },
  {
    name: "ClassIn",
    appId: "eeo.classin",
    version: "5.1.1.54",
  },
  {
    name: "DevDocs",
    appId: "egoist.devdocs-desktop",
    version: "0.7.2",
  },
  {
    name: "FFmpeg Batch AV Converter",
    appId: "eibol.FFmpegBatchAVConverter",
    version: "3.0.8",
  },
  {
    name: "eksctl",
    appId: "eksctl.eksctl",
    version: "0.191.0",
  },
  {
    name: "redis-gui",
    appId: "ekvedaras.redis-gui",
    version: "2.3.0",
  },
  {
    name: "Dragon UnPACKer",
    appId: "elbereth.DragonUnPACKer",
    version: "5.6.2",
  },
  {
    name: "electerm",
    appId: "electerm.electerm",
    version: "1.40.16",
  },
  {
    name: "TegraRcmGUI",
    appId: "eliboa.TegraRcmGUI",
    version: "2.6.0",
  },
  {
    name: "JamTaba 2",
    appId: "elieserdejesus.JamTaba",
    version: "1",
  },
  {
    name: "Chromium",
    appId: "eloston.ungoogled-chromium",
    version: "129.0.6668.70",
  },
  {
    name: "elvish",
    appId: "elves.elvish",
    version: "0.21.0",
  },
  {
    name: "NoteHighlight2016",
    appId: "elvirbrk.notehighlight2016",
    version: "3.7",
  },
  {
    name: "Monitorian",
    appId: "emoacht.Monitorian",
    version: "4.6.12",
  },
  {
    name: "MQTTX",
    appId: "emqx.mqttx",
    version: "1.10.0",
  },
  {
    name: "BBHouse",
    appId: "endcloud.BBHouse",
    version: "1.2.0",
  },
  {
    name: "Onetab Re",
    appId: "endcloud.OnetabRe",
    version: "1.0.7",
  },
  {
    name: "Ente Auth",
    appId: "ente-io.auth-desktop",
    version: "4.0.2",
  },
  {
    name: "Ente CLI",
    appId: "ente-io.ente.CLI",
    version: "0.1.16",
  },
  {
    name: "ente",
    appId: "ente-io.photos-desktop",
    version: "1.7.4",
  },
  {
    name: "feroxbuster",
    appId: "epi052.feroxbuster",
    version: "2.10.4",
  },
  {
    name: "neovim-qt",
    appId: "equalsraf.neovim-qt",
    version: "0.2.18",
  },
  {
    name: "win32yank",
    appId: "equalsraf.win32yank",
    version: "0.1.1",
  },
  {
    name: "envolve",
    appId: "erdemkosk.envolve",
    version: "1.0.16",
  },
  {
    name: "Taiga",
    appId: "erengy.Taiga",
    version: "1.4.1",
  },
  {
    name: "Thumbcache Viewer",
    appId: "erickutcher.thumbcacheviewer",
    version: "1.0.4.0",
  },
  {
    name: "Thumbs Viewer",
    appId: "erickutcher.thumbsviewer",
    version: "1.0.3.1",
  },
  {
    name: "grate",
    appId: "erikbra.grate",
    version: "1.8.0",
  },
  {
    name: "Vale",
    appId: "errata-ai.Vale",
    version: "3.7.0",
  },
  {
    name: "eSpeak",
    appId: "espeak.espeak",
    version: "1.48.04",
  },
  {
    name: "etcd",
    appId: "etcd-io.etcd",
    version: "3.5.9",
  },
  {
    name: "cloak",
    appId: "evansmurithi.cloak",
    version: "0.2.0",
  },
  {
    name: "Lefthook",
    appId: "evilmartians.lefthook",
    version: "1.7.17",
  },
  {
    name: "SSHFS-Win Manager",
    appId: "evsar3.sshfs-win-manager",
    version: "1.3.1",
  },
  {
    name: "EZ Launcher",
    appId: "ez.launcher",
    version: "1.0.4",
  },
  {
    name: "eza",
    appId: "eza-community.eza",
    version: "0.19.4",
  },
  {
    name: "ezwinports: make",
    appId: "ezwinports.make",
    version: "4.4.1",
  },
  {
    name: "f3d",
    appId: "f3d-app.f3d",
    version: "2.5.0",
  },
  {
    name: "SDRangel",
    appId: "f4exb.sdrangel",
    version: "7.22.0",
  },
  {
    name: "FAIRshare",
    appId: "fairdataihub.FAIRshare",
    version: "2.1.0",
  },
  {
    name: "SODA for SPARC",
    appId: "fairdataihub.SODA-for-SPARC",
    version: "11.0.0",
  },
  {
    name: "Flat Assembler",
    appId: "fasm.fasm",
    version: "1.73.30",
  },
  {
    name: "Sleep Timer",
    appId: "feliskio.sleep-timer",
    version: "1.2.0",
  },
  {
    name: "SimpleDockerUI",
    appId: "felixgborrego.simple-docker-ui",
    version: "0.5.5",
  },
  {
    name: "LegendUtil",
    appId: "femtoCommunity.LegendUtil",
    version: "0.3.0-beta",
  },
  {
    name: "InfiniTex",
    appId: "fetacore.InfiniTex",
    version: "0.9.16",
  },
  {
    name: "MÃ©lodie",
    appId: "feugy.melodie",
    version: "2.0.0",
  },
  {
    name: "ffuf",
    appId: "ffuf.ffuf",
    version: "2.1.0",
  },
  {
    name: "Efficient Compression Tool",
    appId: "fhanau.Efficient-Compression-Tool",
    version: "0.9.5",
  },
  {
    name: "Scarab",
    appId: "fifty-six.Scarab",
    version: "2.5.0.0",
  },
  {
    name: "PWAsForFirefox",
    appId: "filips.FirefoxPWA",
    version: "2.12.5",
  },
  {
    name: "fio",
    appId: "fio.fio",
    version: "3.38",
  },
  {
    name: "DarkThumbs",
    appId: "fire-eggs.DarkThumbs",
    version: "1.9",
  },
  {
    name: "MyPhoneExplorer",
    appId: "fjsoft.MyPhoneExplorer",
    version: "2.1",
  },
  {
    name: "Restfox",
    appId: "flawiddsouza.Restfox",
    version: "0.20.0",
  },
  {
    name: "Frame",
    appId: "floating.frame",
    version: "0.6.9",
  },
  {
    name: "Notepad2",
    appId: "flos-freeware.Notepad2",
    version: "4.2.25",
  },
  {
    name: "f.lux",
    appId: "flux.flux",
    version: "4.134",
  },
  {
    name: "Rnote",
    appId: "flxzt.rnote",
    version: "0.10.2",
  },
  {
    name: "windows-terminal-quake",
    appId: "flyingpie.windows-terminal-quake",
    version: "2.0.10",
  },
  {
    name: "windows-terminal-quake-prereleâ€¦",
    appId: "flyingpie.windows-terminal-quake.â€¦",
    version: "2.0.0.6",
  },
  {
    name: "WebM for Premiere",
    appId: "fnordsoftware.WebMforPremiere",
    version: "1.0.0",
  },
  {
    name: "media-get",
    appId: "foamzou.media-get",
    version: "0.2.13",
  },
  {
    name: "QLog",
    appId: "foldynl.QLog",
    version: "0.38.0",
  },
  {
    name: "Fotor",
    appId: "fotor.fotor",
    version: "4.1.2",
  },
  {
    name: "reportify",
    appId: "francWhite.reportify",
    version: "1.2.0",
  },
  {
    name: "watchex",
    appId: "francWhite.watchex",
    version: "1.0.4",
  },
  {
    name: "Birds Kitchen",
    appId: "fredserva.birdskitchen",
    version: "0.8.3",
  },
  {
    name: "FreifunkMeet",
    appId: "freifunkMUC.FreifunkMeet",
    version: "2024.3.0",
  },
  {
    name: "busybox-w32",
    appId: "frippery.busybox-w32",
    version: "1.37.0-FRP-53â€¦",
  },
  {
    name: "fselect",
    appId: "fselect.fselect",
    version: "0.8.6",
  },
  {
    name: "VVV (Virtual Volumes View)",
    appId: "fsenore.VVV",
    version: "1.5",
  },
  {
    name: "TTS Now",
    appId: "funnyzak.TTSNow",
    version: "1.0.6",
  },
  {
    name: "mediaChips",
    appId: "fupdec.mediaChips",
    version: "0.11.2",
  },
  {
    name: "BSRDC",
    appId: "fuyoo.BSRDC",
    version: "1.1.1",
  },
  {
    name: "EnvyUpdate",
    appId: "fyr77.EnvyUpdate",
    version: "3.6",
  },
  {
    name: "Monit",
    appId: "fzf404.Monit",
    version: "0.8.1",
  },
  {
    name: "Pomodoro",
    appId: "g07cha.pomodoro",
    version: "3.5.0",
  },
  {
    name: "Gaphor",
    appId: "gaphor.gaphor",
    version: "2.26.0",
  },
  {
    name: "Gmvault",
    appId: "gaubert.gmvault",
    version: "1.9.1",
  },
  {
    name: "Perspective",
    appId: "gdiObjects.Perspective",
    version: "3.1.2203.2",
  },
  {
    name: "fotoXplorer",
    appId: "gdiObjects.fotoXplorer",
    version: "1.0.2108.21",
  },
  {
    name: "xBar",
    appId: "gdiObjects.xBar",
    version: "2.0.2305.18",
  },
  {
    name: "PDF24 Creator",
    appId: "geeksoftwareGmbH.PDF24Creator",
    version: "11.20.1",
  },
  {
    name: "gsudo",
    appId: "gerardog.gsudo",
    version: "2.5.1",
  },
  {
    name: "zola",
    appId: "getzola.zola",
    version: "0.19.2",
  },
  {
    name: "Duplicacy Command Line Version",
    appId: "gilbertchen.duplicacy.cli",
    version: "3.2.3",
  },
  {
    name: "WindowTop",
    appId: "gileli121.windowtop",
    version: "5.22.5",
  },
  {
    name: "git-cola",
    appId: "git-cola.git-cola",
    version: "4.7.1",
  },
  {
    name: "Thermal",
    appId: "gitthermal.thermal",
    version: "0.0.4",
  },
  {
    name: "gittuf",
    appId: "gittuf.gittuf",
    version: "0.5.2",
  },
  {
    name: "testmyapp",
    appId: "gjergj.testmyapp",
    version: "0.0.76",
  },
  {
    name: "KONNEKT",
    appId: "glueckkanja.KONNEKT",
    version: "2.10.0",
  },
  {
    name: "GlazeWM",
    appId: "glzr-io.glazewm",
    version: "3.3.0",
  },
  {
    name: "Zebar",
    appId: "glzr-io.zebar",
    version: "1.8.1",
  },
  {
    name: "Echoes",
    appId: "gmbertani.Echoes",
    version: "0.5",
  },
  {
    name: "Gmsh",
    appId: "gmsh.gmsh",
    version: "4.12.2",
  },
  {
    name: "Looking Glass",
    appId: "gnif.LookingGlass",
    version: "B6",
  },
  {
    name: "Dia",
    appId: "gnome.Dia",
    version: "0.97.2",
  },
  {
    name: "gedit Text Editor",
    appId: "gnome.gedit",
    version: "3.20.1",
  },
  {
    name: "gitg",
    appId: "gnome.gitg",
    version: "41",
  },
  {
    name: "gnuplot                         gnuplot.gnuplot",
    appId: "6.0",
    version: "patchleveâ€¦",
  },
  {
    name: "go-musicfox",
    appId: "go-musicfox.go-musicfox",
    version: "4.5.3",
  },
  {
    name: "shiori",
    appId: "go-shiori.shiori",
    version: "1.7.0",
  },
  {
    name: "XIVLauncher",
    appId: "goatcorp.XIVLauncher",
    version: "6.4.1",
  },
  {
    name: "lf",
    appId: "gokcehan.lf",
    version: "r32",
  },
  {
    name: "Gopass CLI",
    appId: "gopass.gopass",
    version: "1.15.13",
  },
  {
    name: "gopass-jsonapi",
    appId: "gopass.gopass-jsonapi",
    version: "1.15.13",
  },
  {
    name: "goplus",
    appId: "goplus.gop",
    version: "1.2.6",
  },
  {
    name: "goreleaser",
    appId: "goreleaser.goreleaser",
    version: "2.3.2",
  },
  {
    name: "goreleaser-pro",
    appId: "goreleaser.goreleaser-pro",
    version: "2.3.2-pro",
  },
  {
    name: "nfpm",
    appId: "goreleaser.nfpm",
    version: "2.40.0",
  },
  {
    name: "Komga",
    appId: "gotson.Komga",
    version: "1.11.1",
  },
  {
    name: "gPodder - Media aggregator andâ€¦",
    appId: "gpodder.gpodder",
    version: "3.11.4",
  },
  {
    name: "clio",
    appId: "gptscript-ai.clio",
    version: "v0.2.0",
  },
  {
    name: "gptscript",
    appId: "gptscript-ai.gptscript",
    version: "v0.9.5",
  },
  {
    name: "NTop",
    appId: "gsass1.NTop",
    version: "0.3.4",
  },
  {
    name: "GStreamer",
    appId: "gstreamerproject.gstreamer",
    version: "1.24.1",
  },
  {
    name: "etcd-manager",
    appId: "gtamas.etcdmanager",
    version: "1.2.0",
  },
  {
    name: "ZXPInstaller",
    appId: "guideguide.ZXPInstaller",
    version: "1.8.2",
  },
  {
    name: "vplayer-next",
    appId: "gumengyu.vplayer-next",
    version: "3.0.1",
  },
  {
    name: "SnipCommand",
    appId: "gurayyarar.SnipCommand",
    version: "0.1.0",
  },
  {
    name: "HashCheck Shell Extension",
    appId: "gurnec.HashCheckShellExtension",
    version: "2.4.0.55",
  },
  {
    name: "fedistar",
    appId: "h3poteto.fedistar",
    version: "1.9.11",
  },
  {
    name: "Whalebird",
    appId: "h3poteto.whalebird-desktop",
    version: "6.0.1",
  },
  {
    name: "Haskell Dockerfile Linter",
    appId: "hadolint.hadolint",
    version: "2.12.0",
  },
  {
    name: "KeyPrank",
    appId: "hakjav.KeyPrank",
    version: "1.1.09.04",
  },
  {
    name: "Cabal",
    appId: "haskell.cabal",
    version: "3.10.2.0",
  },
  {
    name: "oha",
    appId: "hatoo.oha",
    version: "1.4.6",
  },
  {
    name: "Raven Reader",
    appId: "hello-efficiency-inc.raven-reader",
    version: "1.0.80",
  },
  {
    name: "Agantty",
    appId: "herrlichmedia.Agantty",
    version: "1.0.47",
  },
  {
    name: "WinObjEx64",
    appId: "hfiref0x.WinObjEx64",
    version: "2.0.4",
  },
  {
    name: "git-credential-azure",
    appId: "hickford.git-credential-azure",
    version: "0.3.0",
  },
  {
    name: "git-credential-oauth",
    appId: "hickford.git-credential-oauth",
    version: "0.11.1",
  },
  {
    name: "touchHLE",
    appId: "hikari-no-yume.touchHLE",
    version: "0.2.2",
  },
  {
    name: "Music Pattern Generator",
    appId: "hisschemoller.music-pattern-generâ€¦",
    version: "2.2",
  },
  {
    name: "CopyQ",
    appId: "hluk.CopyQ",
    version: "8.0.0",
  },
  {
    name: "KochMorse",
    appId: "hmatuschek.kochmorse",
    version: "3.5.0",
  },
  {
    name: "Hoppscotch",
    appId: "hoppscotch.Hoppscotch",
    version: "24.8.3-0",
  },
  {
    name: "Detect It Easy",
    appId: "horsicq.DIE-engine",
    version: "3.09",
  },
  {
    name: "keymapper",
    appId: "houmain.keymapper",
    version: "4.7.1",
  },
  {
    name: "spright",
    appId: "houmain.spright",
    version: "3.5.0",
  },
  {
    name: "Chafa",
    appId: "hpjansson.Chafa",
    version: "1.14.2",
  },
  {
    name: "Manta",
    appId: "hql287.manta",
    version: "1.1.4",
  },
  {
    name: "ncspot",
    appId: "hrkfdn.ncspot",
    version: "1.0.0",
  },
  {
    name: "mdns-browser",
    appId: "hrzlgnm.mdns-browser",
    version: "0.7.14",
  },
  {
    name: "ngraph-gtk",
    appId: "htrb.ngraph-gtk",
    version: "6.09.07",
  },
  {
    name: "Hello Minecraft! Launcher",
    appId: "huanghongxun.HelloMinecraftLaunchâ€¦",
    version: "3.5.7.245",
  },
  {
    name: "SylphyHornPlus",
    appId: "hwtnb.SylphyHornPlus",
    version: "4.0.0-beta.12",
  },
  {
    name: "Hyperion",
    appId: "hyperion-project.hyperion.ng",
    version: "2.0.15",
  },
  {
    name: "I2P Easy Install Bundle",
    appId: "i2p.firefox",
    version: "beta",
  },
  {
    name: "iA Writer",
    appId: "iA.iAWriter",
    version: "1.4.8641.17184",
  },
  {
    name: "iFile",
    appId: "iFileSpace.iFile",
    version: "2.5.5",
  },
  {
    name: "iFileSpace",
    appId: "iFileSpace.iFileSpace",
    version: "2.0.5",
  },
  {
    name: "è®¯é£žæ–‡æ¡£",
    appId: "iFlytek.iFlyDocs",
    version: "2.1.1142",
  },
  {
    name: "è®¯é£žè¾“å…¥æ³•",
    appId: "iFlytek.iFlyIME",
    version: "3.0.1738",
  },
  {
    name: "è®¯é£žè¯­è®°",
    appId: "iFlytek.iFlyNote",
    version: "5.0.1280",
  },
  {
    name: "iFLYREC",
    appId: "iFlytek.iFlyRecMeeting",
    version: "3.0.1150",
  },
  {
    name: "è®¯é£žå¬è§åŒä¼",
    appId: "iFlytek.iFlyRecSI",
    version: "5.0.3",
  },
  {
    name: "iLovePDF",
    appId: "iLovePDF.iLovePDFDesktop",
    version: "1.4.1.0",
  },
  {
    name: "AnyFix - iOS System Recovery",
    appId: "iMobieInc.AnyFix",
    version: "1.1.0.3",
  },
  {
    name: "Ashampoo WinOptimizer 26",
    appId: "iMobieInc.Ashampoo",
    version: "26.00.24",
  },
  {
    name: "Sideloadly",
    appId: "iOSGods.Sideloadly",
    version: "0.50.3",
  },
  {
    name: "çˆ±å¥‡è‰ºä¸‡èƒ½è”æ’­",
    appId: "iQIYI.GeePlayer",
    version: "6.6.1.5593",
  },
  {
    name: "çˆ±å¥‡è‰º",
    appId: "iQIYI.iQIYI",
    version: "12.8.5.8632",
  },
  {
    name: "iSlide Tools",
    appId: "iSlide.iSlide",
    version: "8.0.0.0",
  },
  {
    name: "DualSafe Password Manager",
    appId: "iTop.DualSafePasswordManager",
    version: "1.4.0.14",
  },
  {
    name: "IOTransfer",
    appId: "iTop.IOTransfer",
    version: "4.3.1.1562",
  },
  {
    name: "Smart Game Booster",
    appId: "iTop.SmartGameBooster",
    version: "5.3.0.670",
  },
  {
    name: "Top Data Protector",
    appId: "iTop.TopDataProtector",
    version: "3.1.0.19",
  },
  {
    name: "iTop Data Recovery",
    appId: "iTop.iTopDataRecovery",
    version: "4.5.0.689",
  },
  {
    name: "iTop Easy Desktop",
    appId: "iTop.iTopEasyDesktop",
    version: "2.6.1.9",
  },
  {
    name: "iTop PDF",
    appId: "iTop.iTopPDF",
    version: "3.6.0.4",
  },
  {
    name: "iTop Private Browser",
    appId: "iTop.iTopPrivateBrowser",
    version: "3.2.0.275",
  },
  {
    name: "iTop Screen Recorder",
    appId: "iTop.iTopScreenRecorder",
    version: "5.1.0.2520",
  },
  {
    name: "iTop Screenshot",
    appId: "iTop.iTopScreenshot",
    version: "1.2.3.544",
  },
  {
    name: "iTop VPN",
    appId: "iTop.iTopVPN",
    version: "6.0.0.5688",
  },
  {
    name: "Product Portal",
    appId: "iZotope.ProductPortal",
    version: "1.4.8",
  },
  {
    name: "OBS RTSP Server Plugin",
    appId: "iamscottxu.obs-rtspserver",
    version: "3.0.0",
  },
  {
    name: "JD-GUI",
    appId: "iamxiaojianzheng.jd-gui",
    version: "1.6.8",
  },
  {
    name: "ILSpy",
    appId: "icsharpcode.ILSpy",
    version: "8.2.0.7535",
  },
  {
    name: "IGdm",
    appId: "ifedapoolarewaju.IGdm",
    version: "3.0.4",
  },
  {
    name: "MakeBookCLI",
    appId: "ignatandrei.MakeBookCLI",
    version: "8.2024.717.22â€¦",
  },
  {
    name: "itun2socks",
    appId: "igoogolx.itun2socks",
    version: "1.20.3",
  },
  {
    name: "lux",
    appId: "igoogolx.lux",
    version: "1.22.0",
  },
  {
    name: "Petal",
    appId: "ilime.petal",
    version: "2.25.0",
  },
  {
    name: "åœ¨é¹¿å±±",
    appId: "inLuShan.Desktop",
    version: "0.1.0",
  },
  {
    name: "inPixio Photo Studio 12 Demo",
    appId: "inPixio.inPixioPhotoStudio",
    version: "12",
  },
  {
    name: "QTTabBar",
    appId: "indiff.QTTabBar",
    version: "1.5.5-beta.9",
  },
  {
    name: "WSA Sideloader",
    appId: "infinitepower18.WSASideloader",
    version: "1.4.7",
  },
  {
    name: "WSA System Control",
    appId: "infinitepower18.WSASystemControl",
    version: "1.0.11",
  },
  {
    name: "iniManager",
    appId: "iniBuilds.iniManager",
    version: "2.3.5",
  },
  {
    name: "PyAudio",
    appId: "intxcc.pyaudio",
    version: "0.2.11",
  },
  {
    name: "ipinfo",
    appId: "ipinfo.ipinfo",
    version: "3.3.1",
  },
  {
    name: "Structured Storage Xplorer",
    appId: "ironfede.StructuredStorageXplorer",
    version: "2.3.1.0",
  },
  {
    name: "Volume2 Portable",
    appId: "irzyxa.Volume2Portable",
    version: "1.1.9.466",
  },
  {
    name: "PresenceLight",
    appId: "isaaclevin.presencelight",
    version: "5.8.7",
  },
  {
    name: "ISN AutoIt Studio",
    appId: "isnetwork.ISNAutoItStudio",
    version: "1.16",
  },
  {
    name: "ChatGPT",
    appId: "j178.ChatGPT",
    version: "1.3.5",
  },
  {
    name: "InstallShield",
    appId: "j5create.Driver-JUA365",
    version: "20.0.496",
  },
  {
    name: "jaeger",
    appId: "jaegertracing.jaeger",
    version: "1.48",
  },
  {
    name: "Polar",
    appId: "jamaljsr.Polar",
    version: "3.0.0",
  },
  {
    name: "James",
    appId: "james.james",
    version: "2.1.2",
  },
  {
    name: "QWS Quick Windows Sequencer",
    appId: "jamesbowden.qws",
    version: "1.56",
  },
  {
    name: "nvs",
    appId: "jasongin.nvs",
    version: "1.7.1",
  },
  {
    name: "jasper",
    appId: "jasperapp.jasper",
    version: "1.1.2",
  },
  {
    name: "Local Mock Server",
    appId: "jayakumarreddy.Local-Mock-Server",
    version: "1.2.0",
  },
  {
    name: "med",
    appId: "jayhuang75.med",
    version: "0.6.2",
  },
  {
    name: "WingetPathUpdater",
    appId: "jazzdelightsme.WingetPathUpdater",
    version: "1.2",
  },
  {
    name: "AutoFLAC",
    appId: "jbreland.autoflac",
    version: "1.2",
  },
  {
    name: "Universal Extractor",
    appId: "jbreland.uniextract",
    version: "1.6.1",
  },
  {
    name: "Codex",
    appId: "jcv8000.Codex",
    version: "2.0.4",
  },
  {
    name: "Minisign",
    appId: "jedisct1.minisign",
    version: "0.11",
  },
  {
    name: "Feishin",
    appId: "jeffvli.Feishin",
    version: "0.10.1",
  },
  {
    name: "Sonixd",
    appId: "jeffvli.Sonixd",
    version: "0.15.5",
  },
  {
    name: "Open Video Downloader",
    appId: "jely2002.youtube-dl-gui",
    version: "2.4.0",
  },
  {
    name: "RedNotebook",
    appId: "jendrikseipp.RedNotebook",
    version: "2.35",
  },
  {
    name: "Voice Desktop",
    appId: "jerrod-lankford.google-voice-deskâ€¦",
    version: "1.3.1",
  },
  {
    name: "iTunes Backup Reader",
    appId: "jfarley218.itunesbackup",
    version: "4.0.1",
  },
  {
    name: "less",
    appId: "jftuga.less",
    version: "661",
  },
  {
    name: "React Native Debugger",
    appId: "jhen0409.ReactNativeDebugger",
    version: "0.14.0",
  },
  {
    name: "Electronic Gmail",
    appId: "jie17.electronic-gmail",
    version: "0.0.18",
  },
  {
    name: "V2Ray Electron",
    appId: "jie17.v2ray-electron",
    version: "0.15.0",
  },
  {
    name: "Joe\u0027s Own Editor for Windows",
    appId: "joe.joe",
    version: "4.6.0.40514",
  },
  {
    name: "John\u0027s Background Switcher",
    appId: "johnsadventures.JohnsBackgroundSwâ€¦",
    version: "5.8",
  },
  {
    name: "texpaste",
    appId: "jonasmusall.texpaste",
    version: "1.2.0",
  },
  {
    name: "DOSBox-X",
    appId: "joncampbell123.DOSBox-X",
    version: "2023.10.06",
  },
  {
    name: "ArmaQDL",
    appId: "jonpas.ArmaQDL",
    version: "1.0.0",
  },
  {
    name: "Arvis",
    appId: "jopemachine.Arvis",
    version: "0.14.6",
  },
  {
    name: "jq",
    appId: "jqlang.jq",
    version: "1.7.1",
  },
  {
    name: "Globalping CLI",
    appId: "jsdelivr.Globalping",
    version: "1.4.0",
  },
  {
    name: "TED Notepad",
    appId: "jsimlo.tednotepad",
    version: "6.3.1",
  },
  {
    name: "npiperelay",
    appId: "jstarks.npiperelay",
    version: "0.1.0",
  },
  {
    name: "Jumppad",
    appId: "jumppad.jumppad",
    version: "0.14.0",
  },
  {
    name: "fzf",
    appId: "junegunn.fzf",
    version: "0.55.0",
  },
  {
    name: "qView",
    appId: "jurplel.qView",
    version: "6.1",
  },
  {
    name: "just-install",
    appId: "just-install.just-install",
    version: "3.4.4",
  },
  {
    name: "Tasmota Device Manager",
    appId: "jziolkowski.tdm",
    version: "0.2.13",
  },
  {
    name: "k3d",
    appId: "k3d.k3d",
    version: "5.6.3",
  },
  {
    name: "k6",
    appId: "k6.k6",
    version: "0.53.0",
  },
  {
    name: "tufie",
    appId: "kairoaraujo.tufie",
    version: "0.3.0",
  },
  {
    name: "Kali Linux",
    appId: "kalilinux.kalilinux",
    version: "1.13.1.0",
  },
  {
    name: "Pennywise",
    appId: "kamranahmedse.pennywise",
    version: "0.8.0",
  },
  {
    name: "Rclone Browser",
    appId: "kapitainsky.RcloneBrowser",
    version: "1.8.0",
  },
  {
    name: "OpenWebStart",
    appId: "karakun.OpenWebStart",
    version: "1.10.1",
  },
  {
    name: "RisohEditor",
    appId: "katahiromz.RisohEditor",
    version: "5.8.1",
  },
  {
    name: "SSIS Multiple Hash",
    appId: "keif888.SSISMHash",
    version: "1.7.6.0",
  },
  {
    name: "ScreenPlay",
    appId: "kelteseth.ScreenPlay.Beta",
    version: "0.15.1-beta1",
  },
  {
    name: "OrangePlayer",
    appId: "kerinlin.OrangePlayer",
    version: "0.2.7",
  },
  {
    name: "port",
    appId: "kevinboss.port",
    version: "1.8.5",
  },
  {
    name: "FromScratch",
    appId: "kilian.fromscratch",
    version: "1.4.3",
  },
  {
    name: "ScreenRecorder",
    appId: "kimhwan.ScreenRecorder",
    version: "1.1.5",
  },
  {
    name: "Klatexformula",
    appId: "klatexformula.klatexformula",
    version: "4.1.0",
  },
  {
    name: "Ao",
    appId: "klaussinani.ao",
    version: "6.9.0",
  },
  {
    name: "Tusk",
    appId: "klaussinani.tusk",
    version: "0.23.0",
  },
  {
    name: "Google Calendar",
    appId: "klinker24.google-calendar-desktop",
    version: "1.7.1",
  },
  {
    name: "K-Meleon",
    appId: "kmeleonbrowser.K-Meleon",
    version: "75",
  },
  {
    name: "Feeder",
    appId: "knoopx.feeder",
    version: "1.11.0",
  },
  {
    name: "ShellCheck",
    appId: "koalaman.shellcheck",
    version: "0.10.0",
  },
  {
    name: "HashPhotos Transfer",
    appId: "kobaltlabInc.HashPhotosTransfer",
    version: "1.0.6.14",
  },
  {
    name: "kubetui",
    appId: "kosay.kubetui",
    version: "1.5.3",
  },
  {
    name: "Cartridges",
    appId: "kramo.Cartridges",
    version: "2.9.3",
  },
  {
    name: "Appel",
    appId: "krishisrani.appel",
    version: "1.0.0.0",
  },
  {
    name: "UndertaleModTool",
    appId: "krzys-h.UndertaleModTool",
    version: "0.5.1.0",
  },
  {
    name: "ksnip",
    appId: "ksnip.ksnip",
    version: "1.10.1",
  },
  {
    name: "Hackaru",
    appId: "ktmouk.Hackaru",
    version: "1.5.21",
  },
  {
    name: "BuildMonitor",
    appId: "ktsu.BuildMonitor",
    version: "1.0.0.0",
  },
  {
    name: "kubescape",
    appId: "kubescape.kubescape",
    version: "3.0.11",
  },
  {
    name: "Switcheroo",
    appId: "kvakulo.switcheroo",
    version: "0.9.2.111",
  },
  {
    name: "Sharedown",
    appId: "kylon.sharedown",
    version: "5.3.4",
  },
  {
    name: "Inno Script Studio",
    appId: "kymoto.InnoScriptStudio",
    version: "2.5.1.0",
  },
  {
    name: "kyverno",
    appId: "kyverno.kyverno",
    version: "1.12.4",
  },
  {
    name: "EVKey",
    appId: "lamquangminh.EVKey",
    version: "5.0.1",
  },
  {
    name: "last-hit",
    appId: "last-hit-team.last-hit",
    version: "0.9.19",
  },
  {
    name: "Launch4j",
    appId: "launch4j.launch4j",
    version: "3.5",
  },
  {
    name: "Code Notes",
    appId: "lauthieb.code-notes",
    version: "1.2.4",
  },
  {
    name: "Upyun Manager",
    appId: "layerssss.manager-for-upyun",
    version: "0.0.9",
  },
  {
    name: "openBVE",
    appId: "leezer3.OpenBVE",
    version: "1.9.2.4",
  },
  {
    name: "Aeon",
    appId: "leinelissen.aeon",
    version: "0.2.22",
  },
  {
    name: "ChatGPT",
    appId: "lencx.ChatGPT",
    version: "1.1.0",
  },
  {
    name: "silex-desktop",
    appId: "lexoyo.silex-desktop",
    version: "2.7.30",
  },
  {
    name: "pipes-rs",
    appId: "lhvy.pipes-rs",
    version: "1.6.0",
  },
  {
    name: "OpenDrive",
    appId: "liberodark.ODrive",
    version: "0.3.0",
  },
  {
    name: "libjpeg-turbo SDK for GCC",
    appId: "libjpeg-turbo.libjpeg-turbo.GCC",
    version: "3.0.4",
  },
  {
    name: "libjpeg-turbo SDK for Visual Câ€¦",
    appId: "libjpeg-turbo.libjpeg-turbo.VC",
    version: "3.0.4",
  },
  {
    name: "Lightspark",
    appId: "lightspark.lightspark",
    version: "0.8.6-git",
  },
  {
    name: "EverythingPowerToys",
    appId: "lin-ycv.EverythingPowerToys",
    version: "0.82.1",
  },
  {
    name: "LINE POD Launcher",
    appId: "linepod.linepodlauncher",
    version: "1.0.50",
  },
  {
    name: "Listen1",
    appId: "listen1.listen1",
    version: "2.32.0",
  },
  {
    name: "Listen1 Fluent",
    appId: "listen1.listen1.fluent",
    version: "2.28.0",
  },
  {
    name: "Lode",
    appId: "lode.lode",
    version: "0.36.0",
  },
  {
    name: "vcluster",
    appId: "loft-sh.vcluster",
    version: "0.18.0",
  },
  {
    name: "Logisim-evolution",
    appId: "logisim-evolution.logisim-evolutiâ€¦",
    version: "3.7.2",
  },
  {
    name: "12306-electron",
    appId: "long-woo.12306-electron",
    version: "1.0.1",
  },
  {
    name: "Erin",
    appId: "losbiw.erin",
    version: "2.1.4",
  },
  {
    name: "linked",
    appId: "lostdesign.linked",
    version: "1.5.2",
  },
  {
    name: "LSDeluxe",
    appId: "lsd-rs.lsd",
    version: "1.1.5",
  },
  {
    name: "EasyConnect",
    appId: "lstratman.easyconnect",
    version: "3.1.0.105",
  },
  {
    name: "Covid-19",
    appId: "luapp.Covid-19-cases-overview",
    version: "1.0.0",
  },
  {
    name: "To Do",
    appId: "luapp.ToDo",
    version: "1.0.0",
  },
  {
    name: "tend",
    appId: "lubomirkurcak.tend",
    version: "0.2.12",
  },
  {
    name: "Dependencies",
    appId: "lucasg.Dependencies",
    version: "1.11.1",
  },
  {
    name: "Lucas Chess (R)",
    appId: "lukasmonk.lucaschess",
    version: "R2.07a",
  },
  {
    name: "RunJS",
    appId: "lukehaas.RunJS",
    version: "2.12.1",
  },
  {
    name: "lychee",
    appId: "lycheeverse.lychee",
    version: "0.15.1",
  },
  {
    name: "lx-music-desktop",
    appId: "lyswhut.lx-music-desktop",
    version: "2.9.0",
  },
  {
    name: "mIRC",
    appId: "mIRC.mIRC",
    version: "7.77",
  },
  {
    name: "mRemoteNG",
    appId: "mRemoteNG.mRemoteNG",
    version: "1.76.20.24615",
  },
  {
    name: "Upcount",
    appId: "madisvain.upcount",
    version: "0.8.3",
  },
  {
    name: "ComicRack Community Edition",
    appId: "maforget.ComicRackCE.Nightly",
    version: "nightly-7635dâ€¦",
  },
  {
    name: "magic-wormhole",
    appId: "magic-wormhole.magic-wormhole",
    version: "0.15.0",
  },
  {
    name: "mBlock",
    appId: "makeblockteam.mBlock",
    version: "5.4.3",
  },
  {
    name: "Didder",
    appId: "makeworld.Didder",
    version: "1.3.0",
  },
  {
    name: "merkdir",
    appId: "makeworld.merkdir",
    version: "1.0.1",
  },
  {
    name: "Etcder",
    appId: "maojindao55.Etcder",
    version: "1.1.4",
  },
  {
    name: "pyftpsync",
    appId: "mar10.pyftpsync",
    version: "4.1.0.0",
  },
  {
    name: "stressor",
    appId: "mar10.stressor",
    version: "0.6.0.0",
  },
  {
    name: "WsgiDAV",
    appId: "mar10.wsgidav",
    version: "4.3.3.0",
  },
  {
    name: "Sharik",
    appId: "marchellodev.Sharik",
    version: "3.1.0",
  },
  {
    name: "VcXsrv",
    appId: "marha.VcXsrv",
    version: "1.20.14.0",
  },
  {
    name: "cLeapp",
    appId: "markmckinnon.cLeapp",
    version: "1",
  },
  {
    name: "lLeapp CLI",
    appId: "markmckinnon.lLeapp",
    version: "1.2",
  },
  {
    name: "lLeapp GUI",
    appId: "markmckinnon.lLeappGUI",
    version: "1.2",
  },
  {
    name: "Color Picker",
    appId: "martinchrzan.ColorPicker",
    version: "1.3.0",
  },
  {
    name: "RSS Guard",
    appId: "martinrotter.RSSGuard",
    version: "4.7.4",
  },
  {
    name: "jj",
    appId: "martinvonz.jj",
    version: "0.22.0",
  },
  {
    name: "Colibri",
    appId: "matchmycolor.Colibri",
    version: "24.2.0.13926",
  },
  {
    name: "Colibri 3",
    appId: "matchmycolor.Colibri.3",
    version: "3.8.12.20487",
  },
  {
    name: "Colibri Alpha",
    appId: "matchmycolor.ColibriAlpha",
    version: "23.2.0.10994",
  },
  {
    name: "Colibri Beta",
    appId: "matchmycolor.ColibriBeta",
    version: "23.1.0.10925",
  },
  {
    name: "MATLAB Drive Connector",
    appId: "mathworks.matlabdrive",
    version: "1.9.1.1",
  },
  {
    name: "Office 365 on Electron",
    appId: "matvelloso.electron-office-365",
    version: "1.1.2.0",
  },
  {
    name: "Office consumer on Electron",
    appId: "matvelloso.electron-office-consumâ€¦",
    version: "1.1.2.0",
  },
  {
    name: "O2",
    appId: "maurizuki.O2",
    version: "3.0.0",
  },
  {
    name: "CustomRP",
    appId: "maximmax42.CustomRP",
    version: "1.17.28",
  },
  {
    name: "Tockler",
    appId: "maygo.tockler",
    version: "3.21.18",
  },
  {
    name: "PanWriter",
    appId: "mb21.panwriter",
    version: "0.8.6",
  },
  {
    name: "sed",
    appId: "mbuilov.sed",
    version: "4.9",
  },
  {
    name: "7-Zip ZS                        mcmilk.7zip-zstd                   22.01",
    appId: "ZS",
    version: "v1.5â€¦",
  },
  {
    name: "MDyna",
    appId: "mdyna.mdyna",
    version: "0.21.0",
  },
  {
    name: "Lion",
    appId: "meew0.Lion",
    version: "1",
  },
  {
    name: "scpterminal",
    appId: "mellobacon.scpterminal",
    version: "0.0.1.0",
  },
  {
    name: "melonDS",
    appId: "melonDS.melonDS",
    version: "0.9.5",
  },
  {
    name: "retoolkit",
    appId: "mentebinaria.retoolkit",
    version: "2023.05",
  },
  {
    name: "Octo Mesh Admin Command Line",
    appId: "meshmakers.octo-cli",
    version: "3.1.37.0",
  },
  {
    name: "Meson Build System",
    appId: "mesonbuild.meson",
    version: "1.4.1",
  },
  {
    name: "Little Big Mouse",
    appId: "mgth.LittleBigMouse",
    version: "4.2.7124.42685",
  },
  {
    name: "DavMail",
    appId: "mguessan.davmail",
    version: "6.2.1-3496",
  },
  {
    name: "archiver",
    appId: "mholt.archiver",
    version: "3.5.0",
  },
  {
    name: "vscli",
    appId: "michidk.vscli",
    version: "1.0.0",
  },
  {
    name: "gallery-dl",
    appId: "mikf.gallery-dl",
    version: "1.27.5",
  },
  {
    name: "mitmproxy",
    appId: "mitmproxy.mitmproxy",
    version: "11.0.0",
  },
  {
    name: "Another Qt installer",
    appId: "miurahr.aqtinstall",
    version: "3.1.12",
  },
  {
    name: "gettext 0.21 + iconv 1.16",
    appId: "mlocati.GetText",
    version: "0.21",
  },
  {
    name: "Markdown Outlook",
    appId: "mmanela.markdownoutlook",
    version: "1.0.0",
  },
  {
    name: "Loop Drop",
    appId: "mmckegg.loopdrop",
    version: "3.0.1",
  },
  {
    name: "wcap",
    appId: "mmozeiko.wcap",
    version: "2022.11.06",
  },
  {
    name: "Deceive",
    appId: "molenzwiebel.Deceive",
    version: "1.14.0",
  },
  {
    name: "Money Manager EX",
    appId: "moneymanagerex.moneymanagerex",
    version: "1.8.0",
  },
  {
    name: "Gopeed",
    appId: "monkeyWie.Gopeed",
    version: "1.6.0",
  },
  {
    name: "Gopeed Web",
    appId: "monkeyWie.Gopeed.Web",
    version: "1.6.0",
  },
  {
    name: "clippo",
    appId: "monsterkodi.clippo",
    version: "1.35.0",
  },
  {
    name: "kalk",
    appId: "monsterkodi.kalk",
    version: "0.16.0",
  },
  {
    name: "kappo",
    appId: "monsterkodi.kappo",
    version: "1.31.0",
  },
  {
    name: "GARbro",
    appId: "morkt.GARbro",
    version: "1.5.44",
  },
  {
    name: "y2mp3",
    appId: "moshfeu.y2mp3",
    version: "3.0.0",
  },
  {
    name: "mpv.net",
    appId: "mpv.net",
    version: "7.1.1.0",
  },
  {
    name: "Space Age seD",
    appId: "ms-jpq.sad",
    version: "0.4.23",
  },
  {
    name: "T.Viewer",
    appId: "msaltnet.TViewer",
    version: "1.2.2",
  },
  {
    name: "LANService",
    appId: "mscststs.LANService",
    version: "1.0.5",
  },
  {
    name: "Evacuationz",
    appId: "mspearpoint.Evacuationz",
    version: "2.13.1",
  },
  {
    name: "Scryer Prolog",
    appId: "mthom.ScryerProlog",
    version: "0.9.3",
  },
  {
    name: "pipe-rename",
    appId: "mtimkovich.pipe-rename",
    version: "1.6.5",
  },
  {
    name: "ludusavi",
    appId: "mtkennerly.ludusavi",
    version: "0.25.0",
  },
  {
    name: "Shawl",
    appId: "mtkennerly.shawl",
    version: "1.5.0",
  },
  {
    name: "muCommander",
    appId: "muCommander.muCommander",
    version: "1.5.1",
  },
  {
    name: "goji",
    appId: "muandane.goji",
    version: "0.1.3",
  },
  {
    name: "duf",
    appId: "muesli.duf",
    version: "0.8.1",
  },
  {
    name: "Before Dawn",
    appId: "muffinista.before-dawn",
    version: "0.30.1",
  },
  {
    name: "Keyviz",
    appId: "mulaRahul.Keyviz",
    version: "1.0.6",
  },
  {
    name: "Recode Converter",
    appId: "murgatt.recode-converter",
    version: "2.0.5",
  },
  {
    name: "shfmt",
    appId: "mvdan.shfmt",
    version: "3.9.0",
  },
  {
    name: "Sendme",
    appId: "n0-computer.sendme",
    version: "0.17.0",
  },
  {
    name: "Uncolored",
    appId: "n457.uncolored",
    version: "0.10.2",
  },
  {
    name: "Orange",
    appId: "naaive.Orange",
    version: "0.6.5",
  },
  {
    name: "OpenHashTab",
    appId: "namazso.OpenHashTab",
    version: "v3.0.4",
  },
  {
    name: "SecureUxTheme",
    appId: "namazso.SecureUXTheme",
    version: "2.2.0",
  },
  {
    name: "gup",
    appId: "nao1215.gup",
    version: "0.27.4",
  },
  {
    name: "é’‰é’‰",
    appId: "nashaofu.dingtalk",
    version: "2.1.22",
  },
  {
    name: "CorvusSKK",
    appId: "nathancorvussolis.corvusskk",
    version: "3.3.0",
  },
  {
    name: "Notepad DOT Qt",
    appId: "ncyxie.Notepad-DOT-Qt",
    version: "1.1.0-s1",
  },
  {
    name: "Notepad--",
    appId: "ndd.Notepad--",
    version: "2.16.0",
  },
  {
    name: "act",
    appId: "nektos.act",
    version: "0.2.68",
  },
  {
    name: "neofetch-win",
    appId: "nepnep.neofetch-win",
    version: "1.2.1",
  },
  {
    name: "Rawrite32",
    appId: "netbsd.rawrite32",
    version: "1.0.9.0",
  },
  {
    name: "Flat",
    appId: "netless-io.flat",
    version: "2.3.3",
  },
  {
    name: "nginx-prometheus-exporter",
    appId: "nginxinc.nginx-prometheus-exporter",
    version: "1.3.0",
  },
  {
    name: "TriCo",
    appId: "ngudbhav.TriCo",
    version: "3.1.0",
  },
  {
    name: "Webkiosk-Wrapper",
    appId: "ngudbhav.Webkiosk-Wrapper",
    version: "1.1.3",
  },
  {
    name: "LazyType",
    appId: "ngudbhav.lazyType",
    version: "1.0.1",
  },
  {
    name: "N-Air",
    appId: "niconico.nair.live",
    version: "latest",
  },
  {
    name: "Palamedes",
    appId: "nikpapa.palamedes",
    version: "0.47",
  },
  {
    name: "Nim programming language",
    appId: "nim.nim",
    version: "2.0.8",
  },
  {
    name: "nimblenote",
    appId: "nimblenote.nimblenote",
    version: "3.2.2",
  },
  {
    name: "Azure DevOps Migration Tools",
    appId: "nkdAgility.AzureDevOpsMigrationToâ€¦",
    version: "16.0.3",
  },
  {
    name: "Azure DevOps Migration Tools (â€¦",
    appId: "nkdAgility.AzureDevOpsMigrationToâ€¦",
    version: "16.0.4-Previeâ€¦",
  },
  {
    name: "ov",
    appId: "noborus.ov",
    version: "0.36.0",
  },
  {
    name: "NodemailerApp",
    appId: "nodemailer.nodemailer",
    version: "1.0.16",
  },
  {
    name: "Shadowsocks Electron",
    appId: "nojsja.ShadowsocksElectron",
    version: "1.2.3",
  },
  {
    name: "glsl analyzer",
    appId: "nolanderc.glsl_analyzer",
    version: "1.4.5",
  },
  {
    name: "nomacs - Image Lounge",
    appId: "nomacs.nomacs",
    version: "3.16.1709",
  },
  {
    name: "GPT4All",
    appId: "nomic.gpt4all",
    version: "3.1.0",
  },
  {
    name: "DroidStar",
    appId: "nostar.DroidStar",
    version: "f050489",
  },
  {
    name: "Notable",
    appId: "notable.notable",
    version: "1.8.4",
  },
  {
    name: "msstyleEditor",
    appId: "nptr.msstyleEditor",
    version: "2.0.1.0",
  },
  {
    name: "NTag",
    appId: "nrittsti.NTag",
    version: "1.2.14",
  },
  {
    name: "nteract",
    appId: "nteract.nteract",
    version: "0.28.0",
  },
  {
    name: "Alt-Tab Terminator",
    appId: "ntwind.AltTabTer",
    version: "6.4",
  },
  {
    name: "VistaSwitcher",
    appId: "ntwind.VistaSwitcher",
    version: "1.1.5",
  },
  {
    name: "WindowSpace",
    appId: "ntwind.windowspace",
    version: "2.6.3",
  },
  {
    name: "nuclear",
    appId: "nukeop.nuclear",
    version: "0.6.17",
  },
  {
    name: "Profile Switcher for Firefox Câ€¦",
    appId: "nulldev.ProfileSwitcherforFirefox",
    version: "0.1.1",
  },
  {
    name: "Notes",
    appId: "nuttyartist.notes",
    version: "2.2.1",
  },
  {
    name: "nvQuickSite",
    appId: "nvisionative.nvQuickSite",
    version: "2.3.3",
  },
  {
    name: "NZBGet",
    appId: "nzbget.nzbget",
    version: "24.3",
  },
  {
    name: "onefetch",
    appId: "o2sh.onefetch",
    version: "2.22.0",
  },
  {
    name: "Hindsight",
    appId: "obsidianforensics.HindsightGUI",
    version: "2023.03",
  },
  {
    name: "octobuild",
    appId: "octobuild.octobuild",
    version: "1.4.0",
  },
  {
    name: "Odin Programming Language",
    appId: "odin-lang.Odin",
    version: "dev-2024-09",
  },
  {
    name: "Eagle",
    appId: "ogdesign.Eagle",
    version: "4.0.1.0",
  },
  {
    name: "dog",
    appId: "ogham.dog",
    version: "0.1.0",
  },
  {
    name: "ojdkbuild OpenJDK",
    appId: "ojdkbuild.ojdkbuild",
    version: "1.8.3321.9",
  },
  {
    name: "OpenJDK 11",
    appId: "ojdkbuild.openjdk.11.jdk",
    version: "11.0.15.1",
  },
  {
    name: "OpenJDK JRE 11",
    appId: "ojdkbuild.openjdk.11.jre",
    version: "11.0.15.1",
  },
  {
    name: "OpenJDK 13",
    appId: "ojdkbuild.openjdk.13.jdk",
    version: "13.0.3.1",
  },
  {
    name: "OpenJDK 14",
    appId: "ojdkbuild.openjdk.14.jdk",
    version: "14.0.1.1",
  },
  {
    name: "ojdkbuild OpenJDK 17",
    appId: "ojdkbuild.openjdk.17.jdk",
    version: "17.0030.6.1",
  },
  {
    name: "ojdkbuild OpenJDK JRE 17",
    appId: "ojdkbuild.openjdk.17.jre",
    version: "17.0030.6.1",
  },
  {
    name: "nano for Windows",
    appId: "okibcn.nano",
    version: "7.2-22.1",
  },
  {
    name: "FN Key Lock",
    appId: "okkosh.fnlock",
    version: "2.0b",
  },
  {
    name: "okteto",
    appId: "okteto.okteto",
    version: "2.28.0",
  },
  {
    name: "SwitchHosts",
    appId: "oldj.switchhosts",
    version: "4.2.0",
  },
  {
    name: "cs-script",
    appId: "oleg-shilo.cs-script",
    version: "4.8.18.0",
  },
  {
    name: "mkshim",
    appId: "oleg-shilo.mkshim",
    version: "1.0.0.0",
  },
  {
    name: "win-sudo",
    appId: "oleg-shilo.win-sudo",
    version: "1.0.1",
  },
  {
    name: "ReacType",
    appId: "open-source-labs.ReacType",
    version: "11.0.0",
  },
  {
    name: "OpenObserve",
    appId: "openobserve.openobserve",
    version: "0.4.7",
  },
  {
    name: "opentrack",
    appId: "opentrack.opentrack",
    version: "2023.3.0",
  },
  {
    name: "kontext",
    appId: "orbatschow.kontext",
    version: "1.6.0",
  },
  {
    name: "git-cliff",
    appId: "orhun.git-cliff",
    version: "2.6.1",
  },
  {
    name: "TETR.IO",
    appId: "osk.tetr",
    version: "9.0.0",
  },
  {
    name: "osquery",
    appId: "osquery.osquery",
    version: "5.11.0",
  },
  {
    name: "score",
    appId: "ossia.score",
    version: "3.2.4",
  },
  {
    name: "SetupOmapRevitPlugint1",
    appId: "ovital.OmapRevitPlugin",
    version: "1.1.1",
  },
  {
    name: "OVITO Basic",
    appId: "ovito.ovito-basic",
    version: "3.1.2",
  },
  {
    name: "OVITO Pro",
    appId: "ovito.ovito-pro",
    version: "3.1.3",
  },
  {
    name: "ownCloud",
    appId: "ownCloud.ownCloudDesktop",
    version: "5.3.1.14018",
  },
  {
    name: "lokinet",
    appId: "oxen-io.lokinet",
    version: "0.9.11",
  },
  {
    name: "Deepvocal Hitsuboku Kumi Chineâ€¦",
    appId: "oxygendioxide.Deepvocal-Hitsubokuâ€¦",
    version: "1.1.0",
  },
  {
    name: "Deepvocal Hitsuboku Kumi Chineâ€¦",
    appId: "oxygendioxide.Deepvocal-Hitsubokuâ€¦",
    version: "1.1.0",
  },
  {
    name: "Utaformatix",
    appId: "oxygendioxide.utaformatix",
    version: "3.6",
  },
  {
    name: "PiTV",
    appId: "ozankaraali.PiTV",
    version: "1.1.1",
  },
  {
    name: "pCloud Drive",
    appId: "pCloudAG.pCloudDrive",
    version: "4.1.7.0",
  },
  {
    name: "pangea",
    appId: "pangeacyber.pangea",
    version: "1.2.0",
  },
  {
    name: "Tilde",
    appId: "paologiuaa.Tilde",
    version: "1.0.0",
  },
  {
    name: "Service Bus Explorer",
    appId: "paolosalvatori.ServiceBusExplorer",
    version: "6.0.3",
  },
  {
    name: "Deskreen",
    appId: "pavlobu.deskreen",
    version: "2.0.4",
  },
  {
    name: "Payhere Seller",
    appId: "payhereinc.PayhereSeller",
    version: "2.7.2",
  },
  {
    name: "QOwnNotes",
    appId: "pbek.QOwnNotes",
    version: "23.12.3",
  },
  {
    name: "CloudflareWarpSpeedTest",
    appId: "peanut996.CloudflareWarpSpeedTest",
    version: "v1.2.0",
  },
  {
    name: "peco",
    appId: "peco.peco",
    version: "0.5.11",
  },
  {
    name: "scrumchrono",
    appId: "pedrojreis.scrumchrono",
    version: "0.1.6",
  },
  {
    name: "Picturama",
    appId: "picturama.picturama",
    version: "1.3.1",
  },
  {
    name: "Pinokio",
    appId: "pinokiocomputer.pinokio",
    version: "2.15.1",
  },
  {
    name: "Teconmoon Wii Virtual Console â€¦",
    appId: "piratesephiroth.TeconmoonWiiVCInjâ€¦",
    version: "3.0.17",
  },
  {
    name: "win-vind",
    appId: "pit-ray.win-vind",
    version: "5.13.2",
  },
  {
    name: "Kube Forwarder",
    appId: "pixel-point.kube-forwarder",
    version: "1.5.1",
  },
  {
    name: "VRoid Studio",
    appId: "pixivInc.VRoidStudio",
    version: "1.27.0",
  },
  {
    name: "Bloxstrap",
    appId: "pizzaboxer.Bloxstrap",
    version: "2.7.0",
  },
  {
    name: "PKU_Gateway",
    appId: "pku.gateway",
    version: "0.9.9",
  },
  {
    name: "Plogue AlterEgo",
    appId: "plogue.alterego",
    version: "v1.571",
  },
  {
    name: "Plogue chipspeech",
    appId: "plogue.chipspeech",
    version: "v1.771",
  },
  {
    name: "sforzando",
    appId: "plogue.sforzando",
    version: "1.9.7.1",
  },
  {
    name: "Flydav",
    appId: "pluveto.FlyDav",
    version: "0.2.55",
  },
  {
    name: "Upgit",
    appId: "pluveto.Upgit",
    version: "0.2.18",
  },
  {
    name: "pnpm",
    appId: "pnpm.pnpm",
    version: "9.12.0",
  },
  {
    name: "pnpm",
    appId: "pnpm.pnpm.preview",
    version: "9.0.0-alpha.4",
  },
  {
    name: "èˆ†æƒ…ç›‘æŽ§ç³»ç»Ÿ",
    appId: "poetries.yuqing-monitor-electron",
    version: "0.0.1",
  },
  {
    name: "poi",
    appId: "poooi.poi",
    version: "10.9.2",
  },
  {
    name: "osu!",
    appId: "ppy.osu",
    version: "2024.906.2",
  },
  {
    name: "Blink",
    appId: "prayag17.Blink",
    version: "0.0.6-dev",
  },
  {
    name: "pixi",
    appId: "prefix-dev.pixi",
    version: "0.28.1",
  },
  {
    name: "fend",
    appId: "printfn.fend",
    version: "1.4.6",
  },
  {
    name: "git-age",
    appId: "prskr.git-age",
    version: "0.1.11",
  },
  {
    name: "Make Me Admin",
    appId: "pseymour.MakeMeAdmin",
    version: "2.3.81",
  },
  {
    name: "PhraseVault",
    appId: "ptmrio.phrasevault",
    version: "2.1.3",
  },
  {
    name: "Netsix",
    appId: "pulsardev.netsix",
    version: "1.0.0-alpha.6",
  },
  {
    name: "Edge And Bing Deflector",
    appId: "pulsejet.edgeandbingdeflector",
    version: "1.2",
  },
  {
    name: "Yank Note",
    appId: "purocean.YankNote",
    version: "3.76.2",
  },
  {
    name: "pychess",
    appId: "pychess.pychess",
    version: "1.0.5",
  },
  {
    name: "pyfa",
    appId: "pyfa.pyfa",
    version: "2.59.2",
  },
  {
    name: "qBittorrent",
    appId: "qBittorrent.qBittorrent",
    version: "5.0.0",
  },
  {
    name: "qBittorrent Beta",
    appId: "qBittorrent.qBittorrent.Beta",
    version: "5.0.0",
  },
  {
    name: "Czkawka",
    appId: "qarmin.czkawka.cli",
    version: "7.0.0",
  },
  {
    name: "DocFetcher",
    appId: "qforce.DocFetcher",
    version: "1.1.25",
  },
  {
    name: "YesPlayMusic",
    appId: "qier222.YesPlayMusic",
    version: "0.4.8",
  },
  {
    name: "Another Redis Desktop Manager",
    appId: "qishibo.AnotherRedisDesktopManager",
    version: "1.6.6",
  },
  {
    name: "BaiduPCS-Go",
    appId: "qjfoidnh.BaiduPCS-Go",
    version: "3.9.5",
  },
  {
    name: "SpaceEngine",
    appId: "qotop.SpaceEngine",
    version: "0.9.8.0",
  },
  {
    name: "quick-lint-js",
    appId: "quick-lint.quick-lint-js",
    version: "3.1.0.0",
  },
  {
    name: "QuickRedis",
    appId: "quick123.quickredis",
    version: "2.7.1",
  },
  {
    name: "Quaternion",
    appId: "quotient-im.Quaternion",
    version: "0.0.95.1",
  },
  {
    name: "qutebrowser",
    appId: "qutebrowser.qutebrowser",
    version: "3.2.1",
  },
  {
    name: "DivoomCli",
    appId: "r12f.DivoomCli",
    version: "0.1.42.0",
  },
  {
    name: "DivoomGateway",
    appId: "r12f.DivoomGateway",
    version: "0.1.42.0",
  },
  {
    name: "Rnp",
    appId: "r12f.Rnp",
    version: "0.1.146.0",
  },
  {
    name: "Volume Control",
    appId: "radj307.volume-control",
    version: "6.6.3",
  },
  {
    name: "Smallpdf",
    appId: "raimo.Smallpdf",
    version: "3.6.5.0",
  },
  {
    name: "Textify",
    appId: "rammichael.Textify",
    version: "1.10.4",
  },
  {
    name: "sleek",
    appId: "ransome1.sleek",
    version: "1.3.1",
  },
  {
    name: "raycho",
    appId: "raycho.raycho",
    version: "1.2.11",
  },
  {
    name: "MSEdgeRedirect",
    appId: "rcmaehl.MSEdgeRedirect",
    version: "0.7.5.3",
  },
  {
    name: "WhyNotWin11",
    appId: "rcmaehl.WhyNotWin11",
    version: "2.5.0.4",
  },
  {
    name: "tuf-client",
    appId: "rdimitrov.tuf-client",
    version: "0.0.6",
  },
  {
    name: "RVG Launcher",
    appId: "re-volt.RVGLLauncher",
    version: "0.1.21.215a1",
  },
  {
    name: "reMarkable",
    appId: "reMarkable.reMarkableCompanionApp",
    version: "3.14.1.889",
  },
  {
    name: "Flying Cube",
    appId: "realsast.FlyingCube",
    version: "1",
  },
  {
    name: "redream",
    appId: "redream.redream",
    version: "1.5.0",
  },
  {
    name: "remoteit",
    appId: "remoteit.remoteit",
    version: "3.17.2",
  },
  {
    name: "restic",
    appId: "restic.restic",
    version: "0.17.1",
  },
  {
    name: "actionlint",
    appId: "rhysd.actionlint",
    version: "1.7.2",
  },
  {
    name: "workspacer",
    appId: "rickbutton.workspacer",
    version: "0.9.11",
  },
  {
    name: "workspacer beta",
    appId: "rickbutton.workspacer.beta",
    version: "0.9.12",
  },
  {
    name: "IntunePrepTool",
    appId: "rink-turksma.IntunePrepTool",
    version: "1.5.6.0",
  },
  {
    name: "aztx",
    appId: "riweston.aztx",
    version: "1.1.0",
  },
  {
    name: "Lua for Windows",
    appId: "rjpcomputing.luaforwindows",
    version: "5.1.5.52",
  },
  {
    name: "goreleaser-testing",
    appId: "robinovitch61.goreleaser-testing",
    version: "0.36.0",
  },
  {
    name: "kl",
    appId: "robinovitch61.kl",
    version: "0.2.0",
  },
  {
    name: "wander",
    appId: "robinovitch61.wander",
    version: "1.1.0",
  },
  {
    name: "webtoon-dl",
    appId: "robinovitch61.webtoon-dl",
    version: "0.0.10",
  },
  {
    name: "Lively Wallpaper",
    appId: "rocksdanister.LivelyWallpaper",
    version: "2.1.0.8",
  },
  {
    name: "Poe Writer",
    appId: "roryok.poe-writer",
    version: "2.5.4",
  },
  {
    name: "MIDI2LR",
    appId: "rsjaffe.MIDI2LR",
    version: "6.1.0.0",
  },
  {
    name: "Carapace",
    appId: "rsteube.Carapace",
    version: "1.0.6",
  },
  {
    name: "Runlet",
    appId: "runlet.runlet",
    version: "1.0.8",
  },
  {
    name: "åœ¨çº¿ DOS æ¸¸æˆ",
    appId: "rwv.OnlineDOSGames",
    version: "8.2.0",
  },
  {
    name: "pomo",
    appId: "rwxrob.pomo",
    version: "0.2.3",
  },
  {
    name: "winMoji",
    appId: "ryanSn.winMoji",
    version: "2.3.0",
  },
  {
    name: "nanoproxy",
    appId: "ryanbekhen.nanoproxy",
    version: "0.13.1",
  },
  {
    name: "radioconda",
    appId: "ryanvolz.radioconda",
    version: "2024.05.29",
  },
  {
    name: "Subtitler",
    appId: "s8sachin.subtitler",
    version: "1.5.5",
  },
  {
    name: "S3Scanner",
    appId: "sa7mon.S3Scanner",
    version: "3.0.4",
  },
  {
    name: "Z-Sharp",
    appId: "sam-astro.Z-Sharp",
    version: "2.1.3-alpha",
  },
  {
    name: "Snappy Driver Installer         samlab-ws.SnappyDriverInstaller",
    appId: "1.23.9",
    version: "(R2309)",
  },
  {
    name: "HippoScan",
    appId: "sandboxlab.HippoScan",
    version: "1.6.6",
  },
  {
    name: "tone",
    appId: "sandreas.tone",
    version: "0.1.5",
  },
  {
    name: "sbt",
    appId: "sbt.sbt",
    version: "1.10.2",
  },
  {
    name: "Subtitle Speech Synchronizer",
    appId: "sc0ty.SubSync",
    version: "0.17.0",
  },
  {
    name: "aoc-cli",
    appId: "scarvalhojr.aoc-cli",
    version: "0.12.0",
  },
  {
    name: "SchemaCrawler",
    appId: "schemacrawler.schemacrawler",
    version: "16.22.2",
  },
  {
    name: "schild.report",
    appId: "schild-report.schild-report",
    version: "2.6.125",
  },
  {
    name: "croc",
    appId: "schollz.croc",
    version: "10.0.12",
  },
  {
    name: "Stele",
    appId: "scimusmn.stele",
    version: "2.1.6",
  },
  {
    name: "Hosts File Editor",
    appId: "scottlerch.hosts-file-editor",
    version: "1.2.0",
  },
  {
    name: "vlabeler",
    appId: "sdercolin.vlabeler",
    version: "1.0.0-beta16",
  },
  {
    name: "Orbitron",
    appId: "sebastianstoff.orbitron",
    version: "3.71",
  },
  {
    name: "GammaLauncher",
    appId: "sebescudie.GammaLauncher",
    version: "5.2.2",
  },
  {
    name: "CertDump",
    appId: "secana.CertDump",
    version: "1.1.5",
  },
  {
    name: "Extraterm - Terminal emulator",
    appId: "sedwards2009.extraterm",
    version: "0.79.0",
  },
  {
    name: "g-helper",
    appId: "seerge.g-helper",
    version: "0.191",
  },
  {
    name: "G-Helper PreRelease",
    appId: "seerge.g-helper.PreRelease",
    version: "0.17",
  },
  {
    name: "bcm converter",
    appId: "sf-yuzifu.bcm_convertor",
    version: "2.0.0",
  },
  {
    name: "DECK",
    appId: "sfx101.deck",
    version: "4.2.2",
  },
  {
    name: "shadowsocks-windows",
    appId: "shadowsocks.shadowsocks-windows",
    version: "4.4.1.0",
  },
  {
    name: "PS3 Media Server",
    appId: "shagrath.PS3MediaServer",
    version: "1.90.1",
  },
  {
    name: "bat",
    appId: "sharkdp.bat",
    version: "0.24.0",
  },
  {
    name: "fd",
    appId: "sharkdp.fd",
    version: "10.2.0",
  },
  {
    name: "hexyl",
    appId: "sharkdp.hexyl",
    version: "0.14.0",
  },
  {
    name: "hyperfine",
    appId: "sharkdp.hyperfine",
    version: "1.18.0",
  },
  {
    name: "insect",
    appId: "sharkdp.insect",
    version: "5.7.0",
  },
  {
    name: "pastel",
    appId: "sharkdp.pastel",
    version: "0.10.0",
  },
  {
    name: "çŸ³å¢¨æ–‡æ¡£",
    appId: "shimo.shimo",
    version: "2.5.4",
  },
  {
    name: "COEIROINK",
    appId: "shirowanisan.COEIROINK",
    version: "2.3.4",
  },
  {
    name: "COEIROINK",
    appId: "shirowanisan.COEIROINK.GPU",
    version: "2.3.3",
  },
  {
    name: "ShogiGUI",
    appId: "shogixyz.ShogiGUI",
    version: "0.0.7.29",
  },
  {
    name: "Desktop Dimmer",
    appId: "sidneys.desktop-dimmer",
    version: "4.0.4",
  },
  {
    name: "PB for Desktop",
    appId: "sidneys.pb-for-desktop",
    version: "11.0.2.110",
  },
  {
    name: "Dufs",
    appId: "sigoden.Dufs",
    version: "0.42.0",
  },
  {
    name: "opscan",
    appId: "sigoden.opscan",
    version: "0.4.0",
  },
  {
    name: "slu",
    appId: "sikalabs.slu",
    version: "0.78.0",
  },
  {
    name: "hledger",
    appId: "simonmichael.hledger",
    version: "1.34",
  },
  {
    name: "sipgate softphone",
    appId: "sipgate.sipgatesoftphone",
    version: "1.16.4",
  },
  {
    name: "AudioSwitch",
    appId: "sirWest.AudioSwitch",
    version: "2.2.2.0",
  },
  {
    name: "wslinternals",
    appId: "sirredbeard.wslinternals",
    version: "0.0.14",
  },
  {
    name: "gm8x_fix",
    appId: "skyfloogle.gm8x_fix",
    version: "0.5.9",
  },
  {
    name: "Lagrange",
    appId: "skyjake.Lagrange",
    version: "1.18.1",
  },
  {
    name: "QSapecNG",
    appId: "skypjack.qsapecng",
    version: "2.0.0",
  },
  {
    name: "Warpinator",
    appId: "slowscript.Warpinator",
    version: "0.4.1",
  },
  {
    name: "smartmontools                   smartmontools.smartmontools",
    appId: "7.4",
    version: "2023-08-0â€¦",
  },
  {
    name: "SnakeTail",
    appId: "snakefoot.snaketail",
    version: "1.9.8.0",
  },
  {
    name: "QIRX4",
    appId: "softsyst.QIRX4",
    version: "4.2.3",
  },
  {
    name: "rehex",
    appId: "solemnwarning.rehex",
    version: "0.61.1",
  },
  {
    name: "chatgpt",
    appId: "sonnylab.chatgpt",
    version: "0.3.0",
  },
  {
    name: "BrawlCrate",
    appId: "soopercool101.BrawlCrate",
    version: "0.42",
  },
  {
    name: "Hibernate Enable or Disable",
    appId: "sordum.HibernateEnableOrDisable",
    version: "1.5",
  },
  {
    name: "SourceGit",
    appId: "sourcegit-scm.SourceGit",
    version: "8.32",
  },
  {
    name: "Spacedrive",
    appId: "spacedrive.Spacedrive",
    version: "0.4.2",
  },
  {
    name: "spacectl",
    appId: "spacelift-io.spacectl",
    version: "1.5.0",
  },
  {
    name: "Sparrow Bitcoin Wallet",
    appId: "sparrowwallet.sparrow",
    version: "2.0.0",
  },
  {
    name: "Pomotroid",
    appId: "splode.pomotroid",
    version: "0.13.0",
  },
  {
    name: "Protoman",
    appId: "spluxx.Protoman",
    version: "0.4.1",
  },
  {
    name: "springlobby",
    appId: "springlobby.springlobby",
    version: "0.274",
  },
  {
    name: "Elephicon",
    appId: "sprout2000.Elephicon",
    version: "2.9.2",
  },
  {
    name: "LeafView",
    appId: "sprout2000.LeafView",
    version: "2.3.9",
  },
  {
    name: "Wabbitemu",
    appId: "sputt.Wabbitemu",
    version: "1.9.5.22",
  },
  {
    name: "sqlectron",
    appId: "sqlectron.sqlectron-gui",
    version: "1.38.0",
  },
  {
    name: "SQLiteStudio",
    appId: "sqlitestudio.pl.SQLiteStudio",
    version: "3.4.4.0",
  },
  {
    name: "google-chat-linux",
    appId: "squalou.google-chat-linux",
    version: "5.29.23-1",
  },
  {
    name: "Halloy",
    appId: "squidowl.halloy",
    version: "2024.12",
  },
  {
    name: "SquirrelDisk",
    appId: "squirreldisk.SquirrelDisk",
    version: "0.3.4",
  },
  {
    name: "guiscrcpy",
    appId: "srevinsaju.guiscrcpy.PyQt5",
    version: "2023.01.01",
  },
  {
    name: "guiscrcpy",
    appId: "srevinsaju.guiscrcpy.PySide2",
    version: "2023.01.01",
  },
  {
    name: "SLADE",
    appId: "srjuddington.slade",
    version: "3.2.6",
  },
  {
    name: "Stackless Python",
    appId: "stackless.stackless",
    version: "3.7.9150.0",
  },
  {
    name: "frizbee",
    appId: "stacklok.frizbee",
    version: "0.1.2",
  },
  {
    name: "minder",
    appId: "stacklok.minder",
    version: "0.0.64",
  },
  {
    name: "KubeLinter",
    appId: "stackrox.kube-linter",
    version: "0.6.8",
  },
  {
    name: "Stacks",
    appId: "stacks.stacks",
    version: "1.9.13",
  },
  {
    name: "OpenUTAU",
    appId: "stakira.OpenUTAU",
    version: "0.1.327",
  },
  {
    name: "OpenUTAU Beta",
    appId: "stakira.OpenUTAU.Beta",
    version: "0.1.338",
  },
  {
    name: "muffon",
    appId: "staniel359.muffon",
    version: "2.0.2",
  },
  {
    name: "run-hidden",
    appId: "stax76.run-hidden",
    version: "1.2",
  },
  {
    name: "timoni",
    appId: "stefanprodan.timoni",
    version: "0.22.0",
  },
  {
    name: "OneMoreAddIn",
    appId: "stevencohn.OneMore",
    version: "5.9.0",
  },
  {
    name: "Proton",
    appId: "steventhanna.proton",
    version: "0.2.1",
  },
  {
    name: "EverythingToolbar",
    appId: "stnkl.EverythingToolbar",
    version: "1.5.1",
  },
  {
    name: "EverythingToolbar",
    appId: "stnkl.EverythingToolbar.Beta",
    version: "1.5.1",
  },
  {
    name: "rage",
    appId: "str4d.rage",
    version: "v0.10.0",
  },
  {
    name: "tray-monitor",
    appId: "strayge.tray-monitor",
    version: "2.5.0",
  },
  {
    name: "Strimio",
    appId: "strimio.strimio",
    version: "3.0.10",
  },
  {
    name: "UWSCR",
    appId: "stuncloud.uwscr",
    version: "1.0.1",
  },
  {
    name: "Xtreme Download Manager",
    appId: "subhra74.XtremeDownloadManager",
    version: "7.2.11",
  },
  {
    name: "Xtreme Download Manager Beta",
    appId: "subhra74.XtremeDownloadManager.Beâ€¦",
    version: "8.0.12",
  },
  {
    name: "AcFun",
    appId: "succlz123.AcFun",
    version: "1.0.4",
  },
  {
    name: "Qawl",
    appId: "sufone.qawl",
    version: "0.0.7",
  },
  {
    name: "Caption OCR Tool",
    appId: "sum1re.CaptionOCRTool",
    version: "0.0.7-beta",
  },
  {
    name: "Subordination",
    appId: "sunabozu.subordination",
    version: "0.1.3",
  },
  {
    name: "MusicLake",
    appId: "sunzongzheng.music",
    version: "1.3.1",
  },
  {
    name: "nertivia",
    appId: "supertiger1234.nertivia",
    version: "0.3.15",
  },
  {
    name: "eagluet",
    appId: "surajrathod.eagluet",
    version: "0.1.3",
  },
  {
    name: "Rancher Desktop",
    appId: "suse.RancherDesktop",
    version: "1.15.1",
  },
  {
    name: "circleci-config-merge",
    appId: "suzuki-shunsuke.circleci-config-mâ€¦",
    version: "1.1.6",
  },
  {
    name: "Genact",
    appId: "svenstaro.genact",
    version: "1.4.2",
  },
  {
    name: "miniserve",
    appId: "svenstaro.miniserve",
    version: "0.24.0",
  },
  {
    name: "Hardcopy",
    appId: "sw4you.Hardcopy",
    version: "2024.06.03",
  },
  {
    name: "Swifty",
    appId: "swiftyapp.swifty",
    version: "0.6.13",
  },
  {
    name: "migu-music-dl",
    appId: "swim2sun.migu-music-dl",
    version: "0.1.2",
  },
  {
    name: "Yazi",
    appId: "sxyazi.yazi",
    version: "0.3.3",
  },
  {
    name: "JPEGView",
    appId: "sylikc.JPEGView",
    version: "1.3.46.0",
  },
  {
    name: "ezytdl",
    appId: "sylviiu.ezytdl",
    version: "2.4.2",
  },
  {
    name: "iNFekt NFO Viewer",
    appId: "syndicode.iNFekt",
    version: "1.3.0",
  },
  {
    name: "OpenStego",
    appId: "syvaidya.openstego",
    version: "0.8.6",
  },
  {
    name: "ExifCleaner",
    appId: "szTheory.exifcleaner",
    version: "3.6.0",
  },
  {
    name: "WinDynamicDesktop",
    appId: "t1m0thyj.WinDynamicDesktop",
    version: "5.6.0",
  },
  {
    name: "Tabula",
    appId: "tabulapdf.tabula",
    version: "1.2.1",
  },
  {
    name: "GAMADV-XTD3",
    appId: "taers232c.GAMADV-XTD3",
    version: "7.00.12",
  },
  {
    name: "TagSpaces",
    appId: "tagspaces.tagspaces",
    version: "5.6.2",
  },
  {
    name: "Tailscale",
    appId: "tailscale.tailscale",
    version: "1.74.0",
  },
  {
    name: "Taplo",
    appId: "tamasfe.taplo",
    version: "0.9.3",
  },
  {
    name: "å¹•å¢ƒ",
    appId: "tangshimin.MuJing",
    version: "2.6.1",
  },
  {
    name: "Alphabiz",
    appId: "tanshuai.alphabiz",
    version: "0.3.0",
  },
  {
    name: "tanuki-dr4",
    appId: "tanuki-.tanuki-dr4",
    version: "1.0.0.0",
  },
  {
    name: "tanuki-wcsc33",
    appId: "tanuki-.tanuki-wcsc33",
    version: "1.0.0.0",
  },
  {
    name: "tastytrade",
    appId: "tastyworks.tastytrade",
    version: "2.11.0",
  },
  {
    name: "tastyworks",
    appId: "tastyworks.tastyworks",
    version: "2.3.1",
  },
  {
    name: "Assessment Disaggregation",
    appId: "tazzben.Assessment-Disaggregation",
    version: "1.5.14",
  },
  {
    name: "kondo",
    appId: "tbillington.kondo",
    version: "0.8",
  },
  {
    name: "kondo-ui",
    appId: "tbillington.kondo.ui",
    version: "0.8",
  },
  {
    name: "aie",
    appId: "team-aie.aie",
    version: "0.17.2",
  },
  {
    name: "Dependency Analyzer",
    appId: "tecnocrata.depscop",
    version: "0.2.0",
  },
  {
    name: "Albayan",
    appId: "tecwindow.Albayan",
    version: "1.2.4",
  },
  {
    name: "SoundTranscriber",
    appId: "tecwindow.SoundTranscriber",
    version: "1.4.3",
  },
  {
    name: "WikiSearch",
    appId: "tecwindow.WikiSearch",
    version: "1.4.0",
  },
  {
    name: "nunuStudio",
    appId: "tentone.nunuStudio",
    version: "0.9.6",
  },
  {
    name: "Ramme",
    appId: "terkelg.ramme",
    version: "3.2.5",
  },
  {
    name: "Simple Web Server",
    appId: "terreng.SimpleWebServer",
    version: "1.2.12",
  },
  {
    name: "TestMace",
    appId: "testmace.testmace",
    version: "1.3.3",
  },
  {
    name: "YouTube Music",
    appId: "th-ch.YouTubeMusic",
    version: "3.5.3",
  },
  {
    name: "Time to Leave",
    appId: "thamara.time-to-leave",
    version: "2.0.1.0",
  },
  {
    name: "Auburn Earnings Notifier",
    appId: "the-sz.Auburn",
    version: "1.28",
  },
  {
    name: "Banks",
    appId: "the-sz.Banks",
    version: "1.03",
  },
  {
    name: "Bear",
    appId: "the-sz.Bear",
    version: "1.6",
  },
  {
    name: "Bedford",
    appId: "the-sz.Bedford",
    version: "1.18",
  },
  {
    name: "Bennett",
    appId: "the-sz.Bennett",
    version: "1.28",
  },
  {
    name: "Bisbee",
    appId: "the-sz.Bisbee",
    version: "1.01",
  },
  {
    name: "CDInfo",
    appId: "the-sz.CDInfo",
    version: "1.13",
  },
  {
    name: "CPUGrabEx",
    appId: "the-sz.CPUGrabEx",
    version: "1.17",
  },
  {
    name: "Carroll",
    appId: "the-sz.Carroll",
    version: "1.31",
  },
  {
    name: "CheckSum",
    appId: "the-sz.CheckSum",
    version: "1",
  },
  {
    name: "Compton",
    appId: "the-sz.Compton",
    version: "1.51",
  },
  {
    name: "Conroe Calendar Notifier",
    appId: "the-sz.Conroe",
    version: "1.13",
  },
  {
    name: "Deansbury",
    appId: "the-sz.Deansbury",
    version: "1.02",
  },
  {
    name: "Doro",
    appId: "the-sz.Doro",
    version: "2.23",
  },
  {
    name: "Flash Builder",
    appId: "the-sz.FlashBuilder",
    version: "1.48",
  },
  {
    name: "Grand",
    appId: "the-sz.Grand",
    version: "1.07",
  },
  {
    name: "Homedale",
    appId: "the-sz.Homedale",
    version: "2.13",
  },
  {
    name: "Howard E-Mail Notifier",
    appId: "the-sz.Howard",
    version: "2.06",
  },
  {
    name: "Lacey",
    appId: "the-sz.Lacey",
    version: "2.97",
  },
  {
    name: "Malden",
    appId: "the-sz.Malden",
    version: "1.09",
  },
  {
    name: "Medford",
    appId: "the-sz.Medford",
    version: "1.27",
  },
  {
    name: "Nassau",
    appId: "the-sz.Nassau",
    version: "1.09",
  },
  {
    name: "NetChat",
    appId: "the-sz.NetChat",
    version: "7.14",
  },
  {
    name: "Newfield News",
    appId: "the-sz.Newfield",
    version: "1.06",
  },
  {
    name: "Norwood",
    appId: "the-sz.Norwood",
    version: "1.03",
  },
  {
    name: "Palos",
    appId: "the-sz.Palos",
    version: "1.01",
  },
  {
    name: "Parkdale",
    appId: "the-sz.Parkdale",
    version: "3.06",
  },
  {
    name: "PortScan",
    appId: "the-sz.PortScan",
    version: "1.98",
  },
  {
    name: "PreyHelper",
    appId: "the-sz.PreyHelper",
    version: "1.16",
  },
  {
    name: "Quartz",
    appId: "the-sz.Quartz",
    version: "1.44",
  },
  {
    name: "Redwood",
    appId: "the-sz.Redwood",
    version: "1.1",
  },
  {
    name: "Richmond",
    appId: "the-sz.Richmond",
    version: "1.04",
  },
  {
    name: "RimhillEx",
    appId: "the-sz.Rimhill",
    version: "1.12",
  },
  {
    name: "Royal",
    appId: "the-sz.Royal",
    version: "1.7",
  },
  {
    name: "RoyalPro",
    appId: "the-sz.RoyalPro",
    version: "1.04",
  },
  {
    name: "Seaside Multi Skype Launcher",
    appId: "the-sz.Seaside",
    version: "1.38",
  },
  {
    name: "Sherwood",
    appId: "the-sz.Sherwood",
    version: "1.09",
  },
  {
    name: "SkypeFocusFix",
    appId: "the-sz.SkypeFocusFix",
    version: "1.05",
  },
  {
    name: "Spencer",
    appId: "the-sz.Spencer",
    version: "1.33",
  },
  {
    name: "SpyEx",
    appId: "the-sz.SpyEx",
    version: "1.38",
  },
  {
    name: "Temple",
    appId: "the-sz.Temple",
    version: "1.21",
  },
  {
    name: "Trion",
    appId: "the-sz.Trion",
    version: "1.22",
  },
  {
    name: "Yale",
    appId: "the-sz.Yale",
    version: "1.25",
  },
  {
    name: "York Network Trace",
    appId: "the-sz.York",
    version: "1.66",
  },
  {
    name: "Course Hunt",
    appId: "theIYD.coursehunt",
    version: "0.0.7",
  },
  {
    name: "ssh-sync",
    appId: "therealpaulgg.ssh-sync",
    version: "v1.0.0",
  },
  {
    name: "chiaki",
    appId: "thestr4ng3r.chiaki",
    version: "2.2.0",
  },
  {
    name: "MQTT Explorer",
    appId: "thomasnordquist.MQTT-Explorer",
    version: "0.3.5",
  },
  {
    name: "MQTT Explorer (Beta)",
    appId: "thomasnordquist.MQTT-Explorer.Beta",
    version: "0.4.0-beta1",
  },
  {
    name: "IO Ninja",
    appId: "tibbo.ioninja",
    version: "5.7.0",
  },
  {
    name: "aliyunpan",
    appId: "tickstep.aliyunpan",
    version: "0.3.3",
  },
  {
    name: "cloudpan189-go",
    appId: "tickstep.cloudpan189-go",
    version: "0.1.3",
  },
  {
    name: "Furnace",
    appId: "tildearrow.Furnace",
    version: "0.6.5",
  },
  {
    name: "Gmail Desktop",
    appId: "timche.gmail-desktop",
    version: "2.25.3",
  },
  {
    name: "Galaxy Buds Manager (Unofficiaâ€¦",
    appId: "timschneeb.GalaxyBudsClient",
    version: "5.1.0-a45b7b",
  },
  {
    name: "tinySA-App",
    appId: "tinySA.tinySA",
    version: "1.1.20.1",
  },
  {
    name: "TinyGo",
    appId: "tinygo-org.tinygo",
    version: "0.31.2",
  },
  {
    name: "Utsu",
    appId: "titinko.utsu",
    version: "0.4.5",
  },
  {
    name: "tlrc",
    appId: "tldr-pages.tlrc",
    version: "1.9.3",
  },
  {
    name: "spmp",
    appId: "toasterofbread.spmp",
    version: "0.4.1",
  },
  {
    name: "Outlook for Office365",
    appId: "tomlm.electron-outlook-365",
    version: "1.1.1.0",
  },
  {
    name: "Outlook for Outlook.com",
    appId: "tomlm.electron-outlook-com",
    version: "1.1.1.0",
  },
  {
    name: "light-dark-cli-win11",
    appId: "tompscanlan.light-dark-cli-win11",
    version: "0.1.3",
  },
  {
    name: "topgrade",
    appId: "topgrade-rs.topgrade",
    version: "14.0.1",
  },
  {
    name: "PhotoSync",
    appId: "touchbyte.PhotoSync",
    version: "4.0.8",
  },
  {
    name: "Sushi",
    appId: "tp7.Sushi",
    version: "0.5.1",
  },
  {
    name: "wewechat",
    appId: "trazyn.weweChat",
    version: "1.1.7",
  },
  {
    name: "LPub3D",
    appId: "trevorsandy.lpub3d",
    version: "2.4.6",
  },
  {
    name: "Wiimote Audio Player",
    appId: "trigger-segfault.WiimoteAudioPlayâ€¦",
    version: "1.0.1.0",
  },
  {
    name: "okapi",
    appId: "trinsic.okapi",
    version: "1.6.0",
  },
  {
    name: "trzsz",
    appId: "trzsz.trzsz",
    version: "1.1.8",
  },
  {
    name: "tssh",
    appId: "trzsz.tssh",
    version: "0.1.22",
  },
  {
    name: "GTK3-Runtime Win64",
    appId: "tschoonj.GTKForWindows",
    version: "3.24.31",
  },
  {
    name: "ImPlay",
    appId: "tsl0922.ImPlay",
    version: "1.5.1",
  },
  {
    name: "ttyd",
    appId: "tsl0922.ttyd",
    version: "1.7.7",
  },
  {
    name: "ttimer",
    appId: "ttimer.ttimer",
    version: "1",
  },
  {
    name: "GPXSee",
    appId: "tumic0.GPXSee",
    version: "13.26",
  },
  {
    name: "git-absorb",
    appId: "tummychow.git-absorb",
    version: "0.6.15",
  },
  {
    name: "Update Watcher for AdoptOpenJDK",
    appId: "tushev.org.AJUpdateWatcher",
    version: "2.0.5.0",
  },
  {
    name: "chezmoi",
    appId: "twpayne.chezmoi",
    version: "2.52.3",
  },
  {
    name: "uGet",
    appId: "uGetdm.uGet",
    version: "2.2.3",
  },
  {
    name: "uTox",
    appId: "uTox.uTox",
    version: "0.18.1",
  },
  {
    name: "Cromite",
    appId: "uazo.cromite",
    version: "129.0.6668.71",
  },
  {
    name: "Expresso",
    appId: "ultrapico.expresso",
    version: "3.1.7917",
  },
  {
    name: "privacy.sexy",
    appId: "undergroundwires.privacy.sexy",
    version: "0.13.5",
  },
  {
    name: "unetbootin",
    appId: "unetbootin.unetbootin",
    version: "702",
  },
  {
    name: "input-overlay",
    appId: "univrsal.input-overlay",
    version: "5.0.4",
  },
  {
    name: "scrab",
    appId: "univrsal.scrab",
    version: "1.2.0",
  },
  {
    name: "tuna",
    appId: "univrsal.tuna",
    version: "1.9.7",
  },
  {
    name: "unlimited-clipboard",
    appId: "unlimited-clipboard.unlimited-cliâ€¦",
    version: "1.0.1",
  },
  {
    name: "coreutils",
    appId: "uutils.coreutils",
    version: "0.0.23",
  },
  {
    name: "UltraVnc",
    appId: "uvncbvba.UltraVnc",
    version: "1.4.3.6",
  },
  {
    name: "BloomRPC",
    appId: "uw-labs.BloomRPC",
    version: "1.5.3",
  },
  {
    name: "Reko decompiler",
    appId: "uxmal.reko",
    version: "0.11.5.0",
  },
  {
    name: "v2rayA",
    appId: "v2rayA.v2rayA",
    version: "2.2.5.8",
  },
  {
    name: "vSpatial Remote Desktop",
    appId: "vSpatialInc.vSpatialRemoteDesktop",
    version: "2023.1.8472.3â€¦",
  },
  {
    name: "ExplorerPatcher",
    appId: "valinet.ExplorerPatcher",
    version: "22621.3527.65â€¦",
  },
  {
    name: "ExplorerPatcher Pre-Release",
    appId: "valinet.ExplorerPatcher.Prerelease",
    version: "22621.3880.66â€¦",
  },
  {
    name: "klogg",
    appId: "variar.klogg",
    version: "22.06.0.1289",
  },
  {
    name: "VASSAL",
    appId: "vassalengine.VASSAL",
    version: "3.7.14",
  },
  {
    name: "vATIS",
    appId: "vatis-project.vAtis",
    version: "4.0.0-beta.3",
  },
  {
    name: "vcmi",
    appId: "vcmi.vcmi",
    version: "1.4.5",
  },
  {
    name: "modV",
    appId: "vcync.modV",
    version: "3.30.0",
  },
  {
    name: "Ham Cockpit",
    appId: "ve3nea.HamCockpit",
    version: "1.2.0",
  },
  {
    name: "ShelTasks CLI",
    appId: "vedantmgoyal.sheltasks-cli",
    version: "1.1.0",
  },
  {
    name: "Veeam Agent",
    appId: "veeam.veeam-agent",
    version: "6.1.2.134",
  },
  {
    name: "Classic Generator",
    appId: "venko.ClassicGenerator",
    version: "5.0.0.3",
  },
  {
    name: "vfox",
    appId: "version-fox.vfox",
    version: "0.5.4",
  },
  {
    name: "Escrcpy",
    appId: "viarotel.Escrcpy",
    version: "1.24.2",
  },
  {
    name: "Vim",
    appId: "vim.vim",
    version: "9.1.0718",
  },
  {
    name: "Vim",
    appId: "vim.vim.nightly",
    version: "9.1.0754",
  },
  {
    name: "winLAME",
    appId: "vividos.winLAME",
    version: "2.21.1.108",
  },
  {
    name: "vivoåŠžå…¬å¥—ä»¶",
    appId: "vivo.OfficeKit",
    version: "3.6.10.0",
  },
  {
    name: "Everything",
    appId: "voidtools.Everything",
    version: "1.4.1.1026",
  },
  {
    name: "Everything (Alpha)",
    appId: "voidtools.Everything.Alpha",
    version: "1.5.0.1383a",
  },
  {
    name: "Everything Cli",
    appId: "voidtools.Everything.Cli",
    version: "1.1.0.27",
  },
  {
    name: "Everything Lite",
    appId: "voidtools.Everything.Lite",
    version: "1.4.1.1026",
  },
  {
    name: "vvvv gamma",
    appId: "vvvv.gamma",
    version: "6.5",
  },
  {
    name: "butterflow-ui",
    appId: "wagesj45.butterflow-ui",
    version: "1.1.1",
  },
  {
    name: "dive",
    appId: "wagoodman.dive",
    version: "0.12.0",
  },
  {
    name: "iGot",
    appId: "wahao.Electron-iGot",
    version: "1.1.1",
  },
  {
    name: "mtn",
    appId: "wahibre.mtn",
    version: "3.4.2",
  },
  {
    name: "AeroZoom Beta",
    appId: "wandersick.AeroZoom",
    version: "4.0.2",
  },
  {
    name: "ChMac",
    appId: "wandersick.ChMac",
    version: "2",
  },
  {
    name: "EnglishizeCmd",
    appId: "wandersick.EnglishizeCmd",
    version: "2",
  },
  {
    name: "BilibiliVideoDownload",
    appId: "wangyu.BilibiliVideoDownload",
    version: "3.3.3",
  },
  {
    name: "dos2unix",
    appId: "waterlan.dos2unix",
    version: "7.5.2",
  },
  {
    name: "civet",
    appId: "webberg.civet",
    version: "0.3.1",
  },
  {
    name: "ReplayWeb.page",
    appId: "webrecorder.replayweb-page",
    version: "2.1.5",
  },
  {
    name: "xpchrome",
    appId: "weolar.xpchrome",
    version: "115.0.5790.136",
  },
  {
    name: "OneNote Tagging Kit",
    appId: "wethat.onenotetaggingkit",
    version: "5.1.8514",
  },
  {
    name: "Wexond",
    appId: "wexond.wexond",
    version: "5.2.0",
  },
  {
    name: "AtomicParsley",
    appId: "wez.atomicparsley",
    version: "20221229.1721â€¦",
  },
  {
    name: "WezTerm",
    appId: "wez.wezterm",
    version: "20240203-1108â€¦",
  },
  {
    name: "SwiftSearch",
    appId: "wfunction.SwiftSearch",
    version: "7.5.1",
  },
  {
    name: "APK Installer",
    appId: "wherewhere.APKInstaller.Classic",
    version: "0.1.4",
  },
  {
    name: "WSA Tools",
    appId: "wherewhere.WSATools",
    version: "0.0.1",
  },
  {
    name: "azctx",
    appId: "whiteducksoftware.azctx",
    version: "2023.11.1",
  },
  {
    name: "Fedora Remix for WSL",
    appId: "whitewaterfoundry.fedora-remix-foâ€¦",
    version: "40.1.0.0",
  },
  {
    name: "Video Hub App 3 demo",
    appId: "whyboris.Video-Hub-App.Demo",
    version: "3.1.0-demo",
  },
  {
    name: "APRSIS32",
    appId: "wikidot.APRSIS32",
    version: "2020-05-01",
  },
  {
    name: "mwcli",
    appId: "wikimedia.mwcli",
    version: "0.1.0",
  },
  {
    name: "NetSend",
    appId: "williamnie.NetSend",
    version: "2.0.5",
  },
  {
    name: "qiniu client",
    appId: "willnewii.qiniuClient",
    version: "0.0.9",
  },
  {
    name: "Supermium",
    appId: "win32ss.Supermium",
    version: "121.0.6167.81",
  },
  {
    name: "Winaero Tweaker",
    appId: "winaero.tweaker",
    version: "1.63",
  },
  {
    name: "winpython",
    appId: "winpython.winpython",
    version: "7.0.20231126fâ€¦",
  },
  {
    name: "winpython-dot",
    appId: "winpython.winpython-dot",
    version: "6.4.20230625fâ€¦",
  },
  {
    name: "winpython-dot-pypy",
    appId: "winpython.winpython-dot-pypy",
    version: "3.8.12.3",
  },
  {
    name: "winpython-pypy",
    appId: "winpython.winpython-pypy",
    version: "7.0.20231126fâ€¦",
  },
  {
    name: "Wire",
    appId: "wire.wire",
    version: "3.35.4798",
  },
  {
    name: "WizNote",
    appId: "wiznote.wiznote",
    version: "4.13.27",
  },
  {
    name: "WizNote Lite",
    appId: "wiznote.wiznotelite",
    version: "2.1.1",
  },
  {
    name: "wkhtmltox",
    appId: "wkhtmltopdf.wkhtmltox",
    version: "0.12.6-1",
  },
  {
    name: "WL Downloader",
    appId: "wl-std.WLDownloader",
    version: "1.3.8",
  },
  {
    name: "WL Music",
    appId: "wl-std.WLMusic",
    version: "1.3.9.2",
  },
  {
    name: "regit",
    appId: "woaitsAryan.regit",
    version: "0.2.1",
  },
  {
    name: "WordMark3",
    appId: "wordmark.wordmark",
    version: "3.0.2",
  },
  {
    name: "Workman (US)",
    appId: "workman-layout.workman",
    version: "2.0.0",
  },
  {
    name: "Writage",
    appId: "writage.writage",
    version: "2.8.2.0",
  },
  {
    name: "xLights",
    appId: "xLightsSequencer.xLights",
    version: "2024.04",
  },
  {
    name: "OFGB (Oh Frick Go Back)",
    appId: "xM4ddy.OFGB",
    version: "0.4",
  },
  {
    name: "Crushee",
    appId: "xanderfrangos.crushee",
    version: "2.4.6",
  },
  {
    name: "Twinkle Tray",
    appId: "xanderfrangos.twinkletray",
    version: "1.16.1",
  },
  {
    name: "cxcli",
    appId: "xavidop.cxcli",
    version: "1.229.1",
  },
  {
    name: "xemu",
    appId: "xemu-project.xemu",
    version: "0.7.132",
  },
  {
    name: "Xenia",
    appId: "xenia-project.xenia",
    version: "1.0.2805",
  },
  {
    name: "Wiliwili",
    appId: "xfangfang.Wiliwili",
    version: "1.4.1",
  },
  {
    name: "Houdoku",
    appId: "xgi.houdoku",
    version: "2.14.0",
  },
  {
    name: "GoldenDict-ng",
    appId: "xiaoyifang.GoldenDict-ng",
    version: "24.09.0",
  },
  {
    name: "ç½‘æ˜“äº‘éŸ³ä¹",
    appId: "xiaozhu188.electron-vue-cloud-musâ€¦",
    version: "1.2.3",
  },
  {
    name: "nexusfont",
    appId: "xiles.NexusFont",
    version: "2.7.1",
  },
  {
    name: "åœºè¾ž",
    appId: "xinpianchang.StudioTrans",
    version: "1.2.4",
  },
  {
    name: "tun2socks",
    appId: "xjasonlyu.tun2socks",
    version: "v2.5.2",
  },
  {
    name: "å…¬æ–‡æŽ’ç‰ˆåŠ©æ‰‹",
    appId: "xkonglong.gongwen",
    version: "3.0.0.0",
  },
  {
    name: "kalk",
    appId: "xoofx.kalk",
    version: "0.8.1",
  },
  {
    name: "XPipe",
    appId: "xpipe-io.xpipe",
    version: "12",
  },
  {
    name: "XPipe Portable",
    appId: "xpipe-io.xpipe.portable",
    version: "1.5.3",
  },
  {
    name: "eSearch",
    appId: "xushengfeng.eSearch",
    version: "1.12.0",
  },
  {
    name: "PupaFM",
    appId: "xwartz.PupaFM",
    version: "1.2.2",
  },
  {
    name: "Algernon",
    appId: "xyproto.algernon",
    version: "1.15.2",
  },
  {
    name: "SHAREVOX",
    appId: "y-chan.SHAREVOX",
    version: "0.2.1",
  },
  {
    name: "SHAREVOX",
    appId: "y-chan.SHAREVOX.CPU",
    version: "0.2.1",
  },
  {
    name: "SHAREVOX",
    appId: "y-chan.SHAREVOX.NVIDIA",
    version: "0.2.1",
  },
  {
    name: "ttth",
    appId: "yafp.ttth",
    version: "1.8.0",
  },
  {
    name: "Fluent Reader",
    appId: "yang991178.fluent-reader",
    version: "1.1.4",
  },
  {
    name: "MKV Muxing Batch GUI",
    appId: "yaser01.MKVMuxingBatchGUI",
    version: "2.4.2",
  },
  {
    name: "UnifiedLogReader",
    appId: "ydkhatri.UnifiedLogReader",
    version: "0.3",
  },
  {
    name: "Buhid Baybayin (QWERTY)",
    appId: "yelosan.PH-UKL.BuhdQRTY",
    version: "2.0.1",
  },
  {
    name: "Hanunoo Baybayin (QWERTY)",
    appId: "yelosan.PH-UKL.HanoQRTY",
    version: "2.0.1",
  },
  {
    name: "Tagbanwa Baybayin (QWERTY)",
    appId: "yelosan.PH-UKL.TagbQRTY",
    version: "2.0.1",
  },
  {
    name: "Tagalog Baybayin (QWERTY)",
    appId: "yelosan.PH-UKL.TglgQRTY",
    version: "2.0.1",
  },
  {
    name: "OpenAI Translator",
    appId: "yetone.OpenAITranslator",
    version: "0.4.32",
  },
  {
    name: "totp-cli",
    appId: "yitsushi.totp-cli",
    version: "1.8.7",
  },
  {
    name: "DOSBox SVN-Daum",
    appId: "ykhwong.DOSBoxSVN-Daum",
    version: "20150125",
  },
  {
    name: "YoMail",
    appId: "yomail.yomail",
    version: "8.8.0.2",
  },
  {
    name: "moligeek",
    appId: "yourmoln.moligeek",
    version: "1.0.9",
  },
  {
    name: "youtube-dl",
    appId: "youtube-dl.youtube-dl",
    version: "2021.12.17",
  },
  {
    name: "youtube-dl",
    appId: "youtube-dl.youtube-dl.nightly",
    version: "2024.08.07",
  },
  {
    name: "yt-dlg",
    appId: "yt-dlg.yt-dlg",
    version: "1.8.5",
  },
  {
    name: "yt-dlp",
    appId: "yt-dlp.yt-dlp",
    version: "2024.09.27",
  },
  {
    name: "yt-dlp-nightly",
    appId: "yt-dlp.yt-dlp.nightly",
    version: "2024.10.01.23â€¦",
  },
  {
    name: "tuna",
    appId: "yuccastream.tuna",
    version: "0.19.0",
  },
  {
    name: "ShutdownCountdown",
    appId: "yuma14.ShutdownCountdown",
    version: "1.1.0",
  },
  {
    name: "CPod",
    appId: "z-------------.cpod",
    version: "1.28.2",
  },
  {
    name: "GoAuthing",
    appId: "z4yx.GoAuthing",
    version: "2.2.1",
  },
  {
    name: "Breitbandmessung",
    appId: "zafaco.Breitbandmessung",
    version: "3.7.0",
  },
  {
    name: "LogExpert",
    appId: "zarunbal.LogExpert",
    version: "1.9.0",
  },
  {
    name: "Suside",
    appId: "zeankundev.suside",
    version: "2.3.3",
  },
  {
    name: "Lettura",
    appId: "zhanglun.Lettura",
    version: "0.1.18",
  },
  {
    name: "GitNote",
    appId: "zhaopengme.gitnote",
    version: "3.1.0",
  },
  {
    name: "Zig",
    appId: "zig.zig",
    version: "0.13.0",
  },
  {
    name: "zls",
    appId: "zigtools.zls",
    version: "0.13.0",
  },
  {
    name: "Wasabi Wallet",
    appId: "zkSNACKs.WasabiWallet",
    version: "2.2.1.0",
  },
  {
    name: "MrCode",
    appId: "zokugun.MrCode",
    version: "1.82.0.23253",
  },
  {
    name: "Notepad4",
    appId: "zufuliu.notepad4",
    version: "24.09r5472",
  },
  {
    name: "Notepad4 (AVX2)",
    appId: "zufuliu.notepad4.AVX2",
    version: "24.09r5472",
  },
  {
    name: "BrowserSelect -- select browseâ€¦",
    appId: "zumoshi.BrowserSelect",
    version: "1.4.1",
  },
  {
    name: "Pomodoro Logger",
    appId: "zxch3n.PomodoroLogger",
    version: "0.6.3",
  },
  {
    name: "micro",
    appId: "zyedidia.micro",
    version: "2.0.14",
  },
];

const test = [
  {
    name: "Universal Android Debloater GUI",
    appId: "0x192.UniversalAndroidDebloaterGUI",
    version: "0.5.1",
  },
  {
    name: "0xGingi-Browser",
    appId: "0xGingi.Browser",
    version: "115.0.5790.110",
  },
  {
    name: "115æµè§ˆå™¨",
    appId: "115.115Chrome",
    version: "27.0.3.7",
  },
];
async function postJsonData() {
  const apiUrl = "http://localhost:3333/software/repository";

  async function postSingleSoftware(software) {
    try {
      const postResponse = await axios.post(apiUrl,software,{
        headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmQ3M2NhZDk4ODc0OTg3ODE4MTUwZDQiLCJlbWFpbCI6InRlc3RlQHRlc3RhbmRvLmNvbS5iciIsImNvbXBhbnlDb2RlIjoiRTBHMS1LNEEzIiwiaWF0IjoxNzI4MDUxOTE4LCJleHAiOjE3MjgwODc5MTh9.yetkLXx3jGooxdOWuHJSXn2jo_iQ_w3hWA1Yv56ejo8",
            },
      });

      const responseData = await postResponse.data;
      // console.log(
      //   responseData
      // );
    } catch (erro) {
      console.error(
        `Erro ao enviar ${JSON.stringify(software)}:`,
        erro
      );
    }
  }

  try {
    const promises = packsSoftware.map((software) =>
      postSingleSoftware(software)
    );
    await Promise.all(promises);
    console.log("Todos os dados foram processados.");
  } catch (erro) {
    console.error("Erro ao processar os dados:", erro.message);
  }
}

postJsonData();
