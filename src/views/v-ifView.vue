<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <!-- v-if добавляет или удаляет элемент в зависимости от значения isVisible -->
        <div v-if="isVisible">Этот элемент существует только при isVisible = true</div>
        <button @click="toggleVisibility">Переключить видимость</button>
    </template>

    <script setup>
    import { ref } from 'vue';

    // Создаем реактивную переменную isVisible
    const isVisible = ref(true);

    // Функция для переключения состояния видимости
    const toggleVisibility = () => { isVisible.value = !isVisible.value;};
    </scriрt>
    
  `

const exampleCodeJs = `
    document.addEventListener('DOMContentLoaded', () => {
        let isVisible = true;
        
        const container = document.getElementById('container');
        const button = document.getElementById('toggle');

        // Функция для добавления элемента
        const addElement = () => {
            const div = document.createElement('div');
            div.id = 'dynamic-element';
            div.textContent = 'Этот элемент создан и существует в DOM';
            container.appendChild(div);
        };

        // Функция для удаления элемента
        const removeElement = () => {
            const element = document.getElementById('dynamic-element');
            if (element) {
            container.removeChild(element);
            }
        };

        // Изначально создаем элемент
        addElement();

        // Обработчик переключения видимости
        button.addEventListener('click', () => {
            isVisible = !isVisible;
            if (isVisible) {
            addElement();
            } else {
            removeElement();
            }
  });
});
  `

import { ref } from 'vue';

// Создаем реактивную переменную isVisible
const isVisible = ref(true);

// Функция для переключения состояния видимости
const toggleVisibility = () => { isVisible.value = !isVisible.value;};



</script>


<template>
    <main>
        <h1>V-IF</h1>
        <p>v-if используется для условного рендеринга элементов. Когда условие, переданное в v-if, является истинным
            (true), элемент будет создан и добавлен в DOM. Если условие ложно (false), элемент будет удален из DOM. Это
            отличается от директивы v-show, которая просто скрывает элемент через изменение CSS-свойства display.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Работает с любыми выражениями, которые могут быть преобразованы в булевы значения (true или false).</li>
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
