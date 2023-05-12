let sampledata = [
  {    
    content: "Item 1",
    inset: "inset1",    
    items: [
      {        
        content: "Subitem 1.1"      
      },      
      {        
        content: "Subitem 1.2"      
      }    
    ]
  },
  {
    content: "Item 2",
    items: [
      {
        content: "Subitem 2.1"
      },
      {
        content: "Subitem 2.2",
        inset: "inset2",
        items: [
          {
            content: "Subsubitem 2.2.1"
          },
          {
            content: "Subsubitem 2.2.2"
          }
        ]
      }
    ]
  }
];

let htmlData = {
  "main": "body",
  "hue": 344,
  "children": [
    {
      "main": "#window-container",
      "content": ".container.vw-100.vh-100",
      "hue": 183,
      "diagramFormat": {
        "ulClass": "d-flex flex-wrap align-items-center"
      },
      "children": [
        {
          "main": ".row",
          "hue": 315,
          "diagramFormat": {
            "ulClass": "w-100 d-flex flex-wrap"
          },
          "children": [
            {
              "main": "#page-title-area.col-12",
              "hue": 97,
              "diagramFormat": {
                "liClass": "w-100"
              },
              "children": [
                {
                  "main": "form#page-title-form[onsubmit='setPageTitle()']",
                  "hue": 148,
                  "children": [
                    {
                      "main": "input[type='text']#page-title-input",
                      "content": ".form-control",
                      "hue": 192
                    }
                  ]
                }
              ]
            },
            {
              "main": "#nav-area.col-2",
              "hue": 102,
              "diagramFormat": {
                "liStyle": "flex: 1 0 0"
              },
              "children": [
                {
                  "main": "#nav.button-group-vertical",
                  "hue": 86,
                  "diagramFormat": {
                    "ulStyle": "border-radius:.3em"
                  },
                  "children": [
                    {
                      "main": "button[onclick=\"gotoHomePage()\"]",
                      "content": "#home-button.btn.btn-lg.btn-primary",
                      "hue": 1,
                      "text": "🔙",
                      "diagramFormat": {
                        "ulClass": "icon"
                      }
                    },
                    {
                      "main": "button[onclick=\"saveAll()\"]",
                      "content": "#save-button.btn.btn-lg.btn-success",
                      "hue": 216,
                      "text": "💾",
                      "diagramFormat": {
                        "ulClass": "icon"
                      }
                    },
                    {
                      "main": "button[onclick=\"deletePage()\"]",
                      "content": "#delete-page-button.btn.btn-lg.btn-danger",
                      "hue": 226,
                      "text": "🗑",
                      "diagramFormat": {
                        "ulClass": "icon"
                      }
                    },
                    {
                      "main": "button[onclick=\"deploy()\"]",
                      "content": "#deploy-button.btn.btn-lg.btn-info",
                      "hue": 157,
                      "text": "▶",
                      "diagramFormat": {
                        "ulClass": "icon"
                      }
                    },
                    {
                      "main": "button[onclick=\"newCard()\"]",
                      "content": "#new-card-button.btn.btn-lg.btn-warning",
                      "hue": 122,
                      "text": "➕",
                      "diagramFormat": {
                        "ulClass": "icon"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "main": "#editor-area.col-10",
              "hue": 150,
              "diagramFormat": {
                "liStyle": "flex:5 0 0"
              },
              "children": [
                {
                  "main": "#editor.row",
                  "hue": 311,
                  "diagramFormat": {
                    "ulClass": "d-flex flex-wrap align-items-center"
                  },
                  "children": [
                    {
                      "main": "#card-area-heading.col-12",
                      "content": ".d-flex.small<br>#card-area-heading {height:20%} #card-area-heading.small {height:fit-content}",
                      "hue": 33,
                      "diagramFormat": {
                        "liClass": "w-100"
                      },
                      "children": [
                        {
                          "main": "button#show-heading-btn[onclick=\"showHeading()\"]",
                          "content": ".btn.btn-warning {width:100%}",
                          "hue": 84,
                          "text": "Click to add heading or question!"
                        },
                        {
                          "main": "#card-heading.card",
                          "content": "{display-flex; flex-direction:row; width:100%; position:relative}",
                          "hue": 117,
                          "inset": "card-heading",
                          "diagramFormat": {
                            "ulClass": "d-flex"
                          },
                          "children": [
                            {
                              "main": "#card-header-heading<s>.card-left-sider</s>",
                              "content": "{display: flex; flex-direction: column; justify-content-center; flex-grow:3}",
                              "hue": 89,
                              "diagramFormat": {
                                "liClass": "w-50"
                              },
                              "children": [
                                {
                                  "main": "form#form-heading [onsubmit=\"setCardTitle()]",
                                  "hue": 130,
                                  "children": [
                                    {
                                      "main": ".input-group",
                                      "hue": 295,
                                      "diagramFormat": {
                                        "ulClass": "d-flex"
                                      },
                                      "children": [
                                        {
                                          "main": ".input-group-prepend",
                                          "hue": 352,
                                          "children": [
                                            {
                                              "main": "button#btn-speech-heading[onclick=\"speak\"]",
                                              "content": "<s>.btn-speech</s>.btn",
                                              "hue": 23
                                            }
                                          ]
                                        },
                                        {
                                          "main": "input[type='text']#input-heading",
                                          "content": ".form-control",
                                          "hue": 359
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "main": "button#delete-card-heading",
                                  "content": ".close {position:absolute; top:1rem; left:1rem}",
                                  "hue": 106
                                }
                              ]
                            },
                            {
                              "main": ".card-body",
                              "content": "{flex-grow:1}",
                              "hue": 304,
                              "diagramFormat": {
                                "liClass": "w-50"
                              },
                              "children": [
                                {
                                  "main": "#img-heading<s>.img-div</s>[data-target='#modal-heading'] {background-image:url(… ${src} …)}",
                                  "content": "[data-toggle='modal'] {position:relative}",
                                  "hue": 315,
                                  "children": [
                                    {
                                      "main": "button#delete-img-heading[onclick=\"deleteImg()\"]",
                                      "content": ".close {position:absolute; top:1rem; right:1rem}",
                                      "hue": 11
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "main": "#card-area-<i>stamp</i>.col",
                      "hue": 307,
                      "diagramFormat": {
                        "liClass": "flex-grow-1"
                      },
                      "children": [
                        {
                          "main": "#card-<i>stamp</i>.card",
                          "hue": 3,
                          "inset": "card",
                          "diagramFormat": {
                            "ulStyle": "border-radius:.3em"
                          },
                          "children": [
                            {
                              "main": "#card-header-<i>stamp</i>.card-header",
                              "hue": 277,
                              "children": [
                                {
                                  "main": "form#form-<i>stamp</i>",
                                  "hue": 278,
                                  "children": [
                                    {
                                      "main": ".input-group",
                                      "hue": 34,
                                      "diagramFormat": {
                                        "ulClass": "d-flex"
                                      },
                                      "children": [
                                        {
                                          "main": ".input-group-prepend",
                                          "hue": 221,
                                          "children": [
                                            {
                                              "main": "button<s>.btn-speech</s>",
                                              "hue": 27
                                            }
                                          ]
                                        },
                                        {
                                          "main": "input[type='text']#input-<i>stamp</i>",
                                          "content": ".form-control",
                                          "hue": 98
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "main": "button#delete-card-<i>stamp</i>.close",
                                  "hue": 331,
                                  "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>\n                      "
                                }
                              ]
                            },
                            {
                              "main": ".card-body",
                              "hue": 16,
                              "children": [
                                {
                                  "main": "button[data-toggle=\"modal\" data-target=\"#modal-<i>stamp</i>\"]\n                        #img-<i>stamp</i><s>.img-div</s>.btn {background-image:url(… ${src} …)}",
                                  "hue": 33
                                },
                                {
                                  "main": "button#delete-img-stamp.close",
                                  "hue": 309,
                                  "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "main": "#card-area-<i>stamp</i>.col",
                      "hue": 265,
                      "diagramFormat": {
                        "liClass": "flex-grow-1"
                      },
                      "children": [
                        {
                          "main": "#card-<i>stamp</i>.card",
                          "hue": 24,
                          "diagramFormat": {
                            "ulStyle": "border-radius:.3em"
                          }
                        }
                      ]
                    },
                    {
                      "main": "⋱",
                      "hue": 123,
                      "diagramFormat": {
                        "liClass": "my-0 py-0 fs-3",
                        "ulClass": "d-none"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "main": "#modal-<i>stamp</i>.modal",
          "content": ".fade",
          "hue": 75,
          "inset": "modal",
          "diagramFormat": {
            "liClass": "flex-grow-1"
          },
          "children": [
            {
              "main": ".modal-dialog",
              "hue": 96,
              "children": [
                {
                  "main": ".modal-content",
                  "hue": 30,
                  "children": [
                    {
                      "main": ".modal-header",
                      "hue": 301,
                      "diagramFormat": {
                        "ulClass": "d-flex flex-wrap"
                      },
                      "children": [
                        {
                          "main": "form#search-form-<i>stamp</i>[onsubmit=\"showSearchResults()\"]",
                          "hue": 206,
                          "diagramFormat": {
                            "liStyle": "width: 70%"
                          },
                          "children": [
                            {
                              "main": ".input-group",
                              "hue": 213,
                              "children": [
                                {
                                  "main": ".input-label",
                                  "hue": 22
                                },
                                {
                                  "main": "input[type='text']#search-input-<i>stamp</i>",
                                  "content": ".form-control",
                                  "hue": 251
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "main": "button.close",
                          "content": "[data-dismiss='modal']",
                          "hue": 68,
                          "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>",
                          "diagramFormat": {
                            "liStyle": "width:30%"
                          }
                        }
                      ]
                    },
                    {
                      "main": ".modal-body",
                      "hue": 258,
                      "text": "search results go here"
                    },
                    {
                      "main": ".modal-footer",
                      "hue": 339,
                      "diagramFormat": {
                        "ulClass": "d-flex"
                      },
                      "children": [
                        {
                          "main": "button#save-img-<i>stamp</i>",
                          "content": ".btn",
                          "hue": 228,
                          "text": "Save",
                          "diagramFormat": {
                            "liClass": "flex-grow-1"
                          }
                        },
                        {
                          "main": "button[data-dismiss='modal']",
                          "hue": 346,
                          "text": "Close",
                          "diagramFormat": {
                            "liClass": "flex-grow-1"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "main": "⋯",
          "hue": 287,
          "diagramFormat": {
            "liStyle": "text-align:center",
            "liClass": "flex-grow-1 my-0 py-0 fs-2",
            "ulClass": "d-none"
          }
        }
      ]
    }
  ]
}
