// // // document.getElementById('data').innerHTML='con me may';
// // const cars = ['sadas','asdas','dasdasd','asdas'];
// // let text = "";
// // function myFuntion(){
// //     console.log('button was licked')
// //     var a = document.getElementById('name').value.trim();
// //     if(a!=''){
// //         //document.getElementById('data').innerHTML = a.length;
// //         // document.getElementById('data').innerHTML=a;
// //         // document.getElementById('data').style.color='#333';
// //         //document.write(a); xoa HTML
// //         document.getElementById('data').innerHTML = Date();
// //     }else{
// //         alert('hay nhap Name');

// //     }
// //     // for(let i = 0; i < cars.length; i++){
// //     //     text += cars[i] + " "; 
// //     // }
// //     // console.log(text);
// //     // document.getElementById('data').innerHTML = text;
// // }

// // var b = 'nguyen hoang quoc dung';
// // // document.getElementById('data').innerHTML = text;
// // let d = b.slice(7, 10);
// // console.log(d);
// // console.log(b.substring(7,3));
// // let e = b.slice(-6, -1);
// // console.log(e)
// // var f = b.split(' ');
// // console.log(f);
// // console.log(f.length);
// // for(let i = 0; i < f.length; i++){
// //     console.log(f[i]);
// // }

// // console.log(b.charCodeAt(1));
// // console.log(b.charAt(1));
// // var j = '       chao cac ban         ';
// // console.log(j.trim().length);
// // var a1 = 'chao cac ban';
// // var a2 = 'minh la dung, quoc dung,ung dung,DUNG cam';
// // // console.log(a1.concat(',',a2));
// // // console.log(a1.toUpperCase());
// // // console.log(a2.replace('dung','An'));//chi thay the duoc chu phat hien dau tien
// // // console.log(a2.replace(/DUNG/i, 'AN')); // /i khong phan biet chu hoa chu thuong
// // // console.log(a2.replace(/dung/g, 'AN')); // /g thay the het tat ca phan tu
// // console.log(a2.indexOf('dung')); //vị trí xuất hiện đàu tiên
// // console.log(a2.search('dung')); //vị trí xuất hiện đàu tiên
// // console.log(a2.lastIndexOf('dung')); // vị trí xuất hiẹn cuói cùng
// // console.log(a2.indexOf('dung',15));// bắt đầu tìm tại vị trí 15
// // console.log(a2.match(/ung/g));//tìm chuỗi và trả về mãng
// // console.log(a2.match(/ung/gi));
// // console.log(a2.includes('cam'));//có chứa chuỗi hay không true/false
// // /*
// // tach chuoi: 
// // slice()
// // substring()
// // thay doi chuoi:
// // replace
// // chuyen doi chu hoa va thuong:
// // toUpperCase()
// // toLowercase()
// // cat khoang trang:
// // trim()
// // trimStart()
// // trimEnd()
// // đệm chuỗi:
// // padEnd()
// // padStart()
// // lấy phần tử tại vị trí :
// // charAt()
// // charCodeAt() mã unicode
// // chuyển thành mãng:
// // split()
// // kiểm tra chuỗi có bắt đầu hay kết thúc bằng 1 chuỗi chỉ định
// // startsWith()
// // endsWith()
// // */

// // let firstName = 'Nguyen';
// // let lastName = 'Dung';
// // let fullName = `toi ten la ${firstName} ${lastName}`;//dấu `` cho phép có biến bên trong chuỗi
// // console.log(fullName);

// // let title = 'this is title';
// // let list = ['Anh','Yeu','Em'];

// // let html = `<h2>${title}</h2><ul>`;
// // for(const i of list){
// //     html += `<li>${i}</li>`;
// // }

// // html += '</ul>';
// // document.getElementById('demo').innerHTML = html;

// // function myFunction(){
// //     let a = document.getElementById('name').value.trim();
// //     console.log(a);
// //     let b = document.getElementById('password').value.trim();
// //     let c = `chào bạn <b>${a}</b>, tuổi của bạn là <u>${b}</u>`;
// //     if(a != '' && b != ''){
// //         document.getElementById('data').innerHTML = c; 
// //     }   
// // }

// // document.write()

// // let num1 =  6;
// // let num1__str = num1.toString();
// // console.log(typeof(num1__str));
// // let num2 = 7;
// // let rst = num1/num2;
// // console.log(rst.toFixed(5));

// // let x = 100/ "ascac";
// // console.log(isNaN(x));
// // console.log(typeof(x));

