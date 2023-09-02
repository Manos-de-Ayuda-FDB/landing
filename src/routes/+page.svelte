<script>
    // Imagenes
    import heroImg from '$lib/assets/hero_1.png';
    import almaSaavedraFoto from '$lib/assets/organigrama/alma_saavedra.png';
    import gerardoMendozaFoto from '$lib/assets/organigrama/gerardo_mendoza.png';
    import merariMendozaFoto from '$lib/assets/organigrama/merari_mendoza.png';
    import marthaMendozaFoto from '$lib/assets/organigrama/martha_mendoza.png';
    import martinMendozaFoto from '$lib/assets/organigrama/martin_mendoza.png';

    // Componentes
    import CardPersona from "../components/CardPersona.svelte";

    let fotosOrganigrama = [

        {
            titulo: 'Martin Mendoza Martínez',
            descripcion: 'Presidente',
            src: martinMendozaFoto
        },
        {
            titulo: 'Alma Saavedra Luna',
            descripcion: 'Consejo',
            src: almaSaavedraFoto
        },
        {
            titulo: 'Gerardo Mendoza Martínez',
            descripcion: 'Coordinación operativa',
            src: gerardoMendozaFoto
        },
        {
            titulo: 'Martha Ruth Mendoza Saavedra',
            descripcion: 'Tesorero',
            src: marthaMendozaFoto
        },
        {
            titulo: 'Susana Merari Mendoza Sepúlveda',
            descripcion: 'Coordinadora de eventos para entrega de apoyos',
            src: merariMendozaFoto
        },
    ];
</script>

<!-- Hero -->
<section class="hero min-h-[75vh] bg-hero-img">
    <div class="hero-content flex-col lg:flex-row-reverse px-4">
        <img src="{heroImg}"
             alt="heroImg"
             class="max-w-full md:max-w-sm rounded-lg shadow-2xl"/>
        <div>
            <h1 class="text-6xl font-medium font-alice">
                Fundación Manos de Ayuda FDB A.C.
            </h1>
            <p class="text-4xl font-alice text-primary py-6">Dar para transformar</p>
            <button class="btn btn-primary font-sans">Quiero ayudar</button>
        </div>
    </div>
</section>

<!-- Organigrama -->
<section class="flex justify-center">
    <div class="container flex gap-4 px-4 overflow-x-auto">
        {#each fotosOrganigrama as foto}
            <CardPersona imgSrc="{foto.src}"
                         titulo="{foto.titulo}"
                         descripcion="{foto.descripcion}">
            </CardPersona>
        {/each}
    </div>
</section>