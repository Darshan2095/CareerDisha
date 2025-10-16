import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './page'

import MindlerComputerApplicationPage from './engineering/Mindler-ComputerApplicationPage'
import EngineeringLibraryLandingPage from './engineering/page'
import GameDevelopmentPage from './engineering/GameDevelopmentPage'
import MechanicalEngineeringPage from './engineering/MechanicalEngineeringPage'
import CivilEngineeringPage from './engineering/CivilEngineeringPage'
import ElectricalEngineeringPage from './engineering/ElectricalEngineeringPage'

import MedicalLandingPage from './medical/page'
import MbbsPage from './medical/MbbsPage'
import DentistPage from './medical/DentistPage'
import NursingPage from './medical/NursingPage'
import PharmacyPage from "./medical/PharmacyPage"
import PhysiotherapistPage from "./medical/PhysiotherapistPage"
import MedicalResearchPage from './medical/MedicalResearchPage '

import ArtsLandingPage from './arts/page'
import FineArtspage from './arts/FineArtsPage'
import HistoryArtsPage from './arts/HistoryArtsPage'
import LiteratureArtsPage from './arts/LiteratureArtsPage'
import PerformingArtsPage from './arts/PerformingArtsPage'
import PhilosophyPage from './arts/PhilosophyPage'
import SociologyArtsPage from './arts/SociologyArtsPage'


import CommerceLandingPage from './Commerce/page'
import CAPage from './Commerce/CAPage'
import CMAPage from './Commerce/CMAPage'
import BankingPage from './Commerce/BankingPage'
import CSPage from './Commerce/CSPage'
import ManagementPage from './Commerce/ManagementPage'
import MarketingPage from './Commerce/MarketingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path="/engineering" element={<EngineeringLibraryLandingPage />} />
        <Route path="/computer-application-it" element={<MindlerComputerApplicationPage />} />
        <Route path="/game-development" element={<GameDevelopmentPage />} />
        <Route path="/mech" element={<MechanicalEngineeringPage />} />
        <Route path="/civil" element={<CivilEngineeringPage />} />
        <Route path="/ele" element={<ElectricalEngineeringPage />} />


        <Route path="/medical" element={<MedicalLandingPage />} />
        <Route path="/mbbs" element={<MbbsPage />} />
        <Route path="/dentistry" element={<DentistPage />} />
        <Route path="/nursing" element={<NursingPage />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/physiotherapy" element={<PhysiotherapistPage />} />
        <Route path="/medical-research" element={<MedicalResearchPage />} />


        <Route path='/arts' element={<ArtsLandingPage />} />
        <Route path='/fine-arts' element={<FineArtspage />} />
        <Route path='/performing-arts' element={<PerformingArtsPage />} />
        <Route path='/literature' element={<LiteratureArtsPage />} />
        <Route path='/history' element={<HistoryArtsPage />} />
        <Route path='/philosophy' element={<PhilosophyPage />} />
        <Route path='/sociology' element={<SociologyArtsPage />} />


        <Route path='/commerce' element={<CommerceLandingPage />} />
        <Route path='/chartered-accountancy' element={<CAPage />} />
        <Route path='/company-secretary' element={<CSPage />} />
        <Route path='/cost-management-accountancy' element={<CMAPage />} />
        <Route path='/banking-insurance' element={<BankingPage />} />
        <Route path='/business-management' element={<ManagementPage />} />
        <Route path='/marketing-sales' element={<MarketingPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
