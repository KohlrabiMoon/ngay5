const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listData = [
    {
        id: 1,
        name: "Nike Air Force 1 LV8",
        price: 1100,
        soLuong: 25,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46fc5159-8892-472c-acc9-a216d85123ed/air-force-1-lv8-big-kids-shoes-8JtCbS.png"
    },
    {
        id: 2,
        name: "Air Jordan 1 LV8",
        price: 1000,
        soLuong: 30,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dadbbaff-8566-427f-9a3c-23b1277cc71d/air-jordan-1-elevate-low-se-womens-shoes-Q630Pk.png"
    },
    {
        id: 3,
        name: "Nike Air Force 1 Low ASW",
        price: 800,
        soLuong: 70,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18734018-620a-4d31-bebf-eeeaa7e3cc76/air-force-1-07-lv8-mens-shoes-M866WJ.png"
    },
    {
        id: 4,
        name: "Nike Air Max Correlate",
        price: 500,
        soLuong: 40,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fabaa569-6800-419f-be28-cf794a467636/air-max-correlate-womens-shoes-29Vjp0.png"
    },
    {
        id: 5,
        name: "Nike Air Force 1 Low Retro QS",
        price: 400,
        soLuong: 80,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ed444e1-aa65-46bc-b89d-f084b0a62505/air-force-1-low-retro-qs-mens-shoes-XZG2zG.png"
    },
    {
        id: 6,
        name: "Nike Blazer Mid Pro Club",
        price: 350,
        soLuong: 55,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c873d33-58ff-4a69-a28c-9deabb3631eb/blazer-mid-pro-club-mens-shoes-Vgslvc.png"
    },
    {
        id: 7,
        name: "Air Jordan 1 Elevante Low SE",
        price: 1200,
        soLuong: 35,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c81d673c-6951-4c85-b34e-e1e8a618d54a/air-jordan-1-elevate-low-se-womens-shoes-Q630Pk.png"
    },
    {
        id: 8,
        name: "Nike Air Force 1 Low ASW",
        price: 750,
        soLuong: 30,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92511553-5c5c-4da6-96da-96a51dc701ed/air-force-1-07-mid-womens-shoes-2NP34w.png"
    },
    {
        id: 9,
        name: "Jordan Nu Netro 1 Low",
        price: 250,
        soLuong: 110,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c7ce7765-18d6-4554-ab4f-cc2b39b9b18f/jordan-nu-retro-1-low-mens-shoes-L6Xk8z.png"
    },
    {
        id: 10,
        name: "Nike Air Force 1 LV8",
        price: 550,
        soLuong: 60,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5385fbe8-070b-4148-a56b-186827d9f2a2/air-force-1-lv8-big-kids-shoes-sT7BZs.png"
    },
    {
        id: 11,
        name: "Nike Blazer Mid",
        price: 850,
        soLuong: 45,
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8f046415-2cda-4f4d-b0ea-5bf158449491/air-force-1-07-lx-womens-shoes-0kPfm7.png"
    }
]
const listCart = []

let listProvince = []
let listDistrict = []
let listWard = []

// const Api = "http://localhost:3000/orders"
const Api = "https://test-api-lls2.onrender.com/orders"

const keyLocalStorageListSP = "DACHSACHSP"
const keyLocalStorageItemCart = "DANHSACHITEMCART"


const home = $(".grid")
const modal = $(".modal")
const cart_info = $(".cart-info")
const list_cart_body = $(".list-cart-body")
const nocart = $(".nocart")
const btnBuy = $(".btn-buy")
const list_cart = $(".list-cart")
const total_money = $(".total-money")
const tabItem = $$(".tab-item")

