let currentLang = "en";


function switchLang(lang) {

    currentLang = lang;


    const elements = document.querySelectorAll("[data-en]");


    elements.forEach(element => {

        const text = element.getAttribute(
            "data-" + lang
        );


        if (text) {

            element.innerHTML = text;

        }

    });


    // 修改网页语言标识
    document.documentElement.lang = lang;


    // 修改网页标题
    if (lang === "zh") {

        document.title =
            "赵小坤 | 工业物联网软件工程师";

    } else {

        document.title =
            "Zhao Xiaokun | Industrial IoT Software Engineer";

    }

}





// 页面加载默认英文
document.addEventListener(
    "DOMContentLoaded",
    function () {

        switchLang(currentLang);

    }
);
