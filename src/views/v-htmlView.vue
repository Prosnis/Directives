<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <!-- v-html вставляет HTML-содержимое из переменной htmlContent -->
        <div v-html="htmlContent"></div>
    </template>

    <script setup>
        import { ref } from 'vue';

        // Создаем реактивную переменную htmlContent
        const htmlContent = ref('<h1>Привет, Vue 3 с v-html!</h1><p>Это пример динамического HTML.</p>');
    </scriрt>
    
  `


const exampleCodeJs = `
    document.addEventListener('DOMContentLoaded', () => {
        const htmlContent = '<h1>Hello, Vanilla JS with innerHTML!</h1><p>This is a dynamic HTML block.</p>';
        // Ищем элемент с id="html" и вставляем в него HTML-контент
        document.getElementById('html').innerHTML = htmlContent;
    });
  `


</script>


<template>
    <main>
        <h1>V-HTML</h1>
        <p>Директива v-html используется для вставки HTML-кода в элемент. Она динамически обновляет содержимое элемента,
            интерпретируя строку как HTML. Это позволяет вставлять HTML-разметку прямо в элемент, в отличие от v-text,
            который выводит только текст.
            <br>Важно: Использование v-html потенциально может подвергнуть ваш сайт XSS-атакам, если вставляемый HTML-код получен от ненадежных источников.
        </p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Работает с данными типа string, которые содержат HTML-код.</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>
        <CodeBlock :code="exampleCode" language="javascript" />
        <h2>Пример на нативном <span>JavaScript</span></h2>
        <CodeBlock :code="exampleCodeJs" language="javascript" />
    </main>
</template>


<style>
h1,
h2 {
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