// // const mang =['habaxa',25,35,'alo'];
// // for(let i = 0; i< mang.length; i++){
// //     console.log(mang[i]);
// // }

// // let demo1 ='<ul>';
// // for(let i = 0; i < mang.length; i++){
// //     demo1 += '<li>' + mang[i] + '</li>';
// // }
// // demo1 += '</ul>';

// // document.write(demo1);
// // mang.push('dungvua');
// // console.log(mang);
// // console.log(Array.isArray(mang));
// // const mang1 = [1,2,"anime",4,5,"manga"];
// // let str = mang1.join(' ');
// // console.log(str +' '+ typeof(str));
// // //shift() xóa phần tử đầu tiên và dịch chuyển các 
// // //phần tử ở sau lên chỉ số cao hơn
// // //unshift thì thêm vào
// // const arr__fustion = mang.concat(mang1);//co the noi duoc nhieu mang cung luc
// // console.log(arr__fustion); 
// // arr__fustion.splice(0,0,'senpai',23);

// // //có thẻ dùng splite để loại bỏ phần tử

// // arr__fustion.splice(0,1);
// // const mang3 = arr__fustion;
// // console.log(mang3);

// // //slice() tach mang tao ra mang moi (mang cu van giu nguyen)
// // console.log(mang3.sort());//sort() dành cho chuôi, dùng với số sẽ lỗi
// // //đảo ngược mãng
// // mang3.sort();
// // console.log(mang3.reverse());
// // const mang4 = [1,5,25,4,36,26];
// // console.log(mang4.sort());
// // console.log(mang4.sort(function(a,b){return a-b}));
// // //tang dan, giam dan laf b-a
// // //tim gia tri lon nhat va nho nhat trong 1 mang
// // console.log(Math.max.apply(null,mang4));
// // console.log(Math.min.apply(null,mang4));
// // //sap xem mang cos phan tu laf object
// // const mang5 = [
// //     {type:"Dung", year:2001},
// //     {type:"An", year:2002},
// //     {type:"Phung", year:2003}
// // ];

// // mang5.sort(function(a,b){
// //     let m = a.type.toLowerCase();
// //     let n = b.type.toLowerCase();
// //     if(m<n){return -1;}
// //     else{return 1;}
// //     return 0;
// // });
// // console.log(mang5);


// function myFunction(){
    
// }



// // courses.forEach(function(course, index) {
//     //     console.log(index, course);
//     // });
    
//     // var isFree = courses.every(function(course,index){
// //     console.log(index);
// //     return course.coin === 0;
// // });

// // console.log(isFree);

// // var isFree = courses.some(function(course,index){
//     //     console.log(index);
//     //     return course.coin === 0;
//     // });
    
//     // console.log(isFree);
    
//     // var course = courses.find(function(course,index){
//         //     console.log(index);
//         //     return course.name === "C#";
//         // });
        
//         // console.log(course);
        


// // console.log(listCourse);

// // function coursesHandle(course, index, originArray){
//     //     // return {
//         //     //     id : course.id,
//         //     //     name : `Khoa hoc : ${course.name}`,
//         //     //     coin : course.coin,
//         //     //     coinText : `Gia : ${course.coin}`
//         //     // }
//         //     //return course.name;
//         //     return `<h2>Tham gia khoa hoc : ${course.name}`;
//         // }
        
//         // var newCourses = courses.map(coursesHandle);
        
//         // console.log(newCourses);
        
//         // document.write(newCourses.join(''));
        
        
// // function coinHandle(accumulator, currentValue, currentIndex, originArray){
//     //     var total = accumulator + currentValue.coin;
//     //     console.table({
//         //         'Vi tri : ': currentIndex,
//         //         'Bien luu tru : ': accumulator,
//         //         'tien : ': currentValue.coin,
//         //         'tien tich tru dc: ': total
//         //     });
//         //     return total;
//         // }
//         // var totalCoin = courses.reduce(coinHandle,0);
        
//         // console.log(totalCoin);
        
        
//         //bài tập làm phẳng mãng-Flat vs reduce
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];

// // var flatArray = depthArray.reduce(function(newArray, arrayItem){
//     //     return newArray.concat(arrayItem);
//     // },[]);
    
//     // console.log(flatArray);
    
//     //bt lấy ra các khóa học đưa vào 1 mãng mới
    
//     // var coursesArray = courses.reduce(function(nameArray, courseItem){
//         //     // 
//         //     return nameArray.concat(' ',courseItem.name);
//         // },'');
        
