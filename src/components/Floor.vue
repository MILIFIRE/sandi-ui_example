<template>
    <SDGroup>
        <SDMesh :rotationX="-Math.PI / 2" v-for="(_, index) in Array(100)" :positionX="Math.floor(index / 10)"
            :positionZ="index % 10">
            <SDPlaneGeometry />
            <SDMeshBasicMaterial>
                <SDTextureLoader url="/img/crate.gif" type="map" />
            </SDMeshBasicMaterial>
        </SDMesh>
    </SDGroup>
</template>