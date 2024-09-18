<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <div>
            <header>
              <slot name="header"></slot> <!-- Именованный слот -->
            </header>
            <main>
             <slot></slot> <!-- Простой слот -->
            </main>
            <footer>
                <slot name="footer"></slot> <!-- Именованный слот -->
            </footer>
        </div>
    </template>
  `
const exampleCodeBox = `
    <template>
        <ChildComponent>
            <template v-slot:header>
                <h1>This is the header</h1>
            </template>
            
            <template v-slot:default>
                <p>This is the main content!</p>
            </template>
            
            <template v-slot:footer>
                <p>This is the footer</p>
            </template>
        </ChildComponent>
    </template>

    <script setup>
        import ChildComponent from './ChildComponent.vue';
    </scriрt>
`

const exampleCode1 = `
    <template>
        <div>
            <slot name="content" :message="message"></slot> <!-- Слот с данными -->
        </div>
    </template>

    <script setup>
        import { ref } from 'vue';

        const message = ref('Hello from ChildComponent!');
    </scriрt>
  `
const exampleCode2 = `
    <template>
        <ChildComponent>
            <template v-slot:content="{ message }">
              <p>{{ message }}</p>
            </template>
        </ChildComponent>
    </tempalte>

    <script setup>
        import ChildComponent from './ChildComponent.vue';
    </scriрt>
`


</script>



<template>
    <main>
        <h1>V-SLOT</h1>
        <p>Директива v-slot в Vue.js используется для создания и управления слотами в компонентах. Слоты позволяют
            передавать содержимое из родительского компонента в дочерний компонент, делая компоненты более гибкими и
            переиспользуемыми. С v-slot вы можете именовать слоты, управлять их содержимым и передавать данные между
            компонентами.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Да</li>
        </ul>
        <h2>Сокращенная запись</h2>
        <ul>
            <li>Нет.</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>
        <h3>Дочерний компонент (ChildComponent.vue):</h3>
        <CodeBlock :code="exampleCode" language="javascript" />
        <h3>Родительский компонент (ParentComponent.vue):</h3>
        <CodeBlock :code="exampleCodeBox" language="javascript" />
        <h3>Дочерний компонент (ChildComponent.vue):</h3>
        <CodeBlock :code="exampleCode1" language="javascript" />
        <h3>Родительский компонент (ParentComponent.vue):</h3>
        <CodeBlock :code="exampleCode2" language="javascript" />
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
