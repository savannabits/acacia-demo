<template>
    <form
        v-if="$page.props.userCan?.createAlbumType"
        @submit.prevent="createModel"
    >
        <div class="">
            <div class="my-2">
                <label>Slug</label>
                <InputText class="block w-full" v-model="form.slug" />
            </div>
            <div class="my-2">
                <label>Name</label>
                <InputText class="block w-full" v-model="form.name" />
            </div>
            <div class="my-2">
                <label>Description</label>
                <Textarea
                    v-model="form.description"
                    class="block w-full"
                    :autoResize="true"
                    rows="5"
                    cols="30"
                ></Textarea>
            </div>
            <div class="my-2 flex items-center flex-wrap gap-x-2">
                <label>Active</label>
                <InputSwitch class="block" v-model="form.active" />
            </div>
        </div>

        <div class="text-right min-w-[300px] pt-2 border-t-2">
            <Button type="submit" icon="pi pi-check" label="Save" />
        </div>
    </form>
    <Message v-else severity="error"
        >You are not authorized to perform this action</Message
    >
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "AlbumTypeCreate",
});
</script>
<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { useForm, usePage } from "@inertiajs/inertia-vue3";
import { computed, defineEmits, nextTick, ref } from "vue";
import axios from "axios";
import route from "ziggy-js";
import Label from "@/Components/Label.vue";
import { useToast } from "primevue/usetoast";
import { Inertia } from "@inertiajs/inertia";
import Message from "primevue/message";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import InputSwitch from "primevue/inputswitch";
const emit = defineEmits(["created", "error"]);
const flash = computed(() => usePage().props?.value?.flash) as any;
const existingTables = ref([]);
const showModal = ref(false);
const toast = useToast();
const form = useForm({
    slug: null,
    name: null,
    description: null,
    active: false,
});
const createModel = async () => {
    form.post(route("acacia.backend.album-types.store"), {
        onSuccess: (res) => {
            const fl = res.props.flash as any;
            toast.add({
                severity: "success",
                summary: "Success",
                detail: fl?.success,
                life: 2000,
            });
            const payload = flash.value?.payload;
            emit("created", { payload: payload });
        },
        onError: (errors) => {
            let msg =
                flash.value?.error ||
                errors?.message ||
                errors?.error ||
                errors ||
                "A server error occurred.";
            toast.add({
                severity: "error",
                summary: "Error",
                detail: msg,
                life: 3000,
            });
            const payload = flash.value?.payload;
            emit("error", { payload: payload, message: msg });
        },
        onFinish: (res) => {},
    });
};
</script>

<style scoped></style>
