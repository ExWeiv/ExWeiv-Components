<img  style="margin-left: -5px;" src="https://static.wixstatic.com/media/510eca_31fa556461e5414481333a796deceff9~mv2.png"  width="200"/>

<h1 border-bottom="none">Text Inputs Usage</h1>

Text Input component kullanım örnekleri:

```js
//Get Input Element
const inputElement = $w('#widget').getElement();
```

```js
//Change Icon
$w('#widget').changeIcon(newIconUrl);
```

```js
//On Icon Change Event
$w('#widget').onIconChange((newIconUrl) => {
    //Handle Event
})
```

---

### Component API Listesi

- getElement() - Input Elementine Ulaşmak İçin - Fonksiyon
- changeIcon() - İkonu Değiştirmek İçin - Fonksiyon
- onIconChange() - İkon Değişikliğinde Kullanmak İçin - Event

---

İyi Çalışmalar 💙 | <img style="margin-bottom: -2px;" src="https://static.wixstatic.com/media/510eca_31fa556461e5414481333a796deceff9~mv2.png"  height="16"/>