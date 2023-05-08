let data = {
  "data": [
    {
      "main": "body",
      "color": 344,
      "children": [
        {
          "main": "#window-container",
          "content": ".container.vw-100.vh-100",
          "color": 183,
          "childClass": "d-flex flex-wrap align-items-center",
          "children": [
            {
              "main": ".row",
              "color": 315,
              "childClass": "w-100 d-flex flex-wrap",
              "children": [
                {
                  "main": "#page-title-area.col-12",
                  "color": 97,
                  "parentClass": "w-100",
                  "children": [
                    {
                      "main": "form#page-title-form[onsubmit='setPageTitle()']",
                      "color": 148,
                      "children": [
                        {
                          "main": "input[type='text']#page-title-input",
                          "content": ".form-control",
                          "color": 192
                        }
                      ]
                    }
                  ]
                },
                {
                  "main": "#nav-area.col-2",
                  "color": 102,
                  "parentStyle": "flex: 1 0 0",
                  "children": [
                    {
                      "main": "#nav.button-group-vertical",
                      "color": 86,
                      "childStyle": "border-radius:.3em",
                      "children": [
                        {
                          "main": "button[onclick=\"gotoHomePage()\"]",
                          "content": "#home-button.btn.btn-lg.btn-primary",
                          "color": 1,
                          "childClass": "icon",
                          "text": "🔙"
                        },
                        {
                          "main": "button[onclick=\"saveAll()\"]",
                          "content": "#save-button.btn.btn-lg.btn-success",
                          "color": 216,
                          "childClass": "icon",
                          "text": "💾"
                        },
                        {
                          "main": "button[onclick=\"deletePage()\"]",
                          "content": "#delete-page-button.btn.btn-lg.btn-danger",
                          "color": 226,
                          "childClass": "icon",
                          "text": "🗑"
                        },
                        {
                          "main": "button[onclick=\"deploy()\"]",
                          "content": "#deploy-button.btn.btn-lg.btn-info",
                          "color": 157,
                          "childClass": "icon",
                          "text": "▶"
                        },
                        {
                          "main": "button[onclick=\"newCard()\"]",
                          "content": "#new-card-button.btn.btn-lg.btn-warning",
                          "color": 122,
                          "childClass": "icon",
                          "text": "➕"
                        }
                      ]
                    }
                  ]
                },
                {
                  "main": "#editor-area.col-10",
                  "color": 150,
                  "parentStyle": "flex:5 0 0",
                  "children": [
                    {
                      "main": "#editor.row",
                      "color": 311,
                      "childClass": "d-flex flex-wrap align-items-center",
                      "children": [
                        {
                          "main": "#card-area-heading.col-12",
                          "content": ".d-flex.small<br>#card-area-heading {height:20%} #card-area-heading.small {height:fit-content}",
                          "color": 33,
                          "parentClass": "w-100",
                          "children": [
                            {
                              "main": "button#show-heading-btn[onclick=\"showHeading()\"]",
                              "content": ".btn.btn-warning {width:100%}",
                              "color": 84,
                              "text": "Click to add heading or question!"
                            },
                            {
                              "main": "#card-heading.card",
                              "content": "{display-flex; flex-direction:row; width:100%; position:relative}",
                              "color": 117,
                              "childClass": "d-flex",
                              "idAttr": "inset-card-heading",
                              "inset": true,
                              "children": [
                                {
                                  "main": "#card-header-heading<s>.card-left-sider</s>",
                                  "content": "{display: flex; flex-direction: column; justify-content-center; flex-grow:3}",
                                  "color": 89,
                                  "parentClass": "w-50",
                                  "children": [
                                    {
                                      "main": "form#form-heading [onsubmit=\"setCardTitle()]",
                                      "color": 130,
                                      "children": [
                                        {
                                          "main": ".input-group",
                                          "color": 295,
                                          "childClass": "d-flex",
                                          "children": [
                                            {
                                              "main": ".input-group-prepend",
                                              "color": 352,
                                              "children": [
                                                {
                                                  "main": "button#btn-speech-heading[onclick=\"speak\"]",
                                                  "content": "<s>.btn-speech</s>.btn",
                                                  "color": 23
                                                }
                                              ]
                                            },
                                            {
                                              "main": "input[type='text']#input-heading",
                                              "content": ".form-control",
                                              "color": 359
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "main": "button#delete-card-heading",
                                      "content": ".close {position:absolute; top:1rem; left:1rem}",
                                      "color": 106
                                    }
                                  ]
                                },
                                {
                                  "main": ".card-body",
                                  "content": "{flex-grow:1}",
                                  "color": 304,
                                  "parentClass": "w-50",
                                  "children": [
                                    {
                                      "main": "#img-heading<s>.img-div</s>[data-target='#modal-heading'] {background-image:url(… ${src} …)}",
                                      "content": "[data-toggle='modal'] {position:relative}",
                                      "color": 315,
                                      "children": [
                                        {
                                          "main": "button#delete-img-heading[onclick=\"deleteImg()\"]",
                                          "content": ".close {position:absolute; top:1rem; right:1rem}",
                                          "color": 11
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
                          "color": 307,
                          "parentClass": "flex-grow-1",
                          "children": [
                            {
                              "main": "#card-<i>stamp</i>.card",
                              "color": 3,
                              "childStyle": "border-radius:.3em",
                              "text": "see inset",
                              "idAttr": "inset-card",
                              "inset": true,
                              "children": [
                                {
                                  "main": "#card-header-<i>stamp</i>.card-header",
                                  "color": 277,
                                  "children": [
                                    {
                                      "main": "form#form-<i>stamp</i>",
                                      "color": 278,
                                      "children": [
                                        {
                                          "main": ".input-group",
                                          "color": 34,
                                          "childClass": "d-flex",
                                          "children": [
                                            {
                                              "main": ".input-group-prepend",
                                              "color": 221,
                                              "children": [
                                                {
                                                  "main": "button<s>.btn-speech</s>",
                                                  "color": 27
                                                }
                                              ]
                                            },
                                            {
                                              "main": "input[type='text']#input-<i>stamp</i>",
                                              "content": ".form-control",
                                              "color": 98
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "main": "button#delete-card-<i>stamp</i>.close",
                                      "color": 331,
                                      "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>\n                      "
                                    }
                                  ]
                                },
                                {
                                  "main": ".card-body",
                                  "color": 16,
                                  "children": [
                                    {
                                      "main": "button[data-toggle=\"modal\" data-target=\"#modal-<i>stamp</i>\"]\n                        #img-<i>stamp</i><s>.img-div</s>.btn {background-image:url(… ${src} …)}",
                                      "color": 33
                                    },
                                    {
                                      "main": "button#delete-img-stamp.close",
                                      "color": 309,
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
                          "color": 265,
                          "parentClass": "flex-grow-1",
                          "children": [
                            {
                              "main": "#card-<i>stamp</i>.card",
                              "color": 24,
                              "childStyle": "border-radius:.3em"
                            }
                          ]
                        },
                        {
                          "main": "⋱",
                          "color": 123,
                          "parentClass": "my-0 py-0 fs-3",
                          "childClass": "d-none"
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
              "color": 75,
              "parentClass": "flex-grow-1",
              "text": "See inset",
              "idAttr": "inset-modal",
              "inset": true,
              "children": [
                {
                  "main": ".modal-dialog",
                  "color": 96,
                  "children": [
                    {
                      "main": ".modal-content",
                      "color": 30,
                      "children": [
                        {
                          "main": ".modal-header",
                          "color": 301,
                          "childClass": "d-flex flex-wrap",
                          "children": [
                            {
                              "main": "form#search-form-<i>stamp</i>[onsubmit=\"showSearchResults()\"]",
                              "color": 206,
                              "parentStyle": "width: 70%",
                              "children": [
                                {
                                  "main": ".input-group",
                                  "color": 213,
                                  "children": [
                                    {
                                      "main": ".input-label",
                                      "color": 22
                                    },
                                    {
                                      "main": "input[type='text']#search-input-<i>stamp</i>",
                                      "content": ".form-control",
                                      "color": 251
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "main": "button.close",
                              "content": "[data-dismiss='modal']",
                              "color": 68,
                              "parentStyle": "width:30%",
                              "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>"
                            }
                          ]
                        },
                        {
                          "main": ".modal-body",
                          "color": 258,
                          "text": "search results go here"
                        },
                        {
                          "main": ".modal-footer",
                          "color": 339,
                          "childClass": "d-flex",
                          "children": [
                            {
                              "main": "button#save-img-<i>stamp</i>",
                              "content": ".btn",
                              "color": 228,
                              "parentClass": "flex-grow-1",
                              "text": "Save"
                            },
                            {
                              "main": "button[data-dismiss='modal']",
                              "color": 346,
                              "parentClass": "flex-grow-1",
                              "text": "Close"
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
              "color": 287,
              "parentClass": "flex-grow-1 my-0 py-0 fs-2",
              "parentStyle": "text-align:center",
              "childClass": "d-none"
            }
          ]
        }
      ]
    }
  ]
}