const form_message = $$(".form-message")
const value_form = $$(".value-form")
const inputProvince = $("#province")
const inputWard = $("#ward")
const inputDistrict = $("#district")
const input_surname = $(".input-surname")
const message_surname = $(".message-surname")
const input_name = $(".input-name")
const message_name = $(".message-name")
const input_email = $(".input-email")
const message_email = $(".message-email")
const input_phone = $(".input-phone")
const message_phone = $(".message-phone")
const input_address = $(".input-address")
const message_address = $(".message-address")
const text_note = $("#modal-note")

const list_bill = $(".list-bill")




tabItem.forEach((item) => {
    item.onclick = () => {
        $('.tab-item.active').classList.remove('active')
        item.classList.add("active")
    }
})

//th??ng b??o
const toast = ({ title = "", message = "", type = "", duration = "" }) => {
    const main = $("#toast")
    if (main) {
        const toast = document.createElement("div")
        const autoRemove = setTimeout(function () {
            main.removeChild(toast)
        }, duration + 1000)

        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle"
        };

        const delay = (duration / 1000).toFixed(2);
        let icon = icons[type];
        toast.classList.add("toast", `toast--${type}`)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;

        main.appendChild(toast);
    }



}

// l??u d??? li???u v??o Storage
const setDataStorage = (key, value) => {
    localStorage.setItem(key, value)
}
setDataStorage(keyLocalStorageListSP, JSON.stringify(listData))
setDataStorage(keyLocalStorageItemCart, JSON.stringify(listCart))

// l???y d??? li???u t??? Storage
const getDataStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const datas = getDataStorage(keyLocalStorageListSP)
// const listCart = getDataStorage(keyLocalStorageItemCart)


//hi???n th??? SP
const renderData = () => {
    const main = $(".grid")
    if (main) {
        const item = datas.map((data, index) => {
            return `
                <div class="grid__column-2-4">
                <div class="home-product-item">
                    <div class="home-product-item__img home-product-add-cart"
                        style="background-image: url(${data.img})"></div>
                    <div class="home-product-item__properties">
                        <h4 class="home-product-item__name">${data.name}</h4>
                        <div class="home-product-item__infor">
                            <div class="home-product-item__price">$ ${data.price}</div>
                            <div class="home-product-item__quantity">Quantity: ${data.soLuong}</div>
                        </div>
                        <div title="Th??m v??o gi??? h??ng" class="home-product-item__add-cart" onclick="handleAddCart(${data.id})">
                            <i class="fa-solid fa-cart-plus"></i>
                        </div>
                    </div>
                </div>
            </div>`

        })
        main.innerHTML = item.join("")
    }
}

// hi???n th??? gi??? h??ng
const renderItemCart = () => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)
    if (datasItemCart.length === 0) {
        nocart.style.display = "block"
        list_cart.style.display = "none"
        btnBuy.style.display = "none"
    }

    const listDataCart = datasItemCart.map(data => {
        return `
            <div class="list-info">
                <div class="product-name">
                    <div>
                        <img src="${data.img}" class="product-img" alt="loi">
                    </div>
                    <div class="product-info">
                        <p class="product-info-name">${data.name}</p>
                        <p class="product-info-quantity">Quantity: ${data.soLuong}</p>
                    </div>
                </div>
                <div class="product-properti">
                    <div class="product-quantity">
                        <span class="action-decrement" onclick="handleDecrement(${data.id})">-</span>
                        <span class="quantity-buy">${data.soLuongMua}</span>
                        <span class="action-increment" onclick="handleIncrement(${data.id})">+</span>
                    </div>
                    <div class="product-price">$ ${data.price}</div>
                    <div class="product-total">$ ${data.price * data.soLuongMua}</div>
                    <div class="product-clear-cart">
                        <i class="fa-regular fa-circle-xmark" onclick="handleRemoveCart(${data.id})"></i>
                    </div>
                </div>
            </div>`
    })
    list_cart_body.innerHTML = listDataCart.join("")
    totalMoney()
}

// m??? tab home
const handleBackHome = () => {
    home.style.display = "flex"
    cart_info.style.display = "none"
    list_bill.style.display = "none"
    $('.tab-item.active').classList.remove('active')
    $('.tab-item.tab-home').classList.add('active')
    // renderItemCart()

}

