// Content is restricted to the supplied Cell Structure pack.
const term=s=>`<strong class="term">${s}</strong>`;
const fn=s=>`<span class="function">${s}</span>`;
const sections = [
  "Cell structure",
  "Cell membrane",
  "Nucleus & chromosomes",
  "Mitochondria",
  "ER & ribosomes",
  "Microscopy",
  "Final check"
];

const lessonSlides = [
  {
    "id": "scope",
    "kind": "teach",
    "section": 0,
    "title": "Cell structure",
    "subtitle": "RECOGNITION & FUNCTION",
    "body": [
      "The <strong class=\"term\">nucleus</strong>, <strong class=\"term\">chromosomes</strong>, <strong class=\"term\">cell membrane</strong>, <strong class=\"term\">mitochondria</strong>, <strong class=\"term\">endoplasmic reticulum</strong> and <strong class=\"term\">ribosomes</strong> each have a function in the cell.",
      "Let’s see how these structures <span class=\"function\">control exchange, regulate cell activities, transfer energy and make proteins</span>."
    ],
    "visual": {
      "type": "image",
      "asset": "cell",
      "focus": "overview"
    },
    "coverage": [
      "scope"
    ]
  },
  {
    "id": "cell",
    "kind": "teach",
    "section": 0,
    "title": "Cells and organelles",
    "subtitle": "THE BASIC UNITS OF LIFE",
    "body": [
      "<strong class=\"term\">Cells</strong> are the basic units of living organisms.",
      "<strong class=\"term\">Organelles</strong> are structures inside cells with specific functions. Together, they keep the cell functioning."
    ],
    "visual": {
      "type": "image",
      "asset": "cell",
      "focus": "cell"
    },
    "coverage": [
      "cells",
      "organelles"
    ]
  },
  {
    "id": "cell-map",
    "kind": "teach",
    "section": 0,
    "title": "Cell structure",
    "subtitle": "HOW THE STRUCTURES WORK TOGETHER",
    "body": [
      "The cell membrane controls exchange. The nucleus and chromosomes are linked to proteins through genes. Mitochondria transfer energy into ATP, while ribosomes and ER are involved in protein production.",
      "These links bring each <strong class=\"term\">structure</strong> together with its <span class=\"function\">function</span>."
    ],
    "visual": {
      "type": "mindmap"
    },
    "coverage": [
      "map"
    ]
  },
  {
    "id": "cytoplasm-structure",
    "kind": "teach",
    "section": 0,
    "title": "Cytoplasm",
    "subtitle": "STRUCTURE & LOCATION",
    "body": [
      "The <strong class=\"term\">cytoplasm</strong> is jelly-like material <strong class=\"term\">outside the nucleus</strong>.",
      "It <span class=\"function\">contains organelles</span>; the cell membrane forms the boundary around the whole cell."
    ],
    "visual": {
      "type": "image",
      "asset": "cell",
      "focus": "cytoplasm"
    },
    "coverage": [
      "cytoplasm-structure",
      "cytoplasm-organelles"
    ]
  },
  {
    "id": "cytoplasm-function",
    "kind": "teach",
    "section": 0,
    "title": "Cytoplasm",
    "subtitle": "FUNCTION",
    "body": [
      "The cytoplasm is the <span class=\"function\">site of many chemical reactions</span>, including <strong class=\"term\">anaerobic respiration</strong>.",
      "Anaerobic respiration occurs in the cytoplasm. Most stages of aerobic respiration occur in mitochondria."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Cytoplasm",
        "Many chemical reactions",
        "Including anaerobic respiration"
      ],
      "links": [
        "is the site of",
        "including"
      ]
    },
    "coverage": [
      "cytoplasm-reactions"
    ]
  },
  {
    "id": "membrane-structure",
    "kind": "teach",
    "section": 1,
    "title": "Cell membrane",
    "subtitle": "STRUCTURE",
    "body": [
      "The <strong class=\"term\">cell surface membrane</strong> is a <strong class=\"term\">partially permeable boundary</strong>.",
      "It <span class=\"function\">controls movement into and out of the cell</span>."
    ],
    "visual": {
      "type": "image",
      "asset": "cell",
      "focus": "membrane"
    },
    "coverage": [
      "membrane-structure"
    ]
  },
  {
    "id": "membrane-function",
    "kind": "teach",
    "section": 1,
    "title": "Cell membrane",
    "subtitle": "FUNCTION",
    "body": [
      "The cell membrane <span class=\"function\">controls movement of substances into and out of the cell</span>.",
      "Substances cross the membrane by diffusion or through transport proteins."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Surroundings",
        "Cell membrane",
        "Cell contents"
      ],
      "links": [
        "regulated exchange",
        "regulated exchange"
      ]
    },
    "coverage": [
      "membrane-function"
    ]
  },
  {
    "id": "membrane-transport",
    "kind": "teach",
    "section": 1,
    "title": "Cell membrane",
    "subtitle": "HOW SUBSTANCES CROSS",
    "body": [
      "Substances cross the membrane by <strong class=\"term\">diffusion</strong> or through <strong class=\"term\">transport proteins</strong>.",
      "These are ways of moving substances across the cell’s boundary."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Substances",
        "Cell membrane",
        "Diffusion or transport proteins"
      ],
      "links": [
        "cross the",
        "by"
      ]
    },
    "coverage": [
      "membrane-diffusion",
      "membrane-proteins"
    ]
  },
  {
    "id": "membrane-active",
    "kind": "teach",
    "section": 1,
    "title": "Cell membrane",
    "subtitle": "ACTIVE TRANSPORT",
    "body": [
      "<strong class=\"term\">Active transport</strong> <span class=\"function\">requires energy</span>.",
      "Substances cross the cell membrane by diffusion or through transport proteins."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Energy supply",
        "Active transport",
        "Movement across the membrane"
      ],
      "links": [
        "is needed for",
        "moves substances across"
      ]
    },
    "coverage": [
      "membrane-active"
    ]
  },
  {
    "id": "membrane-recognition",
    "kind": "teach",
    "section": 1,
    "title": "Cell membrane",
    "subtitle": "RECOGNITION",
    "body": [
      "The <strong class=\"term\">cell surface membrane</strong> forms the boundary around the cell.",
      "It is partially permeable and <span class=\"function\">controls movement into and out of the cell</span>."
    ],
    "visual": {
      "type": "image",
      "asset": "cell",
      "focus": "membrane"
    },
    "coverage": [
      "membrane-recognition"
    ]
  },
  {
    "id": "nucleus-structure",
    "kind": "teach",
    "section": 2,
    "title": "Nucleus",
    "subtitle": "STRUCTURE",
    "body": [
      "The <strong class=\"term\">nucleus</strong> <span class=\"function\">contains chromosomes</span>.",
      "The nuclear envelope separates it from the surrounding cytoplasm."
    ],
    "visual": {
      "type": "image",
      "asset": "cell",
      "focus": "nucleus"
    },
    "coverage": [
      "nucleus-chromosomes"
    ]
  },
  {
    "id": "nucleus-function",
    "kind": "teach",
    "section": 2,
    "title": "Nucleus",
    "subtitle": "FUNCTION",
    "body": [
      "The nucleus <span class=\"function\">controls cell activities by regulating protein synthesis</span>.",
      "The nucleus controls which enzymes are made and therefore which chemical reactions occur."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Nucleus",
        "Protein synthesis",
        "Cell activities"
      ],
      "links": [
        "regulates",
        "helps control"
      ]
    },
    "coverage": [
      "nucleus-protein"
    ]
  },
  {
    "id": "nucleus-enzymes",
    "kind": "teach",
    "section": 2,
    "title": "Nucleus",
    "subtitle": "FROM PROTEINS TO CELL ACTIVITIES",
    "body": [
      "The nucleus <span class=\"function\">controls which enzymes are made</span>. It therefore <span class=\"function\">controls which chemical reactions occur</span>.",
      "This is how regulation of protein synthesis controls cell activities."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Regulation of protein synthesis",
        "Which enzymes are made",
        "Which reactions occur",
        "Cell activities"
      ],
      "links": [
        "determines",
        "controls",
        "shape"
      ]
    },
    "coverage": [
      "nucleus-enzymes",
      "nucleus-reactions"
    ]
  },
  {
    "id": "nucleus-recognition",
    "kind": "teach",
    "section": 2,
    "title": "Nucleus",
    "subtitle": "RECOGNITION",
    "body": [
      "A stained nucleus can often be recognised with a <strong class=\"term\">light microscope</strong>. It is often a prominent rounded or oval structure.",
      "Appearance varies between cells and images. In a suitable TEM section, a <strong class=\"term\">nuclear envelope</strong> may be visible around it."
    ],
    "visual": {
      "type": "image",
      "asset": "nucleus",
      "focus": "nucleusClose"
    },
    "coverage": [
      "nucleus-recognition"
    ]
  },
  {
    "id": "envelope",
    "kind": "teach",
    "section": 2,
    "title": "Nuclear envelope",
    "subtitle": "STRUCTURE & FUNCTION",
    "body": [
      "The <strong class=\"term\">nuclear envelope</strong> <span class=\"function\">separates the nucleus from the cytoplasm</span>. It contains <strong class=\"term\">nuclear pores</strong>.",
      "This boundary surrounds the nucleus. The cell membrane surrounds the whole cell."
    ],
    "visual": {
      "type": "image",
      "asset": "er",
      "focus": "envelope"
    },
    "coverage": [
      "envelope-boundary",
      "envelope-pores"
    ]
  },
  {
    "id": "pores",
    "kind": "teach",
    "section": 2,
    "title": "Nuclear pores",
    "subtitle": "FUNCTION",
    "body": [
      "<strong class=\"term\">Nuclear pores</strong> <span class=\"function\">regulate passage of substances</span>, including <strong class=\"term\">mRNA</strong>.",
      "The pores are in the nuclear envelope, which separates the nucleus from the cytoplasm."
    ],
    "visual": {
      "type": "image",
      "asset": "er",
      "focus": "pore"
    },
    "coverage": [
      "pores-passage",
      "pores-mrna"
    ]
  },
  {
    "id": "chromosome-composition",
    "kind": "teach",
    "section": 2,
    "title": "Chromosomes",
    "subtitle": "COMPOSITION",
    "body": [
      "<strong class=\"term\">Chromosomes</strong> consist of <strong class=\"term\">DNA associated with proteins</strong>.",
      "They are contained in the nucleus and carry genes."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Nucleus",
        "Chromosomes",
        "DNA associated with proteins"
      ],
      "links": [
        "contains",
        "consist of"
      ]
    },
    "coverage": [
      "chromosome-dna"
    ]
  },
  {
    "id": "chromosome-function",
    "kind": "teach",
    "section": 2,
    "title": "Chromosomes",
    "subtitle": "FUNCTION",
    "body": [
      "Chromosomes <span class=\"function\">carry genes that code for proteins</span>.",
      "The nucleus contains chromosomes, and chromosomes carry genes. This links the nucleus with protein synthesis."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Nucleus",
        "Chromosomes",
        "Genes",
        "Proteins"
      ],
      "links": [
        "contains",
        "carry",
        "code for"
      ]
    },
    "coverage": [
      "chromosome-genes"
    ]
  },
  {
    "id": "chromosome-recognition",
    "kind": "teach",
    "section": 2,
    "title": "Chromosomes",
    "subtitle": "RECOGNITION DURING CELL DIVISION",
    "body": [
      "Chromosomes become <strong class=\"term\">condensed during cell division</strong>, making them easier to distinguish individually in suitable images.",
      "They are not always visible as separate X-shaped structures."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Cell division",
        "Chromosome condensation",
        "Easier to distinguish individually"
      ],
      "links": [
        "involves",
        "makes chromosomes"
      ]
    },
    "coverage": [
      "chromosome-visibility"
    ]
  },
  {
    "id": "chromosome-context",
    "kind": "teach",
    "section": 2,
    "title": "Chromosomes",
    "subtitle": "WHERE THE DETAIL FITS",
    "body": [
      "Chromosome organisation is covered under <strong class=\"term\">Genes, Chromosomes and DNA</strong>.",
      "Here, chromosomes are DNA associated with proteins. They <span class=\"function\">carry genes coding for proteins</span>."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Cell Structure",
        "Genes, Chromosomes and DNA"
      ],
      "links": [
        "organisation is studied further in"
      ]
    },
    "coverage": [
      "chromosome-context"
    ]
  },
  {
    "id": "mito-structure",
    "kind": "teach",
    "section": 3,
    "title": "Mitochondrion",
    "subtitle": "STRUCTURE",
    "body": [
      "A <strong class=\"term\">mitochondrion</strong> has a <strong class=\"term\">double membrane</strong>.",
      "Mitochondria are the <span class=\"function\">site of most stages of aerobic respiration</span>."
    ],
    "visual": {
      "type": "image",
      "asset": "mito",
      "focus": "mitochondrion"
    },
    "coverage": [
      "mito-double"
    ]
  },
  {
    "id": "mito-recognition",
    "kind": "teach",
    "section": 3,
    "title": "Mitochondrion",
    "subtitle": "RECOGNITION",
    "body": [
      "The <strong class=\"term\">mitochondrion</strong> is one of the structures inside a cell. It has a <strong class=\"term\">double membrane</strong>.",
      "Its function is linked to <span class=\"function\">aerobic respiration and energy transfer into ATP</span>."
    ],
    "visual": {
      "type": "image",
      "asset": "mito",
      "focus": "mitochondrion"
    },
    "coverage": [
      "mito-recognition"
    ]
  },
  {
    "id": "mito-function",
    "kind": "teach",
    "section": 3,
    "title": "Mitochondria",
    "subtitle": "FUNCTION",
    "body": [
      "Mitochondria are the <span class=\"function\">site of most stages of aerobic respiration</span>.",
      "Energy released through respiration is <span class=\"function\">transferred into ATP</span>, which supplies energy for cellular work."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Aerobic respiration",
        "Energy transferred into ATP",
        "Cellular work"
      ],
      "links": [
        "supports",
        "supplies energy for"
      ]
    },
    "coverage": [
      "mito-aerobic",
      "mito-atp"
    ]
  },
  {
    "id": "mito-transfer",
    "kind": "teach",
    "section": 3,
    "title": "Mitochondria",
    "subtitle": "ENERGY TRANSFER",
    "body": [
      "Mitochondria <span class=\"function\">transfer energy into ATP</span>; they do not “make energy”.",
      "Muscle cells and sperm cells contain many mitochondria to <span class=\"function\">supply ATP for contraction or movement</span>."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Energy released in respiration",
        "ATP",
        "Energy for cellular work"
      ],
      "links": [
        "is transferred into",
        "supplies"
      ]
    },
    "coverage": [
      "mito-not-create",
      "mito-most"
    ]
  },
  {
    "id": "mito-demand",
    "kind": "teach",
    "section": 3,
    "title": "Mitochondria",
    "subtitle": "HIGH ENERGY DEMAND",
    "body": [
      "<strong class=\"term\">Muscle cells</strong> and <strong class=\"term\">sperm cells</strong> contain many mitochondria.",
      "These <span class=\"function\">supply ATP for contraction or movement</span>. A high demand for movement creates a high demand for ATP."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Many mitochondria",
        "ATP supply",
        "Contraction or movement"
      ],
      "links": [
        "support",
        "provides energy for"
      ]
    },
    "coverage": [
      "mito-demand"
    ]
  },
  {
    "id": "ribosome-location",
    "kind": "teach",
    "section": 4,
    "title": "Ribosomes",
    "subtitle": "LOCATION",
    "body": [
      "<strong class=\"term\">Ribosomes</strong> may be <strong class=\"term\">free in the cytoplasm</strong> or <strong class=\"term\">attached to rough endoplasmic reticulum</strong>.",
      "The ribosomes attached to rough ER <span class=\"function\">join amino acids into polypeptides</span>."
    ],
    "visual": {
      "type": "image",
      "asset": "er",
      "focus": "ribosome"
    },
    "coverage": [
      "ribosome-locations"
    ]
  },
  {
    "id": "ribosome-function",
    "kind": "teach",
    "section": 4,
    "title": "Ribosomes",
    "subtitle": "FUNCTION",
    "body": [
      "Ribosomes are the <span class=\"function\">site of translation</span>. They <span class=\"function\">join amino acids into polypeptides</span>.",
      "The ER <span class=\"function\">processes and transports certain proteins</span>. These are related roles in protein production."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Amino acids",
        "Ribosomes · translation",
        "Polypeptide"
      ],
      "links": [
        "are joined at",
        "to make a"
      ]
    },
    "coverage": [
      "ribosome-translation",
      "ribosome-polypeptide"
    ]
  },
  {
    "id": "er-structure",
    "kind": "teach",
    "section": 4,
    "title": "Endoplasmic reticulum",
    "subtitle": "STRUCTURE",
    "body": [
      "The <strong class=\"term\">endoplasmic reticulum (ER)</strong> is a <strong class=\"term\">membrane network of channels and flattened sacs</strong>.",
      "The flattened membrane sacs are called <strong class=\"term\">cisternae</strong>."
    ],
    "visual": {
      "type": "image",
      "asset": "er",
      "focus": "er"
    },
    "coverage": [
      "er-network",
      "er-cisternae"
    ]
  },
  {
    "id": "rough-er-structure",
    "kind": "teach",
    "section": 4,
    "title": "Rough ER",
    "subtitle": "RECOGNITION",
    "body": [
      "<strong class=\"term\">Rough ER</strong> has <strong class=\"term\">ribosomes attached to its surface</strong>, giving it its rough appearance.",
      "In TEM, look for parallel membrane profiles with small dark particles attached. The attached particles are ribosomes."
    ],
    "visual": {
      "type": "image",
      "asset": "er",
      "focus": "roughER"
    },
    "coverage": [
      "rough-ribosomes",
      "rough-recognition"
    ]
  },
  {
    "id": "rough-er-function",
    "kind": "teach",
    "section": 4,
    "title": "Rough ER",
    "subtitle": "FUNCTION",
    "body": [
      "Rough ER <span class=\"function\">helps fold and process proteins</span> made by its attached ribosomes.",
      "These proteins may be destined for <strong class=\"term\">secretion</strong> or <strong class=\"term\">cell membranes</strong>. Ribosomes build the polypeptides; the ER processes certain proteins."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Attached ribosomes",
        "Polypeptides",
        "Rough ER"
      ],
      "links": [
        "make",
        "are folded/processed by"
      ]
    },
    "coverage": [
      "rough-fold",
      "rough-destinations"
    ]
  },
  {
    "id": "rough-er-transport",
    "kind": "teach",
    "section": 4,
    "title": "Rough ER",
    "subtitle": "TRANSPORT",
    "body": [
      "Rough ER <span class=\"function\">supports transport of certain proteins in vesicles</span>.",
      "Assembly, processing and transport are related steps, with different structures responsible for each role."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Ribosomes",
        "Rough ER",
        "Vesicles",
        "Secretion or cell membranes"
      ],
      "links": [
        "build; processing follows in",
        "supports transport in",
        "transport proteins for"
      ]
    },
    "coverage": [
      "rough-vesicles",
      "rough-separation"
    ]
  },
  {
    "id": "smooth-er",
    "kind": "teach",
    "section": 4,
    "title": "Smooth ER",
    "subtitle": "STRUCTURE & RECOGNITION",
    "body": [
      "<strong class=\"term\">Smooth ER</strong> has <strong class=\"term\">no ribosomes attached</strong>.",
      "Rough ER has ribosomes attached to its surface. This gives the two forms of ER their different appearance."
    ],
    "visual": {
      "type": "image",
      "asset": "smoothER",
      "focus": "smoothER"
    },
    "coverage": [
      "smooth-no-ribosomes"
    ]
  },
  {
    "id": "er-comparison",
    "kind": "teach",
    "section": 4,
    "title": "Endoplasmic reticulum",
    "subtitle": "ROUGH ER & SMOOTH ER",
    "body": [
      "The key visible distinction is the <strong class=\"term\">presence or absence of attached ribosomes</strong>."
    ],
    "visual": {
      "type": "comparison"
    },
    "coverage": [
      "er-table"
    ]
  },
  {
    "id": "er-envelope-connection",
    "kind": "teach",
    "section": 4,
    "title": "Endoplasmic reticulum",
    "subtitle": "CONNECTION TO THE NUCLEUS",
    "body": [
      "The <strong class=\"term\">ER</strong> is <strong class=\"term\">connected to the nuclear envelope</strong>.",
      "The nuclear envelope separates the nucleus from the cytoplasm; the ER is a membrane network of channels and flattened sacs."
    ],
    "visual": {
      "type": "image",
      "asset": "er",
      "focus": "connection"
    },
    "coverage": [
      "image-er-connected"
    ]
  },
  {
    "id": "smooth-er-context",
    "kind": "teach",
    "section": 4,
    "title": "Smooth ER",
    "subtitle": "FUNCTION",
    "body": [
      "Smooth ER is involved in <span class=\"function\">lipid synthesis</span>, <span class=\"function\">detoxification</span> and <span class=\"function\">Ca²⁺ storage</span>.",
      "It has <strong class=\"term\">no ribosomes attached</strong>."
    ],
    "visual": {
      "type": "image",
      "asset": "smoothER",
      "focus": "smoothER"
    },
    "coverage": [
      "image-smooth-functions"
    ]
  },
  {
    "id": "er-synthesis-context",
    "kind": "teach",
    "section": 4,
    "title": "Endoplasmic reticulum",
    "subtitle": "FUNCTION",
    "body": [
      "ER is a site of <strong class=\"term\">protein and lipid synthesis</strong>. Rough ER is involved in <span class=\"function\">protein synthesis, modification and transport</span>.",
      "Ribosomes <span class=\"function\">join amino acids into polypeptides</span>. ER <span class=\"function\">processes and transports certain proteins</span>."
    ],
    "visual": {
      "type": "synthesis"
    },
    "coverage": [
      "image-er-summary"
    ]
  },
  {
    "id": "trna",
    "kind": "teach",
    "section": 4,
    "title": "Cytoplasm",
    "subtitle": "AMINO ACIDS & tRNA",
    "body": [
      "<strong class=\"term\">Amino acids</strong> <span class=\"function\">attach to tRNA in the cytoplasm</span>, not specifically in ER.",
      "Ribosomes join amino acids into polypeptides. ER processes and transports certain proteins."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Cytoplasm",
        "Amino acids attach to tRNA"
      ],
      "links": [
        "is where"
      ]
    },
    "coverage": [
      "trna-cytoplasm"
    ]
  },
  {
    "id": "ribosome-resolution",
    "kind": "teach",
    "section": 4,
    "title": "Ribosomes and ER",
    "subtitle": "MICROSCOPE RESOLUTION",
    "body": [
      "Individual <strong class=\"term\">ribosomes</strong> and <strong class=\"term\">ER membranes</strong> are not resolved by an ordinary light microscope.",
      "In suitable TEM images, ribosomes may appear as small dark particles, free in the cytoplasm or attached to rough ER."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Ordinary light microscope",
        "Individual ribosomes & ER membranes",
        "TEM"
      ],
      "links": [
        "cannot resolve",
        "need greater resolution, such as"
      ]
    },
    "coverage": [
      "ribosome-resolution",
      "ribosome-tem"
    ]
  },
  {
    "id": "light-microscopy",
    "kind": "teach",
    "section": 5,
    "title": "Light microscopy",
    "subtitle": "WHAT YOU CAN RECOGNISE",
    "body": [
      "A <strong class=\"term\">stained nucleus</strong> can often be recognised with a light microscope. <strong class=\"term\">Condensed chromosomes</strong> may be visible in suitable dividing cells.",
      "Individual ribosomes, transport proteins and fine ER membrane details require greater resolution."
    ],
    "visual": {
      "type": "light"
    },
    "coverage": [
      "light-nucleus",
      "light-chromosomes",
      "light-resolution"
    ]
  },
  {
    "id": "tem",
    "kind": "teach",
    "section": 5,
    "title": "TEM",
    "subtitle": "THIN SECTIONS",
    "body": [
      "<strong class=\"term\">TEM</strong> images show <strong class=\"term\">thin sections</strong> and can reveal internal cell structures. The same kind of organelle can look different when cut in different orientations.",
      "Membrane boundaries, membrane networks and small particles provide clues to the structures."
    ],
    "visual": {
      "type": "recognition"
    },
    "coverage": [
      "tem-section",
      "tem-clues"
    ]
  },
  {
    "id": "evidence",
    "kind": "teach",
    "section": 5,
    "title": "Microscope recognition",
    "subtitle": "EVIDENCE BEFORE LABELS",
    "body": [
      "A dark patch alone does not prove a structure is a nucleus. An oval shape alone does not prove it is a mitochondrion.",
      "<strong class=\"term\">Visible structure and context</strong> support an identification. Clearer features make a structure easier to recognise."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Visible features",
        "Recognition clues",
        "Supported identification"
      ],
      "links": [
        "provide",
        "support"
      ]
    },
    "coverage": [
      "evidence"
    ]
  },
  {
    "id": "microscopy-limit",
    "kind": "teach",
    "section": 5,
    "title": "Microscope recognition",
    "subtitle": "WHAT THIS MODULE ASSESSES",
    "body": [
      "The diagrams in this lesson are <strong class=\"term\">schematics</strong>.",
      "The checkpoints cover structure names, recognition knowledge and functions. <strong class=\"term\">Real-micrograph identification is not assessed here</strong>."
    ],
    "visual": {
      "type": "flow",
      "nodes": [
        "Cell diagrams",
        "Structure names and functions"
      ],
      "links": [
        "bring together"
      ]
    },
    "coverage": [
      "assessment-limit"
    ]
  },
  {
    "id": "final-context",
    "kind": "teach",
    "section": 6,
    "title": "Cell structure",
    "subtitle": "STRUCTURE & FUNCTION",
    "body": [
      "The six structures are linked with their functions below. A final set of questions brings these relationships together.",
      "First attempts in this final check are recorded separately from practice. Corrected answers are recorded separately too."
    ],
    "visual": {
      "type": "summary"
    },
    "coverage": [
      "final-context"
    ]
  }
];

