# life-science-mcp

A unified MCP server for 209 life science APIs and databases.

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

## Providers (209)


| Provider | Description |
|----------|-------------|
| [1000 Genomes (IGSR)](https://www.internationalgenome.org/api) | International Genome Sample Resource — population genomics data from the 1000 Genomes Project |
| [Addgene](https://www.addgene.org/api) | Addgene — nonprofit plasmid repository for sharing molecular biology reagents |
| [AIRR Data Commons](https://vdjserver.org/airr/v1) | AIRR Data Commons — adaptive immune receptor repertoire sequencing data |
| [Allen Brain Atlas](https://api.brain-map.org/api/v2) | Allen Institute brain gene expression and connectivity data |
| [AlphaFold DB](https://alphafold.ebi.ac.uk/api) | AI-predicted protein structures from DeepMind |
| [AquaMaps](https://aquamaps.org/webservice) | AquaMaps — predicted species distribution maps for marine and freshwater organisms |
| [ArrayExpress](https://www.ebi.ac.uk/biostudies/api/v1) | ArrayExpress — gene expression and functional genomics experiments archive (EBI BioStudies) |
| [ATC Classification](https://rxnav.nlm.nih.gov/REST/rxclass) | ATC (Anatomical Therapeutic Chemical) drug classification via RxNav/RxClass API |
| [BERN2](https://bern2.korea.ac.kr) | BERN2 biomedical named entity recognition — extract genes, diseases, drugs, and other entities from text |
| [Bgee](https://www.bgee.org/api) | Gene expression evolution database — expression across species and tissues |
| [BiGG Models](https://bigg.ucsd.edu/api/v2) | BiGG Models — genome-scale metabolic network reconstructions |
| [BindingDB](https://bindingdb.org/axis2/services/BDBService) | Public database of measured binding affinities between proteins and drug-like molecules |
| [BioCyc](https://websvc.biocyc.org) | BioCyc / MetaCyc — metabolic pathway and genome database collection |
| [BioGRID](https://webservice.thebiogrid.org) | BioGRID database of protein and genetic interactions 🔑 |
| [BioModels](https://biomodels.org) | BioModels repository — mathematical models of biological systems in SBML and other formats |
| [BioPortal](https://data.bioontology.org) | NCBO BioPortal — search 900+ biomedical ontologies and annotate text with ontology concepts 🔑 |
| [bioRxiv](https://api.biorxiv.org) | bioRxiv preprint server — access preprints in biology and related sciences |
| [BioSamples](https://www.ebi.ac.uk/biosamples) | EBI BioSamples database — biological sample metadata and attributes |
| [BOLD](https://www.boldsystems.org/index.php/API_Public) | Barcode of Life Data Systems — DNA barcode specimens and sequences for species identification |
| [BrainSpan](https://api.brain-map.org/api/v2/data) | BrainSpan developmental transcriptome — human brain gene expression across developmental stages |
| [CADD](https://cadd.gs.washington.edu/api/v1.0) | Combined Annotation Dependent Depletion — variant deleteriousness scoring |
| [Catalogue of Life](https://api.catalogueoflife.org) | Catalogue of Life — global checklist of all known species with authoritative taxonomy |
| [cBioPortal](https://www.cbioportal.org/api) | Cancer genomics portal — explore multidimensional cancer genomics data |
| [CDC Open Data](https://data.cdc.gov/resource) | CDC Open Data — public health datasets via the Socrata Open Data API |
| [CDC WONDER](https://wonder.cdc.gov/controller/datarequest) | CDC WONDER — Wide-ranging Online Data for Epidemiologic Research, public health datasets |
| [CDD](https://www.ncbi.nlm.nih.gov/Structure/bwrpsb/bwrpsb.cgi) | NCBI Conserved Domain Database — identify conserved domains in protein sequences |
| [Cellosaurus](https://api.cellosaurus.org) | Knowledge resource on cell lines — cell line identification and characterization |
| [CELLxGENE](https://api.cellxgene.cziscience.com) | CZ CELLxGENE Discover — single-cell datasets and gene expression |
| [ChEBI (via OLS4)](https://www.ebi.ac.uk/ols4/api) | Chemical Entities of Biological Interest — ontology lookup via EBI OLS4 |
| [ChEMBL](https://www.ebi.ac.uk/chembl/api/data) | Database of bioactive drug-like small molecules |
| [CIViC](https://civicdb.org/api/graphql) | Clinical Interpretations of Variants in Cancer — curated clinical evidence for variants |
| [ClassyFire](http://classyfire.wishartlab.com) | Automated chemical classification using the ChemOnt ontology |
| [ClinGen](https://search.clinicalgenome.org/kb/rest) | Clinical Genome Resource — gene-disease validity and dosage sensitivity curation |
| [ClinicalTrials.gov](https://clinicaltrials.gov/api/v2) | Registry of clinical studies conducted around the world |
| [ClinVar](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Variant-disease relationship database linking genetic variants to clinical significance |
| [Clustal Omega](https://www.ebi.ac.uk/Tools/services/rest/clustalo) | EBI Clustal Omega multiple sequence alignment service |
| [COCONUT](https://coconut.naturalproducts.net/api) | COlleCtion of Open Natural prodUcTs — comprehensive natural products database |
| [Comparative Toxicogenomics Database](https://ctdbase.org/tools/batchQuery.go) | CTD curated chemical-gene-disease interactions for toxicogenomics research |
| [CompTox](https://comptox.epa.gov/dashboard-api) | EPA CompTox Chemicals Dashboard for toxicology and chemical safety |
| [DailyMed](https://dailymed.nlm.nih.gov/dailymed/services) | DailyMed drug label information from the National Library of Medicine — SPL documents and prescribing information |
| [DALI](http://ekhidna2.biocenter.helsinki.fi/dali) | DALI server — protein structure comparison by 3D alignment |
| [dbGaP](https://www.ncbi.nlm.nih.gov/gap/phegeni) | dbGaP (database of Genotypes and Phenotypes) — genotype-phenotype association studies |
| [dbSNP](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Database of single nucleotide polymorphisms and other genetic variation |
| [dbVar](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | NCBI dbVar — database of genomic structural variants (CNVs, insertions, deletions, inversions) |
| [DDBJ](https://getentry.ddbj.nig.ac.jp/getentry) | DNA Data Bank of Japan — nucleotide sequence archive |
| [DeepLoc 2.0](https://api.biolib.com/app/DTU/DeepLoc-2.0) | DeepLoc 2.0 — protein subcellular localization prediction (DTU BioLib) |
| [DepMap](https://depmap.org/portal/api) | Cancer Dependency Map — cell line genomic and dependency data |
| [DGIdb](https://dgidb.org/api/graphql) | Drug-Gene Interaction Database — mining drug-gene interaction data |
| [DisGeNET](https://www.disgenet.org/api) | Gene-disease association database 🔑 |
| [DisProt](https://disprot.org/api) | Database of intrinsically disordered proteins and regions |
| [DrugCentral](https://unmtid-shinyapps.net/download/DrugCentral) | Drug information resource integrating drug indications, mechanisms, and interactions |
| [eBird](https://api.ebird.org/v2) | Cornell Lab eBird — bird observations, hotspots, and taxonomy worldwide 🔑 |
| [EggNOG](http://eggnog5.embl.de) | Orthologous groups and functional annotation from EggNOG |
| [EMDB](https://www.ebi.ac.uk/emdb/api) | Electron Microscopy Data Bank — 3D cryo-EM density maps and tomograms |
| [EMPIAR](https://www.ebi.ac.uk/empiar/api) | Electron Microscopy Public Image Archive for raw EM data |
| [ENCODE SCREEN](https://api.wenglab.org/screen) | ENCODE SCREEN registry of candidate cis-regulatory elements (cCREs) |
| [ENCODE](https://www.encodeproject.org) | Encyclopedia of DNA Elements — functional annotations of the human genome |
| [Enrichr](https://maayanlab.cloud/Enrichr) | Enrichr — gene set enrichment analysis against curated gene-set libraries |
| [Ensembl BioMart](https://www.ensembl.org/biomart/martservice) | Ensembl BioMart bulk annotation and data retrieval service |
| [Ensembl VEP](https://rest.ensembl.org) | Variant Effect Predictor — predict functional effects of genetic variants |
| [Ensembl](https://rest.ensembl.org) | Genome browser and annotation database |
| [EU Clinical Trials Register](https://euclinicaltrials.eu/ctis-public/api) | European Union Clinical Trials Register for searching EU clinical studies |
| [Europe PMC](https://www.ebi.ac.uk/europepmc/webservices/rest) | Europe PubMed Central — open-access biomedical literature |
| [European Genome-phenome Archive](https://ega-archive.org/metadata/v2) | EGA metadata API for controlled-access genomic and phenomic datasets |
| [European Nucleotide Archive](https://www.ebi.ac.uk/ena) | Open-access nucleotide sequence data and associated information |
| [Expression Atlas](https://www.ebi.ac.uk/gxa/json) | Gene expression patterns across species and biological conditions (EBI) |
| [FAOSTAT](https://fenixservices.fao.org/faostat/api/v1/en) | FAO Statistics — food and agriculture data from the UN FAO |
| [FDA Orange Book](https://api.fda.gov/drug) | FDA Orange Book drug patent and exclusivity data via openFDA |
| [FHIR R4](https://hapi.fhir.org/baseR4) | FHIR R4 public test server — HL7 FHIR standard for healthcare data interoperability |
| [FishBase](https://fishbase.ropensci.org) | FishBase — comprehensive database of fish species biology, ecology, and taxonomy |
| [FlyBase](https://api.flybase.org/api/v1.0) | FlyBase — Drosophila melanogaster genomics, genetics, and molecular biology |
| [g:Profiler](https://biit.cs.ut.ee/gprofiler) | g:Profiler — functional enrichment and gene ID conversion |
| [GARD](https://rarediseases.info.nih.gov/gard-api) | GARD — Genetic and Rare Diseases Information Center from NIH |
| [GBIF](https://api.gbif.org/v1) | Global Biodiversity Information Facility — species occurrence and taxonomy data worldwide |
| [GDC](https://api.gdc.cancer.gov) | NCI Genomic Data Commons — cancer genomics data from TCGA and other programs |
| [Gene Expression Omnibus](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Repository of high-throughput gene expression and genomics datasets |
| [Gene Ontology](https://api.geneontology.org/api) | Gene Ontology API — GO terms, annotations, and bioentity information |
| [GeneMANIA](https://genemania.org/api) | GeneMANIA — gene interaction network prediction and visualization |
| [GlyCosmos](https://glycosmos.org/api) | GlyCosmos — integrated glycoscience portal for glycan structures, pathways, and diseases |
| [GlyGen](https://api.glygen.org) | GlyGen — glycoscience data integration and retrieval |
| [GlyTouCan](https://api.glycosmos.org) | GlyTouCan — international glycan structure repository |
| [gnomAD](https://gnomad.broadinstitute.org/api) | Genome Aggregation Database — population variant frequencies and annotations |
| [GNPS](https://gnps.ucsd.edu/ProteoSAFe) | GNPS — molecular networking and spectral library for mass spectrometry data |
| [GPCRdb](https://gpcrdb.org/services) | GPCR database — G protein-coupled receptor structures, sequences, and pharmacology |
| [Gramene](https://data.gramene.org) | Gramene — comparative plant genomics resource for crops and model species |
| [GTEx Portal](https://gtexportal.org/api/v2) | Genotype-Tissue Expression project — gene expression across human tissues |
| [Guide to Pharmacology](https://www.guidetopharmacology.org/services) | IUPHAR/BPS Guide to Pharmacology database of drug targets and ligands |
| [GWAS Catalog](https://www.ebi.ac.uk/gwas/rest/api) | NHGRI-EBI Catalog of genome-wide association studies |
| [HGNC](https://rest.genenames.org) | HUGO Gene Nomenclature Committee — approved human gene symbols and names |
| [HMMER](https://www.ebi.ac.uk/Tools/hmmer) | HMMER protein sequence search using profile hidden Markov models |
| [Human Cell Atlas](https://service.azul.data.humancellatlas.org) | Human Cell Atlas data portal — single-cell genomics projects and datasets |
| [Human Metabolome Database](https://hmdb.ca) | HMDB — comprehensive human metabolite and biomarker database |
| [Human Phenotype Ontology](https://ontology.jax.org/api/hp) | Human Phenotype Ontology — standardized vocabulary of human phenotypic abnormalities |
| [Human Protein Atlas](https://www.proteinatlas.org) | Human protein expression and localization data across tissues and cell types |
| [I-TASSER](https://zhanggroup.org/I-TASSER) | I-TASSER — protein structure and function prediction server (Zhang Lab) |
| [IEDB](https://query-api.iedb.org) | Immune Epitope Database — curated epitope data for immune research |
| [iGEM Registry](https://igem.org/api/v1) | iGEM Registry of Standard Biological Parts — synthetic biology parts catalog |
| [IHEC](https://epigenomesportal.ca/ihec/api/v2) | International Human Epigenome Consortium — reference epigenome datasets and metadata |
| [ImmPort](https://www.immport.org/shared/api) | Immunology Database and Analysis Portal — shared immunology data |
| [iNaturalist](https://api.inaturalist.org/v1) | iNaturalist — citizen-science biodiversity observations and taxa worldwide |
| [IntAct](https://www.ebi.ac.uk/intact/ws) | Molecular interaction database — curated protein-protein interactions |
| [InterPro](https://www.ebi.ac.uk/interpro/api) | Protein families, domains, and functional sites classification |
| [IPD-IMGT/HLA](https://www.ebi.ac.uk/ipd/imgt/hla/api) | IPD-IMGT/HLA allele database — HLA allele sequences, nomenclature, and immunogenetics data |
| [iPTMnet](https://research.bioinformatics.udel.edu/iptmnet/api) | iPTMnet — post-translational modification (PTM) knowledge base for proteins |
| [iTOL](https://itol.embl.de) | iTOL Interactive Tree of Life — phylogenetic tree upload, annotation, and export |
| [IUCN Red List](https://apiv3.iucnredlist.org/api/v3) | IUCN Red List of Threatened Species — conservation status for 150,000+ species 🔑 |
| [JASPAR](https://jaspar.elixir.no/api/v2) | JASPAR — open-access database of transcription factor binding profiles |
| [KEGG](https://rest.kegg.jp) | Kyoto Encyclopedia of Genes and Genomes — pathway and molecular interaction database |
| [LIPID MAPS](https://www.lipidmaps.org/rest) | LIPID MAPS Structure Database for lipid classification and structures |
| [LOINC](https://fhir.loinc.org) | LOINC clinical terminology — standardized codes for lab tests, clinical observations, and measurements via FHIR 🔑 |
| [MaizeGDB](https://www.maizegdb.org/api) | MaizeGDB — maize genetics and genomics database for corn research |
| [MalaCards](https://www.malacards.org/api/v2) | MalaCards — human disease database integrating gene, variant, and pathway data |
| [MassBank](https://massbank.eu/MassBank/api) | Public repository of mass spectra for metabolite identification |
| [MeSH](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Medical Subject Headings vocabulary for indexing biomedical literature |
| [MetaboLights](https://www.ebi.ac.uk/metabolights/ws) | EMBL-EBI database for metabolomics experiments and derived information |
| [Metabolomics Workbench](https://www.metabolomicsworkbench.org/rest) | Metabolomics Workbench — metabolomics data repository and metadata |
| [METLIN](https://metlin.scripps.edu/rest/api) | METLIN metabolite mass spectrometry database for metabolomics research 🔑 |
| [MGnify](https://www.ebi.ac.uk/metagenomics/api/v1) | MGnify — EBI metagenomics analysis and archiving platform |
| [MicrobiomeDB](https://microbiomedb.org/mbio/service) | MicrobiomeDB — microbiome study data including taxonomic and functional profiling |
| [MobiDB](https://mobidb.org/api) | Protein disorder and mobility annotations |
| [ModelSEED](https://modelseed.org/api/v2) | ModelSEED — automated metabolic model reconstruction and biochemistry database |
| [Monarch Initiative](https://api.monarchinitiative.org/v3/api) | Knowledge graph integrating biological and clinical data for disease discovery |
| [Movebank](https://www.movebank.org/movebank/service/direct-read) | Movebank — animal tracking and movement data from global research studies |
| [MSigDB](https://www.gsea-msigdb.org/gsea/msigdb/human) | Molecular Signatures Database — curated gene set collections for enrichment analysis |
| [MyChem.info](https://mychem.info/v1) | Chemical and drug annotation query service — aggregates compound data from multiple sources |
| [MyDisease.info](https://mydisease.info/v1) | Disease annotation query service — aggregates disease data from multiple sources |
| [MyGene.info](https://mygene.info/v3) | Gene annotation query service — aggregated gene info from multiple sources |
| [MyVariant.info](https://myvariant.info/v1) | Variant annotation query service — aggregates genetic variant data from multiple sources |
| [Natural Products Atlas](https://www.npatlas.org/api/v1) | Database of microbially-derived natural products for drug discovery |
| [NatureServe](https://explorer.natureserve.org/api/data) | NatureServe Explorer — conservation status and biodiversity data for species across the Americas 🔑 |
| [NCBI BioSample](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Database of biological sample metadata used in experimental assays |
| [NCBI BLAST](https://blast.ncbi.nlm.nih.gov/blast/Blast.cgi) | NCBI BLAST sequence similarity search — submit queries and retrieve alignment results |
| [NCBI Datasets](https://api.ncbi.nlm.nih.gov/datasets/v2) | NCBI Datasets API v2 — modern REST interface for genes, genomes, and taxonomy |
| [NCBI Gene](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Gene-specific information from NCBI Entrez Gene database |
| [NCBI Nucleotide](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | GenBank and RefSeq nucleotide sequence database |
| [NCBI Protein](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Protein sequence database including RefSeq, UniProt, and PDB sequences |
| [NCBI SRA](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Sequence Read Archive — raw sequencing data repository |
| [NCBI Taxonomy](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Taxonomic classification and nomenclature database |
| [NCBO Annotator](https://data.bioontology.org) | NCBO Annotator — annotate biomedical text with ontology concepts and get ontology recommendations 🔑 |
| [NCI Chemical Identifier Resolver](https://cactus.nci.nih.gov/chemical/structure) | NCI CADD Chemical Identifier Resolver — convert between chemical names, SMILES, InChI, and other formats |
| [NDEx](https://www.ndexbio.org/v2) | NDEx Network Data Exchange for biological network models |
| [NetMHCIIpan](https://services.healthtech.dtu.dk/api) | NetMHCIIpan 4.3 — MHC class II binding prediction for peptides across HLA-DR/DP/DQ alleles |
| [NetMHCpan](https://services.healthtech.dtu.dk/api) | NetMHCpan 4.1 — MHC class I binding prediction for peptides across HLA alleles |
| [OBIS](https://api.obis.org/v3) | Ocean Biodiversity Information System — marine species occurrence and distribution data |
| [OLS](https://www.ebi.ac.uk/ols4/api) | Ontology Lookup Service — search and browse biomedical ontologies (GO, EFO, HPO, etc.) |
| [OMA](https://omabrowser.org/api) | Orthologous Matrix — comprehensive ortholog database |
| [OMIM](https://api.omim.org/api) | Online Mendelian Inheritance in Man — catalog of human genes and genetic disorders 🔑 |
| [OmniPath](https://omnipathdb.org) | OmniPath — comprehensive signaling network and enzyme-substrate interactions |
| [OneZoom](https://www.onezoom.org/api/v1) | OneZoom tree of life explorer — interactive visualization and species search across the tree of life |
| [Open Targets](https://api.platform.opentargets.org/api/v4/graphql) | Drug target identification and prioritization platform |
| [Open Tree of Life](https://api.opentreeoflife.org/v3) | Open Tree of Life — comprehensive phylogenetic tree and taxonomy synthesis |
| [OpenAlex](https://api.openalex.org) | OpenAlex — open catalog of scholarly works, authors, institutions, and concepts |
| [OpenCitations](https://opencitations.net/index/coci/api/v1) | OpenCitations COCI citation index — open bibliographic citation data for DOIs |
| [openFDA](https://api.fda.gov) | Open-access FDA data on drugs, devices, and foods including adverse events |
| [Orphanet](https://api.orphacode.org) | Orphanet — reference portal for rare diseases and orphan drugs |
| [OrthoDB](https://data.orthodb.org/v12) | Hierarchical catalog of orthologs — gene evolutionary relationships |
| [PANTHER](https://pantherdb.org/services/oai/pantherdb) | PANTHER — protein classification, gene ontology, and phylogenetic analysis |
| [Pathway Commons](https://www.pathwaycommons.org/pc2) | Integrated biological pathway and interaction data from multiple sources |
| [PDBe](https://www.ebi.ac.uk/pdbe/api) | Protein Data Bank in Europe — macromolecular structure data |
| [PeptideAtlas](https://db.systemsbiology.net/sbeams/cgi/PeptideAtlas) | PeptideAtlas — proteomics data repository for peptide and protein identifications |
| [Pfam](https://www.ebi.ac.uk/interpro/api) | Pfam protein families database — protein domain classification via InterPro |
| [PharmGKB (CPIC)](https://api.cpicpgx.org/v1) | CPIC pharmacogenomics knowledge base — drug-gene pairs, clinical guidelines, and pharmacogenomic recommendations |
| [PhyloT](https://phylot.biobyte.de/api) | PhyloT — taxonomy-based phylogenetic tree generation from NCBI taxon IDs |
| [pkCSM](https://biosig.lab.uq.edu.au/pkcsm) | pkCSM pharmacokinetics and toxicity prediction using graph-based signatures |
| [Planteome](https://planteome.org/api) | Planteome — plant trait ontologies and gene annotations for plant biology |
| [PRIDE](https://www.ebi.ac.uk/pride/ws/archive/v2) | PRIDE proteomics archive — mass spectrometry proteomics data repository |
| [PubChem](https://pubchem.ncbi.nlm.nih.gov/rest/pug) | Open chemistry database with compound, substance, and bioassay data |
| [PubMed](https://eutils.ncbi.nlm.nih.gov/entrez/eutils) | Biomedical literature search engine (NCBI) |
| [PubTator](https://www.ncbi.nlm.nih.gov/research/pubtator3-api) | PubTator3 biomedical text mining — named entity recognition and annotation of PubMed articles |
| [QuickGO](https://www.ebi.ac.uk/QuickGO/services) | Gene Ontology browser — fast access to GO term information (EBI) |
| [RCSB PDB](https://data.rcsb.org) | Protein Data Bank — 3D structural data for biological macromolecules |
| [Reactome](https://reactome.org) | Curated biological pathway and reaction database |
| [RegulomeDB](https://regulomedb.org) | RegulomeDB — annotate and score regulatory variants in the human genome |
| [Rfam](https://rfam.org) | Database of non-coding RNA families and structured RNA elements |
| [Rhea](https://www.rhea-db.org/rhea) | Expert-curated knowledgebase of biochemical reactions |
| [RNAcentral](https://rnacentral.org/api/v1) | RNAcentral — comprehensive non-coding RNA sequence database |
| [RxNorm](https://rxnav.nlm.nih.gov/REST) | NLM drug terminology for normalized drug names and interactions |
| [SABIO-RK](https://sabiork.h-its.org/sabioRestWebServices) | SABIO-RK enzyme kinetics database — reaction kinetics data and parameters |
| [Semantic Scholar](https://api.semanticscholar.org/graph/v1) | Semantic Scholar academic paper search — find research papers, citations, and author information 🔑 |
| [SGD](https://www.yeastgenome.org/backend) | Saccharomyces Genome Database — yeast genomics |
| [SignalP 6.0](https://api.biolib.com/app/DTU/SignalP-6.0) | SignalP 6.0 — signal peptide prediction for protein sequences (DTU BioLib) |
| [SIGNOR](https://signor.uniroma2.it/API) | SIGNOR — signaling network open resource for causal interactions in signaling pathways |
| [Single Cell Portal](https://singlecell.broadinstitute.org/single_cell/api/v1) | Broad Institute Single Cell Portal — explore and share single-cell genomics studies |
| [SNOMED CT](https://tx.fhir.org/r4) | SNOMED CT clinical terminology via FHIR terminology server — look up and search clinical concepts |
| [STITCH](http://stitch-db.org/api) | STITCH chemical-protein interaction database — sister project of STRING |
| [STRING](https://string-db.org/api) | Protein-protein interaction network database |
| [SureChEMBL](https://www.surechembl.org/api) | Patent chemistry database linking chemical structures to patent documents |
| [SwissADME](http://www.swissadme.ch) | SwissADME drug-likeness and pharmacokinetics prediction tool |
| [SwissLipids](https://www.swisslipids.org/api) | SwissLipids — curated knowledge resource for lipid biology and lipidomics |
| [TCIA](https://services.cancerimagingarchive.net/nbia-api/services/v1) | The Cancer Imaging Archive — public access to cancer medical imaging data and collections |
| [TimeTree](https://timetree.org/api) | TimeTree — divergence time estimates between species pairs |
| [ToxCast](https://comptox.epa.gov/dashboard/api) | EPA ToxCast high-throughput toxicity assay screening data |
| [UCSC Genome Browser](https://api.genome.ucsc.edu) | UCSC Genome Browser — genome assemblies, annotations, and track data |
| [UMLS](https://uts-ws.nlm.nih.gov/rest) | Unified Medical Language System — biomedical concepts, terminology crosswalk, and semantic network 🔑 |
| [UniCarb-DB](https://unicarb-db.expasy.org/api) | UniCarb-DB — glycan structure database with experimentally determined carbohydrate structures |
| [UniChem](https://www.ebi.ac.uk/unichem/api/v1) | UniChem compound cross-referencing — map chemical identifiers across databases |
| [UniParc](https://rest.uniprot.org/uniparc) | UniProt Archive — comprehensive non-redundant protein sequence archive |
| [UniProt](https://rest.uniprot.org) | Universal Protein Resource — protein sequence and functional information |
| [UniRef](https://rest.uniprot.org/uniref) | UniProt Reference Clusters — clustered sets of related protein sequences |
| [USDA NASS](https://quickstats.nass.usda.gov/api) | USDA National Agricultural Statistics Service — US crop, livestock, and agricultural census data 🔑 |
| [VDJdb](https://vdjdb.cdr3.net/api) | VDJdb — curated database of T-cell receptor sequences and specificities |
| [VertNet](http://api.vertnet-portal.appspot.com/api) | VertNet — vertebrate specimen records from natural history collections worldwide |
| [WHO Global Health Observatory](https://ghoapi.azureedge.net/api) | WHO Global Health Observatory — global health indicators, statistics, and country-level health data |
| [WHO ICD-11](https://id.who.int/icd) | WHO ICD-11 International Classification of Diseases — search and retrieve disease classifications 🔑 |
| [WikiPathways](https://cdn.jsdelivr.net/gh/wikipathways/wikipathways-assets@main) | Open biological pathway database — community-curated pathway data |
| [WormBase](https://www.alliancegenome.org/api) | WormBase C. elegans and nematode genomics via the Alliance of Genome Resources API |
| [WoRMS](https://www.marinespecies.org/rest) | World Register of Marine Species — authoritative classification and nomenclature of marine organisms |
| [ZFIN](https://zfin.org/action/api) | ZFIN Zebrafish Information Network — zebrafish genomics, genetics, and phenotype data |
| [ZINC](https://zinc15.docking.org) | Free database of commercially available compounds for virtual screening |

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
| Literature | *What are the most-cited papers on CRISPR gene editing in the last two years?* |
| Sequencing data | *Is there publicly available RNA-seq data for human liver tissue I could use for my thesis?* |

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
| Toxicology | *A cluster of liver injuries appeared near an industrial site — what chemicals are hepatotoxic, which ones are plausible environmental exposures, and what are their known gene targets and metabolic pathways?* |
| Non-coding regulation | *A risk variant for schizophrenia falls in an intergenic region — is it in a regulatory element, does it alter any transcription factor binding site, and what's the regulome score telling us about its likely functional impact?* |
| Gene set analysis | *I have a list of 200 upregulated genes from a differential expression experiment in Alzheimer's brain tissue — what pathways and hallmark signatures are enriched, and do any overlap with known drug target gene sets?* |

### Expert

| Category | Query |
|----------|-------|
| Adverse drug reaction | *A patient on both acetaminophen and isoniazid develops acute liver failure — could isoniazid's CYP2E1 induction push NAPQI production beyond the glutathione detox ceiling? I need the metabolic enzymes involved, whether this patient's population carries high-frequency CYP2E1 gain-of-function variants, the oxidative stress cascade downstream of NAPQI, and whether this specific drug pair has a disproportionate signal in FDA adverse event data.* |
| Resistance mechanism | *A melanoma patient responded to vemurafenib for 8 months then progressed — what bypass signaling mechanisms are reported, do any involve kinases with existing approved inhibitors, what does the crystal structure of drug-resistant BRAF look like compared to wild-type, and are there combination trials actively enrolling patients with acquired BRAF inhibitor resistance?* |
| Gut-brain axis | *SLC6A4 (the serotonin transporter) keeps appearing in both depression GWAS and microbiome association studies — is there a real mechanistic link? I need its expression profile across gut and brain regions, which microbial metabolites feed into serotonin pathways, whether SLC6A4 polymorphisms actually change transporter kinetics, and any clinical evidence connecting gut microbiome composition to SSRI treatment response.* |
| Neoantigen design | *A tumor exome shows a novel frameshift in TP53 — before I design a neoantigen vaccine, I need to know: what peptides does the frameshift generate, which HLA alleles can present them and how common are those alleles, is the mutant region structurally ordered or floppy, is TP53 actually expressed in this tumor type, and could any of these peptides cross-react with self-proteins?* |
| Cryptic species | *We pulled DNA barcodes from a deep-sea hydrothermal vent that match nothing in any sequence archive — what's the closest known organism, where does it fall on the tree of life, has this vent system been surveyed before, do related taxa have sequenced genomes or metagenomes, and has anyone posted preprints from this region recently?* |
| Polypharmacy | *An 82-year-old takes metformin, atorvastatin, amlodipine, and omeprazole daily — I need a full interaction map: which CYP enzymes metabolize each drug, where do they compete, does this patient's pharmacogenomic profile put them at risk, and which pairwise combinations show adverse event signals that aren't covered by existing clinical guidelines?* |
| Multi-omics | *I want to build a comprehensive molecular map of Type 2 Diabetes — gene-disease associations, GWAS risk loci, tissue-specific expression of the top hits, enriched pathways, protein interaction networks, metabolite biomarkers, druggable targets, rare disease overlaps with shared biology, and active clinical trials. Pull it all together.* |
| Pandemic preparedness | *A novel coronavirus with an unusual spike protein just got sequenced — what are the closest known sequences, which host receptor is it likely using, what immune epitopes from related strains might offer cross-reactive protection, are there existing antivirals targeting similar proteases, and what does the preprint landscape look like in the last 48 hours?* |
| Agricultural threat | *A new wheat rust strain is spreading across East Africa — what's known about its virulence genes, which resistance loci in modern wheat cultivars might hold up, what's the pathogen's phylogenetic relationship to historical outbreaks, are there fungicide targets in its metabolic pathways, and what do FAO crop production trends look like for affected regions?* |

## License

MIT — see [LICENSE](LICENSE).
