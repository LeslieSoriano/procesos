// ============================================================
// datos.js - Datos de trámites 2026 y función de inicialización
// ============================================================

let datos = {
    "categorias": [
        {
            "id": 1,
            "nombre": "Alta",
            "tramites": [
                {
                    "clave": 1,
                    "nombre": "Alta de predio",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para alta de nuevos predios",
                    "requisitos": "Solicitud formal",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 2,
                    "nombre": "Alta de derivación",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para alta de derivación en macrolotes",
                    "requisitos": "Solicitud formal",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 2,
            "nombre": "CONTROL DE OBLIGACIONES",
            "tramites": [
                {
                    "clave": 14,
                    "nombre": "Invitación al pago",
                    "estado": "Se queda igual",
                    "descripcion": "Tramite para generación de carta invitación a usarios doméstico, no genera seguimiento",
                    "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma.",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generá la carta invitación al pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": "Usuarios con servicio Domestico"
                },
                {
                    "clave": 17,
                    "nombre": "Invitación al pago NO domesticos",
                    "estado": "Se queda igual",
                    "descripcion": "Tramite para generación de carta invitación a usarios NO doméstico, no genera seguimiento.",
                    "requisitos": "Periodos de adeudo mayor a 1, usuarios no domesticos, Estatus: Real Situacion: Activo, Susp. Caja, Susp. Columpio, Susp. Toma",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generá la carta invitación al pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": "Clientes con periodo de adeudo mayor o igual a 1 mensual y que sean NO Domesticos"
                },
                {
                    "clave": 54,
                    "nombre": "Recordatorio de pago",
                    "estado": "Eliminar",
                    "descripcion": "Trámite de segudo recordatorio de pago para los usuarios que no se presentan a pagar, una vez enviada una primer carta de invitación al pago.",
                    "requisitos": "Estados del servicio:Real, Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. Que cuenten con periodos de adeudo mayor o igual a 4 periodos.",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generan el Recordatorio de Pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 55,
                    "nombre": "Último recordatorio de pago",
                    "estado": "Eliminar",
                    "descripcion": "Trámite para enviar carta de recordatorio a usuarios que anteriormente se les ha enviado ya dos invitaciones de pago",
                    "requisitos": "Estados del servicio:Real, Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. Que cuenten con periodos de adeudo mayor o igual a 4 periodos.",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 58,
                    "nombre": "Orden de suspensión del servicio por morosidad 2026",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para usuarios con morosidad para generar la orden de suspensión del servicio.",
                    "requisitos": "Estados de servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Toma. Susp. Columpio. Susp. Caja. Susp. FNSM.",
                    "etapas": [
                        {
                            "nombre": "Al cargarse la OT de suspensión del servicio y el resultado sea \"Terminada Ejecutada\" se deberá generar el cobro automaticamente en caja de la suspensión y reconexión como prioritario, según se haya ejecutado (cuadro,  banqueta o registro). El costo de dichos conceptos se deberá de actualizar y mostrar en el estado de cuenta facturado actual y en los pendientes posteriores hasta que el usuario cubra el pago del concepto. La situación comercial cambia a Susp. Cuadro, Susp. Banqueta o Susp. Registro,  según se haya ejecutado la suspensión.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Al pago total de los mensuales adeudados o quedando máximo dos mensuales adeudados pendientes se detonará la OT reconexión según se haya ejecutado la suspensión.",
                    "filtros": "Clientes con periodo de adeudo mayor o igual a 2"
                },
                {
                    "clave": 54,
                    "nombre": "Reconexión de toma en cuadro y/o registro",
                    "estado": "Agregar",
                    "descripcion": "Reconexión de toma en cuadro y/o registro para predios en cualquier situación comercial que se encuentren suspendidos y que cuenten con una inspección VSS \"terminada ejecutada\"",
                    "requisitos": "Estados de servicio: Real. Baja. Situaciones comerciales: Activo. Baja.  Susp. Cuadro. Susp. Registro. Susp. Caja.  Susp. Columpio. Susp. Toma. Susp. FNSM. No Facturable. Inexistente Duplicado.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma en cuadro y/o registro.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reconexión de toma en cuadro y/o registro.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(204) Reconexión de toma en cuadro y/o registro",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 112,
                                "nombre": "Reconexión de toma en cuadro y/o registro"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado.\nOrden de trabajo: Reconexión de toma en cuadro y/o registro. Resultado \"Ejecutado Terminado\". Cambio a Estado del Servicio: Real. Situacion comercial: Activo.",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 3,
            "nombre": "Contratación",
            "tramites": [
                {
                    "clave": 12,
                    "nombre": "Construcción de registro sanitario",
                    "estado": "Eliminar",
                    "descripcion": "Trámite para contratación de registro sanitario",
                    "requisitos": "Estados de servicio: Real  Situaciones comerciales: Activo",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Contratación de descarga sanitaria.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de alcantarillado",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(133) Contratación de descarga sanitaria",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 26,
                    "nombre": "Tierra conexion de albañal y nuevo servicio de agua (No incluye medidor)",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para contratación de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible                  Situación comercial: Potencial, Validado",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Tierra Conexión de albañal, toma, cuadro y medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Conexión de albañal.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo:  Instalación de cuadro (Solo si se cobra)",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(130) Tierra Conexión de albañal, toma, cuadro y medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 220,
                                "nombre": "Tierra conexion de albañal y nuevo servicio de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            },
                            {
                                "clave": 68,
                                "nombre": "Tierra metro adicional albañal"
                            },
                            {
                                "clave": 108,
                                "nombre": "Tierra metro adicional agua potable"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \n1. Orden de trabajo:  Instalación de toma de agua. Resultado: \"Ejecutada\". Cambia Estado Comercial: Real. Situación comercial: Activo. \n2. Orden de trabajo: Instalación de cuadro (Solo si se cobra). \n2. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 28,
                    "nombre": "Tierra conexion de albañal",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para contratación, solo de albañal en Tierra.",
                    "requisitos": "Estados de servicio: Factible,  Real, Situaciones comerciales: Potencial, Activo,",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Tierra Conexión de albañal.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Conexión de albañal.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(132) Tierra Conexión de albañal",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 218,
                                "nombre": "Tierra Conexion de albañal"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 68,
                                "nombre": "Tierra metro adicional albañal"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. \nOrden de trabajo: Conexión de albañal. Resultado \"Ejecutada\". Cambia Estado comercial: Real. Situacion comercial: Activo.",
                    "filtros": ""
                },
                {
                    "clave": 29,
                    "nombre": "Tierra nuevo servicio de agua 1/2\" a 1\" (no incluye medidor)",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y/o medidor",
                    "requisitos": "Estados de servicio: Factible  Situaciones comerciales: Potencial, Validado",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial, con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Tierra Toma de agua, cuadro y medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra)",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(135) Tierra Toma de agua, cuadro y/o medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 215,
                                "nombre": "Tierra nuevo servicio de agua 1/2\" a 1\""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            },
                            {
                                "clave": 108,
                                "nombre": "Tierra metro adicional agua potable"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \nOrden de trabajo:  Instalación de toma de agua. Resultado: \"Ejecutada\". Cambia Estado Comercial: Real. Situación comercial: Activo. \nOrden de trabajo: Instalación de columpio (Solo si se cobra). \nOrden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 45,
                    "nombre": "Venta de medidor y/o cuadro nueva contratación",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para instalacion de medidor a usuarios que ya cuentan con los servicios de agua y alcantarillado y solo requieren el cuadro y/o instalacion del medidor",
                    "requisitos": "Estados de servicio: Factible. Real. Situaciones comerciales: Potencial. Activo.",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Venta de medidor y/o cuadro nueva contratación.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(140) Venta de medidor y/o cuadro nueva contratación",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado comercial: Real. Situación Comercial: Activo.\nOrden de trabajo: Instalación de columpio. (Solo si se cobra). Resultado \"Ejecutada Terminada\". \nOrden de trabajo: Instalación de medidor (Solo si se cobra)",
                    "filtros": ""
                },
                {
                    "clave": 70,
                    "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y/o medidor",
                    "requisitos": "Estados de servicio: Factible                  Situación comercial: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Rodamiento conexión de albañal, toma, cuadro y medidor. \"Pagado\".",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Conexión de albañal.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo:  Instalación de columpio (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(156) Rodamiento Conexión de albañal, toma, cuadro y/o medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 219,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            },
                            {
                                "clave": 70,
                                "nombre": "Rodamiento metro adicional albañal"
                            },
                            {
                                "clave": 110,
                                "nombre": "Rodamiento metro adicional agua potable"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "1. Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \n2. Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada\".  \n3. Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada\". Cambia Estado Comercial: Real. Situación Comercial: Activo.  \n3. Orden de trabajo:  Instalación de columpio (Solo si se cobra).\n3. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 71,
                    "nombre": "Rodamiento nuevo servicio de agua 1/2\" a 1\"",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y/o medidor",
                    "requisitos": "Estados de servicio: Factible.Situaciones comerciales: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Rodamiento Toma de agua, columpio y medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra) .",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(157) Rodamiento Toma de agua, cuadro y/o medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 216,
                                "nombre": "Rodamiento nuevo servicio de agua 1/2\" a 1\""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            },
                            {
                                "clave": 110,
                                "nombre": "Rodamiento metro adicional agua potable"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "1. Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \n2. Orden de trabajo:  Instalación de toma de agua. \"Ejecutada\". Cambia Estado Comercial: Real. Situación comercial: Activo. \n2. Orden de trabajo: Instalación de columpio (Solo si se cobra)\n2. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 74,
                    "nombre": "Rodamiento Conexión de albañal",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para contratación, solo de albañal en Rodamiento.",
                    "requisitos": "Estados de servicio: Factible,  Real, Situaciones comerciales: Potencial, Activo,",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Rodamiento Conexión de albañal.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Conexión de albañal.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(158) Rodamiento Conexión de albañal",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 217,
                                "nombre": "Rodamiento Conexion de albañal"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 70,
                                "nombre": "Rodamiento metro adicional albañal"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. \nOrden de trabajo: Instalación de conexión de albañal.Resultado \"Ejecutada\". Cambia Estado comercial: Real. Situacion comercial: Activo.",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 4,
            "nombre": "Contratación en Parcialidades",
            "tramites": [
                {
                    "clave": 37,
                    "nombre": "Contrataciones en parcialidades Rodamiento",
                    "estado": "Se modifico",
                    "descripcion": "Contratación en parcialidades para usuarios que autorice la Direccion Comercial",
                    "requisitos": "Estados de servicio: Factible, Real. Situaciones comerciales: Potencial, Activo. \"Para este tramite se requiere autorización del Director Comercial y solo se podra realizar con contraseña de asistente del Director Comercial\"",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Contratación en parcialidades Rodamiento",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Conexión de albañal. \"Ejecutada\". (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de toma de agua. \"Ejecutada\". (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\".",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(145) Contrataciones en parcialidades Rodamiento",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [
                            {
                                "clave": 217,
                                "nombre": "Rodamiento Conexion de albañal"
                            },
                            {
                                "clave": 216,
                                "nombre": "Rodamiento nuevo servicio de agua 1/2\" a 1\""
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro de medidor de 1/2\" a 1\""
                            },
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota 1/2”"
                            },
                            {
                                "clave": 70,
                                "nombre": "Rodamiento metro adicional albañal"
                            },
                            {
                                "clave": 110,
                                "nombre": "Rodamiento metro adicional agua potable"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Contrataciones en parcialidades Rodamiento. Resultado \"Pagado\". \nOrden de trabajo: Conexión de albañal. \nOrden de trabajo: Instalación de toma de agua. Resultado. \"Ejecutada Terminada\". Cambia Estado comercial: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\". Detonar \nOrden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 77,
                    "nombre": "Contrataciones en parcialidades Tierra",
                    "estado": "Se modifico",
                    "descripcion": "Contratación en parcialidades para usuarios que autorice la Direccion Comercial",
                    "requisitos": "Estados de servicio: Factible, Real. Situaciones comerciales: Potencial, Activo. \"Para este tramite se requiere autorización del Director Comercial y solo se podra realizar con contraseña de asistente del Director Comercial\"",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Contratación en parcialidades Tierra.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Conexión de albañal.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de toma de agua. (Solo si se cobra) \"Ejecutada\".",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\".",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor(Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(161) Contrataciones en parcialidades Tierra",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [
                            {
                                "clave": 218,
                                "nombre": "Tierra Conexion de albañal"
                            },
                            {
                                "clave": 215,
                                "nombre": "Tierra nuevo servicio de agua 1/2\" a 1\""
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro de medidor de 1/2\" a 1\""
                            },
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota 1/2”"
                            },
                            {
                                "clave": 68,
                                "nombre": "Tierra metro adicional albañal"
                            },
                            {
                                "clave": 108,
                                "nombre": "Tierra metro adicional servicio de agua"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Contrataciones en parcialidades Tierra. Resultado \"Pagado\". \nOrden de trabajo: Conexión de albañal. \nOrden de trabajo: Instalación de toma de agua. \"Ejecutada\". Cambia Estado comercial: Real. Situacion comercial: Activo. \nOrden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\".  Detonar \norden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 5,
            "nombre": "Especial",
            "tramites": [
                {
                    "clave": 9,
                    "nombre": "Descarga de desechos en planta de tratamiento",
                    "estado": "Se queda igual",
                    "descripcion": "Por descarga móvil de agua residual de desechos domésticos en planta de tratamiento autorizada por metro cúbico",
                    "requisitos": "Estados de servicio: Real  Situaciones comerciales: Público Gral.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Descarga de desechos PTAR",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(3) Descarga de desechos PTAR",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 67,
                                "nombre": "Descarga desechos domesticos"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 44,
                    "nombre": "Renovación de susp. temporal casa deshabitada",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para usuarios que estan suspendidos y requieren renovar por otro año.",
                    "requisitos": "Saldo en facturación igual a 0 pesos y saldo en convenio 0 pesos. Estado del servicio: Real. Situación comercial : Susp. Deshabitado",
                    "etapas": [
                        {
                            "nombre": "Carta: Suspensión temporal",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 59,
                    "nombre": "Reconexión de toma de agua 2026",
                    "estado": "Se modifico",
                    "descripcion": "Reconexión de toma desde red central para cualquier situación comercial de suspension proveniente de migración y que desea formalizar su contrato.",
                    "requisitos": "Estados de servicio: Factible. Real. Baja. Situaciones comerciales: Potencial. Activo. Susp. Caja. Sup. Columpio. Susp. Toma. Baja. Baja Definitiva",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reconexión de toma.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de cuadro (solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (solo si se cobra)",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(147) Reconexión de toma de agua",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 197,
                                "nombre": "Por reconexión de toma de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. \nOrden de trabajo: Reconexión de toma de agua. Resultado: \"Ejecutado Terminado\". Cambio a estado del servicio: Real. Situacion comercial: Activo.\nOrden de trabajo: Instalación de cuadro (solo si se cobra).\nOrden de trabajo: Instalación de medidor (solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 60,
                    "nombre": "Cancelación definitiva toma",
                    "estado": "Se modifico",
                    "descripcion": "Trámite de cancelación definitiva de toma por fusión, abandono o demolición de predio, que cuenten con una inspección VSS \"Terminada Ejecutada\"",
                    "requisitos": "Estados de servicio: Baja, Real  Situaciones comerciales: Activo, Activo FNSM, Baja, Inexistente Duplicado, No Facturable, NO FACTURABLE, Susp. Caja, Susp. Columpio, Susp. Deshabitado. Susp. FNSM, Susp. Toma",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Cancelación definitiva de toma.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Cancelación definitiva de toma.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(148) Cancelación de toma por fusión de predios",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 210,
                                "nombre": "Cancelación definitiva de toma"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. \nSe Detona Orden de trabajo: Cancelación Definitiva de Toma. Resultado: \"Ejecutada Terminada\". \nCambia a Estado del Servicio: Baja. Situación Comercial: Cancelación Definitiva de Toma. \nGenera O.T de Bacheo.",
                    "filtros": ""
                },
                {
                    "clave": 12,
                    "nombre": "Carta Solicitud Cancelación Definitiva de Toma",
                    "estado": "Agregar",
                    "descripcion": "Trámite para solicitar la cancelación definitiva de toma por fusión, abandono o demolición de predio.",
                    "requisitos": "Estados de servicio: Factible, Baja, Real  Situaciones comerciales: Activo, Activo FNSM, Potencial, Baja, Inexistente Duplicado, No Facturable, NO FACTURABLE, Susp. Caja, Susp. Columpio, Susp. Deshabitado. Susp. FNSM, Susp. Toma",
                    "etapas": [
                        {
                            "nombre": "Carta de solicitud de Cancelación Definitiva de Toma.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(133) Contratación de descarga sanitaria",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 12,
                                "nombre": "Construcción registro sanitario"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Una vez que se realiza el tramite se generá la carta de solicitud de Cancelación Definitiva de Toma, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                    "filtros": ""
                },
                {
                    "clave": 61,
                    "nombre": "Suspensión voluntaria 2026",
                    "estado": "Se modifico",
                    "descripcion": "Trámite para suspensión voluntaria temporal por cuadro y/o registro en caja de banqueta",
                    "requisitos": "Saldo en facturación igual a 0 pesos y saldo en convenio 0 pesos. Estado del servicio: Real Situación comercial : Activo",
                    "etapas": [
                        {
                            "nombre": "- Presupuesto: Suspensión voluntaria temporal Pagado.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "- Orden de trabajo: Suspensión voluntaría (deshabitada).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Cambio estado de servicio. Suspendido Deshabitado.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "2-. Se genera la Carta: Suspensión temporal.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(149) Suspensión voluntaria temporal",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 113,
                                "nombre": "Suspensión voluntaria temporal 2026"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Se genera Orden de trabajo: (20) Suspensión voluntaría (deshabitada). Resultado: \"Ejecutada Terminada\" cambia Estado de servicio: Real. Situación comercial: Susp. Deshabitado. Se genera la Carta: Suspensión temporal.",
                    "filtros": ""
                },
                {
                    "clave": 124,
                    "nombre": "Reconexión voluntaria temporal",
                    "estado": "Agregar",
                    "descripcion": "Trámite para reconexión voluntaria temporal por cuadro y/o registro en caja de banqueta",
                    "requisitos": "Saldo en facturación en 0 pesos. Estado del servicio: Real. Situación comercial: Susp. Deshabitado",
                    "etapas": [
                        {
                            "nombre": "- Presupuesto: Reconexión voluntaria temporal. Pagado.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "- Orden de trabajo: Restablecimiento de servicio voluntario. Resultado \"Ejecutada Terminada\".",
                            "descripcion": ""
                        },
                        {
                            "nombre": "- Cambio estado de servicio. Activo.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Reconexión voluntaria temporal",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 114,
                                "nombre": "Reconexión voluntaria temporal"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Se genera Orden de trabajo: (130) Reconexión de servicio voluntario. Resultado: \"Ejecutada Terminada\" cambia Estado de servicio: Real. Situación comercial: Activo.",
                    "filtros": ""
                },
                {
                    "clave": 95,
                    "nombre": "Solicitud suspensión voluntaria temporal",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para suspensión voluntaria temporal por cuadro o registro en caja de banqueta",
                    "requisitos": "Saldo total a 0 pesos. No tenga pago en parcialidades. Estado del servicio: Real Situación comercial : Activo",
                    "etapas": [
                        {
                            "nombre": "Carta de solicitud de suspensión voluntaria temporal",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Una vez que se realiza el tramite se generá la carta de solicitud de suspension temporal, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 6,
            "nombre": "General",
            "tramites": [
                {
                    "clave": 6,
                    "nombre": "Venta de agua tratada en pipa",
                    "estado": "Se queda igual",
                    "descripcion": "Tramite para venta de agua tratada libre (sistema garza) a bordo, en planta autorizada, por metro cubico.",
                    "requisitos": "Estatus: Real Situacion: Activo, Público Gral.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de agua tratada",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Vale Agua tratada en pipa",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(2) Venta de agua tratada",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 66,
                                "nombre": "Suministro y/o venta agua tratada en garza"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 7,
                    "nombre": "Factibilidad",
                    "estado": "Se queda igual",
                    "descripcion": "Tramite para generacion de factibilidad y presupuesto",
                    "requisitos": "Estatus: Real Situacion: Público Gral.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Factibilidad",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(5) Factibilidad",
                        "cantidadM3": 0,
                        "negociable": "SI",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [
                            {
                                "clave": 186,
                                "nombre": "Derechos de conexión a red sanitaria"
                            },
                            {
                                "clave": 187,
                                "nombre": "Contribución por dotación de agua"
                            },
                            {
                                "clave": 171,
                                "nombre": "Derechos de conexión a red de agua"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 11,
                    "nombre": "Venta de agua potable a pipa particulares",
                    "estado": "Se queda igual",
                    "descripcion": "Suministro de agua a pipas particulares por m³ (donde no se cuenta con infraestructura y no sea zona vulnerable)",
                    "requisitos": "Estatus: Real Situacion: Público Gral.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de agua a pipas.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Vale de agua potable a pipa",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(4) Venta de agua a pipas",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 69,
                                "nombre": "Suministro de agua a pipas"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 27,
                    "nombre": "Presupuesto Libre",
                    "estado": "Se queda igual",
                    "descripcion": "Presupuesto Libre para utilizar cualquier concepto",
                    "requisitos": "Estatus: Real, Factible, Situacion: Activo, En trámite, Potencial, Púb. En general, Susp. Banqueta, Susp. Columpio, Susp. Cuadro. \nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "(141) Presupuesto libre",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 47,
                    "nombre": "Constancia de Control de Obligaciones",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para usuarios que solicitan carta de no adeudo",
                    "requisitos": "Saldo en facturación igual a 0 pesos, Saldo en convenios 0, que no existan estado de cuenta en revisión,  Estado del servicio: Real Situación comercial : Activo, Susp. Deshabitado",
                    "etapas": [
                        {
                            "nombre": "Carta: Constancia de Control de Obligaciones",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Una vez que se realiza el tramite se generá la Carta invitación al pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                    "filtros": ""
                },
                {
                    "clave": 98,
                    "nombre": "Venta de bases de licitación",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para Venta de bases de licitación",
                    "requisitos": "Estatus: Real Situacion: Público Gral.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de bases de licitación",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(176) Venta de bases de licitación",
                        "cantidadM3": 0,
                        "negociable": "SI",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 195,
                                "nombre": "Venta de bases de licitación"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 27,
                    "nombre": "Presupuesto Libre para utilizar cualquier concepto",
                    "estado": "Se queda igual",
                    "descripcion": "General",
                    "requisitos": "Solicitar contraseña del supervisor",
                    "etapas": [
                        {
                            "nombre": "Presupuesto libre",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 7,
            "nombre": "Grandes Usuarios",
            "tramites": [
                {
                    "clave": 94,
                    "nombre": "Reconexión de toma de agua de 1\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                    "requisitos": "Que sean Grandes Usuarios. Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de Trabajo: Reconexión de Toma.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(174) Reconexión de toma de agua 1\" GU",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 197,
                                "nombre": "Por reconexión de toma de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 204,
                                "nombre": "Medidor de lectura remota 1\""
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2 - 1\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Genera \nOrden de trabajo: Reconexión de toma de agua. \"Ejecutado\"\"Terminada\". Cambio Estado del Servicio: Real. Situacion Comercial: Activo. \nOrden de trabajo: Instalación de cuadro (Solo si se cobra). \"Ejecutada\" \"Terminada\".  \nOrden de trabajo: Instalación de medidor (Solo si se cobra). \"Ejecutada\" Terminada\".",
                    "filtros": ""
                },
                {
                    "clave": 62,
                    "nombre": "Reconexión de toma de agua de 1-1/2\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                    "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma de agua.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de Trabajo: Reconexión de Toma.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(150) Reconexión de toma de agua 1-1/2\" GU",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 197,
                                "nombre": "Por reconexión de toma de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 205,
                                "nombre": "Medidor de lectura remota 1-1/2\""
                            },
                            {
                                "clave": 199,
                                "nombre": "Cuadro medidor 1-1/2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Genera \nOrden de trabajo: Reconexión de toma de agua. \"Ejecutado\"\"Terminada\". Cambio Estado del Servicio: Real. Situacion Comercial: Activo. \nOrden de trabajo: Instalación de cuadro (Solo si se cobra). \"Ejecutada\" \"Terminada\".  \nOrden de trabajo: Instalación de medidor (Solo si se cobra). \"Ejecutada\" Terminada\".",
                    "filtros": ""
                },
                {
                    "clave": 63,
                    "nombre": "Reconexión de toma de agua de 2\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                    "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma de agua. Orden de trabajo: Reconexión de toma. Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Reconexión de toma de agua de 2\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 197,
                                "nombre": "Por reconexión de toma de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 206,
                                "nombre": "Medidor de lectura remota 2\""
                            },
                            {
                                "clave": 200,
                                "nombre": "Cuadro de medidor 2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 64,
                    "nombre": "Reconexión de toma de agua de 3\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                    "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma de agua. Orden de trabajo: Reconexión de toma. Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Reconexión de toma de agua de 3\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 197,
                                "nombre": "Por reconexión de toma de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 207,
                                "nombre": "Medidor de lectura remota 3\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 65,
                    "nombre": "Reconexión de toma de agua de 4\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                    "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reconexion de toma de agua. Orden de trabajo: Reconexión de toma. Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Reconexión de toma de agua de 4\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 197,
                                "nombre": "Por reconexión de toma de agua"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 208,
                                "nombre": "Medidor de lectura remota 4\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 92,
                    "nombre": "Reubicación de medidor 1\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor. Orden de trabajo: Reubicación de medidor. Instalación de cuadro de medidor (Solo si se cobra). Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Reubicación de medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 149,
                                "nombre": "Reubicación de medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 204,
                                "nombre": "Medidor de lectura remota 1\" "
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\" "
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 79,
                    "nombre": "Reubicación de medidor de 1-1/2\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor de 1-1/2\" GU.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de medidor y/o toma. Respuesta. “Ejecutada Terminada\".",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de Trabajo. Instalación de medidor 1-1/2\" (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(162) Reubicación de medidor de 1-1/2\" GU",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 149,
                                "nombre": "Reubicación de medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 205,
                                "nombre": "Medidor de lectura remota 1-1/2\""
                            },
                            {
                                "clave": 199,
                                "nombre": "Cuadro medidor de 1-1/2\" "
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 84,
                    "nombre": "Reubicación de medidor de 2\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(163) Reubicación de medidor 2\" GU",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 149,
                                "nombre": "Reubicación de medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 206,
                                "nombre": "Medidor de lectura remota 2\""
                            },
                            {
                                "clave": 200,
                                "nombre": "Cuadro medidor de 2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 85,
                    "nombre": "Reubicación de medidor de 3\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(169) Reubicación de medidor 3\" GU",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 149,
                                "nombre": "Reubicación de medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 207,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 86,
                    "nombre": "Reubicación de medidor de 4\" GU",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(170) Reubicación de medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 149,
                                "nombre": "Reubicación de medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 208,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 93,
                    "nombre": "Instalación de Medidor de 1\" Grandes usuarios",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para instalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor 1\" y/o cuadro de 1/2 a 1\".",
                    "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de medidor  1\". Orden de trabajo: Instalación de cuadro (Solo si se cobra). Orden de trabajo: Instalación de medidor.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Venta de medidor  1\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 204,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 80,
                    "nombre": "Instalación de Medidor de 1-1/2\" Grandes usuarios",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para instalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                    "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de medidor 1-1/2\". Orden de trabajo: Instalación de cuadro de medidor (Solo si se cobra). Orden de trabajo: Instalación de medidor",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Venta de medidor 1-1/2\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 205,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 199,
                                "nombre": "Cuadro medidor 1-1/2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 81,
                    "nombre": "Instalación de Medidor de 2\" Grandes usuarios",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para intalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                    "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de medidor 2\". Orden de trabajo: Instalación de cuadro de medidor (Solo si se cobra). Orden de trabajo: Instalación de medidor",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Venta de medidor 2\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 206,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 200,
                                "nombre": "Cuadro medidor 2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 82,
                    "nombre": "Instalación de Medidor de 3\" Grandes usuarios",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para intalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                    "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de medidor 3\". Orden de trabajo: Instalación de medidor",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Venta de medidor 3\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 207,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 83,
                    "nombre": "Instalación de Medidor de 4\" Grandes usuarios",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para intalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                    "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de medidor 4\".Orden de trabajo: Instalación de medidor",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Venta de medidor 4\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 208,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 87,
                    "nombre": "Reconexión de toma de agua 2025 FNSM",
                    "estado": "Se queda igual",
                    "descripcion": "Reconexión de toma SIN COSTO para cuentas dentro del perimetro ferial y que se encuentren en  Situación Comercial: Susp. FNSM.",
                    "requisitos": "Estados de servicio: Real Situacion Comerciales: Susp. FSNM",
                    "etapas": [
                        {
                            "nombre": "Orden de trabajo: Reconexión de toma de agua",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: ActivoFNSM.",
                    "filtros": ""
                },
                {
                    "clave": 88,
                    "nombre": "Suspensión voluntaria temporal FNSM",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para suspensión voluntaria temporal SIN COSTO para cuentas dentro del perimetro ferial y que unicamente se activan en tiempo de feria",
                    "requisitos": "Estado del servicio: Real. Situación Comercial : Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Orden de trabajo: Suspensión voluntaría (deshabitada). Resultado: \"Ejecutada\" cambia Estado de servicio: Real. Situación comercial: Susp. FNSM. Se genera la Carta: Suspensión temporal",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Orden de trabajo: Suspensión voluntaria (Deshabitada). \"Ejecutada\". Cambia Estado de servicio: Real. Situación comercial: Susp. FNSM. Se genera la Carta: Suspensión temporal",
                    "filtros": ""
                },
                {
                    "clave": 89,
                    "nombre": "A Real-Susp. FNSM",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambiar usuarios ubicados dentro del perimetro ferial a Real -Susp. FNSM",
                    "requisitos": "Estado de servicio: Real.  Situaciones Comerciales: ActivoFNSM.",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 90,
                    "nombre": "A Real ActivoFNSM",
                    "estado": "Se queda igual",
                    "descripcion": "Para cambiar la situación comercial de Real - Activo a Real - ActivoFNSM en predios del perimetro ferial",
                    "requisitos": "Estado de servicio: Real. Situacion Comercial: Activo",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 182,
                    "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 1\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). , Instalación de cuadro (Solo si se cobra).  Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 1\" (182)",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 219,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 204,
                                "nombre": ""
                            },
                            {
                                "clave": 198,
                                "nombre": ""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo:  Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 183,
                    "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 1-1/2\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). , Instalación de cuadro (Solo si se cobra).  Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento albañal, toma, cuadro y med G.U.1 1y2\" ()",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 219,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 205,
                                "nombre": ""
                            },
                            {
                                "clave": 199,
                                "nombre": ""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo:  Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 184,
                    "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 2\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). , Instalación de cuadro (Solo si se cobra).  Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 2\"()",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 219,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 206,
                                "nombre": ""
                            },
                            {
                                "clave": 200,
                                "nombre": ""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo:  Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 185,
                    "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 3\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 3\"()",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 219,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 207,
                                "nombre": ""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 186,
                    "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 4\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 4\"()",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 219,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 208,
                                "nombre": ""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 187,
                    "nombre": "Rodamiento nuevo servicio de agua 1\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situaciones comerciales: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto. Presupuesto: Rodamiento Toma, cuadro y medidor. Orden de trabajo: Instalación de toma de agua, Instalación de cuadro (Solo si se cobra). Instalación de medidor (Solo si se cobra) .",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento Toma, cuadro y medidor G.U. 1\" (177)",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 216,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 204,
                                "nombre": ". Cuadro medidor de 1/2 a 1\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo:  Instalación de toma de agua. \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación comercial: Activo. Orden de trabajo: Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 188,
                    "nombre": "Rodamiento nuevo servicio de agua 1-1/2\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situaciones comerciales: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto. Presupuesto: Rodamiento Toma, cuadro y medidor. Orden de trabajo: Instalación de toma de agua, Instalación de cuadro (Solo si se cobra). Instalación de medidor (Solo si se cobra) .",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento Toma, cuadro y medidor G.U. 1 1y2\" ()",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 216,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 205,
                                "nombre": ". Cuadro medidor de 1-1/2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo:  Instalación de toma de agua. \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación comercial: Activo. Orden de trabajo: Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                },
                {
                    "clave": 189,
                    "nombre": "Rodamiento nuevo servicio de agua 2\" G.U.",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y medidor",
                    "requisitos": "Estados de servicio: Factible. Situaciones comerciales: Potencial",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto. Presupuesto: Rodamiento Toma, cuadro y medidor. Orden de trabajo: Instalación de toma de agua, Instalación de cuadro (Solo si se cobra). Instalación de medidor (Solo si se cobra) .",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "Rodamiento Toma, cuadro y medidor G.U. 2\" ()",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 216,
                                "nombre": ""
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 206,
                                "nombre": ". Cuadro medidor de 2\""
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo:  Instalación de toma de agua. \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación comercial: Activo. Orden de trabajo: Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 8,
            "nombre": "Mantenimiento",
            "tramites": [
                {
                    "clave": 8,
                    "nombre": "Limpieza de fosa séptica en casa habitación",
                    "estado": "Se elimina",
                    "descripcion": "Costo horario por servicio de limpieza de fosa séptica, previo dictamen del supervisor, en casa habitación.",
                    "requisitos": "Si es doméstico Estados de servicio: Real Situaciones comerciales: Activo",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen de limpieza de fosa septica, con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Limpieza fosa séptica en casa habitación.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Limpieza de fosa séptica en casa habitación",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(102) Limpieza fosa séptica en casa habitación",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 146,
                                "nombre": "Limpieza de fosa septica casa habitación"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 10,
                    "nombre": "Limpieza de fosa séptica comercio y/o industria",
                    "estado": "Se elimina",
                    "descripcion": "Costo horario por servicio de limpieza de fosa séptica, previo dictamen del supervisor, en comercio o industria",
                    "requisitos": "Si es comercial o industrial Estados de servicio: Real Situaciones comerciales: Activo",
                    "etapas": [
                        {
                            "nombre": "Generar Dictamen de limpieza de fosa septica, con respuesta de la inspección se genera presupuesto.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Presupuesto: Limpieza fosa séptica en comercio o industria.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Limpieza de fosa séptica comercio y/o industria",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(103) Limpieza fosa séptica en comercio o industria",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 180,
                                "nombre": "Limpieza de fosa septica comercio y/o industria"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 75,
                    "nombre": "Construcción y colocación de caja de registro en banqueta",
                    "estado": "Cambio de clase",
                    "descripcion": "Trámite para suministro y colocación de caja de registro en banqueta nuevo, por solicitud del usuario.",
                    "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo Solicitar contraseña de supervisor",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: construcción de registro para alojo e  instalación de caja de banqueta",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(159) Construcción y colocación de caja de registro en banqueta",
                        "cantidadM3": 0,
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 76,
                    "nombre": "Venta de caja de polietileno registro en banqueta",
                    "estado": "Se elimina",
                    "descripcion": "Trámite por cambio de caja de banqueta por mantenimiento",
                    "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo Solicitar contraseña de supervisor",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de caja de polietileno registro en banqueta",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de caja de banqueta",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(160) Venta de caja de polietileno registro en banqueta",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 163,
                                "nombre": "Venta de Caja de polietileno de registro en banqueta"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 9,
            "nombre": "Medidores",
            "tramites": [
                {
                    "clave": 4,
                    "nombre": "Venta de medidor y/o cuadro",
                    "estado": "Se queda igual",
                    "descripcion": "Venta de medidor e instalación para predios que ya cuentan con los servicios instalados.",
                    "requisitos": "Estados de servicio: Real. Situaciones comerciales: Activo",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Venta de medidor y/o cuadro.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de cuadro de medidor (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra). 1.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(131) Venta de medidor y/o cuadro",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            },
                            {
                                "clave": 198,
                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 16,
                    "nombre": "Reubicación de medidor en cuadro",
                    "estado": "Modificado",
                    "descripcion": "Trámite para reubicación del medidor en cuadro para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Que tenga medidor instalado. Estados de servicio: Real  Situaciones comerciales: Activo. Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de medidor y/o toma",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(106) Reubicación de medidor 1/2\"",
                        "cantidadM3": 0,
                        "negociable": "SI",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 230,
                                "nombre": "Reubicación de cuadro y/o medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 55,
                    "nombre": "Reubicación de medidor a caja de registro",
                    "estado": "Agregar",
                    "descripcion": "Trámite para reubicación del medidor a caja de registro para hacerlo más visble",
                    "requisitos": "Que tenga medidor instalado. Estados de servicio: Real  Situaciones comerciales: Activo. Activo FNSM",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de medidor a caja de registro. Pagado",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de medidor y/o toma.",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(206) Reubicación de medidor a caja de registro",
                        "cantidadM3": 0,
                        "negociable": "SI",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 149,
                                "nombre": "Reubicación de medidor a caja de registro"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 32,
                    "nombre": "Cambio de medidor sin costo por robo",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambio de medidor sin costo por robo con denuncia en MP max 15 días y no se les cobra.",
                    "requisitos": "Estados de servicio: REAL  Situaciones comerciales: Activo, Activo FNSM, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Valvula, Susp. FNSM.",
                    "etapas": [
                        {
                            "nombre": "Orden de trabajo: Cambio de medidor",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 91,
                    "nombre": "Reubicación de cuadro",
                    "estado": "Modificado",
                    "descripcion": "Trámite para reubicación del cuadro para hacerlo más visible, por obstrucción de toma de lectura o modificación al inmueble.",
                    "requisitos": "Estados de servicio: REAL. Situaciones comerciales: ACTIVO",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Reubicación de cuadro 1/2 a 1\"",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Reubicación de cuadro",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra)",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(171) Reubicación de cuadro1/2 a 1\"",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [
                            {
                                "clave": 230,
                                "nombre": "Reubicación de cuadro y/o medidor"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 75,
                    "nombre": "Sumistro y colocación de caja de registro en banqueta",
                    "estado": "Cambio de clase",
                    "descripcion": "Trámite para construcción, suministro y colocación de caja de registro en banqueta nuevo, por solicitud del usuario.",
                    "requisitos": "Estados de servicio: Factible, Real. Situaciones comerciales: Potencial. Activo",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: const y colocación de caja de reg en banqueta",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de caja de banqueta",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra)",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(159) Construcción y colocación de caja de registro en banqueta",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "Importe fijo",
                        "conceptosObligatorios": [
                            {
                                "clave": 7,
                                "nombre": "Construcción y colocación caja de registro en banqueta"
                            }
                        ],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Presupuesto: Pagado\nOrden de trabajo: Instalación de caja de banqueta.\nCambia a estado de servicio: Real. Situación comercial: Activo.\nOrden de trabajo: Instalación de Medidor (solo si se cobra)",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 10,
            "nombre": "NOTIFICACIONES Y COBRANZA",
            "tramites": [
                {
                    "clave": 72,
                    "nombre": "Aviso suspensión a morosos no doméstico 2025",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para aviso de suspensión del servicio a usuarios no domésticos Hospitales privados, Comerciales, Industriales",
                    "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. \nPeriodos de adeudo mayor a 1. \nUsuarios no Domesticos\nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de reconexión pendientes",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generan el aviso de suspensión, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 73,
                    "nombre": "Aviso suspensión a morosos doméstico 2025",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para aviso de suspensión del servicio a usuarios domésticos A AA B C, Rural",
                    "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. \nPeriodos de adeudo mayor a 1. \nUsuarios Domesticos\nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de reconexión pendientes",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generan el aviso de suspensión, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 78,
                    "nombre": "Carta Notificación",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para envio de notificaicón de suspensión a usuarios domesticos",
                    "requisitos": "Estatus :Real Situacion Activo. Sus. Banqueta, Susp Caja, Susp. Columpio y Susp. Toma \nUsuarios que tengan mas de 3 periodos de adeudo. \nTipo de servicio que sea Domestico. \nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de trabajo pendientes",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generá la carta de Notificación, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 96,
                    "nombre": "Carta Notificación No Dómesticos",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para envio de notificaciones a usuarios no doméscticos",
                    "requisitos": "Estatus :Real Situacion Activo. Sus. Banqueta, Susp Caja, Susp. Columpio y Susp. Toma \nUsuarios que tengan mas de 3 periodos de adeudo. \nTipo de servicio que sea no Domestico. \nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de trabajo pendientes",
                    "etapas": [
                        {
                            "nombre": "Una vez que se sube el archivo y se generá la carta de Notificación, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 123,
                    "nombre": "Verificación de Datos",
                    "estado": "Agregar",
                    "descripcion": "Trámite para verificar datos de los usuarios del servicio público del agua",
                    "requisitos": "Estatus del servicio: Real. Situacion comercial: Activo, Activo FNSM, No Facturable, Susp. Banqueta. Susp. Columpio. Susp. Toma. Susp. Cuadro. Susp. Alcantarillado. Susp. Registro. Susp. Deshabitado. Susp. Valvula",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                }
            ]
        },
        {
            "id": 11,
            "nombre": "Padrón y Lectura",
            "tramites": [
                {
                    "clave": 20,
                    "nombre": "A Real Activo",
                    "estado": "Se queda igual",
                    "descripcion": "Para activar un predio",
                    "requisitos": "Estados de servicio: Real, Factible, Baja.   Situaciones comerciales: Activo, En Juicio, En Trámite, No facturable, Potencial, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Cuadro, Susp. Deshabitado, Susp. Factible, Susp. Registro, Susp. Toma. \nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"Activo\"",
                    "filtros": ""
                },
                {
                    "clave": 33,
                    "nombre": "A No Facturable",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambio de situación comercial de Activo a No Facturable",
                    "requisitos": "Estados de servicio: Real, Factible.   Situaciones comerciales: Activo, Potencial. \nSolicita Contraseña.",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"No Facturable\"",
                    "filtros": ""
                },
                {
                    "clave": 41,
                    "nombre": "Inexistente Duplicado",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para dar de baja predios por inexistencia o duplicidad",
                    "requisitos": "Estados de servicio: Real.   Situaciones comerciales: Activo, Clandestino, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Valvula, Susp. Toma. \nSolicita Contraseña.",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"Inexistente Duplicado\"",
                    "filtros": ""
                },
                {
                    "clave": 42,
                    "nombre": "Columpio y medidor predios activos",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para clientes que ya cuentan con el servicio de agua y drenaje y solo requieren de columpio y medidor y que y este activo el predio",
                    "requisitos": "Estados de servicio: Real.   Situaciones comerciales: Activo. \nSolicita Contraseña.",
                    "etapas": [
                        {
                            "nombre": "Presupuesto: Caja de Banqueta y medidor",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de Trabajo: Instalación de columpio (solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de Trabajo: Instalación de Medidor (solo si se cobra).",
                            "descripcion": ""
                        },
                        {
                            "nombre": "Orden de Trabajo: Instalación de caja de banqueta.",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "(139) Caja de banqueta y medidor",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [
                            {
                                "clave": 7,
                                "nombre": "Construcción y colocación caja de registro en banqueta"
                            }
                        ],
                        "conceptosOpcionales": [
                            {
                                "clave": 15,
                                "nombre": "Suministro de medidor"
                            },
                            {
                                "clave": 203,
                                "nombre": "Medidor de lectura remota"
                            }
                        ],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 48,
                    "nombre": "Baja definitiva",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambio de situación comercial Baja Definitiva",
                    "requisitos": "Estados de servicio: Real.   Situaciones comerciales: Activo, En Juicio, Inexistente duplicado, Susp. Banqueta, Susp. Columpio, Susp. Deshabitado, Susp. Toma. \nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"Baja Definitiva\"",
                    "filtros": ""
                },
                {
                    "clave": 49,
                    "nombre": "Real - activo",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambiar a real a activo a usuarios que se cambiaroron a baja para no facturarles",
                    "requisitos": "Estados de servicio: Baja, Factible.  Situaciones comerciales: Baja, Clandestino, COL. NO FACTURABLE, En Juicio, \nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"Activo\"",
                    "filtros": ""
                },
                {
                    "clave": 50,
                    "nombre": "Factible - Potencial",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambiar a factible potencial usuarios del padrón",
                    "requisitos": "Estados de servicio: Baja, Real.  Situaciones comerciales: Activo, Baja, Clandestino, En Juicio, En Trámite, No Fact. Dist., No Facturable, NO FACTURABLE, POR CASA DESHABITADA, POR INCOBRABLE, POR LOTE BALDIO, Potencial, PROCESO LEGAL INCOBRABLE, Sin red, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Válvula, Validado. \nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"Potencial\"",
                    "filtros": ""
                },
                {
                    "clave": 52,
                    "nombre": "Real - Susp. Deshabitado",
                    "estado": "Se queda igual",
                    "descripcion": "Trámite para cambiar usuarios del padrón a Real - Susp. Deshabitado",
                    "requisitos": "Estados de servicio: Real, Factible, Baja.   Situaciones comerciales: Activo, Activo FNSM, Baja, Clandestino, EN BURO DE CREDITO,  En Juicio, En Trámite, No facturable,POR CASA DESHABITADA, POR INCOBRABLE, POR LOTE BALDIO, Potencial, PROCESO LEGAL INCOBRABLE, Sin red, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Válvula, Validado. \nSolicita Contraseña\nQue el cliente no tenga periodos de Adeudo\nQue tenga una inspeccion VSS terminada",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"Susp. Deshabitado\"",
                    "filtros": ""
                },
                {
                    "clave": 53,
                    "nombre": "Reubicación de medidor sin costo",
                    "estado": "Cambio de Clase",
                    "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                    "requisitos": "Clientes que cuenten con medidor. Estados de servicio: Real.   Situaciones comerciales: Activo, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Válvula.",
                    "etapas": [
                        {
                            "nombre": "Orden de Trabajo: Reubicación de medidor y/o toma",
                            "descripcion": ""
                        }
                    ],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                },
                {
                    "clave": 66,
                    "nombre": "Real - Susp. Banqueta",
                    "estado": "Cambio de Clase",
                    "descripcion": "Trámite para cambiar usuarios de real a suspendio banqueta por tarmite de suspensión",
                    "requisitos": "Estados de servicio: Real. Situaciones Comerciales: Activo.\nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Predio cambia de situacion a Suspendido Banqueta con una prioridad Extraurgente",
                    "filtros": ""
                },
                {
                    "clave": 67,
                    "nombre": "Real - Susp. Cuadro",
                    "estado": "Cambio de Clase",
                    "descripcion": "Trámite para cambiar usuarios de real a suspendido cuadro para usuarios que se les suspendio el servicio",
                    "requisitos": "Estados de servicio: Real. Situaciones Comerciales: Activo.\nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Predio cambia de situacion a Suspendido Cuadro con una prioridad Extraurgente",
                    "filtros": ""
                },
                {
                    "clave": 97,
                    "nombre": "Real - Susp. Registro",
                    "estado": "Cambio de Clase",
                    "descripcion": "Trámite para cambiar usuarios de real a suspendido registro para usuarios que se les suspendio el servicio",
                    "requisitos": "Estados de servicio: Real. Situaciones Comerciales: Activo.\nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Predio cambia de situacion a Suspendido Registro con una prioridad Extraurgente",
                    "filtros": ""
                },
                {
                    "clave": 21,
                    "nombre": "Predio en Juicio",
                    "estado": "Cambio de Clase",
                    "descripcion": "Tramite para predios con demanda o juicio en profeco",
                    "requisitos": "Estados de servicio: Real  Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio.\nSolicita Contraseña",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Predio cambia de situacion a En Juicio  con una prioridad Extraurgente",
                    "filtros": ""
                },
                {
                    "clave": 99,
                    "nombre": "A En Juicio",
                    "estado": "Cambio de Clase",
                    "descripcion": "Para cambiar la situacion comercial de Real Activo a En Juicio",
                    "requisitos": "Estados de servicio: Real  Situaciones comerciales: Activo. Solicita Contraseña.",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "Cambia Situacion Comercial \"En Juicio\"",
                    "filtros": ""
                },
                {
                    "clave": 43,
                    "nombre": "Notificación a usuario factible",
                    "estado": "Cambio de Clase",
                    "descripcion": "Aviso a nuevos desarrollos (padron de usuarios)",
                    "requisitos": "Estados de servicio: Factible, Situaciones comerciales: Potencial. Solicita Contraseña.",
                    "etapas": [],
                    "presupuesto": {
                        "nombre": "",
                        "cantidadM3": 0,
                        "negociable": "NO",
                        "metodoPago": "",
                        "conceptosObligatorios": [],
                        "conceptosOpcionales": [],
                        "conceptos": []
                    },
                    "imagenes": [],
                    "ordenesTrabajo": [],
                    "resultado": "",
                    "filtros": ""
                }
            ]
        }
    ]
};

        function inicializarTramites() {
            // Alta
            datos.categorias[0].tramites = [
                {
                                "clave": 1,
                                "nombre": "Alta de predio",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para alta de nuevos predios",
                                "requisitos": "Solicitud formal",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 2,
                                "nombre": "Alta de derivación",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para alta de derivación en macrolotes",
                                "requisitos": "Solicitud formal",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                }
];
            // CONTROL DE OBLIGACIONES
            datos.categorias[1].tramites = [
                {
                                "clave": 14,
                                "nombre": "Invitación al pago",
                                "estado": "Se queda igual",
                                "descripcion": "Tramite para generación de carta invitación a usarios doméstico, no genera seguimiento",
                                "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma.",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generá la carta invitación al pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": "Usuarios con servicio Domestico"
                },
                {
                                "clave": 17,
                                "nombre": "Invitación al pago NO domesticos",
                                "estado": "Se queda igual",
                                "descripcion": "Tramite para generación de carta invitación a usarios NO doméstico, no genera seguimiento.",
                                "requisitos": "Periodos de adeudo mayor a 1, usuarios no domesticos, Estatus: Real Situacion: Activo, Susp. Caja, Susp. Columpio, Susp. Toma",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generá la carta invitación al pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": "Clientes con periodo de adeudo mayor o igual a 1 mensual y que sean NO Domesticos"
                },
                {
                                "clave": 54,
                                "nombre": "Recordatorio de pago",
                                "estado": "Eliminar",
                                "descripcion": "Trámite de segudo recordatorio de pago para los usuarios que no se presentan a pagar, una vez enviada una primer carta de invitación al pago.",
                                "requisitos": "Estados del servicio:Real, Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. Que cuenten con periodos de adeudo mayor o igual a 4 periodos.",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generan el Recordatorio de Pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 55,
                                "nombre": "Último recordatorio de pago",
                                "estado": "Eliminar",
                                "descripcion": "Trámite para enviar carta de recordatorio a usuarios que anteriormente se les ha enviado ya dos invitaciones de pago",
                                "requisitos": "Estados del servicio:Real, Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. Que cuenten con periodos de adeudo mayor o igual a 4 periodos.",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 58,
                                "nombre": "Orden de suspensión del servicio por morosidad 2026",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para usuarios con morosidad para generar la orden de suspensión del servicio.",
                                "requisitos": "Estados de servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Toma. Susp. Columpio. Susp. Caja. Susp. FNSM.",
                                "etapas": [
                                                {
                                                                "nombre": "Al cargarse la OT de suspensión del servicio y el resultado sea \"Terminada Ejecutada\" se deberá generar el cobro automaticamente en caja de la suspensión y reconexión como prioritario, según se haya ejecutado (cuadro,  banqueta o registro). El costo de dichos conceptos se deberá de actualizar y mostrar en el estado de cuenta facturado actual y en los pendientes posteriores hasta que el usuario cubra el pago del concepto. La situación comercial cambia a Susp. Cuadro, Susp. Banqueta o Susp. Registro,  según se haya ejecutado la suspensión.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Al pago total de los mensuales adeudados o quedando máximo dos mensuales adeudados pendientes se detonará la OT reconexión según se haya ejecutado la suspensión.",
                                "filtros": "Clientes con periodo de adeudo mayor o igual a 2"
                },
                {
                                "clave": 54,
                                "nombre": "Reconexión de toma en cuadro y/o registro",
                                "estado": "Agregar",
                                "descripcion": "Reconexión de toma en cuadro y/o registro para predios en cualquier situación comercial que se encuentren suspendidos y que cuenten con una inspección VSS \"terminada ejecutada\"",
                                "requisitos": "Estados de servicio: Real. Baja. Situaciones comerciales: Activo. Baja.  Susp. Cuadro. Susp. Registro. Susp. Caja.  Susp. Columpio. Susp. Toma. Susp. FNSM. No Facturable. Inexistente Duplicado.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma en cuadro y/o registro.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reconexión de toma en cuadro y/o registro.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(204) Reconexión de toma en cuadro y/o registro",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 112,
                                                                                "nombre": "Reconexión de toma en cuadro y/o registro"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado.\nOrden de trabajo: Reconexión de toma en cuadro y/o registro. Resultado \"Ejecutado Terminado\". Cambio a Estado del Servicio: Real. Situacion comercial: Activo.",
                                "filtros": ""
                }
];
            // Contratación
            datos.categorias[2].tramites = [
                {
                                "clave": 12,
                                "nombre": "Construcción de registro sanitario",
                                "estado": "Eliminar",
                                "descripcion": "Trámite para contratación de registro sanitario",
                                "requisitos": "Estados de servicio: Real  Situaciones comerciales: Activo",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Contratación de descarga sanitaria.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de alcantarillado",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(133) Contratación de descarga sanitaria",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 26,
                                "nombre": "Tierra conexion de albañal y nuevo servicio de agua (No incluye medidor)",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para contratación de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible                  Situación comercial: Potencial, Validado",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Tierra Conexión de albañal, toma, cuadro y medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Conexión de albañal.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo:  Instalación de cuadro (Solo si se cobra)",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(130) Tierra Conexión de albañal, toma, cuadro y medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 220,
                                                                                "nombre": "Tierra conexion de albañal y nuevo servicio de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 68,
                                                                                "nombre": "Tierra metro adicional albañal"
                                                                },
                                                                {
                                                                                "clave": 108,
                                                                                "nombre": "Tierra metro adicional agua potable"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \n1. Orden de trabajo:  Instalación de toma de agua. Resultado: \"Ejecutada\". Cambia Estado Comercial: Real. Situación comercial: Activo. \n2. Orden de trabajo: Instalación de cuadro (Solo si se cobra). \n2. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 28,
                                "nombre": "Tierra conexion de albañal",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para contratación, solo de albañal en Tierra.",
                                "requisitos": "Estados de servicio: Factible,  Real, Situaciones comerciales: Potencial, Activo,",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Tierra Conexión de albañal.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Conexión de albañal.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(132) Tierra Conexión de albañal",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 218,
                                                                                "nombre": "Tierra Conexion de albañal"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 68,
                                                                                "nombre": "Tierra metro adicional albañal"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. \nOrden de trabajo: Conexión de albañal. Resultado \"Ejecutada\". Cambia Estado comercial: Real. Situacion comercial: Activo.",
                                "filtros": ""
                },
                {
                                "clave": 29,
                                "nombre": "Tierra nuevo servicio de agua 1/2\" a 1\" (no incluye medidor)",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y/o medidor",
                                "requisitos": "Estados de servicio: Factible  Situaciones comerciales: Potencial, Validado",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial, con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Tierra Toma de agua, cuadro y medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra)",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(135) Tierra Toma de agua, cuadro y/o medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 215,
                                                                                "nombre": "Tierra nuevo servicio de agua 1/2\" a 1\""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 108,
                                                                                "nombre": "Tierra metro adicional agua potable"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \nOrden de trabajo:  Instalación de toma de agua. Resultado: \"Ejecutada\". Cambia Estado Comercial: Real. Situación comercial: Activo. \nOrden de trabajo: Instalación de columpio (Solo si se cobra). \nOrden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 45,
                                "nombre": "Venta de medidor y/o cuadro nueva contratación",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para instalacion de medidor a usuarios que ya cuentan con los servicios de agua y alcantarillado y solo requieren el cuadro y/o instalacion del medidor",
                                "requisitos": "Estados de servicio: Factible. Real. Situaciones comerciales: Potencial. Activo.",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor y/o cuadro nueva contratación.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(140) Venta de medidor y/o cuadro nueva contratación",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado comercial: Real. Situación Comercial: Activo.\nOrden de trabajo: Instalación de columpio. (Solo si se cobra). Resultado \"Ejecutada Terminada\". \nOrden de trabajo: Instalación de medidor (Solo si se cobra)",
                                "filtros": ""
                },
                {
                                "clave": 70,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y/o medidor",
                                "requisitos": "Estados de servicio: Factible                  Situación comercial: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Rodamiento conexión de albañal, toma, cuadro y medidor. \"Pagado\".",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Conexión de albañal.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo:  Instalación de columpio (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(156) Rodamiento Conexión de albañal, toma, cuadro y/o medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 219,
                                                                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 70,
                                                                                "nombre": "Rodamiento metro adicional albañal"
                                                                },
                                                                {
                                                                                "clave": 110,
                                                                                "nombre": "Rodamiento metro adicional agua potable"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "1. Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \n2. Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada\".  \n3. Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada\". Cambia Estado Comercial: Real. Situación Comercial: Activo.  \n3. Orden de trabajo:  Instalación de columpio (Solo si se cobra).\n3. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 71,
                                "nombre": "Rodamiento nuevo servicio de agua 1/2\" a 1\"",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y/o medidor",
                                "requisitos": "Estados de servicio: Factible.Situaciones comerciales: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Rodamiento Toma de agua, columpio y medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra) .",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(157) Rodamiento Toma de agua, cuadro y/o medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 216,
                                                                                "nombre": "Rodamiento nuevo servicio de agua 1/2\" a 1\""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 110,
                                                                                "nombre": "Rodamiento metro adicional agua potable"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "1. Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". \n2. Orden de trabajo:  Instalación de toma de agua. \"Ejecutada\". Cambia Estado Comercial: Real. Situación comercial: Activo. \n2. Orden de trabajo: Instalación de columpio (Solo si se cobra)\n2. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 74,
                                "nombre": "Rodamiento Conexión de albañal",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para contratación, solo de albañal en Rodamiento.",
                                "requisitos": "Estados de servicio: Factible,  Real, Situaciones comerciales: Potencial, Activo,",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Rodamiento Conexión de albañal.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Conexión de albañal.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(158) Rodamiento Conexión de albañal",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 217,
                                                                                "nombre": "Rodamiento Conexion de albañal"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 70,
                                                                                "nombre": "Rodamiento metro adicional albañal"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. \nOrden de trabajo: Instalación de conexión de albañal.Resultado \"Ejecutada\". Cambia Estado comercial: Real. Situacion comercial: Activo.",
                                "filtros": ""
                }
];
            // Contratación en Parcialidades
            datos.categorias[3].tramites = [
                {
                                "clave": 37,
                                "nombre": "Contrataciones en parcialidades Rodamiento",
                                "estado": "Se modifico",
                                "descripcion": "Contratación en parcialidades para usuarios que autorice la Direccion Comercial",
                                "requisitos": "Estados de servicio: Factible, Real. Situaciones comerciales: Potencial, Activo. \"Para este tramite se requiere autorización del Director Comercial y solo se podra realizar con contraseña de asistente del Director Comercial\"",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Contratación en parcialidades Rodamiento",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Conexión de albañal. \"Ejecutada\". (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de toma de agua. \"Ejecutada\". (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\".",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(145) Contrataciones en parcialidades Rodamiento",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 217,
                                                                                "nombre": "Rodamiento Conexion de albañal"
                                                                },
                                                                {
                                                                                "clave": 216,
                                                                                "nombre": "Rodamiento nuevo servicio de agua 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro de medidor de 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota 1/2”"
                                                                },
                                                                {
                                                                                "clave": 70,
                                                                                "nombre": "Rodamiento metro adicional albañal"
                                                                },
                                                                {
                                                                                "clave": 110,
                                                                                "nombre": "Rodamiento metro adicional agua potable"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Contrataciones en parcialidades Rodamiento. Resultado \"Pagado\". \nOrden de trabajo: Conexión de albañal. \nOrden de trabajo: Instalación de toma de agua. Resultado. \"Ejecutada Terminada\". Cambia Estado comercial: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\". Detonar \nOrden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 77,
                                "nombre": "Contrataciones en parcialidades Tierra",
                                "estado": "Se modifico",
                                "descripcion": "Contratación en parcialidades para usuarios que autorice la Direccion Comercial",
                                "requisitos": "Estados de servicio: Factible, Real. Situaciones comerciales: Potencial, Activo. \"Para este tramite se requiere autorización del Director Comercial y solo se podra realizar con contraseña de asistente del Director Comercial\"",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Contratación en parcialidades Tierra.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Conexión de albañal.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de toma de agua. (Solo si se cobra) \"Ejecutada\".",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\".",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor(Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(161) Contrataciones en parcialidades Tierra",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 218,
                                                                                "nombre": "Tierra Conexion de albañal"
                                                                },
                                                                {
                                                                                "clave": 215,
                                                                                "nombre": "Tierra nuevo servicio de agua 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro de medidor de 1/2\" a 1\""
                                                                },
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota 1/2”"
                                                                },
                                                                {
                                                                                "clave": 68,
                                                                                "nombre": "Tierra metro adicional albañal"
                                                                },
                                                                {
                                                                                "clave": 108,
                                                                                "nombre": "Tierra metro adicional servicio de agua"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Contrataciones en parcialidades Tierra. Resultado \"Pagado\". \nOrden de trabajo: Conexión de albañal. \nOrden de trabajo: Instalación de toma de agua. \"Ejecutada\". Cambia Estado comercial: Real. Situacion comercial: Activo. \nOrden de trabajo: Instalación de columpio (Solo si se cobra). \"Ejecutada\".  Detonar \norden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                }
];
            // Especial
            datos.categorias[4].tramites = [
                {
                                "clave": 9,
                                "nombre": "Descarga de desechos en planta de tratamiento",
                                "estado": "Se queda igual",
                                "descripcion": "Por descarga móvil de agua residual de desechos domésticos en planta de tratamiento autorizada por metro cúbico",
                                "requisitos": "Estados de servicio: Real  Situaciones comerciales: Público Gral.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Descarga de desechos PTAR",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(3) Descarga de desechos PTAR",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 67,
                                                                                "nombre": "Descarga desechos domesticos"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 44,
                                "nombre": "Renovación de susp. temporal casa deshabitada",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para usuarios que estan suspendidos y requieren renovar por otro año.",
                                "requisitos": "Saldo en facturación igual a 0 pesos y saldo en convenio 0 pesos. Estado del servicio: Real. Situación comercial : Susp. Deshabitado",
                                "etapas": [
                                                {
                                                                "nombre": "Carta: Suspensión temporal",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 59,
                                "nombre": "Reconexión de toma de agua 2026",
                                "estado": "Se modifico",
                                "descripcion": "Reconexión de toma desde red central para cualquier situación comercial de suspension proveniente de migración y que desea formalizar su contrato.",
                                "requisitos": "Estados de servicio: Factible. Real. Baja. Situaciones comerciales: Potencial. Activo. Susp. Caja. Sup. Columpio. Susp. Toma. Baja. Baja Definitiva",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reconexión de toma.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de cuadro (solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (solo si se cobra)",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(147) Reconexión de toma de agua",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 197,
                                                                                "nombre": "Por reconexión de toma de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. \nOrden de trabajo: Reconexión de toma de agua. Resultado: \"Ejecutado Terminado\". Cambio a estado del servicio: Real. Situacion comercial: Activo.\nOrden de trabajo: Instalación de cuadro (solo si se cobra).\nOrden de trabajo: Instalación de medidor (solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 60,
                                "nombre": "Cancelación definitiva toma",
                                "estado": "Se modifico",
                                "descripcion": "Trámite de cancelación definitiva de toma por fusión, abandono o demolición de predio, que cuenten con una inspección VSS \"Terminada Ejecutada\"",
                                "requisitos": "Estados de servicio: Baja, Real  Situaciones comerciales: Activo, Activo FNSM, Baja, Inexistente Duplicado, No Facturable, NO FACTURABLE, Susp. Caja, Susp. Columpio, Susp. Deshabitado. Susp. FNSM, Susp. Toma",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Cancelación definitiva de toma.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Cancelación definitiva de toma.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(148) Cancelación de toma por fusión de predios",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 210,
                                                                                "nombre": "Cancelación definitiva de toma"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. \nSe Detona Orden de trabajo: Cancelación Definitiva de Toma. Resultado: \"Ejecutada Terminada\". \nCambia a Estado del Servicio: Baja. Situación Comercial: Cancelación Definitiva de Toma. \nGenera O.T de Bacheo.",
                                "filtros": ""
                },
                {
                                "clave": 12,
                                "nombre": "Carta Solicitud Cancelación Definitiva de Toma",
                                "estado": "Agregar",
                                "descripcion": "Trámite para solicitar la cancelación definitiva de toma por fusión, abandono o demolición de predio.",
                                "requisitos": "Estados de servicio: Factible, Baja, Real  Situaciones comerciales: Activo, Activo FNSM, Potencial, Baja, Inexistente Duplicado, No Facturable, NO FACTURABLE, Susp. Caja, Susp. Columpio, Susp. Deshabitado. Susp. FNSM, Susp. Toma",
                                "etapas": [
                                                {
                                                                "nombre": "Carta de solicitud de Cancelación Definitiva de Toma.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(133) Contratación de descarga sanitaria",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 12,
                                                                                "nombre": "Construcción registro sanitario"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Una vez que se realiza el tramite se generá la carta de solicitud de Cancelación Definitiva de Toma, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                "filtros": ""
                },
                {
                                "clave": 61,
                                "nombre": "Suspensión voluntaria 2026",
                                "estado": "Se modifico",
                                "descripcion": "Trámite para suspensión voluntaria temporal por cuadro y/o registro en caja de banqueta",
                                "requisitos": "Saldo en facturación igual a 0 pesos y saldo en convenio 0 pesos. Estado del servicio: Real Situación comercial : Activo",
                                "etapas": [
                                                {
                                                                "nombre": "- Presupuesto: Suspensión voluntaria temporal Pagado.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "- Orden de trabajo: Suspensión voluntaría (deshabitada).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Cambio estado de servicio. Suspendido Deshabitado.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "2-. Se genera la Carta: Suspensión temporal.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(149) Suspensión voluntaria temporal",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 113,
                                                                                "nombre": "Suspensión voluntaria temporal 2026"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Se genera Orden de trabajo: (20) Suspensión voluntaría (deshabitada). Resultado: \"Ejecutada Terminada\" cambia Estado de servicio: Real. Situación comercial: Susp. Deshabitado. Se genera la Carta: Suspensión temporal.",
                                "filtros": ""
                },
                {
                                "clave": 124,
                                "nombre": "Reconexión voluntaria temporal",
                                "estado": "Agregar",
                                "descripcion": "Trámite para reconexión voluntaria temporal por cuadro y/o registro en caja de banqueta",
                                "requisitos": "Saldo en facturación en 0 pesos. Estado del servicio: Real. Situación comercial: Susp. Deshabitado",
                                "etapas": [
                                                {
                                                                "nombre": "- Presupuesto: Reconexión voluntaria temporal. Pagado.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "- Orden de trabajo: Restablecimiento de servicio voluntario. Resultado \"Ejecutada Terminada\".",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "- Cambio estado de servicio. Activo.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Reconexión voluntaria temporal",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 114,
                                                                                "nombre": "Reconexión voluntaria temporal"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Se genera Orden de trabajo: (130) Reconexión de servicio voluntario. Resultado: \"Ejecutada Terminada\" cambia Estado de servicio: Real. Situación comercial: Activo.",
                                "filtros": ""
                },
                {
                                "clave": 95,
                                "nombre": "Solicitud suspensión voluntaria temporal",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para suspensión voluntaria temporal por cuadro o registro en caja de banqueta",
                                "requisitos": "Saldo total a 0 pesos. No tenga pago en parcialidades. Estado del servicio: Real Situación comercial : Activo",
                                "etapas": [
                                                {
                                                                "nombre": "Carta de solicitud de suspensión voluntaria temporal",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Una vez que se realiza el tramite se generá la carta de solicitud de suspension temporal, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                "filtros": ""
                }
];
            // General
            datos.categorias[5].tramites = [
                {
                                "clave": 6,
                                "nombre": "Venta de agua tratada en pipa",
                                "estado": "Se queda igual",
                                "descripcion": "Tramite para venta de agua tratada libre (sistema garza) a bordo, en planta autorizada, por metro cubico.",
                                "requisitos": "Estatus: Real Situacion: Activo, Público Gral.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de agua tratada",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Vale Agua tratada en pipa",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(2) Venta de agua tratada",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 66,
                                                                                "nombre": "Suministro y/o venta agua tratada en garza"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 7,
                                "nombre": "Factibilidad",
                                "estado": "Se queda igual",
                                "descripcion": "Tramite para generacion de factibilidad y presupuesto",
                                "requisitos": "Estatus: Real Situacion: Público Gral.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Factibilidad",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(5) Factibilidad",
                                                "cantidadM3": 0,
                                                "negociable": "SI",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 186,
                                                                                "nombre": "Derechos de conexión a red sanitaria"
                                                                },
                                                                {
                                                                                "clave": 187,
                                                                                "nombre": "Contribución por dotación de agua"
                                                                },
                                                                {
                                                                                "clave": 171,
                                                                                "nombre": "Derechos de conexión a red de agua"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 11,
                                "nombre": "Venta de agua potable a pipa particulares",
                                "estado": "Se queda igual",
                                "descripcion": "Suministro de agua a pipas particulares por m³ (donde no se cuenta con infraestructura y no sea zona vulnerable)",
                                "requisitos": "Estatus: Real Situacion: Público Gral.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de agua a pipas.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Vale de agua potable a pipa",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(4) Venta de agua a pipas",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 69,
                                                                                "nombre": "Suministro de agua a pipas"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 27,
                                "nombre": "Presupuesto Libre",
                                "estado": "Se queda igual",
                                "descripcion": "Presupuesto Libre para utilizar cualquier concepto",
                                "requisitos": "Estatus: Real, Factible, Situacion: Activo, En trámite, Potencial, Púb. En general, Susp. Banqueta, Susp. Columpio, Susp. Cuadro. \nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "(141) Presupuesto libre",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 47,
                                "nombre": "Constancia de Control de Obligaciones",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para usuarios que solicitan carta de no adeudo",
                                "requisitos": "Saldo en facturación igual a 0 pesos, Saldo en convenios 0, que no existan estado de cuenta en revisión,  Estado del servicio: Real Situación comercial : Activo, Susp. Deshabitado",
                                "etapas": [
                                                {
                                                                "nombre": "Carta: Constancia de Control de Obligaciones",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Una vez que se realiza el tramite se generá la Carta invitación al pago, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                "filtros": ""
                },
                {
                                "clave": 98,
                                "nombre": "Venta de bases de licitación",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para Venta de bases de licitación",
                                "requisitos": "Estatus: Real Situacion: Público Gral.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de bases de licitación",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(176) Venta de bases de licitación",
                                                "cantidadM3": 0,
                                                "negociable": "SI",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 195,
                                                                                "nombre": "Venta de bases de licitación"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 27,
                                "nombre": "Presupuesto Libre para utilizar cualquier concepto",
                                "estado": "Se queda igual",
                                "descripcion": "General",
                                "requisitos": "Solicitar contraseña del supervisor",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto libre",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                }
];
            // Grandes Usuarios
            datos.categorias[6].tramites = [
                {
                                "clave": 94,
                                "nombre": "Reconexión de toma de agua de 1\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                                "requisitos": "Que sean Grandes Usuarios. Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de Trabajo: Reconexión de Toma.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(174) Reconexión de toma de agua 1\" GU",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 197,
                                                                                "nombre": "Por reconexión de toma de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 204,
                                                                                "nombre": "Medidor de lectura remota 1\""
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2 - 1\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Genera \nOrden de trabajo: Reconexión de toma de agua. \"Ejecutado\"\"Terminada\". Cambio Estado del Servicio: Real. Situacion Comercial: Activo. \nOrden de trabajo: Instalación de cuadro (Solo si se cobra). \"Ejecutada\" \"Terminada\".  \nOrden de trabajo: Instalación de medidor (Solo si se cobra). \"Ejecutada\" Terminada\".",
                                "filtros": ""
                },
                {
                                "clave": 62,
                                "nombre": "Reconexión de toma de agua de 1-1/2\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                                "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma de agua.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de Trabajo: Reconexión de Toma.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(150) Reconexión de toma de agua 1-1/2\" GU",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 197,
                                                                                "nombre": "Por reconexión de toma de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 205,
                                                                                "nombre": "Medidor de lectura remota 1-1/2\""
                                                                },
                                                                {
                                                                                "clave": 199,
                                                                                "nombre": "Cuadro medidor 1-1/2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Genera \nOrden de trabajo: Reconexión de toma de agua. \"Ejecutado\"\"Terminada\". Cambio Estado del Servicio: Real. Situacion Comercial: Activo. \nOrden de trabajo: Instalación de cuadro (Solo si se cobra). \"Ejecutada\" \"Terminada\".  \nOrden de trabajo: Instalación de medidor (Solo si se cobra). \"Ejecutada\" Terminada\".",
                                "filtros": ""
                },
                {
                                "clave": 63,
                                "nombre": "Reconexión de toma de agua de 2\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                                "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma de agua. Orden de trabajo: Reconexión de toma. Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Reconexión de toma de agua de 2\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 197,
                                                                                "nombre": "Por reconexión de toma de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 206,
                                                                                "nombre": "Medidor de lectura remota 2\""
                                                                },
                                                                {
                                                                                "clave": 200,
                                                                                "nombre": "Cuadro de medidor 2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 64,
                                "nombre": "Reconexión de toma de agua de 3\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                                "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma de agua. Orden de trabajo: Reconexión de toma. Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Reconexión de toma de agua de 3\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 197,
                                                                                "nombre": "Por reconexión de toma de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 207,
                                                                                "nombre": "Medidor de lectura remota 3\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 65,
                                "nombre": "Reconexión de toma de agua de 4\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Reconexión de toma para cualquier situación comercial de suspension por morosidad proveniente de migración y que desea formalizar su contrato.",
                                "requisitos": "Estados de servicio: Factible, Real, Baja. Situaciones comerciales: Potencial, Activo, Activo FNSM, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Toma, Susp. Deshabitado, Susp. FNSM, No facturable, Baja, Inexistente duplicado. Solo para Grandes usuarios.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reconexion de toma de agua. Orden de trabajo: Reconexión de toma. Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Reconexión de toma de agua de 4\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 197,
                                                                                "nombre": "Por reconexión de toma de agua"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 208,
                                                                                "nombre": "Medidor de lectura remota 4\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: Activo. Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 92,
                                "nombre": "Reubicación de medidor 1\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor. Orden de trabajo: Reubicación de medidor. Instalación de cuadro de medidor (Solo si se cobra). Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Reubicación de medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 149,
                                                                                "nombre": "Reubicación de medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 204,
                                                                                "nombre": "Medidor de lectura remota 1\" "
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\" "
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 79,
                                "nombre": "Reubicación de medidor de 1-1/2\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor de 1-1/2\" GU.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de medidor y/o toma. Respuesta. “Ejecutada Terminada\".",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de Trabajo. Instalación de medidor 1-1/2\" (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(162) Reubicación de medidor de 1-1/2\" GU",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 149,
                                                                                "nombre": "Reubicación de medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 205,
                                                                                "nombre": "Medidor de lectura remota 1-1/2\""
                                                                },
                                                                {
                                                                                "clave": 199,
                                                                                "nombre": "Cuadro medidor de 1-1/2\" "
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 84,
                                "nombre": "Reubicación de medidor de 2\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(163) Reubicación de medidor 2\" GU",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 149,
                                                                                "nombre": "Reubicación de medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 206,
                                                                                "nombre": "Medidor de lectura remota 2\""
                                                                },
                                                                {
                                                                                "clave": 200,
                                                                                "nombre": "Cuadro medidor de 2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 85,
                                "nombre": "Reubicación de medidor de 3\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(169) Reubicación de medidor 3\" GU",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 149,
                                                                                "nombre": "Reubicación de medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 207,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 86,
                                "nombre": "Reubicación de medidor de 4\" GU",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Que tenga medidor instalado. Tramite únicamente para Grandes Usuarios. Estados de servicio: Real. Situaciones comerciales: Activo, Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(170) Reubicación de medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 149,
                                                                                "nombre": "Reubicación de medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 208,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 93,
                                "nombre": "Instalación de Medidor de 1\" Grandes usuarios",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para instalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor 1\" y/o cuadro de 1/2 a 1\".",
                                "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor  1\". Orden de trabajo: Instalación de cuadro (Solo si se cobra). Orden de trabajo: Instalación de medidor.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Venta de medidor  1\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 204,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 80,
                                "nombre": "Instalación de Medidor de 1-1/2\" Grandes usuarios",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para instalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                                "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor 1-1/2\". Orden de trabajo: Instalación de cuadro de medidor (Solo si se cobra). Orden de trabajo: Instalación de medidor",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Venta de medidor 1-1/2\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 205,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 199,
                                                                                "nombre": "Cuadro medidor 1-1/2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 81,
                                "nombre": "Instalación de Medidor de 2\" Grandes usuarios",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para intalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                                "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor 2\". Orden de trabajo: Instalación de cuadro de medidor (Solo si se cobra). Orden de trabajo: Instalación de medidor",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Venta de medidor 2\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 206,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 200,
                                                                                "nombre": "Cuadro medidor 2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 82,
                                "nombre": "Instalación de Medidor de 3\" Grandes usuarios",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para intalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                                "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor 3\". Orden de trabajo: Instalación de medidor",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Venta de medidor 3\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 207,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 83,
                                "nombre": "Instalación de Medidor de 4\" Grandes usuarios",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para intalación de medidor a usuarios que ya cuenten con el servicio de agua potable y alcantarillado pero que requieran la instalación del medidor y/o cuadro.",
                                "requisitos": "Si no cuenta con medidor. Estados de Servicio: Real. Situaciones comerciales: Activo. Activo FNSM. Susp. Caja. Susp. Columpio. Susp. Toma. Susp. FNSM. No facturable",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor 4\".Orden de trabajo: Instalación de medidor",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Venta de medidor 4\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 208,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 87,
                                "nombre": "Reconexión de toma de agua 2025 FNSM",
                                "estado": "Se queda igual",
                                "descripcion": "Reconexión de toma SIN COSTO para cuentas dentro del perimetro ferial y que se encuentren en  Situación Comercial: Susp. FNSM.",
                                "requisitos": "Estados de servicio: Real Situacion Comerciales: Susp. FSNM",
                                "etapas": [
                                                {
                                                                "nombre": "Orden de trabajo: Reconexión de toma de agua",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Orden de trabajo: Reconexión de toma de agua. \"Ejecutado\". Cambio a estado del servicio: Real. Situacion comercial: ActivoFNSM.",
                                "filtros": ""
                },
                {
                                "clave": 88,
                                "nombre": "Suspensión voluntaria temporal FNSM",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para suspensión voluntaria temporal SIN COSTO para cuentas dentro del perimetro ferial y que unicamente se activan en tiempo de feria",
                                "requisitos": "Estado del servicio: Real. Situación Comercial : Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Orden de trabajo: Suspensión voluntaría (deshabitada). Resultado: \"Ejecutada\" cambia Estado de servicio: Real. Situación comercial: Susp. FNSM. Se genera la Carta: Suspensión temporal",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Orden de trabajo: Suspensión voluntaria (Deshabitada). \"Ejecutada\". Cambia Estado de servicio: Real. Situación comercial: Susp. FNSM. Se genera la Carta: Suspensión temporal",
                                "filtros": ""
                },
                {
                                "clave": 89,
                                "nombre": "A Real-Susp. FNSM",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambiar usuarios ubicados dentro del perimetro ferial a Real -Susp. FNSM",
                                "requisitos": "Estado de servicio: Real.  Situaciones Comerciales: ActivoFNSM.",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 90,
                                "nombre": "A Real ActivoFNSM",
                                "estado": "Se queda igual",
                                "descripcion": "Para cambiar la situación comercial de Real - Activo a Real - ActivoFNSM en predios del perimetro ferial",
                                "requisitos": "Estado de servicio: Real. Situacion Comercial: Activo",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 182,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 1\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). , Instalación de cuadro (Solo si se cobra).  Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 1\" (182)",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 219,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 204,
                                                                                "nombre": ""
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo:  Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 183,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 1-1/2\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). , Instalación de cuadro (Solo si se cobra).  Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento albañal, toma, cuadro y med G.U.1 1y2\" ()",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 219,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 205,
                                                                                "nombre": ""
                                                                },
                                                                {
                                                                                "clave": 199,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo:  Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 184,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 2\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). , Instalación de cuadro (Solo si se cobra).  Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 2\"()",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 219,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 206,
                                                                                "nombre": ""
                                                                },
                                                                {
                                                                                "clave": 200,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo:  Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 185,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 3\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 3\"()",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 219,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 207,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 186,
                                "nombre": "Carpeta de rodamiento conexión de albañal y nuevo servicio de agua 4\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratacion de servicio de albañal(descarga), toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situación comercial: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta se genera presupuesto. Presupuesto: Rodamiento albañal, toma, cuadro y medidor G.U. Orden de trabajo: Conexión de albañal. Orden de trabajo: Instalación de toma de agua. Orden de trabajo: Construcción de registro sanitario (Solo si se cobra). Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento albañal, toma, cuadro y medidor G.U. 4\"()",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 219,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 208,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo: Conexión de albañal. Resultado \"Ejecutada Terminada\".  Orden de trabajo: Instalación de toma de agua.  Resultado \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación Comercial: Activo. Orden trabajo: Construcción de registro sanitario (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 187,
                                "nombre": "Rodamiento nuevo servicio de agua 1\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situaciones comerciales: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto. Presupuesto: Rodamiento Toma, cuadro y medidor. Orden de trabajo: Instalación de toma de agua, Instalación de cuadro (Solo si se cobra). Instalación de medidor (Solo si se cobra) .",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento Toma, cuadro y medidor G.U. 1\" (177)",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 216,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 204,
                                                                                "nombre": ". Cuadro medidor de 1/2 a 1\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo:  Instalación de toma de agua. \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación comercial: Activo. Orden de trabajo: Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 188,
                                "nombre": "Rodamiento nuevo servicio de agua 1-1/2\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situaciones comerciales: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto. Presupuesto: Rodamiento Toma, cuadro y medidor. Orden de trabajo: Instalación de toma de agua, Instalación de cuadro (Solo si se cobra). Instalación de medidor (Solo si se cobra) .",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento Toma, cuadro y medidor G.U. 1 1y2\" ()",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 216,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 205,
                                                                                "nombre": ". Cuadro medidor de 1-1/2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo:  Instalación de toma de agua. \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación comercial: Activo. Orden de trabajo: Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                },
                {
                                "clave": 189,
                                "nombre": "Rodamiento nuevo servicio de agua 2\" G.U.",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para contratación de servicio de toma de agua, cuadro y medidor",
                                "requisitos": "Estados de servicio: Factible. Situaciones comerciales: Potencial",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen comercial: con respuesta de la inspección se genera presupuesto. Presupuesto: Rodamiento Toma, cuadro y medidor. Orden de trabajo: Instalación de toma de agua, Instalación de cuadro (Solo si se cobra). Instalación de medidor (Solo si se cobra) .",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "Rodamiento Toma, cuadro y medidor G.U. 2\" ()",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 216,
                                                                                "nombre": ""
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 206,
                                                                                "nombre": ". Cuadro medidor de 2\""
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado. Cambia Estado Comercial a \"En tramite\". Orden de trabajo:  Instalación de toma de agua. \"Ejecutada Terminada\". Cambia Estado Comercial: Real. Situación comercial: Activo. Orden de trabajo: Instalación de cuadro (Solo si se cobra). Resultado \"Ejecutada Terminada\". Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                "filtros": ""
                }
];
            // Mantenimiento
            datos.categorias[7].tramites = [
                {
                                "clave": 8,
                                "nombre": "Limpieza de fosa séptica en casa habitación",
                                "estado": "Se elimina",
                                "descripcion": "Costo horario por servicio de limpieza de fosa séptica, previo dictamen del supervisor, en casa habitación.",
                                "requisitos": "Si es doméstico Estados de servicio: Real Situaciones comerciales: Activo",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen de limpieza de fosa septica, con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Limpieza fosa séptica en casa habitación.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Limpieza de fosa séptica en casa habitación",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(102) Limpieza fosa séptica en casa habitación",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 146,
                                                                                "nombre": "Limpieza de fosa septica casa habitación"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 10,
                                "nombre": "Limpieza de fosa séptica comercio y/o industria",
                                "estado": "Se elimina",
                                "descripcion": "Costo horario por servicio de limpieza de fosa séptica, previo dictamen del supervisor, en comercio o industria",
                                "requisitos": "Si es comercial o industrial Estados de servicio: Real Situaciones comerciales: Activo",
                                "etapas": [
                                                {
                                                                "nombre": "Generar Dictamen de limpieza de fosa septica, con respuesta de la inspección se genera presupuesto.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Presupuesto: Limpieza fosa séptica en comercio o industria.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Limpieza de fosa séptica comercio y/o industria",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(103) Limpieza fosa séptica en comercio o industria",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 180,
                                                                                "nombre": "Limpieza de fosa septica comercio y/o industria"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 75,
                                "nombre": "Construcción y colocación de caja de registro en banqueta",
                                "estado": "Cambio de clase",
                                "descripcion": "Trámite para suministro y colocación de caja de registro en banqueta nuevo, por solicitud del usuario.",
                                "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo Solicitar contraseña de supervisor",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: construcción de registro para alojo e  instalación de caja de banqueta",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(159) Construcción y colocación de caja de registro en banqueta",
                                                "cantidadM3": 0,
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 76,
                                "nombre": "Venta de caja de polietileno registro en banqueta",
                                "estado": "Se elimina",
                                "descripcion": "Trámite por cambio de caja de banqueta por mantenimiento",
                                "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo Solicitar contraseña de supervisor",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de caja de polietileno registro en banqueta",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de caja de banqueta",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(160) Venta de caja de polietileno registro en banqueta",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 163,
                                                                                "nombre": "Venta de Caja de polietileno de registro en banqueta"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                }
];
            // Medidores
            datos.categorias[8].tramites = [
                {
                                "clave": 4,
                                "nombre": "Venta de medidor y/o cuadro",
                                "estado": "Se queda igual",
                                "descripcion": "Venta de medidor e instalación para predios que ya cuentan con los servicios instalados.",
                                "requisitos": "Estados de servicio: Real. Situaciones comerciales: Activo",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Venta de medidor y/o cuadro.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de cuadro de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra). 1.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(131) Venta de medidor y/o cuadro",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                },
                                                                {
                                                                                "clave": 198,
                                                                                "nombre": "Cuadro medidor de 1/2\" a 1\""
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 16,
                                "nombre": "Reubicación de medidor en cuadro",
                                "estado": "Modificado",
                                "descripcion": "Trámite para reubicación del medidor en cuadro para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Que tenga medidor instalado. Estados de servicio: Real  Situaciones comerciales: Activo. Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de medidor y/o toma",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalacion de columpio (Solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(106) Reubicación de medidor 1/2\"",
                                                "cantidadM3": 0,
                                                "negociable": "SI",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 230,
                                                                                "nombre": "Reubicación de cuadro y/o medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 55,
                                "nombre": "Reubicación de medidor a caja de registro",
                                "estado": "Agregar",
                                "descripcion": "Trámite para reubicación del medidor a caja de registro para hacerlo más visble",
                                "requisitos": "Que tenga medidor instalado. Estados de servicio: Real  Situaciones comerciales: Activo. Activo FNSM",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de medidor a caja de registro. Pagado",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de medidor y/o toma.",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra).",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(206) Reubicación de medidor a caja de registro",
                                                "cantidadM3": 0,
                                                "negociable": "SI",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 149,
                                                                                "nombre": "Reubicación de medidor a caja de registro"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 32,
                                "nombre": "Cambio de medidor sin costo por robo",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambio de medidor sin costo por robo con denuncia en MP max 15 días y no se les cobra.",
                                "requisitos": "Estados de servicio: REAL  Situaciones comerciales: Activo, Activo FNSM, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Valvula, Susp. FNSM.",
                                "etapas": [
                                                {
                                                                "nombre": "Orden de trabajo: Cambio de medidor",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 91,
                                "nombre": "Reubicación de cuadro",
                                "estado": "Modificado",
                                "descripcion": "Trámite para reubicación del cuadro para hacerlo más visible, por obstrucción de toma de lectura o modificación al inmueble.",
                                "requisitos": "Estados de servicio: REAL. Situaciones comerciales: ACTIVO",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Reubicación de cuadro 1/2 a 1\"",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Reubicación de cuadro",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra)",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(171) Reubicación de cuadro1/2 a 1\"",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 230,
                                                                                "nombre": "Reubicación de cuadro y/o medidor"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 75,
                                "nombre": "Sumistro y colocación de caja de registro en banqueta",
                                "estado": "Cambio de clase",
                                "descripcion": "Trámite para construcción, suministro y colocación de caja de registro en banqueta nuevo, por solicitud del usuario.",
                                "requisitos": "Estados de servicio: Factible, Real. Situaciones comerciales: Potencial. Activo",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: const y colocación de caja de reg en banqueta",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de caja de banqueta",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de trabajo: Instalación de medidor (Solo si se cobra)",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(159) Construcción y colocación de caja de registro en banqueta",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "Importe fijo",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 7,
                                                                                "nombre": "Construcción y colocación caja de registro en banqueta"
                                                                }
                                                ],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Presupuesto: Pagado\nOrden de trabajo: Instalación de caja de banqueta.\nCambia a estado de servicio: Real. Situación comercial: Activo.\nOrden de trabajo: Instalación de Medidor (solo si se cobra)",
                                "filtros": ""
                }
];
            // NOTIFICACIONES Y COBRANZA
            datos.categorias[9].tramites = [
                {
                                "clave": 72,
                                "nombre": "Aviso suspensión a morosos no doméstico 2025",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para aviso de suspensión del servicio a usuarios no domésticos Hospitales privados, Comerciales, Industriales",
                                "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. \nPeriodos de adeudo mayor a 1. \nUsuarios no Domesticos\nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de reconexión pendientes",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generan el aviso de suspensión, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 73,
                                "nombre": "Aviso suspensión a morosos doméstico 2025",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para aviso de suspensión del servicio a usuarios domésticos A AA B C, Rural",
                                "requisitos": "Estados de servicio: Real Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio, Susp. Toma. \nPeriodos de adeudo mayor a 1. \nUsuarios Domesticos\nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de reconexión pendientes",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generan el aviso de suspensión, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 78,
                                "nombre": "Carta Notificación",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para envio de notificaicón de suspensión a usuarios domesticos",
                                "requisitos": "Estatus :Real Situacion Activo. Sus. Banqueta, Susp Caja, Susp. Columpio y Susp. Toma \nUsuarios que tengan mas de 3 periodos de adeudo. \nTipo de servicio que sea Domestico. \nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de trabajo pendientes",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generá la carta de Notificación, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 96,
                                "nombre": "Carta Notificación No Dómesticos",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para envio de notificaciones a usuarios no doméscticos",
                                "requisitos": "Estatus :Real Situacion Activo. Sus. Banqueta, Susp Caja, Susp. Columpio y Susp. Toma \nUsuarios que tengan mas de 3 periodos de adeudo. \nTipo de servicio que sea no Domestico. \nNo debe haber inspecciones pendientes. \nNo debe haber órdenes de trabajo pendientes",
                                "etapas": [
                                                {
                                                                "nombre": "Una vez que se sube el archivo y se generá la carta de Notificación, se descargan en el historico de cartas en el predio correspondiente y se mandan a imprimir.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 123,
                                "nombre": "Verificación de Datos",
                                "estado": "Agregar",
                                "descripcion": "Trámite para verificar datos de los usuarios del servicio público del agua",
                                "requisitos": "Estatus del servicio: Real. Situacion comercial: Activo, Activo FNSM, No Facturable, Susp. Banqueta. Susp. Columpio. Susp. Toma. Susp. Cuadro. Susp. Alcantarillado. Susp. Registro. Susp. Deshabitado. Susp. Valvula",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                }
];
            // Padrón y Lectura
            datos.categorias[10].tramites = [
                {
                                "clave": 20,
                                "nombre": "A Real Activo",
                                "estado": "Se queda igual",
                                "descripcion": "Para activar un predio",
                                "requisitos": "Estados de servicio: Real, Factible, Baja.   Situaciones comerciales: Activo, En Juicio, En Trámite, No facturable, Potencial, Susp. Banqueta, Susp. Caja, Susp. Columpio, Susp. Cuadro, Susp. Deshabitado, Susp. Factible, Susp. Registro, Susp. Toma. \nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"Activo\"",
                                "filtros": ""
                },
                {
                                "clave": 33,
                                "nombre": "A No Facturable",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambio de situación comercial de Activo a No Facturable",
                                "requisitos": "Estados de servicio: Real, Factible.   Situaciones comerciales: Activo, Potencial. \nSolicita Contraseña.",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"No Facturable\"",
                                "filtros": ""
                },
                {
                                "clave": 41,
                                "nombre": "Inexistente Duplicado",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para dar de baja predios por inexistencia o duplicidad",
                                "requisitos": "Estados de servicio: Real.   Situaciones comerciales: Activo, Clandestino, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Valvula, Susp. Toma. \nSolicita Contraseña.",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"Inexistente Duplicado\"",
                                "filtros": ""
                },
                {
                                "clave": 42,
                                "nombre": "Columpio y medidor predios activos",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para clientes que ya cuentan con el servicio de agua y drenaje y solo requieren de columpio y medidor y que y este activo el predio",
                                "requisitos": "Estados de servicio: Real.   Situaciones comerciales: Activo. \nSolicita Contraseña.",
                                "etapas": [
                                                {
                                                                "nombre": "Presupuesto: Caja de Banqueta y medidor",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de Trabajo: Instalación de columpio (solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de Trabajo: Instalación de Medidor (solo si se cobra).",
                                                                "descripcion": ""
                                                },
                                                {
                                                                "nombre": "Orden de Trabajo: Instalación de caja de banqueta.",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "(139) Caja de banqueta y medidor",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [
                                                                {
                                                                                "clave": 7,
                                                                                "nombre": "Construcción y colocación caja de registro en banqueta"
                                                                }
                                                ],
                                                "conceptosOpcionales": [
                                                                {
                                                                                "clave": 15,
                                                                                "nombre": "Suministro de medidor"
                                                                },
                                                                {
                                                                                "clave": 203,
                                                                                "nombre": "Medidor de lectura remota"
                                                                }
                                                ],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 48,
                                "nombre": "Baja definitiva",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambio de situación comercial Baja Definitiva",
                                "requisitos": "Estados de servicio: Real.   Situaciones comerciales: Activo, En Juicio, Inexistente duplicado, Susp. Banqueta, Susp. Columpio, Susp. Deshabitado, Susp. Toma. \nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"Baja Definitiva\"",
                                "filtros": ""
                },
                {
                                "clave": 49,
                                "nombre": "Real - activo",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambiar a real a activo a usuarios que se cambiaroron a baja para no facturarles",
                                "requisitos": "Estados de servicio: Baja, Factible.  Situaciones comerciales: Baja, Clandestino, COL. NO FACTURABLE, En Juicio, \nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"Activo\"",
                                "filtros": ""
                },
                {
                                "clave": 50,
                                "nombre": "Factible - Potencial",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambiar a factible potencial usuarios del padrón",
                                "requisitos": "Estados de servicio: Baja, Real.  Situaciones comerciales: Activo, Baja, Clandestino, En Juicio, En Trámite, No Fact. Dist., No Facturable, NO FACTURABLE, POR CASA DESHABITADA, POR INCOBRABLE, POR LOTE BALDIO, Potencial, PROCESO LEGAL INCOBRABLE, Sin red, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Válvula, Validado. \nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"Potencial\"",
                                "filtros": ""
                },
                {
                                "clave": 52,
                                "nombre": "Real - Susp. Deshabitado",
                                "estado": "Se queda igual",
                                "descripcion": "Trámite para cambiar usuarios del padrón a Real - Susp. Deshabitado",
                                "requisitos": "Estados de servicio: Real, Factible, Baja.   Situaciones comerciales: Activo, Activo FNSM, Baja, Clandestino, EN BURO DE CREDITO,  En Juicio, En Trámite, No facturable,POR CASA DESHABITADA, POR INCOBRABLE, POR LOTE BALDIO, Potencial, PROCESO LEGAL INCOBRABLE, Sin red, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Válvula, Validado. \nSolicita Contraseña\nQue el cliente no tenga periodos de Adeudo\nQue tenga una inspeccion VSS terminada",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"Susp. Deshabitado\"",
                                "filtros": ""
                },
                {
                                "clave": 53,
                                "nombre": "Reubicación de medidor sin costo",
                                "estado": "Cambio de Clase",
                                "descripcion": "Trámite para reubicación del medidor para hacerlo más visble por alguna obstrucción al lecturista",
                                "requisitos": "Clientes que cuenten con medidor. Estados de servicio: Real.   Situaciones comerciales: Activo, Susp. Alcantarillado, Susp. Caja, Susp. Columpio, Susp. Deshabitado, Susp. Factible, Susp. Toma, Susp. Válvula.",
                                "etapas": [
                                                {
                                                                "nombre": "Orden de Trabajo: Reubicación de medidor y/o toma",
                                                                "descripcion": ""
                                                }
                                ],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                },
                {
                                "clave": 66,
                                "nombre": "Real - Susp. Banqueta",
                                "estado": "Cambio de Clase",
                                "descripcion": "Trámite para cambiar usuarios de real a suspendio banqueta por tarmite de suspensión",
                                "requisitos": "Estados de servicio: Real. Situaciones Comerciales: Activo.\nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Predio cambia de situacion a Suspendido Banqueta con una prioridad Extraurgente",
                                "filtros": ""
                },
                {
                                "clave": 67,
                                "nombre": "Real - Susp. Cuadro",
                                "estado": "Cambio de Clase",
                                "descripcion": "Trámite para cambiar usuarios de real a suspendido cuadro para usuarios que se les suspendio el servicio",
                                "requisitos": "Estados de servicio: Real. Situaciones Comerciales: Activo.\nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Predio cambia de situacion a Suspendido Cuadro con una prioridad Extraurgente",
                                "filtros": ""
                },
                {
                                "clave": 97,
                                "nombre": "Real - Susp. Registro",
                                "estado": "Cambio de Clase",
                                "descripcion": "Trámite para cambiar usuarios de real a suspendido registro para usuarios que se les suspendio el servicio",
                                "requisitos": "Estados de servicio: Real. Situaciones Comerciales: Activo.\nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Predio cambia de situacion a Suspendido Registro con una prioridad Extraurgente",
                                "filtros": ""
                },
                {
                                "clave": 21,
                                "nombre": "Predio en Juicio",
                                "estado": "Cambio de Clase",
                                "descripcion": "Tramite para predios con demanda o juicio en profeco",
                                "requisitos": "Estados de servicio: Real  Situaciones comerciales: Activo, Susp. Caja, Susp. Columpio.\nSolicita Contraseña",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Predio cambia de situacion a En Juicio  con una prioridad Extraurgente",
                                "filtros": ""
                },
                {
                                "clave": 99,
                                "nombre": "A En Juicio",
                                "estado": "Cambio de Clase",
                                "descripcion": "Para cambiar la situacion comercial de Real Activo a En Juicio",
                                "requisitos": "Estados de servicio: Real  Situaciones comerciales: Activo. Solicita Contraseña.",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "Cambia Situacion Comercial \"En Juicio\"",
                                "filtros": ""
                },
                {
                                "clave": 43,
                                "nombre": "Notificación a usuario factible",
                                "estado": "Cambio de Clase",
                                "descripcion": "Aviso a nuevos desarrollos (padron de usuarios)",
                                "requisitos": "Estados de servicio: Factible, Situaciones comerciales: Potencial. Solicita Contraseña.",
                                "etapas": [],
                                "presupuesto": {
                                                "nombre": "",
                                                "cantidadM3": 0,
                                                "negociable": "NO",
                                                "metodoPago": "",
                                                "conceptosObligatorios": [],
                                                "conceptosOpcionales": [],
                                                "conceptos": []
                                },
                                "imagenes": [],
                                "ordenesTrabajo": [],
                                "resultado": "",
                                "filtros": ""
                }
];
            guardarDatos();
        }