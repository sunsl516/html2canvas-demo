//index.js
import './index.scss';
import html2canvas from 'html2canvas'

window.download = () => {
    let container = document.getElementById('container')
    console.log(container)
    html2canvas(container).then(canvas => {
        let imgData = canvas.toDataURL()
        let link = document.createElement('a')
        link.href = imgData
        link.download = 'test.png'
        link.click()
    })
}