let data = {
  "data": [
    {
      "main": "body",
      "hue": 344,
      "children": [
        {
          "main": "#window-container",
          "content": ".container.vw-100.vh-100",
          "hue": 183,
          "ulClass": "d-flex flex-wrap align-items-center",
          "children": [
            {
              "main": ".row",
              "hue": 315,
              "ulClass": "w-100 d-flex flex-wrap",
              "children": [
                {
                  "main": "#page-title-area.col-12",
                  "hue": 97,
                  "liClass": "w-100",
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
                  "liStyle": "flex: 1 0 0",
                  "children": [
                    {
                      "main": "#nav.button-group-vertical",
                      "hue": 86,
                      "ulStyle": "border-radius:.3em",
                      "children": [
                        {
                          "main": "button[onclick=\"gotoHomePage()\"]",
                          "content": "#home-button.btn.btn-lg.btn-primary",
                          "hue": 1,
                          "ulClass": "icon",
                          "text": "🔙"
                        },
                        {
                          "main": "button[onclick=\"saveAll()\"]",
                          "content": "#save-button.btn.btn-lg.btn-success",
                          "hue": 216,
                          "ulClass": "icon",
                          "text": "💾"
                        },
                        {
                          "main": "button[onclick=\"deletePage()\"]",
                          "content": "#delete-page-button.btn.btn-lg.btn-danger",
                          "hue": 226,
                          "ulClass": "icon",
                          "text": "🗑"
                        },
                        {
                          "main": "button[onclick=\"deploy()\"]",
                          "content": "#deploy-button.btn.btn-lg.btn-info",
                          "hue": 157,
                          "ulClass": "icon",
                          "text": "▶"
                        },
                        {
                          "main": "button[onclick=\"newCard()\"]",
                          "content": "#new-card-button.btn.btn-lg.btn-warning",
                          "hue": 122,
                          "ulClass": "icon",
                          "text": "➕"
                        }
                      ]
                    }
                  ]
                },
                {
                  "main": "#editor-area.col-10",
                  "hue": 150,
                  "liStyle": "flex:5 0 0",
                  "children": [
                    {
                      "main": "#editor.row",
                      "hue": 311,
                      "ulClass": "d-flex flex-wrap align-items-center",
                      "children": [
                        {
                          "main": "#card-area-heading.col-12",
                          "content": ".d-flex.small<br>#card-area-heading {height:20%} #card-area-heading.small {height:fit-content}",
                          "hue": 33,
                          "liClass": "w-100",
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
                              "ulClass": "d-flex",
                              "inset": "card-heading",
                              "children": [
                                {
                                  "main": "#card-header-heading<s>.card-left-sider</s>",
                                  "content": "{display: flex; flex-direction: column; justify-content-center; flex-grow:3}",
                                  "hue": 89,
                                  "liClass": "w-50",
                                  "children": [
                                    {
                                      "main": "form#form-heading [onsubmit=\"setCardTitle()]",
                                      "hue": 130,
                                      "children": [
                                        {
                                          "main": ".input-group",
                                          "hue": 295,
                                          "ulClass": "d-flex",
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
                                  "liClass": "w-50",
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
                          "liClass": "flex-grow-1",
                          "children": [
                            {
                              "main": "#card-<i>stamp</i>.card",
                              "hue": 3,
                              "ulStyle": "border-radius:.3em",
                              "text": "see inset",
                              "inset": "card",
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
                                          "ulClass": "d-flex",
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
                          "liClass": "flex-grow-1",
                          "children": [
                            {
                              "main": "#card-<i>stamp</i>.card",
                              "hue": 24,
                              "ulStyle": "border-radius:.3em"
                            }
                          ]
                        },
                        {
                          "main": "⋱",
                          "hue": 123,
                          "liClass": "my-0 py-0 fs-3",
                          "ulClass": "d-none"
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
              "liClass": "flex-grow-1",
              "text": "See inset",
              "inset": "modal",
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
                          "ulClass": "d-flex flex-wrap",
                          "children": [
                            {
                              "main": "form#search-form-<i>stamp</i>[onsubmit=\"showSearchResults()\"]",
                              "hue": 206,
                              "liStyle": "width: 70%",
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
                              "liStyle": "width:30%",
                              "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>"
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
                          "ulClass": "d-flex",
                          "children": [
                            {
                              "main": "button#save-img-<i>stamp</i>",
                              "content": ".btn",
                              "hue": 228,
                              "liClass": "flex-grow-1",
                              "text": "Save"
                            },
                            {
                              "main": "button[data-dismiss='modal']",
                              "hue": 346,
                              "liClass": "flex-grow-1",
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
              "hue": 287,
              "liClass": "flex-grow-1 my-0 py-0 fs-2",
              "liStyle": "text-align:center",
              "ulClass": "d-none"
            }
          ]
        }
      ]
    }
  ]
}