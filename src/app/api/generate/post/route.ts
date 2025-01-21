import { NextRequest, NextResponse } from 'next/server'
import { PlanSection, PostItem } from '@/types/generator'

const post: PostItem[] = [
  {
    type: 'h2',
    value: 'Origines religieuses de l’Ascension',
  },
  {
    type: 'h3',
    value: 'La signification chrétienne',
  },
  {
    type: 'p',
    value:
      'L’Ascension est une fête chrétienne qui célèbre un moment clé de la vie de Jésus-Christ : sa montée au ciel. Selon les récits bibliques, cet événement se produit quarante jours après Pâques, la résurrection de Jésus.',
  },
  {
    type: 'p',
    value:
      'Cet épisode marque la fin de la présence physique du Christ sur Terre et le début de sa mission céleste. Il promet également l’envoi de l’Esprit Saint à ses disciples, un autre événement célébré dix jours plus tard lors de la Pentecôte.',
  },
  {
    type: 'h3',
    value: 'Une tradition ancienne',
  },
  {
    type: 'p',
    value:
      'L’Ascension est l’une des plus anciennes fêtes chrétiennes. Les premières célébrations remontent aux premiers siècles de l’Église. Dès le IVe siècle, des traces de cette fête apparaissent dans les écrits religieux et les pratiques liturgiques.',
  },
  {
    type: 'p',
    value:
      'Une question revient souvent : pourquoi l’Ascension tombe-t-elle toujours un jeudi ? La réponse réside dans le calcul des quarante jours après Pâques, qui est toujours célébrée un dimanche. En comptant précisément, le quarantième jour tombe invariablement un jeudi. Ce lien avec Pâques fait de l’Ascension une fête mobile, sa date variant chaque année en fonction du calendrier lunaire.',
  },
  {
    type: 'h2',
    value: 'Pourquoi l’Ascension est-elle un jour férié en France ?',
  },
  {
    type: 'h3',
    value: 'Une fête inscrite dans l’histoire de la France',
  },
  {
    type: 'p',
    value:
      'Le statut férié de l’Ascension trouve ses racines dans l’histoire religieuse de la France. À cette époque, les fêtes religieuses rythmaient la vie quotidienne et étaient souvent des jours chômés pour permettre aux fidèles de participer aux célébrations liturgiques.',
  },
  {
    type: 'h2',
    value: 'Une fête respectée malgré la laïcité',
  },
  {
    type: 'p',
    value:
      'Avec la loi de séparation des Églises et de l’État en 1905, la France est devenue officiellement laïque. Cela signifiait que l’État ne favorisait plus aucune religion. Pourtant, certaines fêtes chrétiennes ont été conservées dans le calendrier civil en raison de leur importance culturelle et historique.',
  },
  {
    type: 'li',
    value: [
      'Un ancrage dans la tradition : l’Ascension est célébrée depuis des siècles et fait partie du patrimoine culturel français.',
      'Un compromis pratique : l’État a choisi de maintenir un certain nombre de jours fériés religieux pour préserver un équilibre entre tradition et modernité.',
      'Une importance symbolique : même pour les non-croyants, cette journée est perçue comme une occasion de se reposer ou de se retrouver en famille.',
    ],
  },
]

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { title, topic }: { title: string; topic: PlanSection[] } =
    await request.json()

  return NextResponse.json({ post })
}
