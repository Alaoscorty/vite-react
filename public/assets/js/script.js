
        document.addEventListener("DOMContentLoaded", () => {
            const products = [
                { id: 1, name: "Pack 1", price: 5000, img: "images/bijou1.jpg" },
                { id: 2, name: "Pack 2", price: 5000, img: "images/bijou2.jpg" },
                { id: 3, name: "Pack 3", price: 5000, img: "images/bijou3.jpg" },
                { id: 4, name: "Pack 4", price: 5000, img: "images/bijou4.jpg" },
                { id: 5, name: "Pack 5", price: 4500, img: "images/bijou5.jpg" },
                { id: 5, name: "Pack 6", price: 4500, img: "images/bijou6.jpg" },
                { id: 5, name: "Pack 7", price: 500, img: "images/bijou7.jpg" },
                { id: 5, name: "Pack 8", price: 500, img: "images/bijou8.jpg" },
                { id: 5, name: "Pack 9", price: 500, img: "images/bijou9.jpg" },
                { id: 5, name: "Pack 10", price: 3000, img: "images/bijou10.jpg" },
                { id: 5, name: "Pack 11", price: 5000, img: "images/bijou11.jpg" },
                { id: 5, name: "Pack 12", price: 500, img: "images/bijou12.jpg" },
                { id: 5, name: "Pack 13", price: 500, img: "images/bijou13.jpg" },
                { id: 1, name: "Pack 1", price: 5000, img: "images/bijou14.jpg" },
            ];
            
            const productsContainer = document.getElementById("products");
            const cartCount = document.getElementById("cart-count");
            const cartItems = document.getElementById("cart-items");
            const cartTotal = document.getElementById("cart-total");
            let cart = [];

            function updateCart() {
                cartItems.innerHTML = "";
                let total = 0;
                cart.forEach(item => {
                    const li = document.createElement("li");
                    li.classList.add("cart-item");
                    li.innerHTML = `<img src="${item.img}" alt="${item.name}"><span>${item.name} - ${item.price}€</span>`;
                    cartItems.appendChild(li);
                    total += item.price;
                });
                cartCount.textContent = cart.length;
                cartTotal.textContent = total;
            }

            products.forEach(product => {
                const div = document.createElement("div");
                div.classList.add("product");
                div.innerHTML = `
                    <img src="${product.img}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.price}FCFA</p>
                    <button onclick="addToCart(${product.id})">Ajouter au panier</button>
                `;
                productsContainer.appendChild(div);
            });

            window.addToCart = (id) => {
                const product = products.find(p => p.id === id);
                if (product) {
                    cart.push(product);
                    updateCart();
                }
            };

            window.checkout = () => {
                if (cart.length === 0) {
                    alert("Votre panier est vide.");
                    return;
                }
                let totalPrice = cartTotal.textContent;
                let queryParams = cart.map(item => `id=${item.id}&name=${encodeURIComponent(item.name)}&price=${item.price}`).join("&");
                window.location.href = `paiement.html?total=${totalPrice}&${queryParams}`;
            };
        });


// Gérer le chatbot

document.getElementById("chatbot-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let input = event.target.value.toLowerCase();
        let chatbox = document.getElementById("chatbot-messages");
        
        let userMessage = document.createElement("p");
        userMessage.textContent = "Vous : " + input;
        chatbox.appendChild(userMessage);
        
        let response = "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?";
        if (input.includes("produit")) {
            response = "Nous avons plusieurs produits disponibles. Que recherchez-vous exactement ?";
        } else if (input.includes("prix")) {
            response = "Les prix varient selon le produit. Quel produit vous intéresse ?";
        } else if (input.includes("les voiles")) {
            response = "Pour les voiles, nous avons des voiles de qualité supérieur à partie de 2000f";
        }
        else if (input.includes("rendez-vous")) {
            response = "Vous pouvez prendre rendez-vous en cliquant sur la section 'Rendez-vous'.";
        } else if (input.includes("paiement")) {
            response = "Nous acceptons les paiements en ligne via carte bancaire et mobile money.";
        } else if (input.includes("salut")) {
            response = "Salut! comment puis-je vous aider ?";
        } else if (input.includes("Cc")) {
            response = "Salut! comment puis-je vous aider ?";
        }
        else if (input.includes("bonjour")) {
            response = "Salut! comment puis-je vous aider ?";
        }
        else if (input.includes("Où êtes-vous situés")) {
            response = "Nous sommes situés au Bénin présicement à Cotonou et à porto-novo";
        } else if (input.includes("contact")) {
            response = "Notre numéro de téléphone est le +229 01 51 56 32 19, par mail au alaoservice1@gmail.com, ou sur les réseaux en suivant nos liens en bas de page.";
        }
        else if (input.includes("comment allez vous")) {
            response = "Je me porte bien et vous, que désirez vous ?";
        } else if (input.includes("votre nom")) {
            response = "Merci, je suis votre assisante, veillez me dire en quoi je peux vous aidez";
        }
        
        setTimeout(() => {
            let botMessage = document.createElement("p");
            botMessage.textContent = "Assistante : " + response;
            chatbox.appendChild(botMessage);
        }, 1000);
        
        event.target.value = "";
    }
});

// Fin de la gestion du chatbot
