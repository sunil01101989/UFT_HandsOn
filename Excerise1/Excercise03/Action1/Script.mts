Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategory").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategory")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy now")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("pQty", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("NumberofItemInCart").Highlight
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("removeItemFromCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf7.xml_;_
'Window("Internet Explorer").Close
