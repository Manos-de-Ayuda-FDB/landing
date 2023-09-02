<script>
    /**
     * @type {any}
     */
    export let imgSrc;
    /**
     * @type {string}
     */
    export let titulo;
    /**
     * @type {string}
     */
    export let descripcion;
</script>

<div class="card min-w-[200px] md:w-96 bg-base-100 shadow-xl">
    <figure>
        <img src="{imgSrc}" alt=""/>
    </figure>
    <div class="card-body p-4 lg:p-8 bg-primary bg-opacity-20">
        <h2 class="card-title">{titulo}</h2>
        <p>{descripcion}</p>
<!--        <div class="card-actions justify-end">-->
<!--            <button class="btn btn-primary">Buy Now</button>-->
<!--        </div>-->
    </div>
</div>