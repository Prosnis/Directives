<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <!-- Элемент будет отображаться или скрываться в зависимости от значения isVisible -->
        <button @click="toggleVisibility">Переключить видимость</button>
        <div v-show="isVisible">Этот текст отображается при isVisible = true</div>
    </template>

    <script setup>
        import { ref } from 'vue';

        // Создаем реактивную переменную isVisible
        const isVisible = ref(true);

        // Метод для переключения видимости
        const toggleVisibility = () => {isVisible.value = !isVisible.value}
    </scriрt>
    
  `

const exampleCodeJs = `
    <html>
        <div id="element">Этот элемент виден</div>
        <button id="toggle">Переключить видимость</button>
    </html>


    document.addEventListener('DOMContentLoaded', () => {
        let isVisible = true;
  
        const element = document.getElementById('element');
        const button = document.getElementById('toggle');

        // Функция для переключения видимости
        const toggleVisibility = () => {
        isVisible = !isVisible;
        element.style.display = isVisible ? 'block' : 'none';
    };

    // Изначально элемент виден
    button.addEventListener('click', toggleVisibility);
    });
  `

  import { ref } from 'vue';

// Создаем реактивную переменную isVisible
const isVisible = ref(true);
// Метод для переключения видимости
const toggleVisibility = () => {isVisible.value = !isVisible.value}



</script>


<template>
    <main>
        <h1>V-SHOW</h1>
        <p>Директива v-show используется для управления видимостью элементов на странице. Она
            работает, изменяя CSS-свойство display элемента. Если условие, указанное в v-show, оценивается как false,
            элемент будет скрыт, но останется в DOM. В отличие от v-if, который удаляет элемент из DOM, v-show просто
            скрывает его визуально.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Работает с булевыми значениями (true / false) или выражениями, которые могут быть приведены к булевому типу.</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>
        <!-- Элемент будет отображаться или скрываться в зависимости от значения isVisible -->
        <button @click="toggleVisibility">Переключить видимость</button>
        <div v-show="isVisible">Этот текст отображается при isVisible = true</div>
        <div v-text="message"></div>
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
