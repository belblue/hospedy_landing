<template>
    <div class="">
        <Navbar />
        <div class="grid lg:grid-cols-2 mt-20 ">
            <div class=" m-10 lg:mt-32">
                <h1 class="mb-4 text-5xl">Tan fácil como tu libreta,</h1>
                <h1 class="mb-8 text-5xl"> todo en una aplicación.</h1>
                <h2 class="mb-8 text-2xl">Partes de viajeros, encuesta del INE, gestión de reservas con facturación, channel manager, motor de reservas y mucho más.</h2>               
                <a class="btn btn-grad "  href="https://app.ridid.me/register" target="_blank" title="accede a la página de registro de Ridid para iniciar la prueba gratis">Probarlo gratis</a>
                <p class="mt-4 text-xl text-secondary">¡Disfruta de 2 meses gratis de prueba!</p>
            </div>
            <div class="">
                <img src="/laptop_and_phone.webp"  alt="Ejemplo calendario de reservas movil y desktop">
            </div>
        </div>
       
        <div class="m-10">
           <!-- <p class="text-5xl text-primary mt-8">¿Qué es Ridid?</p>-->
            <p class="text-xl ">Ridid es una aplicación web para la gestión integral para todo tipo de alojamientos turísticos: hoteles, casas rurales, apartamentos, campings, villas, albergues, casas de alquiler completo…</p>
        </div>


        <div class="grid lg:grid-cols-3 mx-10 lg:gap-8">
            <div class="flex justify-center mb-8">
                <div class="min-h-96 rounded card-blue text-secondary hover:text-primary py-4 ">
                        <img class="mx-auto h-28" src="/accesible.svg" alt="Sunset in the mountains">
                    <div class="min-h-44 px-6 pt-4">
                        <div class=" text-center text-4xl mb-4">Accesible</div>
                        <p class="text-black text-xl">Siempre a tu disposición, accede a tus reservas desde cualquier dispositivo con conexión a internet (ordenador, smartphone o tablet) como si estuvieras en tu propia recepción.</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="min-h-96 rounded card-blue text-secondary hover:text-primary py-4">
                    <img class="mx-auto h-28" src="/intuitivo.svg" alt="Sunset in the mountains">
                    <div class="min-h-44 px-6 pt-4">
                        <div class="text-center text-4xl mb-4">Intuitivo</div>
                        <p class="text-gray-700 text-xl">
                        Diseño sencillo y fácil de usar aprobado por usuarios como tú. Ni la edad ni el dominio informático son excusas para no darle una oportunidad.</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="min-h-96 rounded card-blue text-secondary hover:text-primary py-4">
                    <img class="mx-auto h-32 p-2" src="/completo.svg" alt="Sunset in the mountains">
                    <div class="min-h-44 px-6 pt-4">
                        <div class="text-center text-4xl mb-4">Completo</div>
                        <p class="text-gray-700 text-xl ">
                        Toda la gestión de tu establecimiento en una única aplicación. Ridid te lo pone fácil para que puedas centrarte en dar el mejor servicio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="check-in-huespedes"></div>
        <div class="m-10 text-center" >
            <p class="text-5xl text-primary ">Check-in</p>
            <p class="text-xl mt-8">Tengas un establecimiento grande o pequeño Ridid se adapta a tí.</p>
        </div>

        <div class="grid lg:grid-cols-2">
            <div class=" mx-10">                
                <p class=" text-center text-4xl mb-4 text-secondary">App móvil</p>
                <p class="text-xl mt-8">Guarda la PWA y lleva Ridid siempre contigo en tu smarthpone y/o tablet. Ideal si en tu establecimiento no tienes un ordenador en la recepción.</p>
                <div class="mt-8  flex justify-center"> 
                    <img src="/phone.webp" class="w-1/4" alt="Ejemplo calendario de reservas movil y desktop">
                </div>
            </div>
            <div class="mx-10 mt-8 lg:mt-0">                
                <p class=" text-center text-4xl mb-4 text-secondary">Escáner de escritorio</p>
                <p class="text-xl mt-8">Sin instalación, conecta el escáner de documentos y la tableta digitalizadora al ordenador de recepción y estarás listo para añadir nuevos huéspedes. Escanea DNI, NIE, pasaportes y documentos de identidad extranjeros siempre que dispongan de código MRZ. Si es un DNI español leerá también la dirección del huésped.</p>
                <div class="mt-8 flex justify-center"> 
                    <img src="/scaner.png" class="w-1/2" alt="Ejemplo calendario de reservas movil y desktop">
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="mx-10 mt-8 lg:mt-0 lg:w-1/2">                
                <p class=" text-center text-4xl mb-4 text-secondary">Auto check-in</p>
                <p class="text-xl mt-8">Envía un formulario de auto check-in a los huéspedes por correo electrónico o SMS para que ellos <span class="text-primary"> mismos introduzcan sus datos personales</span>. Perfecto para apartamentos turísticos, establecimientos sin una recepción o para reducir los contactos interpersonales.</p>
                <div class="mt-8 flex justify-center"> 
                    <img src="/auto_check.svg" class="rotate-90 w-1/3" alt="Ejemplo calendario de reservas movil y desktop">
                </div>
            </div>
        </div>
        <div id="gestor-reservas"></div>

        <div class="m-10 lg:mt-20  text-center">
            <p class="text-5xl text-primary ">Mucho más que un gestor de reservas</p>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="m-10 lg:mt-32">
                <p class="text-4xl mb-4 text-secondary">Planning de reservas</p>
                <p class="text-xl mt-8">Un planning de reservas, como el de toda la vida, pero más interactivo y eficiente. Si existe una reserva previa, el cliente es incorporado al hacer el check-in, si no había la reserva se crea automáticamente.</p>
            </div>
            <div class="flex justify-center"> 
                <img src="/macbook.webp" class="w-2/3" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
        </div>
        <div class="grid lg:grid-cols-2">  
            <div class="hidden lg:flex justify-center">
                <img src="/partes.svg" class="w-1/2" alt="Ejemplo calendario de reservas movil y desktop">
            </div>                    
            <div class="m-10 lg:mt-32">
                <p class=" text-4xl mb-4 text-secondary">Envío a SES Hospedajes</p>
                <p class="text-xl mt-8">Los partes son generados en el momento del check-in (ya sea presencial o auto check-in) y enviados a las autoridades asignadas. Los partes son almacenados en el sistema para generar el libro de viajeros en el momento que lo necesites.</p>
            </div>
            <div class="flex justify-center lg:hidden">                 
                <img src="/partes.svg" class="w-1/2 lg:w-1/6" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
      </div>


      <div class="grid lg:grid-cols-2">
            <div class="m-10 lg:mt-32">
                <p class=" text-4xl mb-4 text-secondary">Facturación y pagos</p>
                <p class="text-xl mt-8">Ridid genera automáticamente las facturas de las reservas y permite generar facturas y series de facturación personalizadas para adaptarse a tus necesidades.</p>
                <p class="text-xl mt-2">Lleva al día tus facturas y los pagos, solicita depósitos para las reservas grandes, cobra la tasa turística en temporada alta, asigna cargos extras a las reservas….</p>
                <p class="text-xl mt-2">Además para simplificar la gestión de tu negocio Ridid ofrece la integración con el software de Anfix que permite gestionar tu contabilidad de una manera sencilla y ordenada.</p>
            </div>
            <div class="flex justify-center"> 
                <img src="/invoice.svg" class="w-1/2 lg:w-1/3" alt="Faturación y controls de pagos con Ridid">
            </div>
        </div>
      
        <div class="grid lg:grid-cols-2">
            <div class="hidden justify-center lg:flex"> 
                <img src="/chart.svg" class="w-1/2 mt-8" alt="Encuestas de ocupación diagrama circular">
            </div>
            <div class=" mx-10 mt-10 lg:mt-32">
                <p class=" text-4xl mb-4 text-secondary">Encuestas y documentación</p>
                <p class="text-xl mt-8">Despreocúpate de la encuesta de Ocupación del INE (Instituto Nacional de Estadística). Con los datos recogidos Ridid genera automáticamente la encuesta para hoteles, apartamentos turísticos y alojamientos de turismo rural, tú solo tendrás que enviarla.</p>
                <p class="text-xl mt-2">Además, también genera otros documentos autonómicos como la Encuesta de Ocupación Castilla y León o el Documento de Admisión de Andalucía.</p>
            </div>
            <div class="lg:hidden justify-center flex"> 
                <img src="/chart.svg" class="w-1/2 mt-8" alt="Encuestas de ocupación diagrama circular">
            </div>
        </div>
        <div class="flex justify-center mt-8 mx-10">
            <p class="text-3xl text-secondary ">Depósitos, tasa turística, limpieza y mucho más...</p> 
        </div>
        <div id="motor-reservas"></div>

        <div class="m-10 lg:mt-20  text-center">
            <p class="text-5xl text-primary ">Incrementa la venta directa</p>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="m-10 lg:mt-32">
                <p class="text-4xl mb-4 text-secondary">Motor de reservas</p>
                <p class="text-xl mt-8">Ofrece la oportunidad a tus huéspedes de reservar directamente desde tu página web y ahorrarte las comisiones de las agencias. El motor de reservas es 100% integrable en cualquier tipo de web y está incluido dentro del precio de Ridid (sin comisiones ni pagos extras).</p>
                <p class="text-xl mt-2">Las reservas realizadas a través del motor de reservas se añadirán automáticamente en tu calendario de Ridid. Y si tienes el channel manager activado, la disponibilidad de tus habitaciones se ajustará en todas las agencias conectadas evitando posibles overbookings.</p>
            </div>

            <div class="flex justify-center"> 
                <img src="/motor.svg" class="w-1/2" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="hidden lg:flex justify-center"> 
                <img src="/pasarela.svg" class="w-2/3" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
            <div class=" m-10 lg:mt-32">
                <p class=" text-4xl mb-4 text-secondary">Pasarela de pago</p>
                <p class="text-xl mt-8">Ofrece a los huéspedes la oportunidad de pagar sus reservas por adelantado, evita perder dinero con las cancelaciones de última hora, coge depósitos para tu villa o casa de alquiler completo…</p>
                <p class="text-xl mt-2">Ridid ofrece la integración con Stripe. Una de las pasarelas de pago más conocidas y respetadas a nivel global. Para garantizar que los pagos son seguros, para tu tranquilidad y la de tus huéspedes.</p>
            </div>
            <div class="lg:hidden flex justify-center"> 
                <img src="/pasarela.svg" class="w-2/3" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
        </div>
        <div class="mt-10  text-center">
            <p class="text-4xl lg:text-5xl text-primary ">Descubre todo lo que ofrece</p>
            <p class="text-xl mt-8">Sin compromiso.</p>
        </div>

        <div class="grid lg:grid-cols-2">
            <div>
                <div class="m-10">
                    <!--<div class="flex justify-center"> 
                        <img src="/.sdf" class="w-9/12" alt="Ejemplo calendario de reservas movil y desktop">
                    </div>-->
                    <p class=" text-4xl mb-4 text-secondary text-center">Regístrate gratis</p>
                    <p class="text-xl mt-8">Crea tu cuenta sin compromiso y empieza a disfrutar tu prueba gratis. Tendrás acceso a todas las funciones que Ridid ofrece (gestión de reservas, envío de partes de viajero, encuestas del INE, facturación, gestión de limpieza, auto check-in…).</p>
                    <div class="mt-8 text-center">
                        <a class="btn btn-grad" href="https://app.ridid.me/register" target="_blank" title="accede a la página de registro de Ridid para iniciar la prueba gratis">Probarlo gratis</a>
                        <p class="mt-4 text-xl text-secondary">¡Disfruta de 2 meses gratis de prueba!</p>
                    </div>
                </div>            
            </div>
            <div>
                <!--<div class="flex justify-center"> 
                    <img src="/.sdf" class="w-1/2" alt="Ejemplo calendario de reservas movil y desktop">
                </div>-->
                <div class="m-10">
                    <p class=" text-4xl mb-4 text-secondary text-center">Contáctanos</p>
                    <p class="text-xl mt-8">Permítenos guiarte a través de Ridid, enseñarte las funcionalidades básicas y resolver todas tus dudas.  Nos adaptamos a tus horarios y al tiempo que tengas disponible.</p>
                    <div class="mt-8 text-center">
                        <button class="btn btn-grad" href="#contacto">Contactar</button>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="mx-10 text-center">
            <p class="text-xl">Encuentra tutoriales en el canal de youtube de <a href="https://www.youtube.com/@ridid-gestionhostelera8053" class="text-primary">Ridid</a>.</p>
        </div>
        <div class="lg:flex justify-center mt-4">
            <div class="flex justify-center">
                <iframe class="m-2"  src="https://www.youtube.com/embed/HwDvWUxq70w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="flex justify-center">
                <iframe class="m-2"  src="https://www.youtube.com/embed/2IUmFQehCFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="flex justify-center">
                <iframe class="m-2"  src="https://www.youtube.com/embed/W5ry3hzH0E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div id="precios"></div>

        <div class="m-10 text-center">
            <h1 class="text-5xl text-primary ">Calcula tú precio</h1>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="m-10">
                <h2 class="text-4xl mb-4 text-secondary">Aplicación de Ridid</h2>
                <p class="text-xl mt-8">Para calcular el precio de Ridid introduce el número de unidades de alojamiento de tu establecimiento. Sin sorpresas ni cargos extra.</p>
                <p class="text-xl my-2 font-bold">El precio incluye:</p>
                <li class="list-disc ml-4 text-xl">Envío de partes de viajeros</li>
                <li class="list-disc ml-4 text-xl">Calendario y gestor de reservas (PMS)</li>
                <li class="list-disc ml-4 text-xl">Auto check-in para los huéspedes</li>                            
                <li class="list-disc ml-4 text-xl">Motor de reservas sin comisiones</li>
                <li class="list-disc ml-4 text-xl">Encuestas de ocupación hotelera y de apartamentos turísticos </li>
                <li class="list-disc ml-4 text-xl">Facturación de reservas</li>
                <li class="list-disc ml-4 text-xl">Facturación personalizada para otras actividades</li>
                <li class="list-disc ml-4 text-xl">Depósitos, tasa turística, limpieza y mucho más.</li>
                <div class="mt-10">
                    <p class="text-xl">Si tienes un camping, albergue, casa de alquiler completo, villa y/u otros establecimientos con una <strong> disposición de plazas especial</strong> ponte en contacto con nosotros y te haremos un presupuesto personalizado.</p>
                </div>
            </div>
            <div class="text-center m-10 ">
                
                <div class="flex justify-center"> 
                    <div class="card card-blue w-full lg:w-2/3 h-fit p-6" >
                        <div class="text-center">                            
                                <p class="text-3xl mb-4 ">Suscripción anual</p>
                                <p class="text-primary text-xl mb-4" for="rooms-number">Introduce el nº de unidades de alojamiento:</p>
                               <input class="form-input text-center lg:w-1/3  mb-4"  id="rooms-number" v-model="rooms" @keyup="calculatePrice"  onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57">
                                <p class="text-primary text-4xl my-2"> {{price.toFixed(2)}} <span >€/año</span> </p>
                                <p class="text-gray-500"> {{vat_price.toFixed(2)}} €/año con IVA</p>
                                <div class="mt-6">
                                    <a class="btn btn-grad p-3"  href="https://app.ridid.me/register" target="_blank" title="accede a la página de registro de Ridid para iniciar la prueba gratis">¡Pruébalo gratis!</a>
                                </div>
                                <p class="text-xl mt-4 text-secondary"> Disfruta de 2 meses gratis sin compromiso.</p>

                        </div>
                    </div>
                </div>
            </div>  

        </div>
        <div id="channel-manager"></div>


        <div class="mb-10 text-center">
            <h1 class="text-5xl text-primary ">Conecta tus agencias</h1>
            <p class="text-xl mt-8">Sincroniza tu calendario</p>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="m-10">
                <p class=" text-4xl mb-4 text-secondary">Channel Manager</p>
                <p class="text-xl mt-8 mb-4">El channel manager permite mantener tu <strong>calendario sincronizado con las reservas contratadas a través de agencias online (OTAs)</strong>. Ridid ofrece la integración con el channel manager Wubook que cuenta con <strong> más de 50 agencias para conectar</strong>. Las reservas a través de agencias aparecerán automáticamente en el calendario junto con las reservas creadas localmente o las hechas a través del motor de reservas.</p>
                <div class="text-center">
                    <a class="btn btn-grad align-middle" target="_blank" href="https://es.wubook.net/s-pgs/partners-ota/Canales-con-conexin-XML-4.html" title="agencias disponibles para conectar con Ridid a través del channel manager">Agencias disponibles</a>
                </div>   
                <p class="text-xl mt-4">Las reservas a través de agencias aparecerán automáticamente en el calendario junto con las reservas creadas localmente o las hechas a través del motor de reservas. Esto permite <strong>evitar overbookings y simplifica la gestión</strong> de las reservas ya que todo está en una única aplicación.</p>
                <p class="text-xl mt-2">Configura fácilmente la <strong>disponibilidad, precios, estancias mínimas y más</strong>, en días sueltos o por rangos de fechas, todo desde tu perfil de Ridid. Una vez guardados los cambios se volcarán en las agencias conectadas, así de simple.</p>

                 
            </div>
            <div class="flex justify-center"> 
                <img src="/channel_manager.svg" class="w-2/3" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="hidden lg:flex justify-center m-10"> 
                <div class="card card-blue w-2/3 h-fit p-6" >
                    <div class="text-center">                            
                        <p class="text-3xl mb-4 ">Suscripción mensual</p>
                        <p class="text-primary text-xl mb-4" for="otas-number">Introduce el nº de agencias:</p>
                        <input class="form-input text-center lg:w-1/3  mb-4"  id="otas-number" v-model="otas" @keyup="calculatePriceChannel"  onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57">
                       <p class="text-primary text-4xl my-2"> {{price_channel.toFixed(2)}} <span >€/mes</span> </p>
                        <p class="text-gray-500"> {{ vat_price_channel.toFixed(2) }} €/mes con IVA</p>
                        <div class="mt-6">
                            <a class="btn btn-grad p-3"  href="https://app.ridid.me/register" title="accede a la página de registro de Ridid para iniciar la prueba gratis">¡Pruébalo gratis!</a>
                        </div>
                        <p class="text-xl mt-4 text-secondary"> Disfruta de 15 días gratis sin compromiso.</p>
                    </div>
                </div>
            </div>
           <div class=" m-10 lg:mt-20">
                <h2 class="text-4xl mb-4 text-secondary">Calcula tú precio</h2>
                <p class="text-xl mt-8">El channel manager es un servicio ofrecido por Wubook, por ello el precio se calcula aparte en función del número de agencias online (OTAs) sincronizadas con tu calendario. No pagas más por la activación, ni comisiones ni sorpresas.</p>
            </div>    
            <div class="lg:hidden flex justify-center m-10"> 
                <div class="card card-blue w-full h-fit p-6" >
                    <div class="text-center">                            
                        <p class="text-3xl mb-4 ">Suscripción mensual</p>
                        <p class="text-primary text-xl mb-4" for="otas-number">Introduce el nº de agencias:</p>
                        <input class="form-input text-center w-1/3  mb-4"  id="otas-number" v-model="otas" @keyup="calculatePriceChannel"  onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57">
                       <p class="text-primary text-4xl my-2"> {{price_channel.toFixed(2)}} <span >€/mes</span> </p>
                        <p class="text-gray-500"> {{ vat_price_channel.toFixed(2) }} €/mes con IVA</p>
                        <div class="mt-6">
                            <a class="btn btn-grad p-3" href="https://app.ridid.me/register" title="accede a la página de registro de Ridid para iniciar la prueba gratis">¡Pruébalo gratis!</a>
                        </div>
                        <p class="text-xl mt-4 text-secondary">Disfruta de 15 días gratis sin compromiso.</p>
                    </div>
                </div>
            </div>                         
        </div>

        <div id="diseño-web"></div>

        <div class="m-10 text-center">
            <h1 class="text-5xl text-primary ">Asesoramiento, gestión y diseño web</h1>
            <p class="text-xl mt-8">Sincroniza tu calendario</p>
        </div>
        <div class="grid lg:grid-cols-2">
            <div class="mx-10">
                <p class=" text-4xl mb-4 text-secondary">Un servicio integral a tu disposición</p>
                <p class="text-xl mt-8">El channel manager permite mantener tu <strong>calendario sincronizado con las reservas contratadas a través de agencias online (OTAs)</strong>. Ridid ofrece la integración con el channel manager Wubook que cuenta con <strong> más de 50 agencias para conectar</strong>. Las reservas a través de agencias aparecerán automáticamente en el calendario junto con las reservas creadas localmente o las hechas a través del motor de reservas.</p>
                <li class=" text-xl mt-8 list-disc">Alojamiento web, correo electrónico, gestión de dominios, certificado SSL...)</li> 
                <li class=" text-xl mt-2 list-disc">Diseño de páginas web, sin plantillas, consigue un diseño único que destaque entre la competencia.</li> 
                <li class=" text-xl mt-2 list-disc">Integración nuestro motor de reservas en tú página web.</li> 
                <li class=" text-xl mt-2 list-disc">Soluciones en equipamiento informático</li> 
                <li class="text-xl mt-2 list-disc">Desarrollo de software a medida</li> 
                <p class="text-xl mt-2">y mucho más...</p>
            </div>
            <div class="flex justify-center mb-8"> 
                <img src="/design.jpg" class="rounded-full w-2/3" alt="Ejemplo calendario de reservas movil y desktop">
            </div>
        </div>
        <div id="principios"></div>

        <div class="m-10 text-center">
            <h1 class="text-5xl text-primary ">Nuestros principios</h1>
            <p class="text-xl mt-6">Nos gusta dejar las cosas claras, aunque a nadie le importe.</p>
        </div>

        <div class="grid lg:grid-cols-3 mx-10 lg:gap-8 justify-center">
            <div class="flex justify-center mb-8">
                <div class="rounded card-blue text-secondary hover:text-primary py-4 ">
                        <img class="mx-auto h-20" src="/permanencia.svg" alt="Sunset in the mountains">
                    <div class="px-6 pt-4">
                        <h2 class="text-center text-4xl mb-4">Sin permanencia</h2>
                        <p class="text-black text-xl">Si no estás satisfecho con nuestro servicio puedes darte de baja de forma sencilla en cualquier momento.</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="rounded card-blue text-secondary hover:text-primary py-4">
                    <img class="mx-auto h-20" src="/letra.svg" alt="Sunset in the mountains">
                    <div class="px-6 pt-4">
                        <h2 class="text-center text-4xl mb-4">Sin letra pequeña</h2>
                        <p class="text-black text-xl">Ni subidas de precio sin aviso, ni cargos extras. El precio contratado se respeta siempre que no dependa de terceros.</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <div class="rounded card-blue text-secondary hover:text-primary py-4">
                    <img class="mx-auto h-20" src="/humanos.svg" alt="Sunset in the mountains">
                    <div class=" px-6 pt-4">
                        <h2 class="text-center text-4xl mb-4">Somos humanos</h2>
                        <p class="text-black text-xl">Y por ello podemos equivocarnos, pero tan pronto nos notifiques tu incidencia nos pondremos a trabajar para solucionarla.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:flex justify-center mx-10">
            <div class="mb-8 w-full lg:w-1/3 lg:mr-8">
                <div class="min-h-96 rounded card-blue text-secondary hover:text-primary py-4">
                    <img class="mx-auto h-20" src="/igualdad.svg" alt="Sunset in the mountains">
                    <div class="min-h-44 px-6 pt-4">
                        <h2 class="text-center text-4xl mb-4">Igualdad</h2>
                        <p class="text-black text-xl">Da igual si tienes un establecimiento grande o pequeño, siempre tendrás el mejor servicio.</p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/3 mb-8 ">
                <div class="min-h-96 rounded card-blue text-secondary hover:text-primary py-4">
                    <img class="mx-auto h-20" src="/flexibilidad.svg" alt="Sunset in the mountains">
                    <div class="min-h-44 px-6 pt-4">
                        <h2 class="text-center text-4xl mb-4">Flexibilidad</h2>
                        <p class="text-black text-xl">Si tienes una sugerencia o propuesta que crees que podría mejorar el servicio, háznosla llegar.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="contacto"></div>

        <div class="m-10  text-center">
            <h1 class="text-5xl text-primary ">Contacto</h1>
            <p class="text-xl mt-6">¿Tienes alguna pregunta, sugerencia o quieres una visita guiada? Contáctanos.</p>
        </div>
        <div class="text-left m-10">       
            <ContactForm/>
        </div>
        <Footer/>
    </div>

  </template>
  <script setup lang="ts">

    const rooms=ref(6) 
    const price=ref(120)
    const vat_price=ref(145.20)
    const otas=ref(1)
    const price_channel=ref(8)
    const vat_price_channel=ref(9.68)

    async function calculatePrice() {
        if (rooms.value === undefined || (rooms.value === 0)) {
          price.value = 0;
          //this.monthly_price = '';

        } else if (rooms.value<=6){
          price.value = 120;
          //this.monthly_price=14;
        }
        else if (rooms.value>6 && rooms.value<=10){
          price.value=rooms.value*25
          //price.value=rooms.value*36
          //this.monthly_price=(price.value*1.2/12).toFixed(2);
        }
        else if (rooms.value>10 && rooms.value<=20){
            price.value= (250+(rooms.value-10)*23)
            //price.value= (360+(rooms.value-10)*26)
         // this.monthly_price=(price.value*1.2/12).toFixed(2);
        }
        else if (rooms.value>20 && rooms.value<=30){
            price.value= (480+(rooms.value-20)*21)
            //price.value= (620+(rooms.value-20)*24)
          //this.monthly_price=(price.value*1.2/12).toFixed(2);
        }
        else if (rooms.value>30 && rooms.value<=40){
          price.value=(690+(rooms.value-30)*18);
          //price.value=(860+(rooms.value-30)*16);
          //this.monthly_price=(price.value*1.2/12).toFixed(2);
        }
        else if (rooms.value>40 && rooms.value<=50){
          price.value=(870+(rooms.value-40)*15);
          //this.monthly_price=(price.value*1.2/12).toFixed(2);
        }
        else{
            price.value= (1020+(rooms.value-50)*12)
           //this.monthly_price=(price.value*1.2/12).toFixed(2);
        }        
        vat_price.value = (price.value * 1.21);
        //this.vat_monthly_price = (this.monthly_price * 1.21).toFixed(2)
      }

      async function calculatePriceChannel() {
        if (otas.value === undefined || (otas.value === 0)) {
          price_channel.value = 0;
          //this.monthly_price = '';

        } else {
            price_channel.value=otas.value*8;
            vat_price_channel.value= price_channel.value*1.21;
          //this.monthly_price=14;
        }
      }
  
</script>


