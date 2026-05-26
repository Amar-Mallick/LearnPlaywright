let browser = ['chrome', 'edge', 'firefox'];
console.log(browser);//[ 'chrome', 'edge', 'firefox' ]
browser.pop();//(delete last element)
console.log(browser);//[ 'chrome', 'edge' ]
browser.shift();//(delete 1st element)
console.log(browser);//[  'edge' ]
browser.push('mozila');
console.log(browser);//['edge', 'mozila']
browser.unshift('DMbrowser', 'Ucbrowser');
console.log(browser);//[ 'DMbrowser', 'Ucbrowser', 'edge', 'mozila' ]

//check edge is only support in selenium..
for (let i = 0; i < browser.length; i++) {

    if (browser[i] === 'edge') {
        console.log('edge is  only support selenium');
        break;
    }
}
