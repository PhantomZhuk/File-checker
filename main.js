$(`#customButton`).click(function () {
    $('#fileInput').click();
});

function checkfile(file) {
    let fileslice = file.lastIndexOf(`.`);
    let appFileSlice = file.substring(fileslice + 1);
    let eks = appFileSlice.toUpperCase();

    if (eks == `JPEG`){
        return `JPEG формат стиснення зображень`
    }else if (eks == `PNG`){
        return `PNG формат стиснення зображень з підтримкою прозорості`
    }else if (eks == `GIF`){
        return `GIF формат для анімованих зображень`
    }else if (eks == `BMP`){
        return`BMP формат без стиснення зображень`
    }else if (eks == `TIFF`){
        return`TIFF формат для збереження великої кількості даних зображення`
    }else if (eks == `SVG`){
        return`SVG масштабований векторний графічний формат`
    }else if (eks == `RAW`){
        return`RAW формат для нередагованих даних зображень`
    }else if (eks == `PSD`){
        return`PSD формат файлів Adobe Photoshop`
    }else if (eks == `AI`){
        return`AI формат файлів Adobe Illustrator`
    }else if (eks == `EPS`){
        return`EPS формат для векторних графічних зображень`
    }else if (eks == `PDF`){
        return`PDF формат для обміну документами, який може включати зображення, текст і графіку`
    }else if (eks == `DOCX`){
        return`DOCX формат файлів Microsoft Word`
    }else if (eks == `XLSX`){
        return`XLSX формат файлів Microsoft Excel`
    }else if (eks == `PPTX`){
        return`PPTX формат файлів Microsoft PowerPoint`
    }else if (eks == `TXT`){
        return`TXT текстовий формат`
    }else if (eks == `CSV`){
        return`CSV формат таблиць, розділених комами`
    }else if (eks == `MP3`){
        return`MP3 аудіоформат стиснення звуку`
    }else if (eks == `WAV`){
        return`WAV аудіоформат без стиснення звуку`
    }else if (eks == `FLAC`){
        return`FLAC аудіоформат з втратною стисненням без втрати якості`
    }else if (eks == `AAC`){
        return`AAC аудіоформат стиснення звуку, часто використовується в iTunes`
    }else if (eks == `OGG`){
        return`OGG відкритий аудіоформат стиснення звуку`
    }else if (eks == `MP4`){
        return`MP4 відеоформат стиснення звуку та відео`
    }else if (eks == `AVI`){
        return`AVI відеоформат, розроблений Microsoft`
    }else if (eks == `MKV`){
        return`MKV відеоформат з високою якістю відео та звуку`
    }else if (eks == `MOV`){
        return`MOV відеоформат Apple QuickTime`
    }else if (eks == `WMV`){
        return`WMV відеоформат Windows Media Video`
    }else if (eks == `FLV`){
        return`FLV відеоформат Flash Video`
    }else if (eks == `WebM`){
        return`WebM відеоформат відкритого коду`
    }else if (eks == `SWF`){
        return`SWF формат веб-анимацій Adobe Flash`
    }else if (eks == `APK`){
        return`APK формат файлів Android Package для мобільних додатків`
    }else if (eks == `EXE`){
        return`EXE виконуваний файл для програм Windows`
    }else if (eks == `DLL`){
        return`DLL бібліотека динамічних підключень для Windows`
    }else if (eks == `ISO`){
        return`ISO образ диска, який містить повну копію даних з диска`
    }else if (eks == `ZIP`){
        return`ZIP формат стиснення файлів`
    }else if (eks == `RAR`){
        return`RAR ще один формат стиснення файлів`
    }else if (eks == `7Z`){
        return`7Z формат стиснення файлів, який пропонує вищу ступінь стиснення, ніж ZIP і RAR`
    }else if (eks == `TAR`){
        return`TAR формат для об'єднання файлів у великий архів`
    }else if (eks == `GZ`){
        return`GZ  формат стиснення файлів за допомогою gzip`
    }else if (eks == `DEB`){
        return`DEB формат для пакетів програм Debian / Ubuntu Linux`
    }else if (eks == `RPM`){
        return`RPM формат для пакетів програм Red Hat / Fedora Linux`
    }else if (eks == `MPD`){
        return`MPD формат документів для програми MuseScore для нотної графіки`
    }else if (eks == `SRT`){
        return`SRT формат для субтитрів`
    }else if (eks == `ASS`){
        return`ASS ще один формат для субтитрів з розширеними можливостями форматування`
    }else if (eks == `VTT`){
        return`VTT формат субтитрів для веб-відео`
    }else if (eks == `JSON`){
        return`JSON формат обміну даними, що базується на тексті`
    }else if (eks == `XML`){
        return`XML розширюваний мовний формат для обміну даними`
    }else if (eks == `HTML`){
        return`HTML гіпертекстовий мовний формат для створення веб-сторінок`
    }else if (eks == `CSS`){
        return`CSS каскадні таблиці стилів для веб-сторінок`
    }else if (eks == `JS`){
        return`JS мова програмування JavaScript`
    }else if (eks == `JAVA`){
        return`JAVA мова програмування Java`
    }else if (eks == `PY`){
        return`PY мова програмування Python`
    }else if (eks == `CPP`){
        return`CPP мова програмування C++`
    }else if (eks == `C`){
        return`C мова програмування C`
    }else if (eks == `PSD`){
        return`PSD формат для збереження проектів Adobe Photoshop`
    }else if (eks == `INDD`){
        return`INDD формат для збереження проектів Adobe InDesign`
    }else if (eks == `CDR`){
        return`CDR формат для збереження проектів CorelDRAW`
    }else if (eks == `DOC`){
        return`DOC старий формат файлів Microsoft Word`
    }else if (eks == `XLS `){
        return`XLS старий формат файлів Microsoft Excel`
    }else if (eks == `PPT`){
        return`PPT старий формат файлів Microsoft PowerPoint`
    }else if (eks == `WMA`){
        return`WMA формат для аудіофайлів Windows Media`
    }else if (eks == `MIDI`){
        return`MIDI формат для музичних композицій`
    }else if (eks == `AIFF`){
        return`AIFF аудіоформат з високою якістю`
    }else if (eks == `CAF`){
        return`CAF Core Audio Format, використовується на macOS`
    }else if (eks == `DNG`){
        return`DNG формат для цифрових негативів`
    }else if (eks == `NEF`){
        return`NEF формат файлів RAW для фотокамер Nikon`
    }else if (eks == `CR2`){
        return`CR2 формат файлів RAW для фотокамер Canon`
    }else if (eks == `ORF`){
        return`ORF формат файлів RAW для фотокамер Olympus`
    }else if (eks == `RAF`){
        return`RAF формат файлів RAW для фотокамер Fujifilm`
    }else if (eks == `ARW`){
        return`ARW формат файлів RAW для фотокамер Sony`
    }else if (eks == `SR2`){
        return`SR2 формат файлів RAW для фотокамер Sony`
    }else if (eks == `RW2`){
        return`RW2 формат файлів RAW для фотокамер Panasonic`
    }else if (eks == `X3F`){
        return`X3F формат файлів RAW для фотокамер Sigma`
    }else if (eks == `CRW`){
        return`CRW формат файлів RAW для фотокамер Canon`
    }else if (eks == `WEBP`){
        return`WEBP формат стиснення зображень від Google`
    }else if (eks == `HEIC`){
        return`HEIC формат зображення високої ефективності в Apple`
    }else if (eks == `CR3`){
        return`CR3 формат файлів RAW для фотокамер Canon`
    }else if (eks == `EML`){
        return`EML формат для електронної пошти`
    }else if (eks == `PST`){
        return`PST формат для файлів Outlook`
    }else if (eks == `VCF`){
        return`VCF формат для візитниць`
    }else if (eks == `DWG`){
        return`DWG формат файлів для автоматизованих систем проектування (AutoCAD)`
    }else if (eks == `DXF`){
        return`DXF формат для обміну даними між різними програмами CAD`
    }else if (eks == `OBJ`){
        return`OBJ формат для 3D-моделей`
    }else if (eks == `STL`){
        return`STL формат для 3D-моделей, часто використовується для друку`
    }else if (eks == `PLY`){
        return`PLY формат для сканування поверхонь`
    }else if (eks == `FBX`){
        return`FBX формат для обміну даними між різними програмами 3D`
    }else if (eks == `MAX`){
        return`MAX формат файлів 3D-моделей для Autodesk 3ds Max`
    }else if (eks == `IPT`){
        return`IPT формат файлів 3D-моделей для Autodesk Inventor`
    }else if (eks == `RVT`){
        return`RVT формат файлів для Revit`
    }else if (eks == `DAE`){
        return`DAE формат файлів для коліжней (Collada)`
    }else if (eks == `DWF`){
        return`DWF формат для перегляду 2D і 3D-моделей`
    }else if (eks == `IFC`){
        return`IFC формат для відкритого обміну даними між програмами BIM`
    }else if (eks == `CSV`){
        return`CSV формат для обміну даними у вигляді табличних даних, розділених комами`
    }else if (eks == `MD`){
        return`MD це легкий для читання і написання спосіб форматування тексту`
    }else if (eks == `ICO`){
        return`ICO формат іконок для віконних систем`
    }else if (eks == `ICNS`){
        return`ICNS формат іконок для macOS`
    }else if (eks == `TGA`){
        return`TGA формат для збереження зображень без стиснення`
    }else if (eks == `PCX`){
        return`PCX формат для зображень без стиснення, часто використовується в графіці`
    }else if (eks == `JPG`){
        return`JPG альтернативний спосіб позначення формату JPEG`
    }else if (eks == `JP2`){
        return`JP2 альтернативний спосіб позначення формату JPEG2000`
    }else if (eks == `JPEG2000`){
        return`JPEG2000 формат стиснення зображень з високою якістю`
    }
    // else if (eks == `MPEG`){
    //     return`MPEG Стандарт компресії відео та аудіо для цифрового мультимедіа.`
    // }else if (eks == `OGG`){
    //     return`OGG Це відкритий аудіоформат, який часто використовується для збереження та передачі аудіофайлів в Інтернеті.`
    // }else if (eks == `SVGZ`){
    //     return`SVGZ Це стиснута версія формату SVG`
    // }
}

$(`#fileInput`).on(`change`, function () {
    let fileval = $(`#fileInput`).val().toLowerCase();
    $(`#formatFile`).text(checkfile(fileval));
    $(`.fileFormatContainer`).css(`display`, `flex`);
    $(`.fileFormatContainer`).css(`background-color`, `rgb(${Math.fround(Math.random() * 255)}, ${Math.fround(Math.random() * 255)}, ${Math.fround(Math.random() * 255)})`);

    setTimeout(() => {
        $(`.fileFormatContainer`).css(`display`, `none`);
    }, 5000);
});