const questions = [
  [
    {
      "id": "S1",
      "type": "mc",
      "q": "Which statement best describes an organelle?",
      "options": [
        "A group of organs working together",
        "A structure inside a cell with a particular function",
        "Any substance that enters a cell",
        "A complete living organism"
      ],
      "answer": 1,
      "feedback": "An organelle is a structure inside a cell with a particular function.",
      "skill": "function",
      "review": 1
    }
  ],
  [
    {
      "id": "S2A",
      "type": "mc",
      "q": "What is the main function of the cell membrane?",
      "options": [
        "Making polypeptides",
        "Carrying genes",
        "Controlling movement into and out of the cell",
        "Carrying out most stages of aerobic respiration"
      ],
      "answer": 2,
      "feedback": "The membrane controls exchange. Ribosomes make polypeptides, chromosomes carry genes and mitochondria carry out most stages of aerobic respiration.",
      "skill": "function",
      "review": 0
    },
    {
      "id": "S2B",
      "type": "text",
      "q": "Which cell structure is shown?",
      "accepted": [
        "cell membrane",
        "cell surface membrane",
        "plasma membrane"
      ],
      "image": "boundaryQuiz",
      "feedback": "This is the cell membrane, the partially permeable boundary controlling movement into and out of the cell.",
      "skill": "diagram",
      "review": 1
    }
  ],
  [
    {
      "id": "S3A",
      "type": "match",
      "q": "Which description goes with this structure?",
      "pairs": [
        [
          "Nucleus",
          "Contains chromosomes and regulates protein synthesis to control cell activities."
        ],
        [
          "Chromosomes",
          "DNA associated with proteins; carry genes coding for proteins."
        ],
        [
          "Cell membrane",
          "Controls movement into and out of the whole cell."
        ]
      ],
      "feedback": "The nucleus contains chromosomes, chromosomes carry genes, and the cell membrane controls exchange.",
      "skill": "function",
      "review": 1
    },
    {
      "id": "S3B",
      "type": "mc",
      "q": "Which statement about chromosomes is correct?",
      "options": [
        "They are always separate X-shaped structures in every microscope image.",
        "They carry genes coding for proteins.",
        "They are the boundary around the whole cell.",
        "They make ATP directly by joining amino acids."
      ],
      "answer": 1,
      "feedback": "Chromosomes carry genes coding for proteins. Condensed chromosomes are easier to distinguish during cell division.",
      "skill": "recognition",
      "review": 2
    }
  ],
  [
    {
      "id": "S4A",
      "type": "mc",
      "q": "Why do cells with a high demand for movement often contain many mitochondria?",
      "options": [
        "Mitochondria store every gene in the cell.",
        "Mitochondria prevent all substances entering the cell.",
        "Mitochondria support ATP supply through aerobic respiration.",
        "Mitochondria join amino acids into polypeptides."
      ],
      "answer": 2,
      "feedback": "Movement requires energy transferred by ATP. Mitochondria carry out most stages of aerobic respiration and support ATP supply.",
      "skill": "function",
      "review": 1
    },
    {
      "id": "S4B",
      "type": "mc",
      "q": "Which structure has a double membrane?",
      "options": [
        "Nucleus",
        "Mitochondrion",
        "Ribosome",
        "Cell membrane"
      ],
      "answer": 1,
      "feedback": "A mitochondrion has a double membrane.",
      "skill": "recognition",
      "review": 0
    }
  ],
  [
    {
      "id": "S5A",
      "type": "text",
      "q": "The structures that join amino acids into polypeptides are ______.",
      "accepted": [
        "ribosomes",
        "ribosome"
      ],
      "feedback": "Ribosomes join amino acids into polypeptides. ER processes and transports certain proteins.",
      "skill": "function",
      "review": 0
    },
    {
      "id": "S5B",
      "type": "mc",
      "q": "Which feature distinguishes rough ER from smooth ER?",
      "options": [
        "Rough ER has attached ribosomes.",
        "Smooth ER contains chromosomes.",
        "Rough ER is the cell’s outer boundary.",
        "Smooth ER always has more ribosomes."
      ],
      "answer": 0,
      "feedback": "Attached ribosomes give rough ER its rough appearance. Smooth ER has no ribosomes attached.",
      "skill": "recognition",
      "review": 1
    },
    {
      "id": "S5C",
      "type": "match",
      "q": "Which name fits the structure shown?",
      "pairs": [
        [
          "B",
          "Rough ER"
        ],
        [
          "C",
          "Ribosome"
        ]
      ],
      "feedback": "Rough ER is a membrane network. Ribosomes are attached to its surface.",
      "skill": "diagram",
      "review": 1,
      "image": "erQuiz"
    }
  ],
  [
    {
      "id": "S6A",
      "type": "mc",
      "q": "Which structure can often be recognised in a stained cell using a light microscope?",
      "options": [
        "Individual ribosome",
        "Nucleus",
        "Fine structure of an ER membrane",
        "Individual transport protein"
      ],
      "answer": 1,
      "feedback": "A stained nucleus can often be seen with a light microscope. Individual ribosomes and fine membrane details require greater resolution.",
      "skill": "recognition",
      "review": 0
    },
    {
      "id": "S6B",
      "type": "mc",
      "q": "When are chromosomes generally easier to distinguish individually?",
      "options": [
        "When condensed during cell division",
        "Only when outside the cell",
        "Only when attached to rough ER",
        "At all times as separate X-shaped structures"
      ],
      "answer": 0,
      "feedback": "Condensation during cell division makes chromosomes easier to distinguish. They are not always visible as separate X-shaped structures.",
      "skill": "recognition",
      "review": 0
    },
    {
      "id": "S6C",
      "type": "mc",
      "q": "Which observation would support identifying a region in a TEM image as rough ER?",
      "options": [
        "Membrane profiles with small particles attached",
        "A visible whole-cell outline alone",
        "An X-shaped chromosome",
        "A smooth boundary around the entire cell"
      ],
      "answer": 0,
      "feedback": "Membrane profiles with attached ribosomes support identifying rough ER. A boundary alone is not sufficient evidence.",
      "skill": "recognition",
      "review": 1
    }
  ],
  [
    {
      "id": "F1",
      "type": "match",
      "q": "Which function goes with this structure?",
      "pairs": [
        [
          "Nucleus",
          "Contains chromosomes; controls cell activities by regulating protein synthesis."
        ],
        [
          "Chromosomes",
          "Carry genes coding for proteins."
        ],
        [
          "Cell membrane",
          "Controls movement into and out of the cell."
        ],
        [
          "Mitochondria",
          "Site of most stages of aerobic respiration; support energy transfer into ATP."
        ],
        [
          "Endoplasmic reticulum",
          "Processes and transports certain proteins, especially through rough ER."
        ],
        [
          "Ribosomes",
          "Join amino acids into polypeptides."
        ]
      ],
      "feedback": "Each structure contributes a different job to a working cell.",
      "skill": "function",
      "review": 0
    },
    {
      "id": "F2",
      "type": "mc",
      "q": "A student says, “Rough ER joins amino acids into polypeptides.” Which correction is best?",
      "options": [
        "Chromosomes join amino acids; ER stores genes.",
        "Ribosomes join amino acids; rough ER helps process and transport certain proteins.",
        "The membrane joins amino acids; ribosomes control entry into cells.",
        "Mitochondria join amino acids; ER creates energy."
      ],
      "answer": 1,
      "feedback": "Ribosomes join amino acids into polypeptides. Rough ER helps fold, process and transport certain proteins.",
      "skill": "function",
      "review": 0
    },
    {
      "id": "F3",
      "type": "written",
      "q": "How does the nucleus control cell activities?",
      "model": "The nucleus controls cell activities by regulating protein synthesis, including which enzymes are made. This controls which chemical reactions occur in the cell.",
      "skill": "written",
      "review": 0
    },
    {
      "id": "F4A",
      "type": "mc",
      "q": "Which structure is shown?",
      "options": [
        "Nucleus",
        "Mitochondrion",
        "Rough ER",
        "Ribosome"
      ],
      "answer": 1,
      "feedback": "A mitochondrion has a double membrane and transfers energy into ATP.",
      "skill": "diagram",
      "review": 0,
      "image": "mitoQuiz"
    },
    {
      "id": "F4B",
      "type": "mc",
      "q": "Part B · What is the function of the structure you just identified?",
      "options": [
        "Carries genes",
        "Controls the cell boundary",
        "Most stages of aerobic respiration and ATP supply",
        "Joins amino acids into polypeptides"
      ],
      "answer": 2,
      "feedback": "Identification and function are separate skills. The mitochondrion supports aerobic respiration and ATP supply.",
      "skill": "function",
      "review": 0
    }
  ]
];

