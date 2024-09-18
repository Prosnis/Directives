<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <ul>
            <li v-for="(item, index) in items" :key="index">
            {{ index }}: {{ item }}
            </li>
        </ul>
    </template>

    <script setup>
        import { ref } from 'vue';
        // Определяем массив данных
        const items = ref(['Яблоко', 'Банан', 'Виноград']);
    </scriрt>
    
  `

  

const exampleCodeJs = `
    <html>
        <ul id="itemList"></ul>
    </html>
    
    <script>
        сonst items = ['Яблоко', 'Банан', 'Виноград'];
        const itemList = document.getElementById('itemList');

        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = '$ {index}: $ {item}';
            itemList.appendChild(li);
        });
    </scriрt>
  `
const useFormat = `
    <p v-for="(item, index) in items" :key="index"> {{ item }} </p>
  `

import { ref } from 'vue';

const items = ref(['Яблоко', 'Банан', 'Виноград'])





</script>


<template>
    <main>
        <h1>V-FOR</h1>
        <p>Директива v-for используется для рендеринга списка элементов на основе данных, например массива или объекта.
            Она повторяет указанный шаблон для каждого элемента в коллекции (массив, объект или числа) и создаёт новый
            экземпляр этого шаблона для каждого элемента.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Работает с строками (тип String).</li>
            <li>Массивы.</li>
            <li>Объекты.</li>
            <li>Числа (для создания повторяющихся блоков фиксированное количество раз).</li>
        </ul>
        <h2>Формат</h2>
        <CodeBlock :code="useFormat" language="javascript" />
        <ul>
            <li>item — текущий элемент массива или объекта.</li>
            <li>index — необязательный индекс элемента (в случае массива).</li>
            <li>уникальный идентификатор для каждого элемента, чтобы Vue мог правильно отслеживать изменения в DOM.</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>

        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ index }}: {{ item }}
            </li>
        </ul>

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
