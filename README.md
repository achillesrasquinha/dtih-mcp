# life-science-mcp

A unified MCP server for 133 life science APIs and databases.

## Installation

```json
{
  "mcpServers": {
    "life-science": {
      "command": "npx",
      "args": ["-y", "life-science-mcp"]
    }
  }
}
```

## Providers (133)

| Provider | Description |
|----------|-------------|
| [Allen Brain Atlas](https://api.brain-map.org) | Allen Institute brain gene expression and connectivity data |
| [AlphaFold DB](https://alphafold.ebi.ac.uk) | AI-predicted protein structures from DeepMind |
| [BERN2](http://bern2.korea.ac.kr) | Biomedical named entity recognition and normalization |
| [Bgee](https://bgee.org) | Gene expression evolution across species and tissues |
| [BiGG Models](http://bigg.ucsd.edu) | Metabolic network reconstructions and flux balance models |
| [BioModels](https://biomodels.org) | Mathematical models of biological systems (SBML) |
| [bioRxiv](https://www.biorxiv.org) | Preprint server for biology |
| [BioSamples](https://www.ebi.ac.uk/biosamples) | EBI biological sample metadata and attributes |
| [BOLD Systems](https://www.boldsystems.org) | Barcode of Life DNA barcode data |
| [Catalogue of Life](https://www.catalogueoflife.org) | Global index of species names and taxonomy |
| [cBioPortal](https://www.cbioportal.org) | Multidimensional cancer genomics data |
| [CELLxGENE](https://cellxgene.cziscience.com) | CZ single-cell datasets and gene expression |
| [Cellosaurus](https://www.cellosaurus.org) | Cell line identification and characterization |
| [ChEBI](https://www.ebi.ac.uk/chebi) | Chemical Entities of Biological Interest via OLS4 |
| [ChEMBL](https://www.ebi.ac.uk/chembl) | Bioactive drug-like small molecules |
| [CIViC](https://civicdb.org) | Clinical Interpretations of Variants in Cancer |
| [ClinicalTrials.gov](https://clinicaltrials.gov) | Registry of clinical studies worldwide |
| [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar) | Genetic variants linked to clinical significance |
| [CompTox](https://comptox.epa.gov) | EPA chemical toxicology and safety dashboard |
| [DailyMed](https://dailymed.nlm.nih.gov) | FDA drug labeling and packaging information |
| [DDBJ](https://ddbj.nig.ac.jp) | DNA Data Bank of Japan nucleotide sequence archive |
| [dbSNP](https://www.ncbi.nlm.nih.gov/snp) | Single nucleotide polymorphisms and genetic variation |
| [DepMap](https://depmap.org) | Cancer Dependency Map cell line data |
| [DGIdb](https://dgidb.org) | Drug-gene interaction data |
| [DisGeNET](https://www.disgenet.com) | Gene-disease associations |
| [DisProt](https://disprot.org) | Intrinsically disordered proteins database |
| [DrugCentral](https://drugcentral.org) | Drug repurposing and target data |
| [EggNOG](http://eggnog5.embl.de) | Orthologous groups and functional annotation |
| [EMDB](https://www.ebi.ac.uk/emdb) | Electron Microscopy Data Bank for 3D structures |
| [EMPIAR](https://www.ebi.ac.uk/empiar) | Electron Microscopy Public Image Archive |
| [ENA](https://www.ebi.ac.uk/ena) | European Nucleotide Archive sequence data |
| [ENCODE](https://www.encodeproject.org) | Encyclopedia of DNA Elements regulatory data |
| [Enrichr](https://maayanlab.cloud/Enrichr) | Gene set enrichment analysis platform |
| [Ensembl](https://www.ensembl.org) | Genome browser and annotation |
| [Ensembl VEP](https://www.ensembl.org/vep) | Variant Effect Predictor for functional annotation |
| [Europe PMC](https://europepmc.org) | Open-access biomedical literature |
| [Expression Atlas](https://www.ebi.ac.uk/gxa) | Gene expression patterns across species and conditions |
| [FAOSTAT](https://www.fao.org/faostat) | FAO food and agriculture statistics |
| [FishBase](https://www.fishbase.org) | Comprehensive fish species database |
| [GBIF](https://www.gbif.org) | Global Biodiversity Information Facility |
| [GDC](https://gdc.cancer.gov) | NCI Genomic Data Commons (TCGA and more) |
| [Gene Ontology](http://geneontology.org) | Functional gene annotations and ontology |
| [GEO](https://www.ncbi.nlm.nih.gov/geo) | Gene Expression Omnibus high-throughput datasets |
| [GlyGen](https://glygen.org) | Integrated glycoscience data for glycans and glycoproteins |
| [GlyTouCan](https://glytoucan.org) | International glycan structure repository |
| [gnomAD](https://gnomad.broadinstitute.org) | Genome Aggregation Database allele frequencies |
| [GPCRdb](https://gpcrdb.org) | G protein-coupled receptor database |
| [g:Profiler](https://biit.cs.ut.ee/gprofiler) | Functional enrichment and gene ID conversion |
| [GTEx](https://gtexportal.org) | Gene expression across human tissues |
| [Guide to Pharmacology](https://www.guidetopharmacology.org) | Drug targets and ligands |
| [GWAS Catalog](https://www.ebi.ac.uk/gwas) | Genome-wide association studies |
| [HGNC](https://www.genenames.org) | Approved human gene symbols and names |
| [HMDB](https://hmdb.ca) | Human Metabolome Database |
| [HPO](https://hpo.jax.org) | Human Phenotype Ontology |
| [Human Protein Atlas](https://www.proteinatlas.org) | Protein expression and localization across tissues |
| [IEDB](https://www.iedb.org) | Immune Epitope Database and Analysis Resource |
| [ImmPort](https://www.immport.org) | Immunology Database and Analysis Portal |
| [iNaturalist](https://www.inaturalist.org) | Citizen science biodiversity observations |
| [IntAct](https://www.ebi.ac.uk/intact) | Curated protein-protein interactions |
| [InterPro](https://www.ebi.ac.uk/interpro) | Protein families, domains, and functional sites |
| [JASPAR](https://jaspar.elixir.no) | Transcription factor binding profiles |
| [KEGG](https://www.kegg.jp) | Pathway and molecular interaction database |
| [LIPID MAPS](https://www.lipidmaps.org) | Lipid classification and structures |
| [MassBank](https://massbank.eu) | Mass spectra for metabolite identification |
| [MeSH](https://meshb.nlm.nih.gov) | Medical Subject Headings vocabulary |
| [MSigDB](https://www.gsea-msigdb.org) | Molecular Signatures Database — curated gene sets for enrichment |
| [MetaboLights](https://www.ebi.ac.uk/metabolights) | Metabolomics experiments and derived information |
| [Metabolomics Workbench](https://www.metabolomicsworkbench.org) | Metabolomics data repository and tools |
| [MGnify](https://www.ebi.ac.uk/metagenomics) | EBI metagenomics analysis and archiving |
| [MobiDB](https://mobidb.org) | Protein disorder and mobility annotations |
| [Monarch Initiative](https://monarchinitiative.org) | Knowledge graph for disease discovery |
| [MyChem.info](https://mychem.info) | Aggregated chemical and drug annotations |
| [MyDisease.info](https://mydisease.info) | Aggregated disease annotations |
| [MyGene.info](https://mygene.info) | Aggregated gene annotations |
| [MyVariant.info](https://myvariant.info) | Aggregated genetic variant annotations |
| [Natural Products Atlas](https://www.npatlas.org) | Microbially-derived natural products |
| [NCBI BioSample](https://www.ncbi.nlm.nih.gov/biosample) | Biological sample metadata for experimental assays |
| [NCBI Datasets](https://www.ncbi.nlm.nih.gov/datasets) | Modern REST API for genes, genomes, and taxonomy |
| [NCBI Gene](https://www.ncbi.nlm.nih.gov/gene) | Gene-specific information from Entrez |
| [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nucleotide) | GenBank and RefSeq sequences |
| [NCBI Protein](https://www.ncbi.nlm.nih.gov/protein) | Protein sequences from RefSeq, UniProt, PDB |
| [NCBI SRA](https://www.ncbi.nlm.nih.gov/sra) | Sequence Read Archive — raw sequencing data discovery |
| [NCBI Taxonomy](https://www.ncbi.nlm.nih.gov/taxonomy) | Taxonomic classification and nomenclature |
| [NCI Chemical Identifier Resolver](https://cactus.nci.nih.gov) | Chemical name/structure resolution and conversion |
| [NDEx](https://www.ndexbio.org) | Biological network models exchange |
| [OBIS](https://obis.org) | Ocean Biodiversity Information System |
| [OLS](https://www.ebi.ac.uk/ols4) | Ontology Lookup Service for biomedical ontologies |
| [OMA](https://omabrowser.org) | Orthologous Matrix comprehensive ortholog database |
| [OpenAlex](https://openalex.org) | Open catalog of scholarly works, authors, and citations |
| [OmniPath](https://omnipathdb.org) | Signaling pathway and molecular interaction network |
| [OpenCitations](https://opencitations.net) | Open citation index and bibliometrics |
| [openFDA](https://open.fda.gov) | FDA data on drugs, devices, and adverse events |
| [Open Targets](https://www.opentargets.org) | Drug target identification and prioritization |
| [Open Tree of Life](https://opentreeoflife.github.io) | Comprehensive synthetic phylogenetic tree |
| [Orphanet](https://www.orpha.net) | Rare disease and orphan drug information |
| [OrthoDB](https://www.orthodb.org) | Gene evolutionary relationships and orthologs |
| [PANTHER](http://pantherdb.org) | Protein classification and evolutionary analysis |
| [Pathway Commons](https://www.pathwaycommons.org) | Integrated biological pathway and interaction data |
| [PDBe](https://www.ebi.ac.uk/pdbe) | Protein Data Bank in Europe |
| [PharmGKB](https://www.pharmgkb.org) | Pharmacogenomics knowledge (via CPIC) |
| [PRIDE](https://www.ebi.ac.uk/pride) | Proteomics identifications database |
| [PubChem](https://pubchem.ncbi.nlm.nih.gov) | Open chemistry database |
| [PubMed](https://pubmed.ncbi.nlm.nih.gov) | Biomedical literature search engine |
| [PubTator](https://www.ncbi.nlm.nih.gov/research/pubtator3) | Biomedical text mining and entity annotation |
| [QuickGO](https://www.ebi.ac.uk/QuickGO) | Gene Ontology browser |
| [RCSB PDB](https://www.rcsb.org) | 3D structural data for biological macromolecules |
| [Reactome](https://reactome.org) | Curated biological pathway database |
| [RegulomeDB](https://regulomedb.org) | Regulatory variant annotation and scoring |
| [Rfam](https://rfam.org) | Non-coding RNA families and structured RNA elements |
| [Rhea](https://www.rhea-db.org) | Expert-curated biochemical reactions |
| [RNAcentral](https://rnacentral.org) | Non-coding RNA sequence database |
| [RxNorm](https://rxnav.nlm.nih.gov) | NLM drug terminology for normalized drug names |
| [SABIO-RK](http://sabiork.h-its.org) | Enzyme kinetics and biochemical reaction data |
| [Semantic Scholar](https://www.semanticscholar.org) | AI-powered academic paper search and analysis |
| [SGD](https://www.yeastgenome.org) | Saccharomyces Genome Database — yeast genomics |
| [SNOMED CT](https://www.snomed.org) | Standardized clinical terminology (via FHIR) |
| [STITCH](http://stitch-db.org) | Chemical-protein interaction network |
| [STRING](https://string-db.org) | Protein-protein interaction networks |
| [SwissLipids](https://www.swisslipids.org) | Curated knowledge on lipid biology |
| [TCIA](https://www.cancerimagingarchive.net) | The Cancer Imaging Archive |
| [TimeTree](https://timetree.org) | Species divergence time estimates |
| [UCSC Genome Browser](https://genome.ucsc.edu) | Genome browser, tracks, and annotations |
| [UniChem](https://www.ebi.ac.uk/unichem) | Chemical structure cross-referencing |
| [UniParc](https://www.uniprot.org/uniparc) | Non-redundant protein sequence archive |
| [UniProt](https://www.uniprot.org) | Protein sequence and functional information |
| [UniRef](https://www.uniprot.org/uniref) | Clustered protein sequence sets |
| [VDJdb](https://vdjdb.cdr3.net) | T-cell receptor sequences and specificities |
| [WHO GHO](https://www.who.int/data/gho) | World Health Organization Global Health Observatory |
| [WikiPathways](https://www.wikipathways.org) | Community-curated biological pathways |
| [WormBase](https://wormbase.org) | C. elegans and nematode genomics |
| [WoRMS](https://www.marinespecies.org) | World Register of Marine Species |
| [ZINC](https://zinc.docking.org) | Commercially available compounds for virtual screening |

## Example Queries

### Beginner

| Category | Query |
|----------|-------|
| Gene basics | *What does the TP53 gene do, where is it in the genome, and what happens when it's mutated?* |
| Drug info | *What's the mechanism of action of metformin and what are its common side effects?* |
| Protein structure | *Show me the 3D structure of hemoglobin — how confident are we in the predicted vs. experimental structures?* |
| Disease lookup | *What genes are associated with Crohn's disease and which ones are druggable?* |
| Species ID | *I found a marine organism in a tide pool — how do I identify it from a DNA barcode and where does it sit on the tree of life?* |
| Clinical trials | *Are there any clinical trials currently recruiting for glioblastoma immunotherapy?* |
| Pathway intro | *Walk me through the glycolysis pathway — what are the rate-limiting enzymes and are any of them drug targets?* |
| Variant intro | *My 23andMe report flagged a variant in BRCA2 — what does it mean clinically and how common is it?* |

### Intermediate

| Category | Query |
|----------|-------|
| Pharmacogenomics | *My patient had an unexpected bleeding event on standard-dose warfarin — could their genetics explain it? Are there CYP2C9 or VKORC1 variants that alter metabolism, how common are they, and do dosing guidelines exist for those genotypes?* |
| Post-GWAS | *A GWAS hit near FOXP3 is associated with autoimmune disease but the causal mechanism is unknown — what regulatory elements sit at that locus, what pathways does FOXP3 participate in, and are there rare Mendelian diseases caused by FOXP3 loss-of-function that might reveal the biology?* |
| Drug repurposing | *Imatinib was designed for BCR-ABL in CML, but it clearly hits other kinases — what are they, are any implicated in non-cancer diseases like pulmonary hypertension or fibrosis, and is anyone running trials for those indications?* |
| Evolutionary puzzle | *The FOXP2 "language gene" is famous for being highly conserved yet functionally divergent in humans — how does its domain architecture differ across primates, rodents, and songbirds, and when did the key changes occur?* |
| Invasion ecology | *Lionfish are devastating Caribbean reefs but thriving — where exactly are they showing up outside their native range, what native predators occupy the same ecological niche, and has anyone profiled how their gut microbiome shifts in the invaded habitat?* |
| Metabolic disease | *Branched-chain amino acids keep showing up as elevated in pre-diabetic patients — what enzymes degrade them, are those enzyme genes differentially expressed in diabetic pancreatic islets, and are there any compounds that modulate those enzymes?* |
| Cancer dependencies | *Which genes are selectively essential in pancreatic cancer cell lines but not in normal cells? Do any of those represent druggable vulnerabilities, and what somatic mutations do they carry in TCGA samples?* |
| Diagnostic odyssey | *A child presents with seizures, intellectual disability, and microcephaly — what genes could explain all three phenotypes together, which of those have known pathogenic variants, and could any match a described rare disease?* |
| Neuroimmunology | *Multiple sclerosis lesions show clonally expanded T cells — what antigens might they be recognizing, what epitopes have been characterized in MS, and is there single-cell data showing what those T cells look like transcriptomically?* |
| Toxicology | *A cluster of liver injuries appeared near an industrial site — what chemicals in the EPA's CompTox database are hepatotoxic, which ones are plausible environmental exposures, and what are their known gene targets and metabolic pathways?* |

### Expert

| Category | Query |
|----------|-------|
| Adverse drug reaction | *A patient on both acetaminophen and isoniazid develops acute liver failure — could isoniazid's CYP2E1 induction push NAPQI production beyond the glutathione detox ceiling? I need the metabolic enzymes involved, whether this patient's population carries high-frequency CYP2E1 gain-of-function variants, the oxidative stress cascade downstream of NAPQI, and whether this specific drug pair has a disproportionate signal in FDA adverse event data.* |
| Resistance mechanism | *A melanoma patient responded to vemurafenib for 8 months then progressed — what bypass signaling mechanisms are reported, do any involve kinases with existing approved inhibitors, what does the crystal structure of drug-resistant BRAF look like compared to wild-type, and are there combination trials actively enrolling patients with acquired BRAF inhibitor resistance?* |
| Gut-brain axis | *SLC6A4 (the serotonin transporter) keeps appearing in both depression GWAS and microbiome association studies — is there a real mechanistic link? I need its expression profile across gut and brain regions, which microbial metabolites feed into serotonin pathways, whether SLC6A4 polymorphisms actually change transporter kinetics, and any clinical evidence connecting gut microbiome composition to SSRI treatment response.* |
| Neoantigen design | *A tumor exome shows a novel frameshift in TP53 — before I design a neoantigen vaccine, I need to know: what peptides does the frameshift generate, which HLA alleles can present them and how common are those alleles, is the mutant region structurally ordered or floppy, is TP53 actually expressed in this tumor type, and could any of these peptides cross-react with self-proteins?* |
| Cryptic species | *We pulled DNA barcodes from a deep-sea hydrothermal vent that match nothing in GenBank — what's the closest known organism, where does it fall on the tree of life, has this vent system been surveyed before, do related taxa have sequenced genomes or metagenomes, and has anyone posted preprints from this region recently?* |
| Polypharmacy | *An 82-year-old takes metformin, atorvastatin, amlodipine, and omeprazole daily — I need a full interaction map: which CYP enzymes metabolize each drug, where do they compete, does this patient's pharmacogenomic profile put them at risk, and which pairwise combinations show adverse event signals that aren't covered by existing clinical guidelines?* |
| Multi-omics | *I want to build a comprehensive molecular map of Type 2 Diabetes — gene-disease associations, GWAS risk loci, tissue-specific expression of the top hits, enriched pathways, protein interaction networks, metabolite biomarkers, druggable targets, rare disease overlaps with shared biology, and active clinical trials. Pull it all together.* |

## License

MIT — see [LICENSE](LICENSE).