//th??m v??o gi??? h??ng
const handleAddCart = (id) => {
    const listCart = getDataStorage(keyLocalStorageItemCart)
    const add = (id) => {
        const itemCart = datas.filter((data) => {
            return data.id === id
        })
        itemCart[0].soLuongMua = 1
        listCart.unshift(...itemCart)
    }
    if (listCart.length === 0) {
        add(id)
    } else {
        let isFind = false
        listCart.map(data => {
            if (data.id === id) {
                data.soLuongMua = data.soLuongMua + 1,
                    isFind = true
            }
        })
        if (!isFind) {
            add(id)
        }

        // console.log(listCart)
    }
    // console.log(listCart)

    setDataStorage(keyLocalStorageItemCart, JSON.stringify(listCart))


    toast({
        title: "Th??nh c??ng!",
        message: "Th??m v??o gi??? h??ng th??nh c??ng",
        type: "success",
        duration: 2000
    });
    numberCart()

}


//x??a kh???i gi??? h??ng
const handleRemoveCart = (id) => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)
    const listCartNew = datasItemCart.filter((data) => {
        return data.id !== id
    })
    setDataStorage(keyLocalStorageItemCart, JSON.stringify(listCartNew))
    renderItemCart()
    toast({
        title: "Th??nh c??ng!",
        message: "X??a th??nh c??ng",
        type: "success",
        duration: 2000
    });
    numberCart()
}


//t??ng s??? l?????ng sp trong gi??? h??ng
const handleIncrement = (id) => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)

    datasItemCart.map(data => {
        if (data.id === id && data.soLuongMua < data.soLuong) {

            data.soLuongMua = data.soLuongMua + 1
        }
    })
    // console.log(listCart)
    setDataStorage(keyLocalStorageItemCart, JSON.stringify(datasItemCart))
    renderItemCart()

}

// gi???m s??? l?????ng sp trong gi??? h??ng
const handleDecrement = (id) => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)

    datasItemCart.map(data => {
        if (data.id === id && data.soLuongMua > 1) {
            data.soLuongMua = data.soLuongMua - 1
        }
    })
    setDataStorage(keyLocalStorageItemCart, JSON.stringify(datasItemCart))
    renderItemCart()

}
// t???ng ti???n
const totalMoney = () => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)
    const sum = datasItemCart.reduce((total, data) => {
        return total + data.price * data.soLuongMua
    }, 0)
    total_money.innerText = "Total: $ " + sum
}

// m??? tab cart
const openCart = () => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)
    home.style.display = "none"
    list_bill.style.display = "none"
    cart_info.style.display = "block"
    if (datasItemCart.length !== 0) {
        nocart.style.display = "none"
        list_cart_body.style.display = "block"
        btnBuy.style.display = "block"
        list_cart.style.display = "block"
    } else {
        list_cart.style.display = "none"
    }
    renderItemCart()

}


//open form ng?????i mua
const handleOpenModal = () => {
    modal.style.display = "flex"
    // getProvince()
    // getDistrict()
    // getWard()
}

// close form ng?????i mua
const handleCloseModal = () => {
    modal.style.display = "none"

    form_message.forEach((item) => {
        item.innerText = ""
    })

    value_form.forEach((item) => {
        item.value = ""
    })

    text_note.value = ""
    getProvince()
    getDistrict()
    getWard()
}


// l???y danh s??ch huy???n t??? id t???nh
const handleDistrictByID = async () => {
    const idProvince = JSON.parse(inputProvince.value)[0]
    const value = "district-" + idProvince + "-id"
    const listDistrictNew = listDistrict.filter(data => { return data.includes(value) })
    listDistrictNew.unshift('<option value="[0]" class="option-district-default">-- Ch???n Huy???n/Qu???n --</option>')
    if (idProvince === 0) {
        inputDistrict.innerHTML = listDistrict.join("")
        inputWard.innerHTML = listWard.join("")
    } else {
        inputDistrict.innerHTML = listDistrictNew.join("")
        inputWard.innerHTML = listWard.join("")
    }
}


