<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <div>
            <img :src="attrs" alt="Vue logo" />
            <a :href="link" target="_blank">Visit Website</a>
        </div>
    </template>

    <script setup>
        import { ref } from 'vue';

        const imageSrc = ref({
            src: 'https://vuejs.org/images/logo.png',
            width: '100',
            height: '100'
        });
        const link = ref('https://vuejs.org');
    </scriрt>
    
  `

const exampleCodeJs = `
    <img id="logo" alt="Vue logo" />
    <a id="link" target="_blank">Visit Website</a>

    <script>
        const imageSrc = 'https://vuejs.org/images/logo.png';
        const linkUrl = 'https://vuejs.org';

        const logo = document.getElementById('logo');
        const link = document.getElementById('link');

        logo.setAttribute('src', imageSrc);
        link.setAttribute('href', linkUrl);
     </scriрt>
  `

import { ref } from 'vue';


const attrs = ref({
    src: 'https://vuejs.org/images/logo.png',
    width: '100',
    height: '100'
});
const link = ref('https://vuejs.org');


</script>


<template>
    <main>
        <h1>V-BIND</h1>
        <p>Директива v-bind в Vue используется для привязки значений к атрибутам HTML-элементов и свойствам компонентов.
            С помощью этой директивы можно динамически задавать атрибуты (например, href, src, class, style) и свойства
            (например, пользовательские свойства компонентов).</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Любые типы данных.</li>
        </ul>
        <h2>Сокращенная запись</h2>
        <ul>
            <li>Да, v-bind можно сократить до двоеточия :.</li>
        </ul>
        <h2>Модификаторы</h2>
        <ul>
            <li>.prop: Привязывает свойство элемента, а не его атрибут. Полезно для свойств, которые не представлены в
                HTML как атрибуты, например, checked у чекбокса или value у селекта.</li>
            <li>.camel: Привязывает данные к атрибутам с использованием "camelCase" нотации. Этот модификатор
                автоматически преобразует имя свойства из "kebab-case" в "camelCase"</li>
            <li>.sync модификатор обеспечивает двустороннюю привязку данных между родительским и дочерним компонентом.
            </li>
        </ul>

        <h2>Пример на Vue 3 (Composition API)</h2>
        <img v-bind="attrs" alt="Vue logo" />
        <a :href="link" target="_blank">Visit Website</a>
        <CodeBlock :code="exampleCode" language="javascript" />
        <h2>Пример с модификаторами</h2>
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
