
  export default function store() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'metathreads.myshopify.com',
      apiKey: '177b3deedabe04544972b30483232298',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 16447307815,
        node: document.getElementById('collection-component-74bf8d6ff7b'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#192236",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2b3a5c"
        },
        ":focus": {
          "background-color": "#2b3a5c"
        }
      },
      "title": {
        "font-size": "14px"
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#192236",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2b3a5c"
        },
        ":focus": {
          "background-color": "#2b3a5c"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#192236",
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px",
        ":hover": {
          "background-color": "#2b3a5c"
        },
        ":focus": {
          "background-color": "#2b3a5c"
        }
      },
      "quantityInput": {
        "font-size": "13px",
        "padding-top": "14.5px",
        "padding-bottom": "14.5px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#192236",
        ":hover": {
          "background-color": "#2b3a5c"
        },
        ":focus": {
          "background-color": "#2b3a5c"
        }
      },
      "count": {
        "font-size": "13px",
        "color": "#ffffff",
        ":hover": {
          "color": "#ffffff"
        }
      },
      "iconPath": {
        "fill": "#ffffff"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
