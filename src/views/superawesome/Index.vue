<template>
    <h1>Please wait, page is loading...<h1>
</template>

<script>
export default {
    mounted() {
        setTimeout(()=>location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ",2000)
    }
}
</script>
