<script setup>
  import CodeBlock from '../components/CodeBlock.vue';
  
  const exampleCode = `
    <template>
        <div v-text="message"></div>
    </template>

    <script setup>
        import { ref } from 'vue';
        const message = ref('Hello, Vue 3 with Composition API!');
    </scriрt>
    
  `

  const exampleCodeJs = `
    <html>
        <div id="text"></div>
    </html>


    document.addEventListener('DOMContentLoaded', () => {
        const message = 'Hello, Vanilla JavaScript!';
        document.getElementById('text').textContent = message;
    });
  `

    import { ref } from 'vue';
    const message = ref('Hello, Vue 3 with Composition API');
  


</script>


<template>
    <main>
        <h1>V-TEXT</h1>
        <p>Директива v-text предназначена для того, чтобы задавать текстовое содержимое HTML-элемента. Она заменяет
            текущее
            содержимое элемента на строку, привязанную к указанному выражению (переменной).</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Работает с строками (тип String).</li>
            <li>Если передается значение другого типа, оно будет автоматически преобразовано в строку.</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>
        <div v-text="message"></div>
        <CodeBlock :code="exampleCode" language="javascript" />
        <h2>Пример на нативном <span>JavaScript</span></h2>
        <CodeBlock :code="exampleCodeJs" language="javascript" />
    </main>
</template>


<style>
h1, h2 {
    color: #42d392
}

main {
    color: white;
    font-size: 20px;
}
span {
    color: yellow
}

</style>
