<script setup >
const getXZ = () => Math.floor(Math.random() * 10)
const getY = () => Math.floor(Math.random() * 100)
</script>
<template>
    <SDGroup>
        <SDMesh v-for=" (_, index) in new Array(500).fill(1) " :positionX="getXZ()" :positionY="getY()"
            :positionZ="getXZ()">
            <SDBoxGeometry />
            <SDMeshBasicMaterial>
                <SDTextureLoader url="/img/crate.gif" type="map" />
            </SDMeshBasicMaterial>
        </SDMesh>
    </SDGroup>
</template>