const reviewByQuestion = {
  "S1": "cell",
  "S2A": "membrane-function",
  "S2B": "membrane-recognition",
  "S3A": "nucleus-function",
  "S3B": "chromosome-function",
  "S4A": "mito-demand",
  "S4B": "mito-structure",
  "S5A": "ribosome-function",
  "S5B": "rough-er-structure",
  "S5C": "er-structure",
  "S6A": "light-microscopy",
  "S6B": "chromosome-recognition",
  "S6C": "rough-er-structure",
  "F1": "cell-map",
  "F2": "rough-er-function",
  "F3": "nucleus-enzymes",
  "F4A": "mito-structure",
  "F4B": "mito-function"
};

const reviewByStructure = {
  "Nucleus": "nucleus-function",
  "Chromosomes": "chromosome-function",
  "Cell membrane": "membrane-function",
  "Mitochondria": "mito-function",
  "Endoplasmic reticulum": "rough-er-function",
  "Ribosomes": "ribosome-function",
  "B": "er-structure",
  "C": "ribosome-function"
};

const referenceSlides = [
  {
    "title": "Learning outcomes",
    "body": [
      "1.1 recognise cell structures as seen with a light microscope and electron microscope (TEM images only), including nucleus, chromosomes, cell membrane, mitochondria, endoplasmic reticulum and ribosomes\n\n1.2 describe the functions of the cell structures:\n• nucleus\n• chromosomes\n• cell membrane\n• mitochondria\n• endoplasmic reticulum\n• ribosomes."
    ],
    "plain": true
  },
  {
    "title": "Cells and organelles",
    "body": [
      "Cells:",
      "Basic units of living organisms.",
      "Organelles:",
      "Structures inside cells with specific functions."
    ]
  },
  {
    "title": "Cells and organelles",
    "image": "originalCell"
  },
  {
    "title": "Cytoplasm",
    "body": [
      "Structure:",
      "Jelly-like material outside the nucleus.",
      "Contains organelles.",
      "Function:",
      "Site of many chemical reactions, including anaerobic respiration."
    ]
  },
  {
    "title": "Cell surface membrane",
    "body": [
      "Structure: partially permeable boundary.",
      "Function: controls movement into and out of the cell.",
      "Substances cross by diffusion or through transport proteins.",
      "Active transport requires energy."
    ]
  },
  {
    "title": "Nucleus",
    "body": [
      "Contains chromosomes.",
      "Controls cell activities by regulating protein synthesis.",
      "Controls which enzymes are made.",
      "Therefore controls which reactions occur."
    ]
  },
  {
    "title": "Nuclear envelope",
    "body": [
      "Separates the nucleus from the cytoplasm.",
      "Contains nuclear pores.",
      "Regulate passage of substances, including mRNA."
    ]
  },
  {
    "title": "Chromosomes",
    "body": [
      "DNA associated with proteins.",
      "Carry genes coding for proteins.",
      "Their organisation is covered under Genes, Chromosomes and DNA."
    ]
  },
  {
    "title": "Mitochondria",
    "body": [
      "Function:",
      "Site of most stages of aerobic respiration.",
      "Transfer energy into ATP.",
      "Structure:",
      "Double membrane."
    ]
  },
  {
    "title": "Example — high energy demand",
    "body": [
      "Muscle cells and sperm cells contain many mitochondria to supply ATP for contraction or movement."
    ]
  },
  {
    "title": "Endoplasmic reticulum and ribosomes",
    "body": [
      "Endoplasmic reticulum (ER):",
      "Membrane network of channels and flattened sacs.",
      "Ribosomes:",
      "Site of translation.",
      "Join amino acids into polypeptides.",
      "Found free in cytoplasm or attached to rough ER."
    ]
  },
  {
    "title": "Rough ER and smooth ER",
    "comparison": true
  },
  {
    "title": "Endoplasmic reticulum and ribosomes",
    "image": "originalER"
  },
  {
    "title": "Hotspot — organelle functions",
    "body": [
      "Ribosomes make polypeptides; ER processes and transports certain proteins.",
      "Amino acids attach to tRNA in the cytoplasm, not specifically in ER.",
      "Mitochondria transfer energy into ATP; they do not “make energy”."
    ]
  }
];

const outcomes = "1.1 recognise cell structures as seen with a light microscope and electron microscope (TEM images only), including nucleus, chromosomes, cell membrane, mitochondria, endoplasmic reticulum and ribosomes\n\n1.2 describe the functions of the cell structures:\n• nucleus\n• chromosomes\n• cell membrane\n• mitochondria\n• endoplasmic reticulum\n• ribosomes.";
