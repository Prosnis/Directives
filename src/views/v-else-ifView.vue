<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <div>
            <input v-model="inputStatus" type="text" placeholder="Введите статус (loading, success, error)" />
            <button @click="setStatus">Set Status</button>


            <p v-if="status === 'loading'">Загрузка...</p>
            <p v-else-if="status === 'success'">Данные успешно загружены!</p>
            <p v-else-if="status === 'error'">Ошибка при загрузке данных!</p>
            <p v-else>Неизвестное состояние</p>
        </div>
    </template>

    <script setup>
        import { ref } from 'vue';

        // Переменная для хранения текущего статуса
        const status = ref('loading');

        // Переменная для хранения значения из input
        const inputStatus = ref('');

        // Функция для обновления статуса на введённое значение
        const setStatus = () => {
             status.value = inputStatus.value.trim(); // обновляем статус
        };
    </scriрt>
    
  `

const exampleCodeJs = `
      <script>
        // Получаем ссылки на элементы
        const input = document.getElementById('statusInput');
        const button = document.getElementById('setStatusBtn');
        const statusMessage = document.getElementById('statusMessage');

        // Переменная для хранения текущего статуса
        let status = 'loading';

        // Функция для отображения соответствующего сообщения на основе статуса
        function updateMessage() {
        if (status === 'loading') {
            statusMessage.textContent = 'Загрузка...';
        } else if (status === 'success') {
            statusMessage.textContent = 'Данные успешно загружены!';
        } else if (status === 'error') {
            statusMessage.textContent = 'Ошибка при загрузке данных!';
        } else {
            statusMessage.textContent = 'Неизвестное состояние';
        }
        }

        // Изначально отображаем сообщение для статуса 'loading'
        updateMessage();

        // Функция для обновления статуса на введённое значение
        button.addEventListener('click', function() {
        // Получаем введённое значение из input и убираем лишние пробелы
        const inputStatus = input.value.trim();
        
        // Обновляем статус
        status = inputStatus;

        // Обновляем сообщение на основе нового статуса
        updateMessage();
        });
    </scriрt>
  `

import { ref } from 'vue';

const status = ref('loading');

const inputStatus = ref('');

const setStatus = () => {
    status.value = inputStatus.value.trim(); // обновляем статус
};





</script>


<template>
    <main>
        <h1>V-ELSE-IF</h1>
        <p>Директива v-else-if используется для создания условий рендеринга в шаблоне Vue. Она идёт в связке с
            директивами v-if и v-else, позволяя задать дополнительные условия, если основное (определённое через v-if)
            не выполнено. Vue будет проверять условия последовательно и отрисует первый блок, который вернёт истинное
            значение.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Работает с строками (тип String).</li>
            <li>Ожидает значения, приводимые к логическому типу (boolean).</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>

        <div>
            <input v-model="inputStatus" type="text" placeholder="Введите статус" />
            <button @click="setStatus">Set Status</button>
            <p v-if="status === 'loading'">Загрузка...</p>
            <p v-else-if="status === 'success'">Данные успешно загружены!</p>
            <p v-else-if="status === 'error'">Ошибка при загрузке данных!</p>
            <p v-else>Неизвестное состояние</p>
        </div>

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
