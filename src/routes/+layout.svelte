<script>
    import "../app.css";
    import isotipo from "$lib/assets/logos/isotipo_oficial.png";
    import isotipoFdb from '$lib/assets/logos/isotipo_fdb_bg_black.png'
</script>

<!-- Navbar -->
<div class="navbar bg-white px-4">
    <div class="flex-1">
        <a href="/"
           class="btn btn-ghost text-xl flex gap-2 py-1 px-2">
            <img alt="Isotipo"
                 src="{isotipo}"
                 class="h-full">
            <span class="font-normal font-alice normal-case hidden md:block">
                Manos de Ayuda FDB A.C.
            </span>
        </a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li>
                 <a href="/mision">Misión</a>
            </li>
            <li>
                 <a href="/vision">Visión</a>
            </li>
        </ul>
    </div>
</div>

<!-- Contenido -->
<div class="flex flex-col gap-10 pb-10 m-auto">
    <slot/>
</div>

<!-- Footer -->
<footer class="footer px-10 py-4 border-t bg-primary bg-opacity-20 text-accent-content border-neutral-300">
    <div class="items-center grid-flow-col">
        <img src="{isotipoFdb}" width="30" height="30" alt="isotipoFDB">
        <p>Fuente de Bendiciones A.R.</p>
    </div>
    <div class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/fundacionmanosdeayudafdb/">
                <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
            <i class="fa-brands fa-facebook fa-2x"></i>
        </div>
    </div>
</footer>
