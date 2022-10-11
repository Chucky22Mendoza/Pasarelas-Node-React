import React from "react";
import select from '../../request/checkout';

const comparative = (props) => {
    const selectPlus = async (event) => {
        window.location.href = await select.plus(event, props.queryParams);
    }
    const selectPremium = async (event) => {
        window.location.href = await select.premium(event, props.queryParams);
    }

    return (
        <section id="feature-comparision">
            <div id="all">
                <div id="title">
                    <div className="text">
                        Conoce las ventajas de cada plan
                    </div>
                </div>
                {/* <div id="planes">
                    <div className="plan">
                        <div className="type">
                            Gratis
                        </div>
                        <div className="feature1">
                            <p name="lblCoin" className="d-flex jc-center">MXN$</p>
                            <span>0.00</span>
                            <div name="lblTime" className="mns">al mes</div>
                        </div>
                        <div className="feature2" id="btn-free">
                            Probar gratis
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-icon.svg" alt=""/>
                            Plus
                        </div>
                        <div className="feature1">
                            <p name="lblCoin" className="d-flex jc-center">MXN$</p>
                            <span name="plusValue">249.00</span>
                            <div name="lblTime" className="mns">al mes</div>
                        </div>
                        <div onClick={selectPlus} className="btn-comparative blue-btn feature2" id="btn-pl">
                            Seleccionar
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-iconp.svg" alt=""/>
                            Premium
                        </div>
                        <div className="feature1">
                            <p name="lblCoin" className="d-flex jc-center">MXN$</p>
                            <span name="premiumValue">549.00</span>
                            <div name="lblTime" className="mns">al mes</div>
                        </div>
                        <div onClick={selectPremium} className="btn-comparative orange-btn feature2" id="btn-pr">
                            Seleccionar
                        </div>
                    </div>
                </div> */}
                <div id="planes">
                    <div className="prods">.</div>
                    <div className="plan">
                        <div className="type">
                            Gratis
                        </div>
                        <div className="feature1">
                            <p name="lblCoin" className="d-flex jc-center">MXN$</p>
                            <span>0.00</span>
                            <div name="lblTime" className="mns">al mes</div>
                        </div>
                        <div className="feature2 btn">
                            Probar gratis
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-icon.svg" alt=""/>
                            Plus
                        </div>
                        <div className="feature1">
                            <p name="lblCoin" className="d-flex jc-center">MXN$</p>
                            <span name="plusValue">249.00</span>
                            <div name="lblTime" className="mns">al mes</div>
                        </div>
                        <div onClick={selectPlus} className="feature2 btn-comparative blue-btn">
                            Seleccionar
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-iconp.svg" alt=""/>
                            Premium
                        </div>
                        <div className="feature1">
                            <p name="lblCoin" className="d-flex jc-center">MXN$</p>
                            <span name="premiumValue">549.00</span>
                            <div name="lblTime" className="mns">al mes</div>
                        </div>
                        <div onClick={selectPremium} className="feature2 btn-comparative orange-btn">
                            Seleccionar
                        </div>
                    </div>
                </div>
                <div id="planes-mvl">
                    <div className="prods">.</div>
                    <div className="plan">
                        <div className="type">
                            Gratis
                        </div>
                        <div className="feature1">
                            MXN$0.00
                            <div className="mns">al mes</div>
                        </div>
                        <div className="feature2 btn">
                            Probar gratis
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-icon.svg" alt=""/>
                            Plus
                        </div>
                        <div className="feature1">
                            MXN$249.00
                            <div className="mns">al mes</div>
                        </div>
                        <div className="feature2 btn plus">
                            Probar gratis
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-iconp.svg" alt=""/>
                            Premium
                        </div>
                        <div className="feature1">
                            MXN$549.00
                            <div className="mns">al mes</div>
                        </div>
                        <div className="feature2 btn premium">
                            Probar gratis
                        </div>
                    </div>
                </div>
                <div id="planes-200px">
                    <div className="prods">.</div>
                    <div className="plan">
                        <div className="type">
                            Gratis
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-icon.svg" alt=""/>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="type">
                            <img src="/img/plan-iconp.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="text apart" id="vende">
                    Vende más
                </div>
                <div className="funcionalidades">
                    <div className="sec">
                        <div className="list">
                            <div className="prods">
                                <img src="/img/Vector.svg" alt=""/>
                                Productos limitados
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/Drawer icons.svg" alt=""/>
                                Punto de ventas
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/Sale icons.svg" alt=""/>
                                Tienda en línea
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/Discount.svg" alt=""/>
                                Descuentos
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/General icons.svg" alt=""/>
                                Fotos por producto
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/Drawer iconslast.svg" alt=""/>
                                Pedidos por internet
                            </div>
                            <div className="check">
                                <div className="nums">1</div>
                            </div>
                            <div className="check">
                                <div className="nums">9</div>
                            </div>
                            <div className="check">
                                <div className="nums pr">9</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/clock.svg" alt=""/>
                                Gestión de pedidos
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/Bag.svg" alt=""/>
                                Integración con redes sociales
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/ticket.svg" alt=""/>
                                Recibos impresos
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/printer.svg" alt=""/>
                                <div>Impresoras conectadas</div>
                                <div className="nuevo">NUEVO</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums">1</div>
                            </div>
                            <div className="check">
                                <div className="nums pr">Sin limite</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/truck.svg" alt=""/>
                                <div>Gestión de repartos</div>
                                <div className="nuevo">NUEVO</div>
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/table.svg" alt=""/>
                                Gestión de mesas
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums">8 mesas</div>
                            </div>
                            <div className="check">
                                <div className="nums">Sin limite</div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/dowload.svg" alt=""/>
                                <div>Importacion de productos</div>
                                <div className="nuevo">NUEVO</div>
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/copy.svg" alt=""/>
                                Modificadores
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/$.svg" alt=""/>
                                Facturación electronica
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text apart" id="gestion">
                    Gestiona mejor
                </div>
                <div className="funcionalidades">
                    <div className="sec">
                        <div className="list">
                            <div className="prods">
                                <img src="/img/ppl.svg" alt=""/>
                                Usuarios / vendedores
                            </div>
                            <div className="check">
                                <div className="nums">1</div>
                            </div>
                            <div className="check">
                                <div className="nums">5</div>
                            </div>
                            <div className="check">
                                <div className="nums pr">Sin limite</div>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/Vector.svg" alt=""/>
                                Control de inventario
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/cron.svg" alt=""/>
                                Turnos de caja
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/grap.svg" alt=""/>
                            Informes y estadísticas
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/facebook.svg" alt=""/>
                                Pixel de facebook
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/computer.svg" alt=""/>
                                Backoffice en computadora
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/spook.svg" alt=""/>
                                Inventario con recetas
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/truck.svg" alt=""/>
                                Compras y proveedores
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/ticket.svg" alt=""/>
                                Pantalla para la cocina: KDS
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/computer.svg" alt=""/>
                                <div>Vender en computadora</div>
                                <div className="nuevo">NUEVO</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text apart">
                    Fideliza mejor
                </div>
                <div className="funcionalidades">
                    <div className="sec">
                        <div className="list">
                            <div className="prods">
                                <img src="/img/ppl.svg" alt=""/>
                                Clientes ilimitados
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/Vector.svg" alt=""/>
                                Control de ventas a credito
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/grap.svg" alt=""/>
                                Informes y estadísticas
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/facebook.svg" alt=""/>
                                Pixel de facebook
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <img src="/img/computer.svg" alt=""/>
                                Versión para computadora
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <img src="/img/computer.svg" alt=""/>
                                <div>Vender en computadora</div>
                                <div className="nuevo">NUEVO</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text apart">
                    Soporte
                </div>
                <div className="funcionalidades">
                    <div className="sec">
                        <div className="list">
                            <div className="prods">
                                <div className="txt">
                                    <img src="/img/help_circle_outline.svg" alt=""/>
                                    <div className="col">
                                        <div>Centro de ayuda</div>
                                        <div className="sobretxt">Guías para asistirle en el camino</div>
                                    </div>
                                </div>  
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <div className="txt">
                                    <img src="/img/Tick Square.svg" alt=""/>
                                    <div className="col">
                                        <div>Por ticket de soporte</div>
                                        <div className="sobretxt">Servicio en hasta 24 horas</div>
                                    </div>
                                </div>  
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <div className="txt">
                                    <img src="/img/Chat.svg" alt=""/>
                                    <div className="col">
                                        <div>Por chat</div>
                                        <div className="sobretxt">Contacto rapido y directo con el equipo</div>
                                    </div>
                                </div>  
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/vectorck.svg  " alt=""/>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list gray">
                            <div className="prods">
                                <div className="txt">
                                    <img src="/img/login contact.svg" alt=""/>
                                    <div className="col">
                                        <div>Por WhatsApp</div>
                                        <div className="sobretxt">Acceso prioritario a nuestro equipo de éxito.</div>
                                    </div>
                                </div>  
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <div className="nums inv-gray">1</div>
                            </div>
                            <div className="check">
                                <img className="center" src="/img/feature marker.svg" alt=""/>
                            </div>
                        </div>
                        <div className="list">
                            <div className="prods">
                                <div className="txt">
                                    <img src="/img/config.svg" alt=""/>
                                    <div className="col">
                                        <div>Consultor de implementación</div>
                                        <div className="sobretxt">Soporte para que tu y tu equipo esten listos para vender</div>
                                    </div>
                                </div>  
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                            <div className="check">
                                <div className="nums bl cost">+USD$10.00</div>
                                <div className="sobretxt sp">al mes</div>
                            </div>
                            <div className="check">
                                <div className="nums inv">1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default comparative;