//         // var coursesNameArray = coursesArray.split(' ');
//         // console.log(coursesNameArray);
        
// var topics = [
//     {
//         topic: 'Font-end',
//         cou: [
//             {
//                 id: 1 ,
//                 title: 'HTML,CSS'
//             },
//             {
//                 id: 2,
//                 title: 'Javascript'
//             }
//         ]
//     },
//     {
//         topic: 'Back-end',
//         cou: [
//             {
//                 id: 1,
//                 title: 'PHP'
//             },
//             {
//                 id: 2,
//                 title: 'NodeJS'
//             }
//         ]
//     }
// ];

// // var newCou = topics.reduce(function(cs,topicValue){
//     //     return cs.concat(topicValue.cou);
//     // },[]);
    
//     // console.log(newCou);
    
//     // function htmlHandle(arrayValue) {
//         //     return `
//         //         <div>
//         //             <h2>${arrayValue.title}</h2>
//         //             <p>ID: ${arrayValue.id}</p>
//         //         </div>
//         //         <hr>
//         //     `;
//         // }
        
//         // var htmls = newCou.map(htmlHandle);
//         // console.log(htmls.join(''));
//         // document.write(htmls.join(''));
        
        
//         //Math
        
//         console.log(Math.PI);
        
//         console.log(Math.round(1.5));
//         //lam tron trên
//         console.log(Math.ceil(4.1));
        
// console.log(Math.abs(-4));
// //lam tron duoi
// console.log(Math.floor(4.9));
// // sinh số thập phân < 1 ngẫu nhiên
// console.log(Math.random());
// // cách khác sử dụng random()
// console.log(Math.floor(Math.random() * 100));

// var random = Math.floor(Math.random() * 5);
// var bonus = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E'
// ];
// console.log(bonus[random]);
// //random vs ti le
// var random2 = Math.floor(Math.random() * 100);
// if(random2 < 2){
//     console.log('SUCCESS!!!!!!!');
// }else{
//     console.log('nhu cuc');
// }

// console.log(Math.min(1,32,34,2));

// console.log(Math.max(1,32,34,2));





// //forEach

// // var exForeach = function(value1, index1){
// //     console.log(typeof(value1.name),index1);
// // }
// // courses.forEach(exForeach);

// //Every

// // var exForeach = function(value1, index1){
// //     console.log(index1)
// //     return value1.coin === 0;
// // }
// // console.log(courses.every(exForeach));

// //Some

// // var exForeach = function(value1, index1){
// //     return value1.coin === 0;
// // }
// // console.log(courses.some(exForeach));

// //Find

// // var exForeach = function(value1, index1){
// //     return value1.name === 'Javascript';
// // }
// // console.log(courses.find(exForeach));

// //Filter

// // var exForeach = function(value1, index1){
// //     return value1.name === 'C#';
// // }
// // console.log(courses.filter(exForeach));

// //Map

// // var exForeach = function(value1, index1,originArray){
// //     // return {
// //     //     id: value1.id,
// //     //     name: `KHoa hoc: ${value1.name}`,
// //     //     coin: `Gia tien: ${value1.coin}`
// //     // };
// //     return `
// //         <h2>Chao mung cac ban den voi khoa hoc ${value1.name}</h2>
// //         <p>Hoc phi chi co: ${value1.coin}</p>
// //         <p>Co ma so hoc phan laf: ${index1}</P>
// //     `;
// // }
// // var newString = courses.map(exForeach).join(' ');
// // console.log(newString);
// // document.write(newString);

// // function reduceFuntion(storage,value2,index,originArray){
// //     return storage.concat(value2.name);
// // }

// // var newReduce = courses.reduce(reduceFuntion,[]);

// // console.log(newReduce);
// // var depthArray1 = [1,2,[3,4],5,6,[7,8,9]];


// // function flatArr (storageArr,valueArr){
// //     return storageArr.concat(valueArr);
// // }

// // var newArr = depthArray1.reduce(flatArr,[]);
// // console.log(newArr);

// // var topics1 = [
// //     {
// //         topic: 'Font-end',
// //         cou: [
// //             {
// //                 id: 1 ,
// //                 title: 'HTML,CSS'
// //             },
// //             {
// //                 id: 2,
// //                 title: 'Javascript'
// //             }
// //         ]
// //     },
// //     {
// //         topic: 'Back-end',
// //         cou: [
// //             {
// //                 id: 1,
// //                 title: 'PHP'
// //             },
// //             {
// //                 id: 2,
// //                 title: 'NodeJS'
// //             }
// //         ]
// //     }
// // ];


