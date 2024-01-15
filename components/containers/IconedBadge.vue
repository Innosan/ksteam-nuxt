<script setup lang="ts">
const props = defineProps({
	icon: {
		type: Object,
		default: () => ({
			type: "icon",
			name: "",
			dynamic: false,
		}),
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	tooltip: {
		type: String,
		default: "",
		required: false,
	},
});
</script>

<template>
	<UTooltip v-if="tooltip" :text="tooltip">
		<UBadge class="gap-2">
			<UIcon
				v-if="icon.type === 'icon'"
				:name="icon.name"
				dynamic
				class="w-4 h-4"
			/>
			<img
				v-else
				:src="icon.name"
				:alt="label + 'icon'"
				class="w-4 h-4"
			/>
			{{ label }}
		</UBadge>
	</UTooltip>
	<UBadge v-else class="gap-2">
		<UIcon
			v-if="icon.type === 'icon'"
			:name="icon.name"
			dynamic
			class="w-4 h-4"
		/>
		<img v-else :src="icon.name" :alt="label + 'icon'" />
		{{ label }}
	</UBadge>
</template>

<style scoped></style>