// l???y danh s??nh x?? t??? id huy???n
const handleWardByID = async () => {
    const idDistrict = JSON.parse(inputDistrict.value)[0]
    const value = "ward-" + idDistrict + "-id"
    const listWardNew = listWard.filter(data => { return data.includes(value) })
    listWardNew.unshift('<option value="[0]" class="option-ward-default">-- Ch???n Ph?????ng/X?? --</option>')
    if (idDistrict === 0) {
        inputWard.innerHTML = listWard.join("")
    } else {
        inputWard.innerHTML = listWardNew.join("")
    }
}

//dia chi
// let listProvince = []
// let listDistrict = []
// let listWard = []

// let listProvince = ['<option value="all" class="option-province-default">-- Ch???n T???nh/Th??nh ph??? --</option>']
// let listDistrict = ['<option value="all" class="option-district-default">-- Ch???n Huy???n/Qu???n --</option>']
// let listWard = ['<option value="all" class="option-ward-default">-- Ch???n Ph?????ng/X?? --</option>']


// l???y t???t c??? t???nh
const getProvince = async () => {
    const res = await fetch("https://provinces.open-api.vn/api/p/")
    const datas = await res.json()
    listProvince = datas.map(data => {
        return `<option value='[${data.code}, "${data.name}"]' class="option-province">${data.name}</option>`
    })
    listProvince.unshift('<option value="[0]" class="option-province-default">-- Ch???n T???nh/Th??nh ph??? --</option>')
    // console.log(listProvince)
    // listProvince = [...listProvince, ...b]
    inputProvince.innerHTML = listProvince.join("")
}


// l???y t???t c??? huy???n
const getDistrict = async () => {
    const res = await fetch("https://provinces.open-api.vn/api/d/")
    const datas = await res.json()
    listDistrict = datas.map(data => {
        return `<option value='[${data.code}, "${data.name}"]' class="district-${data.province_code}-id">${data.name}</option>`
    })
    listDistrict.unshift('<option value="[0]" class="option-district-default">-- Ch???n Huy???n/Qu???n --</option>')
    // console.log(listDistrict) 
    // listDistrict = [...listDistrict, ...b]
    inputDistrict.innerHTML = listDistrict.join("")
}

//l???y t???t c??? x??
const getWard = async () => {
    const res = await fetch("https://provinces.open-api.vn/api/w/")
    const datas = await res.json()
    listWard = datas.map(data => {
        return `<option value='[${data.code}, "${data.name}"]' class="ward-${data.district_code}-id">${data.name}</option>`
    })
    listWard.unshift('<option value="[0]" class="option-ward-default">-- Ch???n Ph?????ng/X?? --</option>')
    // console.log(listWard) 
    // listWard = [...listWard, ...b]
    inputWard.innerHTML = listWard.join("")
}


// khi ch??a ch???n t???nh
const handleNoProvince = () => {
    const valueInputProvince = JSON.parse($("#province").value)[0]
    if (valueInputProvince === 0) {
        inputDistrict.innerHTML = '<option value="[0]" class="option-district-default">-- Ch???n Huy???n/Qu???n --</option>'
        inputDistrict.title = "Vui l??ng ch???n T???nh/Th??nh ph???"
        inputWard.innerHTML = '<option value="[0]" class="option-ward-default">-- Ch???n Ph?????ng/X?? --</option>'
        inputWard.title = "Vui l??ng ch???n T???nh/Th??nh ph???"
    }
}


// khi ch??a ch???n huy???n
const handleNoDistrict = () => {
    const valueInputDistrict = JSON.parse($("#district").value)[0]
    if (valueInputDistrict === 0) {
        inputWard.title = "Vui l??ng ch???n Huy???n/Qu???n"
        inputWard.innerHTML = '<option value="[0]" class="option-ward-default">-- Ch???n Ph?????ng/X?? --</option>'
    }
}

