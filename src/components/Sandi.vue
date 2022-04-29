<template>
    <SDWebglRenderer :width="800" :height="400">
        <SDScene>
            <SDPerspectiveCamera :positionZ="20" :positionY="6" />
            <SDFBXLoader url="/fbx/Rumba Dancing.fbx">
                <SDMeshBasicMaterial meshName="body1">
                    <SDTextureLoader url="img/zhangfei.jpg" type="map" />
                </SDMeshBasicMaterial>
                <SDMeshBasicMaterial meshName="face">
                    <SDTextureLoader url="img/face.png" type="map" />
                </SDMeshBasicMaterial>
                <SDAnimationMixer>
                    <SDAnimationAction />
                </SDAnimationMixer>
            </SDFBXLoader>
        </SDScene>
    </SDWebglRenderer>
</template>