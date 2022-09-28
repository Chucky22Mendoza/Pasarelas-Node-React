import React from "react";
import select from '../../request/checkout';

const comparative = (props) => {
    const selectPlus = (event) => {
        window.location.href = select.plus(event, props.queryParams);
    }
    const selectPremium = (event) => {
        window.location.href = select.premium(event, props.queryParams);
    }

    return (
        <section id="feature-comparision">
            <div id="title">
                <div className="text">
                    Conoce las ventajas de cada plan
                </div>
            </div>
            <div id="planes">
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
            </div>
            <div className="text">
                Vende más
            </div>
            <div className="funcionalidades">
                <div className="sec">
                    <div className="list">
                        <img src="/img/Vector.svg" alt=""/>
                        Productos limitados
                    </div>
                    <div className="list gray">
                        <img src="/img/Drawer icons.svg" alt=""/>
                        Punto de ventas
                    </div>
                    <div className="list">
                        <img src="/img/Sale icons.svg" alt=""/>
                        Tienda en línea
                    </div>
                    <div className="list gray">
                        <img src="/img/Discount.svg" alt=""/>
                        Descuentos
                    </div>
                    <div className="list">
                        <img src="/img/General icons.svg" alt=""/>
                        Fotos por producto
                    </div>
                    <div className="list gray">
                        <img src="/img/Drawer iconslast.svg" alt=""/>
                        Pedidos por internet
                    </div>
                    <div className="list">
                        <img src="/img/clock.svg" alt=""/>
                        Gestión de pedidos
                    </div>
                    <div className="list gray">
                        <img src="/img/Bag.svg" alt=""/>
                        Integración con redes sociales
                    </div>
                    <div className="list">
                        <img src="/img/ticket.svg" alt=""/>
                        Recibos impresos
                    </div>
                    <div className="list gray">
                        <img src="/img/printer.svg" alt=""/>
                        Impresoras conectadas
                        <div className="nuevo">NUEVO</div>
                    </div>
                    <div className="list">
                        <img src="/img/truck.svg" alt=""/>
                        Gestión de repartos
                        <div className="nuevo">NUEVO</div>
                    </div>
                    <div className="list gray">
                        <img src="/img/table.svg" alt=""/>
                        Gestión de mesas
                    </div>
                    <div className="list">
                        <img src="/img/dowload.svg" alt=""/>
                        Importación de productos
                        <div className="nuevo">NUEVO</div>
                    </div>
                    <div className="list gray">
                        <img src="/img/copy.svg" alt=""/>
                        Modificadores
                    </div>
                    <div className="list">
                        <img src="/img/$.svg" alt=""/>
                        Facturación electronica
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <div className="nums">1</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <div className="nums">1</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <div className="nums">8 mesas</div>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <div className="nums pr">1</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <div className="nums pr">Sin límite</div>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text apart">
                Gestiona mejor
            </div>
            <div className="funcionalidades">
                <div className="sec">
                    <div className="list">
                        <img src="/img/ppl.svg" alt=""/>
                        Usuarios / vendedores
                    </div>
                    <div className="list gray">
                        <img src="/img/Vector.svg" alt=""/>
                        Control de inventario
                    </div>
                    <div className="list">
                        <img src="/img/cron.svg" alt=""/>
                        Turnos de caja
                    </div>
                    <div className="list gray">
                        <img src="/img/grap.svg" alt=""/>
                        Informes y estadísticas
                    </div>
                    <div className="list">
                        <img src="/img/facebook.svg" alt=""/>
                        Pixel de facebook
                    </div>
                    <div className="list gray">
                        <img src="/img/computer.svg" alt=""/>
                        Backoffice en computadora
                    </div>
                    <div className="list">
                        <img src="/img/spook.svg" alt=""/>
                        Inventario con recetas
                    </div>
                    <div className="list gray">
                        <img src="/img/truck.svg" alt=""/>
                        Compras y proveedores
                    </div>
                    <div className="list">
                        <img src="/img/ticket.svg" alt=""/>
                        Pantalla para la cocina: KDS
                    </div>
                    <div className="list gray">
                        <img src="/img/computer.svg" alt=""/>
                        Vender en computadora
                        <div className="nuevo">NUEVO</div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <div className="nums">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <div className="nums">5</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <div className="nums pr">Sin límite</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
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
                        <img src="/img/ppl.svg" alt=""/>
                        Clientes ilimitados
                    </div>
                    <div className="list gray">
                        <img src="/img/Vector.svg" alt=""/>
                        Control de ventas a crédito
                    </div>
                    <div className="list">
                        <img src="/img/grap.svg" alt=""/>
                        Informes y estadísticas
                    </div>
                    <div className="list gray">
                        <img src="/img/facebook.svg" alt=""/>
                        Pixel de facebook
                    </div>
                    <div className="list">
                        <img src="/img/computer.svg" alt=""/>
                        Versión para computadora
                    </div>
                    <div className="list gray">
                        <img src="/img/computer.svg" alt=""/>
                        Vender en computadora
                        <div className="nuevo">NUEVO</div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <div className="nums">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray">
                            <div className="nums inv-gray">1</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <div className="nums">5</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check">
                            <div className="nums pr">Sin límite</div>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray">
                            <img src="/img/feature marker.svg" alt=""/>
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
                        <img src="/img/ppl.svg" alt=""/>
                        <div className="col">
                            <div>Centro de ayuda</div>
                            <div className="sobretxt">Guías para asistirle en el camino</div>
                        </div>
                    </div>
                    <div className="list gray">
                        <img src="/img/Vector.svg" alt=""/>
                        <div className="col">
                            <div>Centro de ayuda</div>
                            <div className="sobretxt">Guías para asistirle en el camino</div>
                        </div>
                    </div>
                    <div className="list">
                        <img src="/img/grap.svg" alt=""/>
                        <div className="col">
                            <div>Centro de ayuda</div>
                            <div className="sobretxt">Guías para asistirle en el camino</div>
                        </div>
                    </div>
                    <div className="list gray">
                        <img src="/img/facebook.svg" alt=""/>
                        <div className="col">
                            <div>Centro de ayuda</div>
                            <div className="sobretxt">Guías para asistirle en el camino</div>
                        </div>
                    </div>
                    <div className="list">
                        <img src="/img/computer.svg" alt=""/>
                        <div className="col">
                            <div>Centro de ayuda</div>
                            <div className="sobretxt">Guías para asistirle en el camino</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check sp">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray sp">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check sp">
                            <div className="nums inv">1</div>
                        </div>
                        <div className="check gray sp">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check sp">
                            <div className="nums inv">1</div>
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check sp">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray sp">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check sp">
                            <img src="/img/vectorck.svg  " alt=""/>
                        </div>
                        <div className="check gray sp">
                            <div className="nums inv-gray">1</div>
                        </div>
                        <div className="check">
                            {/* <div id="dinero" className="check"> +MXN$10.00 <div name="lblTime" id="mns">al mes</div></div> */}
                        </div>
                    </div>
                </div>
                <div className="tr">
                    <div className="sec">
                        <div className="check sp">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray sp">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check sp">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                        <div className="check gray sp">
                            <img src="/img/feature marker.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default comparative;