// x??a title
const handleCloseTitle = () => {
    const valueInputProvince = JSON.parse($("#province").value)[0]
    if (valueInputProvince !== 0) {
        inputDistrict.removeAttribute("title")
        inputWard.removeAttribute("title")

    }
}


// ramdom id
const IdRamdom = () => {
    // const value = Math.floor(Math.random() * 3) + 6
    const random = () => {
        return Math.random().toString(36).slice(-6)
    }
    return random
}

// validate c??c tr?????ng
const validateSurname = () => {
    const value_input_surname = input_surname.value
    const regName = /^[a-zA-Z_????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????]+$/
    if (value_input_surname.length !== 0) {
        if (!regName.test(value_input_surname)) {
            message_surname.innerText = "H??? kh??ng h???p l???"
        } else {
            message_surname.innerText = ""
        }
    } else {
        message_surname.innerText = "Vui l??ng nh???p H???"
    }
}


const validateName = () => {
    const value_input_name = input_name.value
    const regName = /^[a-zA-Z_????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????]+$/
    if (value_input_name.length !== 0) {
        if (!regName.test(value_input_name)) {
            message_name.innerText = "T??n kh??ng h???p l???"
        } else {
            message_name.innerText = ""
        }
    } else {
        message_name.innerText = "Vui l??ng nh???p T??n"
    }
}


const validateEmail = () => {
    const value_input_email = input_email.value
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (value_input_email.length !== 0) {
        if (!regEmail.test(value_input_email)) {
            message_email.innerText = "Email kh??ng h???p l???"
        } else {
            message_email.innerText = ""

        }
    } else {
        message_email.innerText = "Vui l??ng nh???p Email"
    }
}


const validatePhone = () => {
    const value_input_phone = input_phone.value
    const regPhone = /^[0-9]{10}$/
    if (value_input_phone.length !== 0) {
        if (!regPhone.test(value_input_phone)) {
            message_phone.innerText = "S??? ??i???n tho???i kh??ng h???p l???"
        } else {
            message_phone.innerText = ""

        }
    } else {
        message_phone.innerText = "Vui l??ng nh???p S??? ??i???n tho???i"
    }
}

const validateAddress = () => {
    const value_input_address = input_address.value
    if (value_input_address === "") {
        message_address.innerText = "Vui l??ng nh???p S??? nh??"
    } else {
        message_address.innerText = ""
    }
}

