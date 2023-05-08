let data = {
  "data": [
    {
      "main": "body",
      "children": [
        {
          "main": "#window-container",
          "content": ".container.vw-100.vh-100",
          "childClass": "d-flex flex-wrap align-items-center",
          "children": [
            {
              "main": ".row",
              "childClass": "w-100 d-flex flex-wrap",
              "children": [
                {
                  "main": "#page-title-area.col-12",
                  "parentClass": "w-100",
                  "children": [
                    {
                      "main": "form#page-title-form[onsubmit='setPageTitle()']",
                      "children": [
                        {
                          "main": "input[type='text']#page-title-input",
                          "content": ".form-control"
                        }
                      ]
                    }
                  ]
                },
                {
                  "main": "#nav-area.col-2",
                  "parentStyle": "flex: 1 0 0",
                  "children": [
                    {
                      "main": "#nav.button-group-vertical",
                      "childStyle": "border-radius:.3em",
                      "children": [
                        {
                          "main": "button[onclick=\"gotoHomePage()\"]",
                          "content": "#home-button.btn.btn-lg.btn-primary",
                          "childClass": "icon",
                          "text": "🔙"
                        },
                        {
                          "main": "button[onclick=\"saveAll()\"]",
                          "content": "#save-button.btn.btn-lg.btn-success",
                          "childClass": "icon",
                          "text": "💾"
                        },
                        {
                          "main": "button[onclick=\"deletePage()\"]",
                          "content": "#delete-page-button.btn.btn-lg.btn-danger",
                          "childClass": "icon",
                          "text": "🗑"
                        },
                        {
                          "main": "button[onclick=\"deploy()\"]",
                          "content": "#deploy-button.btn.btn-lg.btn-info",
                          "childClass": "icon",
                          "text": "▶"
                        },
                        {
                          "main": "button[onclick=\"newCard()\"]",
                          "content": "#new-card-button.btn.btn-lg.btn-warning",
                          "childClass": "icon",
                          "text": "➕"
                        }
                      ]
                    }
                  ]
                },
                {
                  "main": "#editor-area.col-10",
                  "parentStyle": "flex:5 0 0",
                  "children": [
                    {
                      "main": "#editor.row",
                      "childClass": "d-flex flex-wrap align-items-center",
                      "children": [
                        {
                          "main": "#card-area-heading.col-12",
                          "content": ".d-flex.small<br>#card-area-heading {height:20%} #card-area-heading.small {height:fit-content}",
                          "parentClass": "w-100",
                          "children": [
                            {
                              "main": "button#show-heading-btn[onclick=\"showHeading()\"]",
                              "content": ".btn.btn-warning {width:100%}",
                              "text": "Click to add heading or question!"
                            },
                            {
                              "main": "#card-heading.card",
                              "content": "{display-flex; flex-direction:row; width:100%; position:relative}",
                              "childClass": "d-flex",
                              "id": "inset-card-heading",
                              "class": "inset-start inset-end",
                              "children": [
                                {
                                  "main": "#card-header-heading<s>.card-left-sider</s>",
                                  "content": "{display: flex; flex-direction: column; justify-content-center; flex-grow:3}",
                                  "parentClass": "w-50",
                                  "children": [
                                    {
                                      "main": "form#form-heading [onsubmit=\"setCardTitle()]",
                                      "children": [
                                        {
                                          "main": ".input-group",
                                          "childClass": "d-flex",
                                          "children": [
                                            {
                                              "main": ".input-group-prepend",
                                              "children": [
                                                {
                                                  "main": "button#btn-speech-heading[onclick=\"speak\"]",
                                                  "content": "<s>.btn-speech</s>.btn"
                                                }
                                              ]
                                            },
                                            {
                                              "main": "input[type='text']#input-heading",
                                              "content": ".form-control"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "main": "button#delete-card-heading",
                                      "content": ".close {position:absolute; top:1rem; left:1rem}"
                                    }
                                  ]
                                },
                                {
                                  "main": ".card-body",
                                  "content": "{flex-grow:1}",
                                  "parentClass": "w-50",
                                  "children": [
                                    {
                                      "main": "#img-heading<s>.img-div</s>[data-target='#modal-heading'] {background-image:url(… ${src} …)}",
                                      "content": "[data-toggle='modal'] {position:relative}",
                                      "children": [
                                        {
                                          "main": "button#delete-img-heading[onclick=\"deleteImg()\"]",
                                          "content": ".close {position:absolute; top:1rem; right:1rem}"
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
                          "parentClass": "flex-grow-1",
                          "children": [
                            {
                              "main": "#card-<i>stamp</i>.card",
                              "childStyle": "border-radius:.3em",
                              "text": "see inset",
                              "id": "inset-card",
                              "class": "inset-start inset-end",
                              "children": [
                                {
                                  "main": "#card-header-<i>stamp</i>.card-header",
                                  "children": [
                                    {
                                      "main": "form#form-<i>stamp</i>",
                                      "children": [
                                        {
                                          "main": ".input-group",
                                          "childClass": "d-flex",
                                          "children": [
                                            {
                                              "main": ".input-group-prepend",
                                              "children": [
                                                {
                                                  "main": "button<s>.btn-speech</s>"
                                                }
                                              ]
                                            },
                                            {
                                              "main": "input[type='text']#input-<i>stamp</i>",
                                              "content": ".form-control"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      "main": "button#delete-card-<i>stamp</i>.close",
                                      "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>\n                      "
                                    }
                                  ]
                                },
                                {
                                  "main": ".card-body",
                                  "children": [
                                    {
                                      "main": "button[data-toggle=\"modal\" data-target=\"#modal-<i>stamp</i>\"]\n                        #img-<i>stamp</i><s>.img-div</s>.btn {background-image:url(… ${src} …)}"
                                    },
                                    {
                                      "main": "button#delete-img-stamp.close",
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
                          "parentClass": "flex-grow-1",
                          "children": [
                            {
                              "main": "#card-<i>stamp</i>.card",
                              "childStyle": "border-radius:.3em",
                              "class": "inset-end"
                            }
                          ]
                        },
                        {
                          "main": "⋱",
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
              "parentClass": "flex-grow-1",
              "text": "See inset",
              "id": "inset-modal",
              "class": "inset-start inset-end",
              "children": [
                {
                  "main": ".modal-dialog",
                  "children": [
                    {
                      "main": ".modal-content",
                      "children": [
                        {
                          "main": ".modal-header",
                          "childClass": "d-flex flex-wrap",
                          "children": [
                            {
                              "main": "form#search-form-<i>stamp</i>[onsubmit=\"showSearchResults()\"]",
                              "parentStyle": "width: 70%",
                              "children": [
                                {
                                  "main": ".input-group",
                                  "children": [
                                    {
                                      "main": ".input-label"
                                    },
                                    {
                                      "main": "input[type='text']#search-input-<i>stamp</i>",
                                      "content": ".form-control"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "main": "button.close",
                              "content": "[data-dismiss='modal']",
                              "parentStyle": "width:30%",
                              "text": "<span style='font-size:x-small'>span[aria-hidden='true'] &amp;times;</span>"
                            }
                          ]
                        },
                        {
                          "main": ".modal-body",
                          "text": "search results go here"
                        },
                        {
                          "main": ".modal-footer",
                          "childClass": "d-flex",
                          "children": [
                            {
                              "main": "button#save-img-<i>stamp</i>",
                              "content": ".btn",
                              "parentClass": "flex-grow-1",
                              "text": "Save"
                            },
                            {
                              "main": "button[data-dismiss='modal']",
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