// function ft2(strMess){
//     ft1(strMess);
// }
// function ft1(value3){
//     console.log(value3);
// }



// function myFunction(){
//     var mess = document.getElementById('name').value;
//     ft2(mess);
// }


// Array.prototype.forEach2 = function(callback1){
//     var total = 0;
//     arrLength = this.length;
//     for(var i = 0;i <arrLength; i++){
//         total += callback1(this[i]);
//     }
//     return total;
// }

// var courses = [
//     {
//         id: 5,
//         name: 'C#',
//         coin: 0
//     },
//     {
//         id : 1,
//         name : 'Javascript',
//         coin: 10
//     },
//     {
//         id: 2,
//         name: 'HTML,CSS',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 50
//     },
//     {
//         id: 4,
//         name: 'C#',
//         coin: 1
//     }

// ];

// var ternary = courses.forEach(function(course, index){
//     console.log(course.coin > 0 ? `${course.coin} Coins` : 'Free');
// })


// // var htmls1 = courses.forEach2(function(value4){
// //     return value4.coin;
// // });

// // console.log(htmls1);

// // Array.prototype.reduce2 = function(callback2, startValue){
// //     var a;
// //     lengtArr = this.length;
// //     for(var i = 0; i < lengtArr; i++){
// //         var b = callback2(startValue,this[i],i);
// //         // if(Array.isArray(startValue)){
// //         //     startValue = startValue.concat()
// //         // }
// //         startValue += b;
// //     }
// //     return startValue;
// // }

// // Array.prototype.forEach2 = function(callback){
// //     for(var index in this){
        
// //         //console.log(index,this.hasOwnProperty(index));
// //         if(this.hasOwnProperty(index)){
// //             callback(this[index],index,this);
// //         }
// //     }
// // }

// // courses.forEach2(function(course,index,array){
// //     console.log(course,index,array);
// // });

// // var htmls2 = courses.reduce2(function(varStorage,currentValue,currentIndex){
// //     return varStorage.concat(currentValue.name);
// // },[]);

// // console.log(htmls2);

// // Array.prototype.filter2 = function(callback){
// //     var miniArray = [];
// //     for(var index in this){
// //         if(this.hasOwnProperty(index)){
// //             var result = callback(this[index],index,this);
// //             if(result){
// //                 miniArray.push(this[index]);
// //             }
// //         }
// //     }
// //     return miniArray;
// // }

// // var Filter2 = courses.filter2(function(course,index,array){
// //     return course.name === 'asdas';
// // });

// // console.log(Filter2);


// // Array.prototype.Some2 = function(callback){
// //     for(var index in this){
// //         if(this.hasOwnProperty(index)){
// //             var result = callback(this[index],index,this);
// //             if(result){
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// // }

// // var Some2 = courses.Some2(function(course,index,array){
// //     return course.name === 'C#';
// // });

// // console.log(Some2);

// //ĐỆ QUY

// // function giaiThua(num){
// //     if(num>0){
// //         return num * giaiThua(num - 1);
// //     }
// //     return 1;
// // };

// // console.log(giaiThua(3));

// //HTML DOM

// console.log(document);

// //lay element qua: Id  class tag, css selector, html collection

// //ID
// document.getElementById('demo');

// //Class
// var headingNodes = document.getElementsByClassName('form__label');
// console.log(headingNodes);

// //Tag
// var headingNodes = document.getElementsByTagName('label');
// console.log(headingNodes);

// //CSS selector
// var headingNode = document.querySelector('.form__btn');
// console.log(headingNode);

// //querySelecctorAll chon tat ca cac phan tu

// //Html collection


// //DOM attributes
// var headingElement = document.querySelector('#demo');
// console.log(headingElement);
// headingElement.title = 'heading';

// headingElement.setAttribute('id','heading');


// console.log(headingElement.getAttribute('class'));


// var headElement = document.querySelector('.head');

// //Text

// console.log(headElement.innerText);
// console.log(headElement.textContent);
// headElement.innerText = 'chao tat ca cac ban';

// //innerHTML, outerHTML

// var box = document.querySelector('.practice__container');

// // box.innerHTML = '';
// console.log(box);

// console.log(document.querySelector('h1').innerText);
// console.log(box.innerHTML);
// console.log(box.outerHTML);


// var hd = document.querySelector('.practice__container');

// hd.title = 'asdasdasdaq';
// hd.title = 'red';
// console.log(hd.title);