// l??u data form
const handleSave = () => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)

    if (input_surname.value === "") {
        message_surname.innerText = "Vui l??ng nh???p H???"
    }
    if (input_name.value === "") {
        message_name.innerText = "Vui l??ng nh???p T??n"
    }
    if (input_phone.value === "") {
        message_phone.innerText = "Vui l??ng nh???p S??? ??i???n tho???i"
    }
    if (input_email.value === "") {
        message_email.innerText = "Vui l??ng nh???p Eamil"
    }

    if (JSON.parse(inputProvince.value)[0] === 0) {
        message_address.innerText = "Vui l??ng ch???n T???nh, Huy???n, X??"
    } else if (JSON.parse(inputDistrict.value)[0] === 0) {
        message_address.innerText = "Vui l??ng ch???n Huy???n, X??"
    } else if (JSON.parse(inputWard.value)[0] === 0) {
        message_address.innerText = "Vui l??ng ch???n X??"
    } else if (input_address.value === "") {
        message_address.innerText = "Vui l??ng nh???p S??? nh??"
    } else {
        message_address.innerText = ""
    }

    if (input_address.value === "" && JSON.parse(inputProvince.value)[0] === 0) {
        message_address.innerText = "Vui l??ng nh???p S??? nh?? v?? ch???n T???nh, Huy???n, X??"
    }

    let isError = false
    form_message.forEach((item) => {
        if (item.innerText !== "") {
            isError = true;
            return
        }
    })

    if (!isError) {
        const id = IdRamdom();
        const time = new Date()
        const data = {
            "id": id(),
            "fullname": input_surname.value + " " + input_name.value,
            "phone": input_phone.value,
            "email": input_email.value,
            "address": input_address.value + ", " + JSON.parse(inputWard.value)[1] + ", " + JSON.parse(inputDistrict.value)[1] + ", " + JSON.parse(inputProvince.value)[1],
            "order": {
                "time": time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear(),
                "note": text_note.value,
                "itemNumbers": datasItemCart.length,
                "totalPrice": datasItemCart.reduce((total, data) => {
                    return total + data.price * data.soLuongMua
                }, 0),
                "totalQuantity": datasItemCart.reduce((total, data) => {
                    return total + data.soLuongMua
                }, 0),
                "listCart": datasItemCart
            }
        }
        // console.log(JSON.stringify(data))
        createOrder(data, getOrders(renderBills))
        handleCloseModal()
        setDataStorage(keyLocalStorageItemCart, JSON.stringify([]))
        renderItemCart()
        toast({
            title: "Th??nh c??ng!",
            message: "Mua h??ng th??nh c??ng",
            type: "success",
            duration: 2000
        });

        datasItemCart.forEach(item2 => {
            datas.forEach(item1 => {
                if (item2.id === item1.id) {
                    item1.soLuong = item1.soLuong - item2.soLuongMua
                }
            })
        })

        setDataStorage(keyLocalStorageListSP, JSON.stringify(datas))
        renderData()
        numberCart()
    } else {
        console.log("loi")
    }


}

// click hi???n th??? chi ti???t
const handleShowDetail = (id) => {
    const show_detail_item = $(`.show-detail-${id}`)
    const last_detail_item = $(`.list-bill-info-list-${id + 1}`)
    show_detail_item.classList.toggle("no-show-detail-order")
    if(last_detail_item) {
        last_detail_item.classList.toggle("borderTop")
    }

}

// hi???n th??? danh d??ch c??c ????n h??ng
const renderBills = (datas) => {
    const main = $(".list-bill-info")
    if (main) {
        const item = datas.map((data, index) => {
            const listItemCart = data.order.listCart.map((data) => {
                return `<div class="list-detail-order">
                <div class="detail-product-name">
                    <div>
                        <img src="${data.img}" class="detail-product-img" alt="loi">
                    </div>
                    <div class="detail-product-info">
                        <p class="detail-product-info-name">${data.name}</p>
                        <p class="detail-product-info-price">$ ${data.price}</p>
                    </div>
                </div>
                <div class="detail-product-quantity">x${data.soLuongMua}</div>
                <div class="detail-product-total">Total: $ ${data.price * data.soLuongMua}</div>
            </div>`
            }).join("")

            return `<div class="list-bill-info-list-${index}">
            <div class="list-bill-info-list">
            <div class="bill-info-code">
                <span>${data.id}</span>
                <div class="bill-info-detail" onclick="handleShowDetail(${index})">
                    Chi ti???t
                    <div class="detail-icon">
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <span class="bill-info">${data.fullname}</span>
            <span class="bill-info">${data.order.time}</span>
            <span class="bill-info">${data.order.itemNumbers}</span>
            <span class="bill-info">${data.order.totalQuantity}</span>
            <span class="bill-info">$ ${data.order.totalPrice}</span>
            <div class="bill-info-return bill-info-icon-clear">
                <i class="fa-regular fa-rectangle-xmark" onclick="handleDeleteOrder(${index}, '${data.id}')"></i>
            </div>
        </div>
        <div class="show-detail show-detail-${index} no-show-detail-order">
            <div class="delivery-address">
                <h5 class="title-delivery">Th??ng tin ????n h??ng</h5>
                <p>+, T??n: ${data.fullname}</p>
                <p>+, S??T: ${data.phone}, Email: ${data.email}</p>
                <p>+, ?????a ch???: ${data.address}</p>
                <p>+, L???i nh???n: ${data.order.note}</p>
                <p>+, Th???i gian ?????t h??ng: ${data.order.time}</p>
            </div>
            <div class="detail-order">${listItemCart}</div>
        </div>
        </div>`
        })
        main.innerHTML = item.join("")
    }
}

