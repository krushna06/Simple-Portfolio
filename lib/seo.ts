import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'MoG Gaming | Portfolio';
	const description = "Hey 👋 I'm MoG Gaming, a Configurator.";

	return {
		title,
		description,
		canonical: `https://moggaming.me/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'MoG Gaming',
			url: `https://moggaming.me/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://media.discordapp.net/attachments/890634398981042246/1014940779078238301/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@moggaming',
			site: '@moggaming',
		},
		...props,
	};
}