// hd.setAttribute('href','sadasdasdas');
// console.log(hd.getAttribute('href'));


// var b = document.querySelector('h1');

// // b.innerText = '         chao tat ca cac asdasd           ';

// b.textContent = 1;

// console.log(b.innerText);

// var arrNum1 = [1,2,3,4,5,6];

// Array.prototype.reduce2 = function(callback, startValue){
    
//     for(var index in this){
//         if(startValue === undefined){
//             startValue = this[0];
//             continue;
//         }
//         if(this.hasOwnProperty(index)){
//             var valueReturn = callback(startValue,this[index],index,this);
//             startValue = valueReturn;
//         }
//     }
//     return startValue;
// }

// var coinTotal = arrNum1.reduce2(function(storage,value,index,originArr){
//     console.log(storage+value);
//     return storage + value;
// },0);

// console.log(coinTotal);


// console.log([b]);


// //DOM Style
// var box = document.querySelector('.box');

// console.log(box.style);

// Object.assign(box.style,{
//     height: '200px',
//     width: '200px',
//     color : 'white'
// })

// console.log(box.style);

// // var listCourse = courses.filter(function(course,index){
// //     console.log(index);
// //     return course.name === "dasd";
// // });

// // console.log(listCourse);
// box.addEventListener('click',clickFunction);



// function clickFunction(){
//     let a = document.querySelector('h1');
//     a.innerText = Number.parseInt(a.innerText) + 1;
//     console.log(a);
// }


// console.log([box]);

// box.innerHTML += '<ul></ul>';

// const textNode = document.createTextNode('con me may');
// let list = document.querySelector('.box ul');
// list.appendChild(textNode);
// console.log(box);
// // const node = document.createElement('li');
// console.log(box.outerHTML);


// // node.appendChild(textNode);

// // box.appendChild(node);
// const item = document.createElement('p')
// const node = document.createElement('div');
// let htmls = document.querySelector('body');
// htmls.appendChild(node);
// console.log(htmls.lastChild)

// box.classList.add('myStyle');
// console.log(box.classList.contains('myStyle'));
// console.log(box.classList.remove('myStyle'));

// // setInterval(() => {
// //     box.classList.toggle('myStyle');
// // },1000);

// console.log(box.classList);

// /*ClassList:
// add() them class vao Element
// remove() xoa class
// toggle() neu co class thi xoa, khong co thi them
// length() xem chieu dai cua DOMTokenList
// keys() xem chi muc cua cac phan tu trong DOMTokenList
// values() xem gia tri cua cac phan tu
// value() vao gia tri cua Attribute class
// forEach() lap qua tung pha tu
// contains() xet xem co chua class do hay k
// replace thay the class nay ban class khac
// entries() tra ve tung cap key value cua tung phan tu
// item tam theo chi muc*/

// var eventResult =  document.querySelector('.data__result');

// eventResult.onclick = function(e){
//     console.log(e.target.id);
// }

var inputName = document.querySelector('#name');
var inputPass = document.querySelector('#password');
var inputCountry = document.querySelector('#country');
var btnSubmit = document.querySelector('#submit');
var result = document.querySelector('#data');
btnSubmit.onclick = function(e){
    e.preventDefault();
    result.textContent = `ten tai khoan: ${inputName.value}
                        mat khau : ${inputPass.value}
                        Dat nuoc: ${inputCountry.value}`;
};


let list = document.getElementById('search_advance');
let clickSearch = document.querySelector('#show_search_advance');


clickSearch.onclick = function(){
    let text = clickSearch.innerText;
    list.classList.toggle('ex');
    if(text === 'Tìm kiếm nâng cao'){
        clickSearch.innerText = 'Bỏ tìm kiếm nâng cao';
    }else{
        clickSearch.innerText = 'Tìm kiếm nâng cao';
    }
}

let tb = document.querySelector('.newTB');
console.log(tb.childNodes);
let dlBt = document.querySelectorAll('.btn');
console.log(dlBt);
for(var i in dlBt){
    dlBt[i].onclick = function(e){
        console.log(e.target);
        let parent = e.target.parentElement.parentElement;
        parent.remove();
    }
}

let titleEx3 = document.querySelector('#title1');
let rs1 = document.querySelector('#result1');
let btn1 = document.querySelector('#button_add');

btn1.onclick = function(e){
    let text1 = titleEx3.value;
    console.log(text1);
    rs1.innerText = text1;
}


let newBox = document .querySelector('.new__box');
console.log([newBox]);