//x??a ????n h??ng
const handleDeleteOrder = (index, id) => {
    const test = (data) => {
        data.order.listCart.forEach(item2 => {
            datas.forEach(item1 => {
                if (item2.id === item1.id) {
                    item1.soLuong = item1.soLuong + item2.soLuongMua
                }
            })
        })
        setDataStorage(keyLocalStorageListSP, JSON.stringify(datas))
        renderData()
    }

    getOrdersByID(id, test)

    const deleteItem = () => {
        const deleteE = $(`.list-bill-info-list-${index}`)
        if (deleteE) {
            deleteE.remove();
        }
        toast({
            title: "Th??nh c??ng!",
            message: "X??a ????n h??ng th??nh c??ng",
            type: "success",
            duration: 2000
        });
    }

    deleteOrder(id, deleteItem())

}


// g???i api l???y th??ng tin ????n h??ng v???i id
const getOrdersByID = (id, callback) => {
    fetch(Api + "/" + id)
        .then(res => res.json())
        .then(callback)
        .catch((err) => {
            console.log(err)
        })
}


// g???i api l???y th??ng tin t???t c??? ????n h??ng
const getOrders = (callback) => {
    fetch(Api)
        .then(res => res.json())
        .then(callback)
        .catch((err) => {
            console.log(err)
        })
}


// g???i api t???o ????n h??ng
const createOrder = (data, callback) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(Api, options)
        .then(res => res.json())
        .then(callback)
        .catch((err) => {
            console.log(err)
        })
}

// g???i api x??a ????n h??ng
const deleteOrder = (id, callback) => {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    fetch(Api + '/' + id, options)
        .then(res => res.json())
        .then(callback)
        .catch((err) => {
            console.log(err)
        })
}

// m??? tab bills
const handleOpenBills = () => {
    getOrders(renderBills)
    home.style.display = "none"
    cart_info.style.display = "none"
    list_bill.style.display = "block"
}

// s??? l?? khi hover v??o icon gi??? h??ng
const handleHoverWrap = () => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)
    $(".header__cart-list").style.display = "block";
    if (datasItemCart.length === 0) {
        $(".list-cart-item").style.display = "none";
        $(".no-cart").style.display = "block";
    } else {
        $(".no-cart").style.display = "none";
        $(".list-cart-item").style.display = "block";
    }
    const main = $(".header__cart-list-item")
    if (main) {
        const item = datasItemCart.map((data, index) => {
            return `
            <li class="header__cart-item">
            <div class="header__cart-item-img">
                <img src="${data.img}" class="product-img" alt="loi">
            </div>
            <div class="header__cart-item-info">
                <p class="header__cart-item-info-name">${data.name}</p>
                <p class="header__cart-item-info-price">$ ${data.price}</p>
            </div>
        </li>`

        })
        main.innerHTML = item.join("")
    }
}

const handleOutHoverWrap = () => {
    $(".header__cart-list").style.display = "none";
}


const numberCart = () => {
    const datasItemCart = getDataStorage(keyLocalStorageItemCart)
    const number = datasItemCart.length
    if (number === 0) {
        $(".header__cart-notice").style.display = "none";
    } else {
        $(".header__cart-notice").innerText = number;
        $(".header__cart-notice").style.display = "block";

    }
}


// setDataStorage(keyLocalStorageListSP, JSON.stringify(listData))
numberCart()
renderData()
getOrders(renderBills)
getProvince()
getDistrict()
getWard()

